# Imperra Energy - Premium Corporate Website

A modern, premium corporate website for Imperra Energy, a renewable energy company providing solar EPC, rooftop solar, industrial energy systems, hybrid renewable solutions, and maintenance services.

## Project Overview

- **Name**: Imperra Energy Website
- **Goal**: Build a premium, trustworthy corporate website similar to global energy firms
- **Tech Stack**: Hono (TypeScript), Tailwind CSS, Cloudflare Pages
- **Status**: ✅ Complete and deployed

## Live URLs

- **Development**: https://3000-io9uqhhts737jpuxrd4e4-ad490db5.sandbox.novita.ai
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

#### API Endpoints
- `POST /api/calculate-savings` - Solar savings calculator
- `POST /api/contact` - Contact form submission

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
│       ├── style.css        # Custom CSS animations
│       └── app.js           # Client-side JavaScript
├── dist/                    # Build output
├── ecosystem.config.cjs     # PM2 configuration
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

# Build the project
npm run build

# Copy static files
mkdir -p dist/static && cp -r public/static/* dist/static/

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
  "phone": "+91 98765 43210",
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
- Mobile hamburger menu

## Technologies Used
- **Framework**: Hono (TypeScript)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6
- **Fonts**: Inter (sans-serif), Playfair Display (display)
- **Build**: Vite
- **Deployment**: Cloudflare Pages
- **Process Manager**: PM2

## Next Steps for Development
1. Add real client logos/images
2. Integrate with CRM for contact form submissions
3. Add Google Analytics tracking
4. Implement real blog CMS (Sanity.io)
5. Add more project case studies with real images
6. Implement client testimonials
7. Add pricing calculator refinements
8. SEO optimization with structured data

---

© 2024 Imperra Energy Pvt. Ltd. All rights reserved.
