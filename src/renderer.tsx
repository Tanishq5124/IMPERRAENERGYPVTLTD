import { jsxRenderer } from 'hono/jsx-renderer'

interface RendererProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

export const renderer = jsxRenderer(({ children, title, description, canonicalPath, ogImage, breadcrumbs }: { children: any } & RendererProps) => {
  const siteName = 'Imperra Energy Pvt. Ltd.'
  const siteUrl = 'https://imperraenergy.com'
  const pageTitle = title ? `${title} | Imperra Energy` : 'Imperra Energy — India\'s Leading Solar EPC Company | 500+ MW Installed'
  const pageDescription = description || 'Imperra Energy Pvt. Ltd. - Leading solar EPC company in India with 500+ MW installed capacity. Solar park EPC, industrial rooftop solar, captive solar solutions. MNRE empanelled. Get free site assessment.'
  const canonical = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl
  const ogImageUrl = ogImage || `${siteUrl}/static/og-image.jpg`

  // Enhanced Schema.org Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": siteName,
    "alternateName": "Imperra Energy",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/static/logo.svg`,
      "width": 200,
      "height": 60
    },
    "description": "Leading solar energy company in India providing EPC solutions for solar parks, industrial rooftop installations, and captive power plants with 500+ MW installed capacity.",
    "foundingDate": "2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 100,
      "maxValue": 500
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ring Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395002",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9558360879",
        "contactType": "sales",
        "email": "imperraenergypvtltd@gmail.com",
        "availableLanguage": ["English", "Hindi", "Gujarati"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9558360879",
        "contactType": "customer service",
        "email": "imperraenergypvtltd@gmail.com",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/imperraenergy",
      "https://twitter.com/imperraenergy",
      "https://www.facebook.com/imperraenergy",
      "https://www.youtube.com/@imperraenergy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Enhanced LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    "name": siteName,
    "image": `${siteUrl}/static/og-image.jpg`,
    "telephone": "+91-9558360879",
    "email": "imperraenergypvtltd@gmail.com",
    "url": siteUrl,
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ring Road",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1702",
      "longitude": "72.8311"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Energy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Park EPC",
            "description": "Utility-scale solar park engineering, procurement, and construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Rooftop Solar",
            "description": "Commercial and industrial rooftop solar installations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Captive Solar Solutions",
            "description": "Dedicated captive power plant solutions"
          }
        }
      ]
    }
  }

  // WebSite Schema for sitelinks search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": siteName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // FAQ Schema (for Contact page)
  const faqSchema = canonicalPath === '/contact' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to get a solar system installed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation time varies based on system size. Rooftop systems typically take 2-4 weeks, while large-scale solar parks can take 6-12 months from approval to commissioning."
        }
      },
      {
        "@type": "Question",
        "name": "What financing options are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer multiple financing models including CAPEX (full ownership), OPEX/PPA (pay for power), and third-party investor models. Our team can help you choose the best option for your business."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical ROI for solar installations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most commercial and industrial solar installations see ROI within 3-5 years, with total savings of 40-70% on electricity bills over the system lifetime of 25+ years."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide maintenance services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive O&M (Operations & Maintenance) services including preventive maintenance, performance monitoring, and 24/7 support to ensure optimal system performance."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide services across India, with major operations in Gujarat, Maharashtra, Rajasthan, Karnataka, and Tamil Nadu. Contact us to discuss your location."
        }
      }
    ]
  } : null

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="solar energy India, solar EPC company, solar panel installation, rooftop solar Gujarat, industrial solar Surat, MNRE empanelled solar company, solar power plant, renewable energy India, Imperra Energy, solar subsidy India 2026, solar CAPEX PPA" />
        <meta name="author" content="Imperra Energy Pvt. Ltd." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Imperra Energy" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imperraenergy" />
        <meta name="twitter:creator" content="@imperraenergy" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.svg" />
        
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin="anonymous" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" crossorigin="anonymous" />
        
        {/* Stylesheets */}
        <link href="/static/tailwind.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
        
        {/* Theme color */}
        <meta name="theme-color" content="#0B2A45" />
        <meta name="msapplication-TileColor" content="#0B2A45" />
        
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q1EFZLH62K"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q1EFZLH62K', {
            page_title: '${pageTitle.replace(/'/g, "\\'")}',
            page_location: window.location.href
          });
          
          // Event tracking helper
          window.trackEvent = function(category, action, label, value) {
            gtag('event', action, {
              event_category: category,
              event_label: label,
              value: value
            });
          };
        `}} />
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5R8KM7P');
        `}} />
        
        {/* Facebook Pixel - Add your Pixel ID when running ads */}
        {/* Uncomment and add your pixel ID when ready
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}} />
        */}
      </head>
      <body class="font-sans text-text-main bg-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5R8KM7P" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        
        {/* Skip to content for accessibility */}
        <a href="#main-content" class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2">
          Skip to main content
        </a>
        
        <div id="main-content">
          {children}
        </div>
        
        {/* WhatsApp Floating Button - Desktop */}
        <a 
          href="https://wa.me/919558360879?text=Hi%20Imperra%20Energy%2C%20I%27m%20interested%20in%20solar%20solutions.%20Please%20share%20more%20details."
          target="_blank"
          rel="noopener noreferrer"
          class="fixed bottom-24 right-6 z-50 hidden lg:flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
          id="whatsapp-float"
          onclick="trackEvent('CTA', 'click', 'WhatsApp Float Desktop');"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span class="font-semibold">Chat with us</span>
          <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">1</span>
        </a>
        
        {/* Mobile Sticky CTA Bar */}
        <div id="mobile-cta-bar" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 lg:hidden safe-area-bottom">
          <div class="flex">
            <a href="tel:+919558360879" class="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-base" onclick="trackEvent('CTA', 'click', 'Mobile Call Button');">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              Call Now
            </a>
            <a href="https://wa.me/919558360879" class="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-bold text-base" onclick="trackEvent('CTA', 'click', 'Mobile WhatsApp Button');">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
              WhatsApp
            </a>
          </div>
        </div>
        
        {/* Cookie Consent Banner */}
        <div id="cookie-consent" class="fixed bottom-20 lg:bottom-0 left-0 right-0 bg-primary text-white p-4 z-40 hidden transform translate-y-full transition-transform duration-300">
          <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-sm text-gray-300">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies. 
              <a href="/privacy" class="text-solar-green hover:underline">Learn more</a>
            </p>
            <div class="flex gap-3">
              <button id="accept-cookies" class="px-4 py-2 bg-solar-green text-primary font-semibold rounded-lg hover:bg-highlight-green transition-colors text-sm">
                Accept All
              </button>
              <button id="decline-cookies" class="px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-sm">
                Decline
              </button>
            </div>
          </div>
        </div>
        
        {/* Request Callback Modal */}
        <div id="callback-modal" class="fixed inset-0 bg-black/50 z-[60] hidden items-center justify-center p-4" style="backdrop-filter: blur(4px);">
          <div class="bg-white rounded-2xl max-w-md w-full p-8 relative animate-slide-up">
            <button id="close-callback-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-solar-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-phone-volume text-3xl text-solar-green"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary">Request a Callback</h3>
              <p class="text-text-muted mt-2">Our solar expert will call you within 30 minutes</p>
            </div>
            <form id="callback-form" class="space-y-4">
              <input type="text" name="callback_name" placeholder="Your Name" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green" />
              <input type="tel" name="callback_phone" placeholder="Phone Number" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green" />
              <button type="submit" class="w-full py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold rounded-xl hover:shadow-lg transition-all">
                Request Callback
              </button>
            </form>
            <p class="text-xs text-center text-text-muted mt-4">
              <i class="fas fa-lock mr-1"></i> Your information is 100% secure
            </p>
          </div>
        </div>
        
        {/* Exit Intent Popup */}
        <div id="exit-intent-popup" class="fixed inset-0 bg-black/60 z-[70] hidden items-center justify-center p-4" style="backdrop-filter: blur(4px);">
          <div class="bg-white rounded-3xl max-w-lg w-full overflow-hidden relative animate-slide-up shadow-2xl">
            <button id="close-exit-popup" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            {/* Urgency Banner */}
            <div class="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 px-4">
              <p class="text-sm font-semibold">
                <i class="fas fa-clock mr-2"></i>
                Limited Time: Govt. Subsidy Up to 40% Ending Soon!
              </p>
            </div>
            
            <div class="p-8">
              <div class="text-center mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-solar-green to-highlight-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-sun text-4xl text-white"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-2">Wait! Don't Miss Out</h3>
                <p class="text-text-muted">Get a FREE solar assessment worth ₹10,000</p>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center gap-3 text-sm text-text-main">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>Free site inspection & feasibility study</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-text-main">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>Custom ROI & savings projection</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-text-main">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>No obligation, 100% free consultation</span>
                </div>
              </div>
              
              <form id="exit-intent-form" class="space-y-4">
                <input type="text" name="exit_name" placeholder="Your Name" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green" />
                <input type="tel" name="exit_phone" placeholder="Phone Number" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green" />
                <button type="submit" class="w-full py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-xl hover:shadow-lg transition-all">
                  <i class="fas fa-gift mr-2"></i>
                  Claim Free Assessment
                </button>
              </form>
              
              <p class="text-xs text-center text-text-muted mt-4">
                <i class="fas fa-shield-alt mr-1"></i> We respect your privacy. No spam ever.
              </p>
            </div>
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
    (content: string | Promise<string>, props?: { title?: string; description?: string; canonicalPath?: string; ogImage?: string; breadcrumbs?: Array<{ name: string; url: string }> }): Response | Promise<Response>
  }
}
