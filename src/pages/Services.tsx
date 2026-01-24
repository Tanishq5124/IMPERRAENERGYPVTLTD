export const ServicesPage = () => {
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
              Our Services
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Comprehensive
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Energy Solutions</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              From concept to commissioning, we deliver end-to-end renewable energy solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Solar Park EPC */}
          <div id="solar-epc" class="mb-24 scroll-mt-24">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                  Utility Scale
                </span>
                <h2 class="text-4xl font-display font-bold text-primary mb-6">
                  Solar Park EPC
                </h2>
                <p class="text-lg text-text-muted mb-8 leading-relaxed">
                  Large-scale, grid-connected solar park projects designed for strong financial returns. We handle everything from land acquisition to grid connectivity.
                </p>
                
                <div class="space-y-4 mb-8">
                  {['Site assessment & land acquisition', 'Engineering design & procurement', 'Construction & installation', 'Grid connectivity & commissioning', 'Performance monitoring systems'].map((item) => (
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-solar-green"></i>
                      <span class="text-text-main">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Discuss Your Project <i class="fas fa-arrow-right"></i>
                </a>
              </div>
              
              <div class="bg-bg-light rounded-3xl p-10">
                <div class="text-center">
                  <i class="fas fa-solar-panel text-8xl text-solar-green mb-6"></i>
                  <div class="text-5xl font-bold text-primary mb-2">300+ MW</div>
                  <div class="text-text-muted">Installed Capacity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industrial & Rooftop Solar */}
          <div id="rooftop" class="mb-24 scroll-mt-24">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="order-2 lg:order-1 bg-bg-light rounded-3xl p-10">
                <div class="text-center">
                  <i class="fas fa-building text-8xl text-primary mb-6"></i>
                  <div class="text-5xl font-bold text-primary mb-2">50+</div>
                  <div class="text-text-muted">Rooftop Installations</div>
                </div>
              </div>
              
              <div class="order-1 lg:order-2">
                <span class="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                  Commercial & Industrial
                </span>
                <h2 class="text-4xl font-display font-bold text-primary mb-6">
                  Industrial & Rooftop Solar
                </h2>
                <p class="text-lg text-text-muted mb-8 leading-relaxed">
                  Maximize your rooftop potential with custom-designed solar systems that reduce electricity costs and carbon footprint.
                </p>
                
                <div class="space-y-4 mb-8">
                  {['Structural analysis & design', 'Premium panel installation', 'Inverter & battery systems', 'Net metering setup', 'Real-time monitoring'].map((item) => (
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-primary"></i>
                      <span class="text-text-main">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary-dark transition-all">
                  Get a Quote <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Captive Solar Solutions */}
          <div id="captive" class="mb-24 scroll-mt-24">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                  Self-Generation
                </span>
                <h2 class="text-4xl font-display font-bold text-primary mb-6">
                  Captive Solar Solutions
                </h2>
                <p class="text-lg text-text-muted mb-8 leading-relaxed">
                  Generate your own power with reduced grid dependence. Enjoy predictable costs and energy security with on-site generation capabilities.
                </p>
                
                <div class="space-y-4 mb-8">
                  {['100% energy independence', 'Reduced electricity costs', 'Protection from tariff hikes', 'Enhanced grid reliability', 'Green energy certification'].map((item) => (
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-solar-green"></i>
                      <span class="text-text-main">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Plan Your System <i class="fas fa-arrow-right"></i>
                </a>
              </div>
              
              <div class="bg-bg-light rounded-3xl p-10">
                <div class="text-center">
                  <i class="fas fa-industry text-8xl text-solar-green mb-6"></i>
                  <div class="text-5xl font-bold text-primary mb-2">40%</div>
                  <div class="text-text-muted">Average Cost Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Models */}
          <div id="financial" class="mb-24 scroll-mt-24">
            <div class="text-center mb-16">
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
                Flexible Options
              </span>
              <h2 class="text-4xl font-display font-bold text-primary mb-6">
                Financial Models
              </h2>
              <p class="text-xl text-text-muted max-w-3xl mx-auto">
                Choose the investment model that best suits your financial goals
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              {/* CAPEX */}
              <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-coins text-white text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-4">CAPEX Model</h3>
                <p class="text-text-muted mb-6">
                  Full ownership with upfront investment. Maximize long-term savings and asset value.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    100% asset ownership
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    Tax benefits & depreciation
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    Highest long-term ROI
                  </li>
                </ul>
              </div>

              {/* PPA */}
              <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-file-contract text-white text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-4">Solar PPA</h3>
                <p class="text-text-muted mb-6">
                  Pay only for the power you use with no upfront investment required.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-primary"></i>
                    Zero upfront cost
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-primary"></i>
                    Fixed power rates
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-primary"></i>
                    Maintenance included
                  </li>
                </ul>
              </div>

              {/* Solar Investor */}
              <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-highlight-green to-solar-green rounded-2xl flex items-center justify-center mb-6">
                  <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-4">Solar Investor</h3>
                <p class="text-text-muted mb-6">
                  Third-party investment model with guaranteed returns and minimal risk.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    Third-party financing
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    Risk mitigation
                  </li>
                  <li class="flex items-center gap-2 text-sm text-text-main">
                    <i class="fas fa-check text-solar-green"></i>
                    Guaranteed returns
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* O&M Services */}
          <div id="om" class="scroll-mt-24">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="bg-bg-light rounded-3xl p-10">
                <div class="text-center">
                  <i class="fas fa-tools text-8xl text-solar-green mb-6"></i>
                  <div class="text-5xl font-bold text-primary mb-2">99.5%</div>
                  <div class="text-text-muted">System Uptime Guaranteed</div>
                </div>
              </div>
              
              <div>
                <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                  Maintenance
                </span>
                <h2 class="text-4xl font-display font-bold text-primary mb-6">
                  O&M Services
                </h2>
                <p class="text-lg text-text-muted mb-8 leading-relaxed">
                  Comprehensive operations and maintenance services to ensure optimal system performance throughout its lifecycle.
                </p>
                
                <div class="space-y-4 mb-8">
                  {['Preventive maintenance', 'Performance monitoring', 'Fault detection & repair', 'Panel cleaning services', 'Inverter maintenance', 'Annual performance audit'].map((item) => (
                    <div class="flex items-center gap-3">
                      <i class="fas fa-check-circle text-solar-green"></i>
                      <span class="text-text-main">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Request Service <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Solar Journey?
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Let our experts design a customized solution for your energy needs.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            Get Your Free Proposal
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  )
}
