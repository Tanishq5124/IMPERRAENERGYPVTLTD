import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ? `${title} | Imperra Energy` : 'Imperra Energy — Engineering Renewable Energy Solutions'
  const pageDescription = description || 'Engineering-driven renewable energy solutions delivering performance, scale, and long-term value. Solar EPC, Industrial Energy Systems, and O&M Services.'

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="solar energy, renewable energy, solar EPC, industrial solar, rooftop solar, India solar, Imperra Energy" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#0B2A45',
                    'primary-dark': '#081E32',
                    'solar-green': '#9CD44D',
                    'highlight-green': '#C6E872',
                    'bg-light': '#F5F7FA',
                    'text-main': '#1E293B',
                    'text-muted': '#64748B',
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
                    display: ['Playfair Display', 'serif'],
                  },
                }
              }
            }
          `
        }} />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="font-sans text-text-main bg-white antialiased">
        {children}
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
