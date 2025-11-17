# 🚀 Deployment Guide - GoDaddy cPanel

This guide will help you set up automatic deployment to your GoDaddy cPanel hosting.

## 📋 Prerequisites

Before setting up CI/CD, you'll need:

1. **GoDaddy cPanel Access**
   - FTP hostname (e.g., `ftp.yourdomain.com` or `yourdomain.com`)
   - FTP username
   - FTP password
   - Server directory path (usually `/public_html` or `/public_html/yourdomain.com`)

2. **GitHub Repository Access**
   - Admin access to add secrets

---

## 🔧 Setup Instructions

### Step 1: Get Your cPanel FTP Credentials

1. Log in to your **GoDaddy cPanel**
2. Navigate to **Files** → **FTP Accounts**
3. Either use your main cPanel account or create a new FTP account
4. Note down:
   - **FTP Server**: `ftp.yourdomain.com` or `yourdomain.com`
   - **FTP Username**: Usually `username@yourdomain.com`
   - **FTP Password**: Your password
   - **Server Directory**: `/public_html` (or subdirectory if hosting in a subfolder)

### Step 2: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `FTP_SERVER` | Your FTP hostname | `ftp.codes-ai.com` |
| `FTP_USERNAME` | Your FTP username | `cpanel_user@codes-ai.com` |
| `FTP_PASSWORD` | Your FTP password | `your_secure_password` |
| `FTP_SERVER_DIR` | Remote directory path | `/public_html/` or `/public_html/codes-ai.com/` |

**Important Notes:**
- `FTP_SERVER_DIR` must end with a `/`
- If your site is in a subdirectory, include the full path: `/public_html/subdirectory/`
- For root domain, use: `/public_html/`

### Step 3: Choose Your Deployment Method

We've provided two deployment workflows:

#### **Option A: Static Export (Recommended for GoDaddy)**
Best for sites that don't need server-side rendering.

1. Edit `next.config.js` and uncomment these lines:
```javascript
output: 'export',
trailingSlash: true,
```

2. The workflow will use: `.github/workflows/deploy-static.yml`
3. This creates a static HTML site in the `out/` directory

#### **Option B: Full Next.js Build**
For sites that may need server features later.

1. Keep `next.config.js` as is (commented output)
2. The workflow will use: `.github/workflows/deploy.yml`
3. May require Node.js support on cPanel (CloudLinux/EA4)

**For GoDaddy shared hosting, use Option A (Static Export)**

### Step 4: Enable Static Export

Edit `next.config.js`:

```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'export',        // ← Uncomment this
  trailingSlash: true,     // ← Uncomment this
};
```

### Step 5: Disable Unused Workflow (Optional)

If using static export:
1. Delete or rename `.github/workflows/deploy.yml`
2. Keep only `.github/workflows/deploy-static.yml`

If using full build:
1. Delete or rename `.github/workflows/deploy-static.yml`
2. Keep only `.github/workflows/deploy.yml`

---

## 🎯 How CI/CD Works

### Automatic Deployment Triggers

The pipeline automatically deploys when:

1. **Code is pushed to `main` branch**
   ```bash
   git push origin main
   ```

2. **Pull Request is merged to `main`**
   - Create a PR from your feature branch
   - Merge it → automatic deployment

3. **Manual deployment**
   - Go to **Actions** tab in GitHub
   - Select the workflow
   - Click **Run workflow**

### Deployment Process

```
┌─────────────────┐
│  Push to Main   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ GitHub Actions  │
│   Triggered     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Install Node.js │
│ & Dependencies  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Build Next.js   │
│   Application   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Export Static   │
│     Files       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Upload to FTP  │
│ (GoDaddy cPanel)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ ✅ Deployed to  │
│ codes-ai.com    │
└─────────────────┘
```

---

## 📁 File Structure on cPanel

After deployment, your cPanel will have:

```
/public_html/
├── index.html          # Home page
├── _next/              # Next.js assets
│   └── static/         # Static files (JS, CSS)
├── features.html       # Features page (if using export)
├── 404.html           # Custom 404 page
└── ...other pages
```

---

## 🔍 Troubleshooting

### Deployment Fails

1. **Check GitHub Actions Logs**
   - Go to **Actions** tab
   - Click on the failed workflow
   - Review error messages

2. **Common Issues:**

   **FTP Connection Failed:**
   - Verify `FTP_SERVER` is correct
   - Try using domain name instead of IP
   - Check if FTP port 21 is open
   - Some hosts use custom ports (check cPanel)

   **Authentication Failed:**
   - Verify `FTP_USERNAME` and `FTP_PASSWORD`
   - Check for special characters (may need escaping)
   - Ensure FTP account is active

   **Permission Denied:**
   - Verify `FTP_SERVER_DIR` path
   - Ensure FTP user has write permissions
   - Check directory exists and is writable

   **Build Fails:**
   - Check Node.js version compatibility
   - Run `npm run build` locally first
   - Review error logs in Actions

