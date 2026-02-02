export const BlogPage = () => {
  const articles = [
    {
      id: 'solar-roi-guide-2026',
      title: 'Understanding Solar ROI in 2026: A Complete Guide for Indian Businesses',
      excerpt: 'Learn how to calculate the return on investment for solar installations and maximize your energy savings with the latest 2026 subsidy schemes and electricity rates.',
      category: 'Solar ROI',
      readTime: '8 min read',
      date: 'January 28, 2026',
      featured: true,
      content: `
        <p>Calculating solar ROI is critical for any business considering a solar investment. With electricity rates increasing by 5-8% annually and government subsidies available until 2026, now is the optimal time to go solar.</p>
        <h3>Key ROI Factors in 2026</h3>
        <ul>
          <li><strong>Current electricity rates:</strong> ₹8-12 per unit for commercial/industrial</li>
          <li><strong>System cost:</strong> ₹45,000-55,000 per kW (including installation)</li>
          <li><strong>Government subsidy:</strong> Up to 40% for systems under 500 kW</li>
          <li><strong>Depreciation benefits:</strong> 40% accelerated depreciation</li>
        </ul>
        <h3>Typical ROI Timeline</h3>
        <p>Most businesses achieve complete ROI within 3-4.5 years, with 25+ years of subsequent free electricity generation.</p>
      `
    },
    {
      id: 'industrial-energy-savings',
      title: 'Industrial Energy Savings: Proven Strategies for Manufacturing Units',
      excerpt: 'Discover battle-tested strategies to reduce energy costs by 40-70% in manufacturing facilities through solar adoption and energy efficiency measures.',
      category: 'Industrial',
      readTime: '6 min read',
      date: 'January 22, 2026',
      featured: false
    },
    {
      id: 'capex-vs-ppa-comparison',
      title: 'CAPEX vs PPA vs Solar Investor: Which Solar Model is Right for Your Business?',
      excerpt: 'A comprehensive comparison of capital expenditure, power purchase agreement, and third-party investor models to help you make an informed solar investment decision.',
      category: 'Financial Models',
      readTime: '10 min read',
      date: 'January 18, 2026',
      featured: false
    },
    {
      id: 'solar-policies-india-2026',
      title: 'Latest Solar Policies in India 2026: What Businesses Need to Know',
      excerpt: 'Complete overview of MNRE guidelines, state-specific subsidies, net metering regulations, and green energy mandates affecting solar adoption in 2026.',
      category: 'Policy Updates',
      readTime: '7 min read',
      date: 'January 12, 2026',
      featured: false
    },
    {
      id: 'solar-technology-trends-2026',
      title: 'The Future of Solar Technology: 5 Trends Reshaping the Industry in 2026',
      excerpt: 'From TOPCon and HJT cells to advanced energy storage and AI-powered optimization - explore the technologies transforming solar energy.',
      category: 'Technology',
      readTime: '9 min read',
      date: 'January 5, 2026',
      featured: false
    },
    {
      id: 'textile-industry-case-study',
      title: 'Case Study: How Gujarat Textile Mills Achieved 65% Energy Savings with Solar',
      excerpt: 'Real-world success story of how leading textile manufacturers in Surat reduced electricity costs and achieved energy independence through rooftop solar.',
      category: 'Case Studies',
      readTime: '5 min read',
      date: 'December 28, 2025',
      featured: false
    }
  ]

  const categories = ['All', 'Solar ROI', 'Industrial', 'Financial Models', 'Policy Updates', 'Technology', 'Case Studies']

  return (
    <main class="pt-20">
      {/* Hero Section */}
      <section class="relative py-24 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-20 right-20 w-72 h-72 bg-solar-green/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-20 left-20 w-96 h-96 bg-highlight-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div class="max-w-3xl">
            <span class="inline-block px-4 py-2 bg-solar-green/20 text-solar-green text-sm font-semibold rounded-full mb-6">
              Insights & Resources
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Energy
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Insights</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Expert insights on solar ROI, industrial energy savings, CAPEX vs PPA, and the latest solar policies in India.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section class="bg-white py-8 border-b border-gray-100 sticky top-20 z-40">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button class={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                index === 0 
                  ? 'bg-solar-green text-white shadow-lg' 
                  : 'bg-bg-light text-text-main hover:bg-solar-green hover:text-white'
              }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section class="py-16 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div class="grid lg:grid-cols-2">
              <div class="bg-gradient-to-br from-solar-green/20 to-highlight-green/10 p-12 flex items-center justify-center min-h-[300px]">
                <div class="text-center">
                  <i class="fas fa-chart-line text-8xl text-solar-green/50 mb-4"></i>
                  <div class="text-solar-green font-semibold">Featured Article</div>
                </div>
              </div>
              <div class="p-10 lg:p-12 flex flex-col justify-center">
                <div class="flex items-center gap-4 mb-4">
                  <span class="px-3 py-1 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full">
                    Solar ROI
                  </span>
                  <span class="text-text-muted text-sm">8 min read</span>
                </div>
                <h2 class="text-3xl font-bold text-primary mb-4">
                  Understanding Solar ROI: A Complete Guide for Indian Businesses
                </h2>
                <p class="text-text-muted mb-6 leading-relaxed">
                  Learn how to calculate the return on investment for solar installations and maximize your energy savings. This comprehensive guide covers everything from initial cost analysis to long-term financial benefits.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-text-muted">January 15, 2024</span>
                  <a href="#" class="inline-flex items-center gap-2 text-solar-green font-semibold hover:gap-3 transition-all">
                    Read Article <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex items-center justify-between mb-12">
            <h2 class="text-3xl font-display font-bold text-primary">Latest Articles</h2>
            <div class="flex items-center gap-4">
              <span class="text-text-muted text-sm">Sort by:</span>
              <select class="px-4 py-2 bg-bg-light border-none rounded-lg text-text-main text-sm focus:ring-2 focus:ring-solar-green">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="h-48 bg-gradient-to-br from-primary/10 to-solar-green/10 flex items-center justify-center">
                  <i class="fas fa-file-alt text-5xl text-solar-green/30 group-hover:scale-110 transition-transform duration-300"></i>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="px-3 py-1 bg-bg-light text-text-muted text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span class="text-text-muted text-xs">{article.readTime}</span>
                  </div>
                  <h3 class="text-lg font-bold text-primary mb-3 line-clamp-2 group-hover:text-solar-green transition-colors">
                    {article.title}
                  </h3>
                  <p class="text-text-muted text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-xs text-text-muted">{article.date}</span>
                    <a href="#" class="text-solar-green text-sm font-semibold hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div class="text-center mt-12">
            <button class="px-8 py-3 bg-bg-light text-text-main font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <div class="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 lg:p-16 text-center">
            <div class="w-20 h-20 bg-solar-green/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <i class="fas fa-envelope text-3xl text-solar-green"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p class="text-gray-300 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights, industry updates, and solar energy tips delivered to your inbox.
            </p>
            <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-grow px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-solar-green"
              />
              <button
                type="submit"
                class="px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p class="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-display font-bold text-primary mb-4">Explore by Topic</h2>
            <p class="text-text-muted">Find articles that match your interests</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Solar ROI', count: 12, icon: 'fa-chart-line' },
              { name: 'Industrial', count: 8, icon: 'fa-industry' },
              { name: 'Financial', count: 6, icon: 'fa-coins' },
              { name: 'Policy', count: 10, icon: 'fa-landmark' },
              { name: 'Technology', count: 14, icon: 'fa-microchip' },
              { name: 'Case Studies', count: 5, icon: 'fa-briefcase' },
            ].map((topic) => (
              <a href="#" class="group bg-bg-light rounded-2xl p-6 text-center hover:bg-solar-green transition-all duration-300">
                <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <i class={`fas ${topic.icon} text-solar-green text-xl group-hover:text-white transition-colors`}></i>
                </div>
                <h4 class="font-semibold text-primary group-hover:text-white transition-colors">{topic.name}</h4>
                <span class="text-sm text-text-muted group-hover:text-white/80 transition-colors">{topic.count} articles</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Turn insights into action. Let us help you design your perfect solar solution.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            Get a Free Consultation
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  )
}
