# Imperra Energy - Premium Corporate Website

A modern, premium corporate website for Imperra Energy, a renewable energy company providing solar EPC, rooftop solar, industrial energy systems, hybrid renewable solutions, and maintenance services.

## Project Overview

- **Name**: Imperra Energy Website
- **Goal**: Build a premium, trustworthy corporate website similar to global energy firms
- **Tech Stack**: Hono (TypeScript), Tailwind CSS (locally built), Cloudflare Pages
- **Status**: ✅ Complete and deployed
- **Last Updated**: January 28, 2026

## Contact Information

- **Phone**: +91 9558360879
- **Email**: imperraenergypvtltd@gmail.com
- **WhatsApp**: [Chat with us](https://wa.me/919558360879)
- **Address**: Ring Road, Surat, Gujarat - 395002, India

## Live URLs

- **Development**: https://3000-io9uqhhts737jpuxrd4e4-ad490db5.sandbox.novita.ai
- **GitHub**: https://github.com/Tanishq5124/IMPERRAENERGYPVTLTD
- **Production**: (Deploy to Cloudflare Pages using `npm run deploy`)

## Features

### ✅ Completed Features

#### Homepage
- Hero section with animated backgrounds and CTAs
- Trust strip highlighting India's energy independence
- "Why Imperra Energy" feature cards (Premium Materials, Precision Workmanship, Expert Maintenance, Industry Legacy)
- EPC Solar Park Solutions section
- Solar Investment Models (CAPEX & Captive)
- **Interactive Solar Savings Calculator** with API integration
- Project Execution Process timeline
- Key Benefits section
- Client logos showcase
- Proven Track Record with project highlights
- Final CTA section

#### Additional Pages
- **About**: Company story, vision, mission, core values, leadership team
- **Services**: Solar Park EPC, Industrial & Rooftop Solar, Captive Solutions, Financial Models, O&M Services
- **Projects**: Project portfolio with filters, featured project showcase
- **Sustainability**: ESG commitment, SDG alignment, 2030 targets
- **Blog**: Article listing, category filters, newsletter signup
- **Contact**: Contact form, office info, FAQ section

#### Mobile Features
- **Sticky Mobile CTA Bar**: Fixed bottom bar with Call and WhatsApp buttons
- **Mobile Menu**: Smooth open/close animations with touch support
- **Tap Targets**: Minimum 48px height for all interactive elements
- **Form Inputs**: Prevent zoom on focus, proper sizing
- **Lazy Loading**: Images load on scroll for better performance

#### API Endpoints
- `POST /api/calculate-savings` - Solar savings calculator
- `POST /api/contact` - Contact form submission

#### SEO & Performance
- **Schema.org Structured Data**: Organization and LocalBusiness schemas
- **Google Fonts Preconnect**: Faster font loading
- **Font Awesome CDN with Preconnect**: Optimized icon loading
- **Local Tailwind CSS**: Built locally instead of CDN for better performance
- **Minified CSS/JS**: Smaller file sizes

### Brand Colors
- Primary Blue: `#0B2A45`
- Solar Green: `#9CD44D`
- Highlight Green: `#C6E872`
- Background: `#F5F7FA`
- Text: `#1E293B`

## Project Structure

```
webapp/
├── src/
│   ├── index.tsx            # Main Hono app with routes & API
│   ├── renderer.tsx         # JSX renderer with SEO meta tags
│   ├── input.css            # Tailwind CSS input file
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   └── pages/
│       ├── Home.tsx         # Homepage with all sections
│       ├── About.tsx        # About us page
│       ├── Services.tsx     # Services page
│       ├── Projects.tsx     # Projects portfolio
│       ├── Sustainability.tsx # Sustainability page
│       ├── Blog.tsx         # Blog page
│       └── Contact.tsx      # Contact page
├── public/
│   └── static/
│       ├── tailwind.css     # Built Tailwind CSS
│       ├── style.css        # Custom CSS animations
│       └── app.js           # Client-side JavaScript
├── dist/                    # Build output
├── ecosystem.config.cjs     # PM2 configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── wrangler.jsonc           # Cloudflare config
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
└── package.json
```

## Development

### Local Development
```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Build the project
npm run build

# Start development server
npm run preview
# or with PM2
pm2 start ecosystem.config.cjs
```

### Build for Production
```bash
npm run build
```

### Deploy to Cloudflare Pages
```bash
npm run deploy
```

## API Reference

### Solar Savings Calculator
```bash
POST /api/calculate-savings
Content-Type: application/json

{
  "monthlyBill": "50000",
  "propertyType": "industrial", // or "commercial"
  "city": "surat"
}

# Response
{
  "success": true,
  "data": {
    "monthlySavings": 33206,
    "annualSavings": 398472,
    "fiveYearSavings": 1992360,
    "savingsPercent": 66,
    "systemSizeKW": 60,
    "annualCO2Offset": 71,
    "paybackYears": 4.5
  }
}
```

### Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "company": "ABC Corp",
  "email": "john@example.com",
  "phone": "+91 9558360879",
  "requirement": "Solar installation inquiry"
}
```

## Supported Cities for Calculator
- Surat, Ahmedabad (Gujarat)
- Mumbai, Pune (Maharashtra)
- Delhi
- Bangalore (Karnataka)
- Chennai (Tamil Nadu)
- Hyderabad (Telangana)
- Jaipur (Rajasthan)

## Design Features
- Responsive design for all screen sizes
- Smooth animations and transitions
- Custom scrollbar styling
- Animated hero backgrounds
- Card hover effects with glow
- Toast notifications
- FAQ accordion
- Mobile hamburger menu with smooth transitions
- Sticky mobile CTA bar
- Safe area support for notched devices

## Technologies Used
- **Framework**: Hono (TypeScript)
- **Styling**: Tailwind CSS 3.x (locally built)
- **Icons**: Font Awesome 6
- **Fonts**: Inter (sans-serif), Playfair Display (display)
- **Build**: Vite
- **Deployment**: Cloudflare Pages
- **Process Manager**: PM2

## Accessibility Features
- Reduced motion support
- Proper focus indicators
- Skip link for keyboard navigation
- Semantic HTML structure
- ARIA labels on interactive elements

## Next Steps for Development
1. Add real client logos/images
2. Integrate with CRM for contact form submissions
3. Add Google Analytics tracking
4. Add reCAPTCHA to forms
5. Implement real blog CMS (Sanity.io)
6. Add more project case studies with real images
7. Implement client testimonials
8. Add email notification system
9. Enable Cloudflare Brotli/Gzip compression

---

© 2026 Imperra Energy Pvt. Ltd. All rights reserved.
