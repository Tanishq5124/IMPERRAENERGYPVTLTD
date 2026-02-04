import { Hono } from 'hono'
import { renderer } from './renderer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { ServicesPage } from './pages/Services'
import { ProjectsPage } from './pages/Projects'
import { SustainabilityPage } from './pages/Sustainability'
import { BlogPage } from './pages/Blog'
import { ContactPage } from './pages/Contact'
import { PrivacyPage } from './pages/Privacy'
import { TermsPage } from './pages/Terms'
import { NotFoundPage } from './pages/NotFound'

const app = new Hono()

app.use(renderer)

// Homepage
app.get('/', (c) => {
  return c.render(
    <>
      <Header currentPath="/" />
      <HomePage />
      <Footer />
    </>,
    { 
      title: 'Fast-Scaling Solar EPC Company | 50 MW Milestone | 500+ MW Target',
      description: 'Imperra Energy Pvt. Ltd. - A strategic JV delivering high-performance solar energy. Ground-mounted, industrial, commercial solar installations. 50 MW achieved, targeting 500+ MW. Strong engineering & execution.',
      canonicalPath: '/',
      ogImage: 'https://imperraenergy.com/static/og-home.jpg'
    }
  )
})

// About Page
app.get('/about', (c) => {
  return c.render(
    <>
      <Header currentPath="/about" />
      <AboutPage />
      <Footer />
    </>,
    { 
      title: 'About Us - Strategic JV for Solar Energy Excellence',
      description: 'Imperra Energy - Strategic joint venture between established industry groups. Vision to deliver high-performance, scalable, sustainable solar solutions. Innovation, Sustainability, Efficiency.',
      canonicalPath: '/about',
      ogImage: 'https://imperraenergy.com/static/og-about.jpg'
    }
  )
})

// Services Page
app.get('/services', (c) => {
  return c.render(
    <>
      <Header currentPath="/services" />
      <ServicesPage />
      <Footer />
    </>,
    { 
      title: 'Solar Services - Ground-Mount, Industrial & Large-Scale',
      description: 'End-to-end lifecycle services: Engineering & design, Procurement, Project management, Installation & commissioning, Performance optimization. CAPEX/PPA/Solar Investor models available.',
      canonicalPath: '/services',
      ogImage: 'https://imperraenergy.com/static/og-services.jpg'
    }
  )
})

// Projects Page
app.get('/projects', (c) => {
  return c.render(
    <>
      <Header currentPath="/projects" />
      <ProjectsPage />
      <Footer />
    </>,
    { 
      title: 'Solar Project Portfolio - 50 MW Milestone Achieved',
      description: 'Explore Imperra Energy\'s execution track record: 50 MW milestone demonstrating on-time, on-budget delivery capability. Ground-mounted, industrial, commercial solar projects across India.',
      canonicalPath: '/projects',
      ogImage: 'https://imperraenergy.com/static/og-projects.jpg'
    }
  )
})

// Sustainability Page
app.get('/sustainability', (c) => {
  return c.render(
    <>
      <Header currentPath="/sustainability" />
      <SustainabilityPage />
      <Footer />
    </>,
    { 
      title: 'Sustainability & Innovation - Reducing Carbon Emissions',
      description: 'Imperra Energy commitment to innovation & sustainability: Reduce carbon emissions, improve energy security, deliver long-term performance across asset lifecycles.',
      canonicalPath: '/sustainability',
      ogImage: 'https://imperraenergy.com/static/og-sustainability.jpg'
    }
  )
})

// Blog Page
app.get('/blog', (c) => {
  return c.render(
    <>
      <Header currentPath="/blog" />
      <BlogPage />
      <Footer />
    </>,
    { 
      title: 'Solar Energy Blog - Industry Insights & Market Outlook',
      description: 'Expert solar energy insights: Global solar growth trends, climate commitments, energy transition updates, ROI guides, CAPEX vs PPA analysis. Stay informed with Imperra Energy blog.',
      canonicalPath: '/blog',
      ogImage: 'https://imperraenergy.com/static/og-blog.jpg'
    }
  )
})

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <>
      <Header currentPath="/contact" />
      <ContactPage />
      <Footer />
    </>,
    { 
      title: 'Contact Us - Get Free Solar Proposal Within 24 Hours',
      description: 'Contact Imperra Energy for your solar needs. Call +91 9558360879 or email imperraenergypvtltd@gmail.com. Get free site assessment, customized proposal & expert consultation within 24 hours.',
      canonicalPath: '/contact',
      ogImage: 'https://imperraenergy.com/static/og-contact.jpg'
    }
  )
})

// Privacy Policy Page
app.get('/privacy', (c) => {
  return c.render(
    <>
      <Header currentPath="/privacy" />
      <PrivacyPage />
      <Footer />
    </>,
    { 
      title: 'Privacy Policy - Data Protection & Security',
      description: 'Imperra Energy Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy and data security are our priority.',
      canonicalPath: '/privacy',
      ogImage: 'https://imperraenergy.com/static/og-image.jpg'
    }
  )
})

