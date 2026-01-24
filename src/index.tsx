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
    { title: 'Home' }
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
    { title: 'About Us', description: 'Learn about Imperra Energy - driving India\'s transition toward sustainable power with innovative solar and thermal energy solutions.' }
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
    { title: 'Our Services', description: 'Comprehensive solar energy services including Solar Park EPC, Industrial & Rooftop Solar, Captive Solutions, and O&M Services.' }
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
    { title: 'Our Projects', description: 'Explore our portfolio of industrial and utility-scale solar installations across India.' }
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
    { title: 'Sustainability', description: 'Our commitment to reducing carbon footprints and enabling industries to achieve energy independence.' }
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
    { title: 'Blog & Insights', description: 'Expert insights on solar ROI, industrial energy savings, CAPEX vs PPA, and solar policies in India.' }
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
    { title: 'Contact Us', description: 'Get in touch with Imperra Energy for your renewable energy needs. Request a proposal today.' }
  )
})

// API endpoint for solar calculator
app.post('/api/calculate-savings', async (c) => {
  const body = await c.req.json()
  const { monthlyBill, propertyType, city } = body

  // Solar savings calculation logic
  const billAmount = parseFloat(monthlyBill) || 0
  
  // Regional factor based on city solar irradiance
  const cityFactors: Record<string, number> = {
    'surat': 1.15,
    'ahmedabad': 1.12,
    'mumbai': 1.05,
    'delhi': 1.08,
    'bangalore': 1.10,
    'chennai': 1.08,
    'hyderabad': 1.12,
    'pune': 1.07,
    'jaipur': 1.18,
    'default': 1.10
  }

  const cityFactor = cityFactors[city?.toLowerCase()] || cityFactors['default']
  
  // Property type factor
  const propertyFactor = propertyType === 'industrial' ? 1.05 : 1.0
  
  // Calculate estimated savings (typically 40-70% reduction)
  const savingsPercent = 0.55 * cityFactor * propertyFactor
  const monthlySavings = Math.round(billAmount * savingsPercent)
  const annualSavings = monthlySavings * 12
  const fiveYearSavings = annualSavings * 5
  
  // Estimate system size (roughly ₹7 per unit, 120 units per kW per month)
  const estimatedUnits = billAmount / 7
  const systemSizeKW = Math.round(estimatedUnits / 120)
  
  // CO2 offset calculation (0.82 kg CO2 per kWh in India)
  const annualCO2Offset = Math.round(systemSizeKW * 120 * 12 * 0.82 / 1000) // in tonnes

  return c.json({
    success: true,
    data: {
      monthlySavings,
      annualSavings,
      fiveYearSavings,
      savingsPercent: Math.round(savingsPercent * 100),
      systemSizeKW: Math.max(systemSizeKW, 5),
      annualCO2Offset: Math.max(annualCO2Offset, 1),
      paybackYears: 4.5
    }
  })
})

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  const { name, company, phone, email, requirement } = body

  // Validate required fields
  if (!name || !email || !phone) {
    return c.json({ success: false, message: 'Please fill in all required fields.' }, 400)
  }

  // In production, this would send to a CRM or email service
  console.log('Contact form submission:', { name, company, phone, email, requirement })

  return c.json({
    success: true,
    message: 'Thank you for your inquiry. Our team will contact you within 24 hours.'
  })
})

export default app
