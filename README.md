# CodesAI - AI-Powered Code Generation Platform

A modern, responsive website built with cutting-edge technologies to showcase CodesAI's AI-powered development tools.

## Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Next.js 14**: Latest App Router for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth, professional animations
- **Dark Mode Ready**: Automatic dark mode support
- **Fully Responsive**: Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14.2.15
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.7
- **Icons**: React Icons 5.3.0
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CodesAI
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
CodesAI/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── Services.tsx     # Services section
│   ├── Pricing.tsx      # Pricing section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── ...config files

```

## Sections

1. **Hero**: Eye-catching landing section with CTAs
2. **Features**: Showcase of 9+ powerful features
3. **Services**: 4 main service categories
4. **Pricing**: 3-tier pricing plans
5. **Contact**: Contact form and information
6. **Footer**: Links, newsletter, and social media

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

Each component is self-contained and can be easily modified in the `/components` directory.

### Animations

Framer Motion animations can be adjusted in individual component files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder.

## Performance

- **Lighthouse Score**: 95+ (aim)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **SEO Optimized**: Full meta tags and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact us at contact@codesai.com

---

Built with ❤️ by the CodesAI team