// Terms of Service Page
app.get('/terms', (c) => {
  return c.render(
    <>
      <Header currentPath="/terms" />
      <TermsPage />
      <Footer />
    </>,
    { 
      title: 'Terms of Service - Usage Agreement',
      description: 'Imperra Energy Terms of Service - Read our terms and conditions for using our website and services. Understanding your rights and obligations.',
      canonicalPath: '/terms',
      ogImage: 'https://imperraenergy.com/static/og-image.jpg'
    }
  )
})

// Sitemap.xml
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://imperraenergy.com'
  const pages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'monthly' },
    { loc: '/projects', priority: '0.8', changefreq: 'monthly' },
    { loc: '/sustainability', priority: '0.7', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
    { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
    { loc: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms', priority: '0.3', changefreq: 'yearly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return c.text(sitemap, 200, { 'Content-Type': 'application/xml' })
})

// Robots.txt
app.get('/robots.txt', (c) => {
  const robotsTxt = `# Imperra Energy - Robots.txt
# https://imperraenergy.com

User-agent: *
Allow: /

# Sitemap
Sitemap: https://imperraenergy.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin/api paths
Disallow: /api/
Disallow: /_worker.js
`
  return c.text(robotsTxt, 200, { 'Content-Type': 'text/plain' })
})

// 404 Not Found Page
app.notFound((c) => {
  return c.render(
    <>
      <Header currentPath="" />
      <NotFoundPage />
      <Footer />
    </>,
    { 
      title: 'Page Not Found - 404',
      description: 'The page you are looking for does not exist. Return to Imperra Energy homepage for solar energy solutions.',
      canonicalPath: '/404',
      ogImage: 'https://imperraenergy.com/static/og-image.jpg'
    }
  )
})

// API endpoint for solar calculator
app.post('/api/calculate-savings', async (c) => {
  const body = await c.req.json()
  const { monthlyBill, propertyType, city } = body

  // Solar savings calculation logic - Updated for 2026
  const billAmount = parseFloat(monthlyBill) || 0
  
  // Regional factor based on city solar irradiance (2026 data)
  const cityFactors: Record<string, number> = {
    'surat': 1.18,
    'ahmedabad': 1.15,
    'mumbai': 1.08,
    'delhi': 1.10,
    'bangalore': 1.12,
    'chennai': 1.10,
    'hyderabad': 1.14,
    'pune': 1.09,
    'jaipur': 1.20,
    'default': 1.12
  }

  const cityFactor = cityFactors[city?.toLowerCase()] || cityFactors['default']
  
  // Property type factor
  const propertyFactor = propertyType === 'industrial' ? 1.08 : 1.0
  
  // Calculate estimated savings (typically 45-75% reduction in 2026)
  const savingsPercent = 0.58 * cityFactor * propertyFactor
  const monthlySavings = Math.round(billAmount * savingsPercent)
  const annualSavings = monthlySavings * 12
  const fiveYearSavings = annualSavings * 5
  
  // Estimate system size (roughly ₹8 per unit in 2026, 125 units per kW per month)
  const estimatedUnits = billAmount / 8
  const systemSizeKW = Math.round(estimatedUnits / 125)
  
  // CO2 offset calculation (0.85 kg CO2 per kWh in India 2026)
  const annualCO2Offset = Math.round(systemSizeKW * 125 * 12 * 0.85 / 1000) // in tonnes

  return c.json({
    success: true,
    data: {
      monthlySavings,
      annualSavings,
      fiveYearSavings,
      savingsPercent: Math.round(savingsPercent * 100),
      systemSizeKW: Math.max(systemSizeKW, 5),
      annualCO2Offset: Math.max(annualCO2Offset, 1),
      paybackYears: 4.2 // Updated for 2026 pricing
    }
  })
})

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  const { name, company, phone, email, requirement, service } = body

  // Validate required fields
  if (!name || !email || !phone) {
    return c.json({ success: false, message: 'Please fill in all required fields.' }, 400)
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return c.json({ success: false, message: 'Please enter a valid email address.' }, 400)
  }

  // Phone validation
  const phoneDigits = phone.replace(/\D/g, '')
  if (phoneDigits.length < 10 || phoneDigits.length > 12) {
    return c.json({ success: false, message: 'Please enter a valid phone number.' }, 400)
  }

  // In production, this would send to a CRM or email service
  console.log('Contact form submission:', { name, company, phone, email, service, requirement })

  return c.json({
    success: true,
    message: 'Thank you for your inquiry. Our team will contact you within 24 hours.'
  })
})

// API endpoint for callback requests
app.post('/api/callback', async (c) => {
  const body = await c.req.json()
  const { callback_name, callback_phone } = body

  if (!callback_name || !callback_phone) {
    return c.json({ success: false, message: 'Please provide your name and phone number.' }, 400)
  }

  console.log('Callback request:', { callback_name, callback_phone })

  return c.json({
    success: true,
    message: 'Thank you! Our solar expert will call you within 30 minutes.'
  })
})

export default app
