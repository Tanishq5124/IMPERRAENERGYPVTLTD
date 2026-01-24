export const ProjectsPage = () => {
  const projects = [
    {
      name: 'Sumeet Industries',
      capacity: '30 MW',
      type: 'Ground Mount Solar Park',
      location: 'Gujarat',
      description: 'Large-scale ground mount solar installation with advanced tracking systems for optimal energy generation.',
      features: ['Single-axis tracking', 'Grid-tied system', 'Remote monitoring'],
      year: '2023'
    },
    {
      name: 'KP Group',
      capacity: '15 MW',
      type: 'Solar Park',
      location: 'Rajasthan',
      description: 'Utility-scale solar park designed for maximum efficiency in high-irradiance regions.',
      features: ['Bi-facial panels', 'String inverters', 'SCADA integration'],
      year: '2022'
    },
    {
      name: 'Reliance Industries',
      capacity: '10 MW',
      type: 'Industrial Solar',
      location: 'Maharashtra',
      description: 'Industrial solar installation powering manufacturing operations with clean energy.',
      features: ['Rooftop & ground', 'Battery storage', 'Load management'],
      year: '2022'
    },
    {
      name: 'Filatex',
      capacity: '2 MW AC / 2.4 MW DC',
      type: 'Industrial Rooftop',
      location: 'Gujarat',
      description: 'High-density rooftop installation maximizing available space for energy generation.',
      features: ['High-efficiency panels', 'Central inverter', 'Net metering'],
      year: '2021'
    },
    {
      name: 'Shikhar Prints',
      capacity: '825 kW AC / 1 MW DC',
      type: 'Commercial Rooftop',
      location: 'Gujarat',
      description: 'Commercial rooftop system designed for textile manufacturing facility.',
      features: ['Mono PERC panels', 'Weather monitoring', 'Mobile app'],
      year: '2021'
    },
    {
      name: 'Gujarat Textile Park',
      capacity: '5 MW',
      type: 'Industrial Solar',
      location: 'Gujarat',
      description: 'Multi-facility solar installation serving an industrial textile complex.',
      features: ['Shared infrastructure', 'Captive consumption', 'ESG compliance'],
      year: '2020'
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
              Powering India with
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Clean Energy</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of industrial and utility-scale installations across India, delivering reliable renewable energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section class="bg-white py-12 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-primary mb-2">100+</div>
              <div class="text-text-muted">MW Installed</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">50+</div>
              <div class="text-text-muted">Projects Completed</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">10+</div>
              <div class="text-text-muted">States Covered</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-primary mb-2">₹2000Cr+</div>
              <div class="text-text-muted">Project Value</div>
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
              Sumeet Industries - 30 MW
            </h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-3xl p-12 text-center">
              <i class="fas fa-sun text-9xl text-solar-green mb-6"></i>
              <div class="text-5xl font-bold text-primary mb-2">30 MW</div>
              <div class="text-text-muted">Ground Mount Solar Park</div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-primary mb-6">Project Highlights</h3>
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-bolt text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Annual Generation</h4>
                    <p class="text-text-muted">45,000 MWh clean energy per year</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-leaf text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">CO₂ Offset</h4>
                    <p class="text-text-muted">36,000 tonnes annually</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-clock text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Project Duration</h4>
                    <p class="text-text-muted">Completed in 8 months</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-solar-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-chart-line text-solar-green"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary mb-1">Performance Ratio</h4>
                    <p class="text-text-muted">82% average annual PR</p>
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
            Your Project Could Be Next
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Join the growing list of successful solar installations powered by Imperra Energy.
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
