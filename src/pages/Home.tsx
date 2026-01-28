export const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        {/* Animated Background Elements */}
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-20 left-10 w-72 h-72 bg-solar-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-highlight-green/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-solar-green/5 to-transparent rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 100px 100px;"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div class="text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-solar-green text-sm font-medium mb-8 animate-fade-in">
                <span class="w-2 h-2 bg-solar-green rounded-full animate-pulse"></span>
                Powering India's Green Revolution
              </div>
              
              <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6 animate-slide-up">
                Energy —<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green">Engineered</span>
                <br />for Tomorrow
              </h1>
              
              <p class="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slide-up" style="animation-delay: 0.2s;">
                Engineering-driven renewable energy solutions delivering performance, scale, and long-term value.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style="animation-delay: 0.4s;">
                <a href="/contact" class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold rounded-2xl shadow-2xl shadow-solar-green/30 hover:shadow-solar-green/50 hover:scale-105 transition-all duration-300">
                  Get a Proposal
                  <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="/services" class="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                  Explore Services
                  <i class="fas fa-chevron-right group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>

              {/* Stats */}
              <div class="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 animate-slide-up" style="animation-delay: 0.6s;">
                <div>
                  <div class="text-3xl md:text-4xl font-bold text-white mb-1">300+</div>
                  <div class="text-sm text-gray-400">MW Installed</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
                  <div class="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div class="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                  <div class="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div class="relative hidden lg:block animate-fade-in" style="animation-delay: 0.5s;">
              <div class="relative w-full aspect-square">
                {/* Main circular graphic */}
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-solar-green/20 to-highlight-green/10 backdrop-blur-xl border border-white/10 animate-spin-slow"></div>
                <div class="absolute inset-8 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-solar-panel text-8xl text-solar-green mb-4"></i>
                    <div class="text-white text-lg font-semibold">Clean Energy</div>
                    <div class="text-gray-400 text-sm">For a Better Future</div>
                  </div>
                </div>
                {/* Floating elements */}
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                  <i class="fas fa-leaf text-primary text-3xl"></i>
                </div>
                <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl animate-float" style="animation-delay: 0.5s;">
                  <i class="fas fa-bolt text-solar-green text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div class="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div class="w-1.5 h-3 bg-solar-green rounded-full animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section class="bg-bg-light py-6 border-y border-gray-200">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex items-center justify-center">
            <p class="text-text-muted text-center font-medium">
              <i class="fas fa-shield-alt text-solar-green mr-2"></i>
              Powering India's Energy Independence through advanced solar and renewable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Imperra Energy */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Why Imperra Energy
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Built on engineering excellence and decades of industry experience
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-solar-green/30 shadow-lg hover:shadow-2xl hover:shadow-solar-green/10 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-gem text-2xl text-solar-green"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Premium-Grade Materials</h3>
              <p class="text-text-muted leading-relaxed">
                Industry-certified components for long-term system performance and reliability.
              </p>
            </div>

            {/* Card 2 */}
            <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-solar-green/30 shadow-lg hover:shadow-2xl hover:shadow-solar-green/10 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-cogs text-2xl text-solar-green"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Precision Workmanship</h3>
              <p class="text-text-muted leading-relaxed">
                Engineering accuracy and execution excellence in every project we deliver.
              </p>
            </div>

            {/* Card 3 */}
            <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-solar-green/30 shadow-lg hover:shadow-2xl hover:shadow-solar-green/10 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-tools text-2xl text-solar-green"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Expert-Led Maintenance</h3>
              <p class="text-text-muted leading-relaxed">
                Seamless operations and lifecycle performance with dedicated O&M support.
              </p>
            </div>

            {/* Card 4 */}
            <div class="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-solar-green/30 shadow-lg hover:shadow-2xl hover:shadow-solar-green/10 transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-award text-2xl text-solar-green"></i>
              </div>
              <h3 class="text-xl font-bold text-primary mb-3">Proven Industry Legacy</h3>
              <p class="text-text-muted leading-relaxed">
                Built on over 20 years of expertise in energy infrastructure and engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EPC Solar Park Solutions */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(156,212,77,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-solar-green/20 text-solar-green text-sm font-semibold rounded-full mb-6">
                Utility Scale Projects
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                EPC Solar Park Solutions
              </h2>
              <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                Large-scale, grid-connected solar park projects designed for strong financial returns and sustainable energy generation.
              </p>
              
              <div class="space-y-4 mb-10">
                <div class="flex items-center gap-4 text-white">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center">
                    <i class="fas fa-bolt text-solar-green"></i>
                  </div>
                  <span class="text-lg">300+ MW Installed Capacity</span>
                </div>
                <div class="flex items-center gap-4 text-white">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center">
                    <i class="fas fa-project-diagram text-solar-green"></i>
                  </div>
                  <span class="text-lg">Concept to Commissioning</span>
                </div>
                <div class="flex items-center gap-4 text-white">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center">
                    <i class="fas fa-chart-line text-solar-green"></i>
                  </div>
                  <span class="text-lg">CAPEX, Solar Investor & Solar PPA Models</span>
                </div>
              </div>

              <a href="/services" class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                View Our Services
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="relative">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-solar-green/30 to-highlight-green/20 p-8 border border-white/10 backdrop-blur-sm">
                <div class="w-full h-full rounded-2xl bg-white/10 backdrop-blur-lg flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-sun text-9xl text-solar-green mb-6"></i>
                    <div class="text-3xl font-bold text-white mb-2">300+ MW</div>
                    <div class="text-gray-300">Delivered Across India</div>
                  </div>
                </div>
              </div>
              {/* Floating stats */}
              <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div class="text-3xl font-bold text-primary">₹2000Cr+</div>
                <div class="text-text-muted text-sm">Projects Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Models */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Flexible Solutions
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Solar Investment Models
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Choose the model that best fits your business goals and financial strategy
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* CAPEX Model */}
            <div class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-solar-green to-highlight-green"></div>
              <div class="p-10">
                <div class="w-20 h-20 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-building text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-4">CAPEX Model — Invest to Own</h3>
                <p class="text-text-muted mb-8 leading-relaxed">
                  Full asset ownership with complete control over your solar infrastructure. Maximize long-term financial savings and build equity in your energy assets.
                </p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-solar-green"></i>
                    100% Asset Ownership
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-solar-green"></i>
                    Maximum Long-term ROI
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-solar-green"></i>
                    Tax Benefits & Depreciation
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-solar-green"></i>
                    Full Control Over Operations
                  </li>
                </ul>
                <a href="/contact" class="inline-flex items-center gap-2 text-solar-green font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Captive Model */}
            <div class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-dark"></div>
              <div class="p-10">
                <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <i class="fas fa-industry text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-primary mb-4">Captive Model — Energy for Your Use</h3>
                <p class="text-text-muted mb-8 leading-relaxed">
                  Generate your own power with reduced grid dependence. Enjoy predictable costs and energy security with on-site generation capabilities.
                </p>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-primary"></i>
                    Reduced Grid Dependence
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-primary"></i>
                    Predictable Energy Costs
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-primary"></i>
                    Enhanced Energy Security
                  </li>
                  <li class="flex items-center gap-3 text-text-main">
                    <i class="fas fa-check-circle text-primary"></i>
                    Lower Operational Risks
                  </li>
                </ul>
                <a href="/contact" class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300">
                  Learn More <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Savings Calculator */}
      <section class="py-24 bg-white" id="calculator">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                Free Estimation Tool
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Calculate Your Solar Savings
              </h2>
              <p class="text-xl text-text-muted mb-8">
                See how much your business can save with solar energy in just 60 seconds.
              </p>
              <div class="space-y-4 text-text-muted">
                <div class="flex items-center gap-3">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>Instant savings estimate</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>Customized for your location</span>
                </div>
                <div class="flex items-center gap-3">
                  <i class="fas fa-check-circle text-solar-green"></i>
                  <span>No obligation, 100% free</span>
                </div>
              </div>
            </div>

            <div class="bg-bg-light rounded-3xl p-8 lg:p-10 shadow-xl">
              <form id="savings-calculator" class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-primary mb-2">
                    Monthly Electricity Bill (₹)
                  </label>
                  <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-medium">₹</span>
                    <input
                      type="number"
                      name="monthlyBill"
                      placeholder="Enter your average monthly bill"
                      class="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main"
                      required
                    />
                  </div>
                  <p class="text-xs text-text-muted mt-2">Enter your average monthly electricity expense</p>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-primary mb-2">
                    Property Type
                  </label>
                  <div class="grid grid-cols-2 gap-4">
                    <label class="relative cursor-pointer">
                      <input type="radio" name="propertyType" value="commercial" class="peer sr-only" checked />
                      <div class="p-4 bg-white border-2 border-gray-200 rounded-xl text-center peer-checked:border-solar-green peer-checked:bg-solar-green/5 transition-all">
                        <i class="fas fa-store text-2xl text-text-muted peer-checked:text-solar-green mb-2"></i>
                        <div class="font-semibold text-primary">Commercial</div>
                      </div>
                    </label>
                    <label class="relative cursor-pointer">
                      <input type="radio" name="propertyType" value="industrial" class="peer sr-only" />
                      <div class="p-4 bg-white border-2 border-gray-200 rounded-xl text-center peer-checked:border-solar-green peer-checked:bg-solar-green/5 transition-all">
                        <i class="fas fa-industry text-2xl text-text-muted peer-checked:text-solar-green mb-2"></i>
                        <div class="font-semibold text-primary">Industrial</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-primary mb-2">
                    City
                  </label>
                  <select
                    name="city"
                    class="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select your city</option>
                    <option value="surat">Surat</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="other">Other</option>
                  </select>
                  <p class="text-xs text-text-muted mt-2">For regional solar irradiance estimation</p>
                </div>

                <button
                  type="submit"
                  class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <i class="fas fa-calculator"></i>
                  Calculate My Savings
                </button>

                <p class="text-xs text-center text-text-muted">
                  Make informed energy decisions with real savings estimates tailored to your business.
                </p>
              </form>

              {/* Results Section (hidden by default) */}
              <div id="calculator-results" class="hidden mt-8 pt-8 border-t border-gray-200">
                <h4 class="text-xl font-bold text-primary mb-6 text-center">Your Estimated Savings</h4>
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="bg-white rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-solar-green" id="monthly-savings">₹0</div>
                    <div class="text-sm text-text-muted">Monthly Savings</div>
                  </div>
                  <div class="bg-white rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-solar-green" id="annual-savings">₹0</div>
                    <div class="text-sm text-text-muted">Annual Savings</div>
                  </div>
                  <div class="bg-white rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-primary" id="system-size">0 kW</div>
                    <div class="text-sm text-text-muted">Est. System Size</div>
                  </div>
                  <div class="bg-white rounded-xl p-4 text-center">
                    <div class="text-3xl font-bold text-primary" id="co2-offset">0 T</div>
                    <div class="text-sm text-text-muted">CO₂ Offset/Year</div>
                  </div>
                </div>
                <a href="/contact" class="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                  Get Detailed Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Execution Process */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Our Process
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Project Execution Process
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              A proven methodology for delivering excellence at every stage
            </p>
          </div>

          <div class="relative">
            {/* Connection Line */}
            <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-solar-green via-highlight-green to-solar-green -translate-y-1/2 rounded-full"></div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { icon: 'fa-lightbulb', title: 'Brainstorming', step: '01' },
                { icon: 'fa-map-marker-alt', title: 'Site Feasibility', step: '02' },
                { icon: 'fa-drafting-compass', title: 'Engineering Design', step: '03' },
                { icon: 'fa-file-alt', title: 'Documentation', step: '04' },
                { icon: 'fa-landmark', title: 'Govt. Liaison', step: '05' },
                { icon: 'fa-tasks', title: 'Project Planning', step: '06' },
                { icon: 'fa-clipboard-check', title: 'Quality Assurance', step: '07' },
                { icon: 'fa-users', title: 'Manpower Mgmt', step: '08' },
              ].map((item) => (
                <div class="relative group">
                  <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <i class={`fas ${item.icon} text-white text-xl`}></i>
                    </div>
                    <div class="text-xs font-bold text-solar-green mb-1">{item.step}</div>
                    <h4 class="text-sm font-semibold text-primary">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Advantages
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Key Benefits
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Why industry leaders choose Imperra Energy for their renewable energy needs
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-chart-pie', title: 'Economies of Scale', desc: 'Leverage bulk procurement and streamlined processes for cost efficiency.' },
              { icon: 'fa-rocket', title: 'Faster Approvals', desc: 'Expert navigation through regulatory processes and government liaisons.' },
              { icon: 'fa-chart-line', title: 'Improved ROI', desc: 'Optimized system design and premium components for maximum returns.' },
              { icon: 'fa-expand-arrows-alt', title: 'Flexible Land Use', desc: 'Creative solutions for ground-mount, rooftop, and floating solar installations.' },
              { icon: 'fa-shield-alt', title: 'Energy Security', desc: 'Reduce dependence on grid power and protect against price volatility.' },
              { icon: 'fa-leaf', title: 'Enhanced ESG Profile', desc: 'Strengthen your environmental, social, and governance commitments.' },
            ].map((benefit) => (
              <div class="group flex gap-5 p-6 rounded-2xl hover:bg-bg-light transition-all duration-300">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i class={`fas ${benefit.icon} text-solar-green text-xl`}></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p class="text-text-muted">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section class="py-16 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-12">
            <h3 class="text-lg font-semibold text-text-muted mb-2">Trusted by Industry Leaders</h3>
            <p class="text-sm text-text-muted">
              Trusted partner to industry giants across manufacturing, infrastructure, and energy sectors.
            </p>
          </div>
          
          <div class="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['Sumeet Industries', 'KP Group', 'Reliance Industries', 'Filatex', 'Shikhar Prints'].map((client) => (
              <div class="text-2xl font-bold text-primary/50 hover:text-primary transition-colors duration-300">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                Our Portfolio
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Proven Track Record
              </h2>
              <p class="text-xl text-text-muted mb-8">
                100+ MW delivered across multiple states with a focus on quality, performance, and client satisfaction.
              </p>
              
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-bg-light rounded-2xl p-6">
                  <div class="text-4xl font-bold text-primary mb-2">100+</div>
                  <div class="text-text-muted">MW Installed</div>
                </div>
                <div class="bg-bg-light rounded-2xl p-6">
                  <div class="text-4xl font-bold text-primary mb-2">50+</div>
                  <div class="text-text-muted">Projects Completed</div>
                </div>
                <div class="bg-bg-light rounded-2xl p-6">
                  <div class="text-4xl font-bold text-primary mb-2">10+</div>
                  <div class="text-text-muted">States Covered</div>
                </div>
                <div class="bg-bg-light rounded-2xl p-6">
                  <div class="text-4xl font-bold text-primary mb-2">99%</div>
                  <div class="text-text-muted">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              {[
                { name: 'Sumeet Industries', capacity: '30 MW', type: 'Ground Mount' },
                { name: 'KP Group', capacity: '15 MW', type: 'Solar Park' },
                { name: 'Reliance Industries', capacity: '10 MW', type: 'Industrial' },
                { name: 'Filatex', capacity: '2 MW AC / 2.4 MW DC', type: 'Rooftop' },
                { name: 'Shikhar Prints', capacity: '825 kW AC / 1 MW DC', type: 'Industrial Rooftop' },
              ].map((project, index) => (
                <div class="group flex items-center gap-6 bg-bg-light rounded-2xl p-6 hover:bg-solar-green/5 hover:border-solar-green/20 border border-transparent transition-all duration-300">
                  <div class="w-12 h-12 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div class="flex-grow">
                    <h4 class="font-bold text-primary">{project.name}</h4>
                    <p class="text-sm text-text-muted">{project.type}</p>
                  </div>
                  <div class="text-right">
                    <div class="text-lg font-bold text-solar-green">{project.capacity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-96 h-96 bg-solar-green/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-96 h-96 bg-highlight-green/10 rounded-full blur-3xl"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Let's design your path to
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> energy independence.</span>
          </h2>
          <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Partner with India's trusted renewable energy experts for a sustainable, profitable future.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl shadow-solar-green/30 hover:shadow-solar-green/50 hover:scale-105 transition-all duration-300">
              Get Started Today
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="tel:+919558360879" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <i class="fas fa-phone"></i>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
