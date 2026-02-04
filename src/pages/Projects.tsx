export const ProjectsPage = () => {
  const projects = [
    {
      name: 'Ground Mount Project - Utility Scale',
      capacity: '25 MW',
      type: 'Ground Mount Solar',
      location: 'Gujarat',
      description: 'Large-scale ground mount solar installation demonstrating execution capability with on-time, on-budget delivery.',
      features: ['Engineering & design', 'Procurement', 'Performance optimization'],
      year: '2025'
    },
    {
      name: 'Industrial Installation - Manufacturing',
      capacity: '15 MW',
      type: 'Industrial Solar',
      location: 'Rajasthan',
      description: 'Industrial/commercial solar installation reducing carbon emissions and improving energy security.',
      features: ['Project management', 'Installation & commissioning', 'O&M support'],
      year: '2025'
    },
    {
      name: 'Commercial Rooftop - C&I',
      capacity: '5 MW',
      type: 'Commercial Rooftop',
      location: 'Maharashtra',
      description: 'Commercial solar installation tailored to client energy needs, site conditions, and financial objectives.',
      features: ['Engineering design', 'Efficient execution', 'Long-term performance'],
      year: '2024'
    },
    {
      name: 'Solar Park Project - Grid Connected',
      capacity: '3 MW',
      type: 'Solar Park',
      location: 'Gujarat',
      description: 'Large-scale solar infrastructure development with comprehensive lifecycle services.',
      features: ['Strong planning', 'Risk management', 'Quality adherence'],
      year: '2024'
    },
    {
      name: 'Captive Power - Industrial',
      capacity: '2 MW',
      type: 'Captive Solar',
      location: 'Gujarat',
      description: 'Captive power solution providing energy security and long-term cost savings.',
      features: ['Customized solution', 'Financial modeling', 'Asset management'],
      year: '2024'
    },
    {
      name: 'Large-Scale Infrastructure',
      capacity: '500+ MW Target',
      type: 'Growth Strategy',
      location: 'Pan-India',
      description: 'Growth strategy targeting 500+ MW solar capacity within the next three years with scalable execution systems.',
      features: ['Scalable systems', 'Technical leadership', 'Strong financial backing'],
      year: '2026-28'
    }
  ]

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
              Our Portfolio
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Execution
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Track Record</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              50 MW milestone achieved demonstrating capability for on-time, on-budget delivery. Targeting 500+ MW of solar capacity within the next three years.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section class="bg-white py-12 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-primary mb-2">50</div>
              <div class="text-text-muted">MW Milestone</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">500+</div>
              <div class="text-text-muted">MW Target (3 Yrs)</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">100%</div>
              <div class="text-text-muted">On-Time Delivery</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">3</div>
              <div class="text-text-muted">Core Focus Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section class="bg-bg-light py-6">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex flex-wrap gap-3 justify-center">
            <button class="px-6 py-2 bg-solar-green text-white rounded-full font-medium transition-all hover:shadow-lg">
              All Projects
            </button>
            <button class="px-6 py-2 bg-white text-text-main rounded-full font-medium transition-all hover:bg-solar-green hover:text-white">
              Solar Parks
            </button>
            <button class="px-6 py-2 bg-white text-text-main rounded-full font-medium transition-all hover:bg-solar-green hover:text-white">
              Industrial
            </button>
            <button class="px-6 py-2 bg-white text-text-main rounded-full font-medium transition-all hover:bg-solar-green hover:text-white">
              Rooftop
            </button>
            <button class="px-6 py-2 bg-white text-text-main rounded-full font-medium transition-all hover:bg-solar-green hover:text-white">
              Commercial
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div class="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Project Image Placeholder */}
                <div class="relative h-48 bg-gradient-to-br from-primary/10 to-solar-green/10 flex items-center justify-center overflow-hidden">
                  <i class="fas fa-solar-panel text-6xl text-solar-green/30 group-hover:scale-110 transition-transform duration-500"></i>
                  <div class="absolute top-4 right-4 px-3 py-1 bg-solar-green text-white text-sm font-semibold rounded-full">
                    {project.capacity}
                  </div>
                  <div class="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {project.year}
                  </div>
                </div>
                
                {/* Project Details */}
                <div class="p-6">
                  <div class="flex items-center gap-2 text-sm text-solar-green mb-2">
                    <i class="fas fa-map-marker-alt"></i>
                    {project.location}
                  </div>
                  <h3 class="text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p class="text-sm text-text-muted mb-4">{project.type}</p>
                  <p class="text-text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div class="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span class="px-3 py-1 bg-bg-light text-xs text-text-main rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <a href="/contact" class="inline-flex items-center gap-2 text-solar-green font-semibold hover:gap-3 transition-all">
                    View Details <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Featured Project
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Growth Strategy - 500+ MW
            </h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-3xl p-12 text-center">
              <i class="fas fa-rocket text-9xl text-solar-green mb-6"></i>
              <div class="text-5xl font-bold text-primary mb-2">500+ MW</div>
              <div class="text-text-muted">Target in 3 Years</div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-primary mb-6">Why Choose Imperra Energy</h3>
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-cogs text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Proven Execution Capability</h4>
                    <p class="text-text-muted">50 MW milestone with on-time, on-budget delivery</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-drafting-compass text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Strong Engineering & PM</h4>
                    <p class="text-text-muted">Expert team of solar engineers and project managers</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-hand-holding-usd text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Financially Backed Growth</h4>
                    <p class="text-text-muted">Strategic JV with strong financial backing</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-chart-line text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Long-Term Performance Focus</h4>
                    <p class="text-text-muted">Performance optimization across asset lifecycles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Partner With Us Today
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Capitalize on global solar growth driven by climate commitments and energy transition. Customized solutions for your business.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Project
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  )
}
