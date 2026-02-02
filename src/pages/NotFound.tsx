export const NotFoundPage = () => {
  return (
    <main class="pt-20 min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* 404 Visual */}
        <div class="mb-12">
          <div class="relative inline-block">
            <div class="text-[200px] md:text-[280px] font-display font-bold text-white/10 leading-none">
              404
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i class="fas fa-solar-panel text-solar-green text-5xl md:text-7xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 class="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Page Not Found
        </h1>
        <p class="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
          Looks like this page has gone off-grid. Don't worry, we'll help you find your way back to clean energy.
        </p>

        {/* Actions */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="/" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            <i class="fas fa-home"></i>
            Back to Home
          </a>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <i class="fas fa-envelope"></i>
            Contact Us
          </a>
        </div>

        {/* Quick Links */}
        <div class="pt-8 border-t border-white/10">
          <p class="text-gray-400 mb-6">Or explore these popular pages:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/services" class="px-5 py-2 bg-white/5 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-all">
              Our Services
            </a>
            <a href="/projects" class="px-5 py-2 bg-white/5 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-all">
              Projects
            </a>
            <a href="/about" class="px-5 py-2 bg-white/5 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-all">
              About Us
            </a>
            <a href="/blog" class="px-5 py-2 bg-white/5 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-all">
              Blog
            </a>
          </div>
        </div>

        {/* Contact */}
        <div class="mt-12 text-gray-400">
          <p>Need assistance? Call us at <a href="tel:+919558360879" class="text-solar-green hover:underline">+91 95583 60879</a></p>
        </div>
      </div>
    </main>
  )
}
