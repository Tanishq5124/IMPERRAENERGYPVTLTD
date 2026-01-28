export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer class="bg-primary text-white">
      {/* Main Footer */}
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div class="lg:col-span-1">
            <a href="/" class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center">
                <i class="fas fa-solar-panel text-primary text-xl"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold tracking-tight">IMPERRA</span>
                <span class="text-xs font-medium text-solar-green tracking-widest uppercase -mt-1">ENERGY</span>
              </div>
            </a>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Engineering-driven renewable energy solutions delivering performance, scale, and long-term value across India.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-solar-green hover:text-primary transition-all duration-300">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-solar-green hover:text-primary transition-all duration-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-solar-green hover:text-primary transition-all duration-300">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="/about" class="text-gray-400 hover:text-solar-green transition-colors">About Us</a></li>
              <li><a href="/services" class="text-gray-400 hover:text-solar-green transition-colors">Services</a></li>
              <li><a href="/projects" class="text-gray-400 hover:text-solar-green transition-colors">Projects</a></li>
              <li><a href="/sustainability" class="text-gray-400 hover:text-solar-green transition-colors">Sustainability</a></li>
              <li><a href="/blog" class="text-gray-400 hover:text-solar-green transition-colors">Blog</a></li>
              <li><a href="/contact" class="text-gray-400 hover:text-solar-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 class="text-lg font-semibold mb-6">Our Services</h4>
            <ul class="space-y-3">
              <li><a href="/services#solar-epc" class="text-gray-400 hover:text-solar-green transition-colors">Solar Park EPC</a></li>
              <li><a href="/services#rooftop" class="text-gray-400 hover:text-solar-green transition-colors">Industrial & Rooftop Solar</a></li>
              <li><a href="/services#captive" class="text-gray-400 hover:text-solar-green transition-colors">Captive Solar Solutions</a></li>
              <li><a href="/services#financial" class="text-gray-400 hover:text-solar-green transition-colors">Financial Models</a></li>
              <li><a href="/services#om" class="text-gray-400 hover:text-solar-green transition-colors">O&M Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 class="text-lg font-semibold mb-6">Contact Us</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <i class="fas fa-map-marker-alt text-solar-green mt-1"></i>
                <span class="text-gray-400">Imperra Energy Pvt. Ltd.<br />Surat, Gujarat, India</span>
              </li>
              <li class="flex items-center gap-3">
                <i class="fas fa-phone text-solar-green"></i>
                <a href="tel:+919558360879" class="text-gray-400 hover:text-solar-green transition-colors">+91 95583 60879</a>
              </li>
              <li class="flex items-center gap-3">
                <i class="fas fa-envelope text-solar-green"></i>
                <a href="mailto:imperraenergypvtltd@gmail.com" class="text-gray-400 hover:text-solar-green transition-colors">imperraenergypvtltd@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-gray-400 text-sm">
              &copy; {currentYear} Imperra Energy Pvt. Ltd. All rights reserved.
            </p>
            <div class="flex gap-6">
              <a href="/privacy" class="text-gray-400 hover:text-solar-green text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" class="text-gray-400 hover:text-solar-green text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
