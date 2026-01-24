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
              Driving India's Energy
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Transformation</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Imperra Energy is driving India's transition toward sustainable power with innovative solar and thermal energy solutions. Backed by decades of sectoral expertise and a leadership team with over 30 years of combined experience.
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
                Enable industries to adopt cleaner, cost-effective, and reliable energy solutions that power growth while protecting our planet for future generations.
              </p>
            </div>

            {/* Mission */}
            <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-10">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6">
                <i class="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h2 class="text-3xl font-display font-bold text-primary mb-4">Our Mission</h2>
              <p class="text-lg text-text-muted leading-relaxed">
                Deliver intelligent, technology-first energy solutions with long-term client success, combining engineering excellence with innovative approaches.
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
                Two Decades of Energy Excellence
              </h2>
              <p class="text-lg text-text-muted mb-6 leading-relaxed">
                Founded with a vision to transform India's energy landscape, Imperra Energy has grown from a small engineering firm to one of the most trusted names in renewable energy infrastructure.
              </p>
              <p class="text-lg text-text-muted mb-8 leading-relaxed">
                Our journey is marked by continuous innovation, unwavering commitment to quality, and a deep understanding of the unique challenges faced by Indian industries in their energy transition.
              </p>
              
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                  <div class="text-4xl font-bold text-solar-green mb-2">20+</div>
                  <div class="text-text-muted">Years of Expertise</div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                  <div class="text-4xl font-bold text-solar-green mb-2">30+</div>
                  <div class="text-text-muted">Leadership Experience</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-solar-green/20 to-highlight-green/10 flex items-center justify-center">
                <div class="text-center">
                  <i class="fas fa-history text-9xl text-solar-green/50 mb-6"></i>
                  <div class="text-2xl font-bold text-primary">Since 2004</div>
                  <div class="text-text-muted">Pioneering Renewable Energy</div>
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

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-award', title: 'Excellence', desc: 'Striving for the highest standards in every project' },
              { icon: 'fa-handshake', title: 'Integrity', desc: 'Building trust through transparent partnerships' },
              { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Embracing new technologies and approaches' },
              { icon: 'fa-leaf', title: 'Sustainability', desc: 'Committed to environmental responsibility' },
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

      {/* Leadership Team */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Meet Our Team
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Leadership Team
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Experienced professionals driving innovation in renewable energy
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Patel', role: 'Founder & CEO', experience: '25+ years in Energy Sector' },
              { name: 'Priya Sharma', role: 'Chief Technical Officer', experience: '20+ years in Solar Engineering' },
              { name: 'Amit Desai', role: 'Head of Operations', experience: '15+ years in Project Management' },
            ].map((member) => (
              <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-user text-white text-3xl"></i>
                </div>
                <div class="text-center">
                  <h3 class="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <div class="text-solar-green font-medium mb-3">{member.role}</div>
                  <p class="text-sm text-text-muted">{member.experience}</p>
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
