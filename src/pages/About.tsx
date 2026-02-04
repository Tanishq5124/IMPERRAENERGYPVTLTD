export const AboutPage = () => {
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
              About Imperra Energy
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Powering India's
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Solar Future</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Imperra Energy Pvt. Ltd. is a fast-scaling solar EPC and energy solutions company formed as a strategic joint venture between two established industry groups. We accelerate adoption of reliable, high-performance solar energy systems through strong engineering, efficient execution, and long-term sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div class="bg-gradient-to-br from-solar-green/10 to-highlight-green/5 rounded-3xl p-10">
              <div class="w-16 h-16 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center mb-6">
                <i class="fas fa-eye text-white text-2xl"></i>
              </div>
              <h2 class="text-3xl font-display font-bold text-primary mb-4">Our Vision</h2>
              <p class="text-lg text-text-muted leading-relaxed">
                Become a leading solar energy player delivering high-performance, scalable, sustainable solutions that power India's energy transition and create long-term value.
              </p>
            </div>

            {/* Mission */}
            <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-10">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6">
                <i class="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h2 class="text-3xl font-display font-bold text-primary mb-4">Our Mission</h2>
              <p class="text-lg text-text-muted leading-relaxed">
                Provide cost-effective, reliable, and efficient solar power systems delivering long-term client value, energy security, and environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                Our Journey
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Strategic Growth Journey
              </h2>
              <p class="text-lg text-text-muted mb-6 leading-relaxed">
                Formed as a strategic joint venture between two established industry groups, Imperra Energy combines deep industry expertise with strong financial backing to deliver reliable, high-performance solar energy systems.
              </p>
              <p class="text-lg text-text-muted mb-8 leading-relaxed">
                Our growth strategy targets over 500 MW of solar capacity within the next three years, supported by experienced technical leadership, scalable project execution systems, and commitment to innovation and sustainability.
              </p>
              
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                  <div class="text-4xl font-bold text-solar-green mb-2">50</div>
                  <div class="text-text-muted">MW Milestone</div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                  <div class="text-4xl font-bold text-solar-green mb-2">500+</div>
                  <div class="text-text-muted">MW Target (3 Yrs)</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-solar-green/20 to-highlight-green/10 flex items-center justify-center">
                <div class="text-center">
                  <i class="fas fa-rocket text-9xl text-solar-green/50 mb-6"></i>
                  <div class="text-2xl font-bold text-primary">Strategic JV</div>
                  <div class="text-text-muted">Fast-Scaling Solar EPC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              What Drives Us
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Our Core Values
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Driving technological advancement and continuous improvement in solar energy systems' },
              { icon: 'fa-leaf', title: 'Sustainability', desc: 'Reducing carbon emissions, improving energy security, and delivering long-term performance' },
              { icon: 'fa-tachometer-alt', title: 'Efficiency', desc: 'Maximizing project execution efficiency with strong planning and risk management' },
            ].map((value) => (
              <div class="group text-center p-8 rounded-3xl border border-gray-100 hover:border-solar-green/30 hover:shadow-xl transition-all duration-300">
                <div class="w-20 h-20 bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i class={`fas ${value.icon} text-3xl text-solar-green`}></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p class="text-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Imperra Energy - with specific numbers */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              The Imperra Advantage
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Numbers that speak for our commitment and excellence
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: '50', label: 'MW Milestone', icon: 'fa-bolt', desc: 'Demonstrating execution capability' },
              { number: '500+', label: 'MW Target', icon: 'fa-rocket', desc: 'Growth target within 3 years' },
              { number: '100%', label: 'On-Time Delivery', icon: 'fa-clock', desc: 'Committed to on-budget execution' },
              { number: '3', label: 'Core Focus Areas', icon: 'fa-crosshairs', desc: 'Ground-mount, Industrial, Large-scale' },
            ].map((stat) => (
              <div class="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div class="w-16 h-16 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class={`fas ${stat.icon} text-white text-2xl`}></i>
                </div>
                <div class="text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div class="text-solar-green font-semibold mb-2">{stat.label}</div>
                <p class="text-sm text-text-muted">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Highlights */}
          <div class="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', icon: 'fa-users', desc: 'Solar engineers, project managers, and technical specialists' },
              { title: 'Strong Planning', icon: 'fa-tasks', desc: 'Rigorous project planning and risk management' },
              { title: 'Quality Adherence', icon: 'fa-shield-alt', desc: 'Regulatory compliance and quality standards' },
            ].map((item) => (
              <div class="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="w-12 h-12 bg-solar-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class={`fas ${item.icon} text-solar-green text-xl`}></i>
                </div>
                <div>
                  <h4 class="font-bold text-primary mb-1">{item.title}</h4>
                  <p class="text-sm text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Join the growing community of businesses embracing sustainable energy solutions.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            Get in Touch
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  )
}