### Site Not Loading After Deployment

1. **Check .htaccess Configuration**

Create/update `/public_html/.htaccess`:

```apache
# Enable RewriteEngine
RewriteEngine On

# Redirect www to non-www (or vice versa)
RewriteCond %{HTTP_HOST} ^www\.codes-ai\.com [NC]
RewriteRule ^(.*)$ https://codes-ai.com/$1 [L,R=301]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle routing for Next.js static export
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

2. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Clear cache in browser settings

3. **Check File Permissions**
   - Files: 644
   - Directories: 755
   - In cPanel File Manager, select all → Permissions

---

## 🎨 Custom Domain Setup

If deploying to a subdomain or subfolder:

### Subdomain (e.g., app.codes-ai.com)

1. **In cPanel:**
   - Go to **Domains** → **Subdomains**
   - Create subdomain: `app`
   - Document Root: `/public_html/app`

2. **Update GitHub Secret:**
   - `FTP_SERVER_DIR` = `/public_html/app/`

### Subfolder (e.g., codes-ai.com/app)

1. **Create folder** in cPanel File Manager: `/public_html/app`

2. **Update GitHub Secret:**
   - `FTP_SERVER_DIR` = `/public_html/app/`

3. **Update next.config.js:**
```javascript
const nextConfig = {
  basePath: '/app',
  assetPrefix: '/app',
  // ...rest of config
};
```

---

## 🔐 Security Best Practices

1. **Never commit credentials** to Git
   - All secrets are in GitHub Secrets only
   - `.gitignore` excludes `.env` files

2. **Use strong FTP passwords**
   - Minimum 16 characters
   - Mix of letters, numbers, symbols

3. **Limit FTP account access**
   - Create dedicated FTP user for deployments
   - Restrict to specific directory only

4. **Enable HTTPS**
   - GoDaddy provides free SSL
   - Force HTTPS in `.htaccess` (see above)

5. **Regular backups**
   - Use cPanel backup tools
   - Download backups before major deployments

---

## 🧪 Testing Deployment

### Local Testing

Before pushing to main:

```bash
# Build the project
npm run build

# Test static export
npm run export

# Check the out/ directory
ls -la out/

# Serve locally to test
npx serve out/
```

### Staging Environment (Optional)

1. Create a `staging` branch
2. Set up separate GitHub Actions workflow
3. Deploy to subdomain: `staging.codes-ai.com`
4. Test there before merging to `main`

---

## 📊 Monitoring Deployments

### View Deployment Status

1. **GitHub Actions**
   - Repository → **Actions** tab
   - See all workflows and their status
   - Green ✅ = Success
   - Red ❌ = Failed

2. **Email Notifications**
   - GitHub sends emails on workflow failures
   - Configure in: Settings → Notifications

3. **Status Badge** (Optional)

Add to README.md:
```markdown
![Deploy Status](https://github.com/yourusername/CodesAI/workflows/Deploy%20to%20GoDaddy/badge.svg)
```

---

## 🆘 Alternative Deployment Methods

### Manual FTP Upload

If CI/CD isn't working:

1. Build locally:
```bash
npm run build
```

2. Use FTP client (FileZilla):
   - Host: `ftp.codes-ai.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Upload `out/` contents to `/public_html/`

### cPanel File Manager

1. Build and export locally
2. Create ZIP of `out/` directory
3. Upload ZIP to cPanel
4. Extract in `/public_html/`

---

## 📝 Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build           # Build for production
npm run export          # Export static files
npm run deploy          # Build + Export

# Git workflow
git checkout -b feature/my-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/my-feature
# Create PR → Merge → Auto-deploy!
```

---

## 🎉 Success Checklist

- [ ] FTP credentials added to GitHub Secrets
- [ ] Static export enabled in `next.config.js`
- [ ] Workflow file configured
- [ ] Test deployment to staging/subdomain
- [ ] `.htaccess` configured
- [ ] SSL/HTTPS enabled
- [ ] Custom domain/subdomain configured
- [ ] First successful deployment
- [ ] Site accessible at domain
- [ ] All pages loading correctly
- [ ] Forms and interactions working
- [ ] Mobile responsive tested

---

## 📞 Support

If you encounter issues:

1. **Check GitHub Actions logs** for error details
2. **Review cPanel Error Logs**:
   - cPanel → Metrics → Errors
3. **GoDaddy Support**: For hosting-specific issues
4. **GitHub Discussions**: For CI/CD questions

---

**🎊 Congratulations! Your CI/CD pipeline is ready!**

Every time you push to `main` or merge a PR, your site will automatically deploy to GoDaddy! 🚀
