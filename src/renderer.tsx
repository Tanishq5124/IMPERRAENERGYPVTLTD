import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ? `${title} | Imperra Energy` : 'Imperra Energy — Engineering Renewable Energy Solutions'
  const pageDescription = description || 'Engineering-driven renewable energy solutions delivering performance, scale, and long-term value. Solar EPC, Industrial Energy Systems, and O&M Services.'

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imperra Energy Pvt. Ltd.",
    "url": "https://imperraenergy.com",
    "logo": "https://imperraenergy.com/logo.png",
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ring Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395002",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9558360879",
      "contactType": "sales",
      "email": "imperraenergypvtltd@gmail.com",
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/imperraenergy",
      "https://twitter.com/imperraenergy"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Imperra Energy Pvt. Ltd.",
    "image": "https://imperraenergy.com/logo.png",
    "telephone": "+91-9558360879",
    "email": "imperraenergypvtltd@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ring Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395002",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "₹₹₹"
  }

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="solar energy, renewable energy, solar EPC, industrial solar, rooftop solar, India solar, Imperra Energy, Gujarat solar, Surat solar company" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperraenergy.com" />
        <meta property="og:image" content="https://imperraenergy.com/og-image.jpg" />
        <meta property="og:site_name" content="Imperra Energy" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        
        {/* DNS Prefetch & Preconnect for Google Fonts and CDNs */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin="anonymous" />
        
        {/* Google Fonts with display=swap for faster text rendering */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome Icons */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" crossorigin="anonymous" />
        
        {/* Main Styles - Local Tailwind CSS (built) */}
        <link href="/static/tailwind.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0B2A45" />
        <meta name="msapplication-TileColor" content="#0B2A45" />
      </head>
      <body class="font-sans text-text-main bg-white antialiased">
        {children}
        
        {/* Mobile Sticky CTA Bar */}
        <div id="mobile-cta-bar" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 lg:hidden safe-area-bottom">
          <div class="flex">
            <a href="tel:+919558360879" class="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-base">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              Call Now
            </a>
            <a href="https://wa.me/919558360879" class="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-base">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Add padding at bottom for mobile CTA bar */}
        <div class="h-16 lg:hidden"></div>
        
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string; description?: string }): Response | Promise<Response>
  }
}
