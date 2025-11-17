#!/bin/bash

# Manual FTP Deployment Script for CodesAI
# Usage: ./deploy-scripts/ftp-deploy.sh

set -e

echo "🚀 CodesAI Deployment Script"
echo "================================"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if required commands exist
command -v npm >/dev/null 2>&1 || { echo -e "${RED}Error: npm is required but not installed.${NC}" >&2; exit 1; }
command -v lftp >/dev/null 2>&1 || { echo -e "${YELLOW}Warning: lftp is not installed. Install with: sudo apt-get install lftp${NC}"; }

# Load environment variables from .env.deploy if exists
if [ -f .env.deploy ]; then
    echo -e "${GREEN}Loading deployment configuration...${NC}"
    source .env.deploy
else
    echo -e "${YELLOW}No .env.deploy found. Using manual input...${NC}"

    # Prompt for FTP credentials
    read -p "FTP Server (e.g., ftp.codes-ai.com): " FTP_SERVER
    read -p "FTP Username: " FTP_USERNAME
    read -sp "FTP Password: " FTP_PASSWORD
    echo
    read -p "Remote Directory (e.g., /public_html/): " FTP_SERVER_DIR
fi

# Validate inputs
if [ -z "$FTP_SERVER" ] || [ -z "$FTP_USERNAME" ] || [ -z "$FTP_PASSWORD" ] || [ -z "$FTP_SERVER_DIR" ]; then
    echo -e "${RED}Error: Missing FTP credentials${NC}"
    exit 1
fi

# Step 1: Install dependencies
echo -e "\n${GREEN}Step 1: Installing dependencies...${NC}"
npm ci

# Step 2: Build the project
echo -e "\n${GREEN}Step 2: Building Next.js application...${NC}"
npm run build

# Step 3: Export static files (if configured)
if grep -q "output.*export" next.config.js; then
    echo -e "\n${GREEN}Step 3: Exporting static files...${NC}"
    npm run export
    DEPLOY_DIR="./out"
else
    echo -e "\n${YELLOW}Static export not configured. Deploying standalone build...${NC}"
    DEPLOY_DIR="./.next"
fi

# Step 4: Upload to FTP
echo -e "\n${GREEN}Step 4: Uploading to GoDaddy cPanel...${NC}"

if command -v lftp >/dev/null 2>&1; then
    # Using lftp for better reliability
    lftp -c "
    set ssl:verify-certificate no;
    open ftp://$FTP_USERNAME:$FTP_PASSWORD@$FTP_SERVER;
    lcd $DEPLOY_DIR;
    cd $FTP_SERVER_DIR;
    mirror --reverse --delete --verbose --exclude-glob .git* --exclude-glob node_modules/;
    bye;
    "
else
    echo -e "${RED}Error: lftp not installed. Please install it or use the GitHub Actions workflow.${NC}"
    exit 1
fi

# Step 5: Success message
echo -e "\n${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your site should be live at: https://codes-ai.com${NC}"
echo -e "\n${YELLOW}Note: It may take a few minutes for changes to propagate.${NC}"
