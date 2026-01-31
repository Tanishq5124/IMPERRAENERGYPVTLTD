import { html } from 'hono/html'

export const Header = ({ currentPath = '/' }: { currentPath?: string }) => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="main-header">
      <nav class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" class="flex items-center gap-3 group" aria-label="Imperra Energy - Home">
            <div class="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <svg viewBox="0 0 48 48" class="w-full h-full" aria-hidden="true">
                <polygon points="6,42 12,42 18,6 12,6" fill="#A4CE39"/>
                <polygon points="16,42 22,42 28,6 22,6" fill="#A4CE39"/>
                <polygon points="26,42 32,42 38,6 32,6" fill="#A4CE39"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold text-primary tracking-tight">IMPERRA ENERGY</span>
              <span class="text-[10px] font-medium text-text-muted tracking-wider uppercase -mt-0.5">PVT LTD</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div class="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                class={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPath === link.href
                    ? 'text-solar-green bg-solar-green/10'
                    : 'text-text-main hover:text-solar-green hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div class="hidden lg:flex items-center gap-4">
            <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg shadow-solar-green/25 hover:shadow-xl hover:shadow-solar-green/30 hover:scale-105 transition-all duration-300">
              Get a Proposal
              <i class="fas fa-arrow-right text-sm"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            class="lg:hidden p-2 rounded-lg text-text-main hover:bg-gray-100 transition-colors"
            id="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class="lg:hidden hidden pb-6" id="mobile-menu">
          <div class="flex flex-col gap-2 pt-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                href={link.href}
                class={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  currentPath === link.href
                    ? 'text-solar-green bg-solar-green/10'
                    : 'text-text-main hover:text-solar-green hover:bg-gray-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" class="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg">
              Get a Proposal
              <i class="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
