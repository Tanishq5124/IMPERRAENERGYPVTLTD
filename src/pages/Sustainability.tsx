export const SustainabilityPage = () => {
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
              Our Commitment
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Building a
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Sustainable Future</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Imperra's renewable systems reduce carbon footprints and enable industries to achieve energy independence and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center p-6 rounded-2xl bg-solar-green/10">
              <div class="text-4xl md:text-5xl font-bold text-solar-green mb-2">150K+</div>
              <div class="text-text-muted">Tonnes CO₂ Offset</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-primary/10">
              <div class="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div class="text-text-muted">MW Clean Energy</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-solar-green/10">
              <div class="text-4xl md:text-5xl font-bold text-solar-green mb-2">50K+</div>
              <div class="text-text-muted">Trees Equivalent</div>
            </div>
            <div class="text-center p-6 rounded-2xl bg-primary/10">
              <div class="text-4xl md:text-5xl font-bold text-primary mb-2">25M</div>
              <div class="text-text-muted">Liters Water Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                Environmental Impact
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Reducing Carbon Footprints
              </h2>
              <p class="text-lg text-text-muted mb-8 leading-relaxed">
                Every solar installation we deliver contributes to India's climate goals. Our projects have collectively prevented millions of tonnes of CO₂ emissions, equivalent to planting vast forests across the country.
              </p>
              
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-leaf text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-primary mb-2">Carbon Reduction</h3>
                    <p class="text-text-muted">Each MW of solar capacity prevents approximately 1,200 tonnes of CO₂ emissions annually.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-tint text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-primary mb-2">Water Conservation</h3>
                    <p class="text-text-muted">Solar power requires minimal water compared to conventional power generation methods.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-wind text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-primary mb-2">Air Quality</h3>
                    <p class="text-text-muted">Clean energy production means zero air pollutants and improved air quality in industrial areas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-solar-green/30 to-highlight-green/20 flex items-center justify-center">
                <div class="text-center">
                  <i class="fas fa-globe-asia text-9xl text-solar-green mb-6"></i>
                  <div class="text-2xl font-bold text-primary">Clean Planet</div>
                  <div class="text-text-muted">For Future Generations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Framework */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Our Framework
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              ESG Commitment
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Environmental, Social, and Governance principles guide every aspect of our operations
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {/* Environmental */}
            <div class="bg-gradient-to-br from-solar-green/10 to-highlight-green/5 rounded-3xl p-10">
              <div class="w-20 h-20 bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl flex items-center justify-center mb-8">
                <i class="fas fa-seedling text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Environmental</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">100% renewable energy focus</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Sustainable procurement practices</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Waste minimization programs</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Panel recycling initiatives</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-10">
              <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-8">
                <i class="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Social</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-primary mt-1"></i>
                  <span class="text-text-muted">Local employment generation</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-primary mt-1"></i>
                  <span class="text-text-muted">Community development programs</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-primary mt-1"></i>
                  <span class="text-text-muted">Safety-first workplace culture</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-primary mt-1"></i>
                  <span class="text-text-muted">Skills training & education</span>
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div class="bg-gradient-to-br from-highlight-green/10 to-solar-green/5 rounded-3xl p-10">
              <div class="w-20 h-20 bg-gradient-to-br from-highlight-green to-solar-green rounded-2xl flex items-center justify-center mb-8">
                <i class="fas fa-balance-scale text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">Governance</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Transparent operations</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Ethical business practices</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Regulatory compliance</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-solar-green mt-1"></i>
                  <span class="text-text-muted">Stakeholder engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section class="py-24 bg-bg-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              Global Goals
            </span>
            <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              UN Sustainable Development Goals
            </h2>
            <p class="text-xl text-text-muted max-w-3xl mx-auto">
              Our work contributes to multiple UN SDGs, driving positive change globally
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '7', title: 'Affordable and Clean Energy', color: 'from-yellow-400 to-yellow-500' },
              { number: '8', title: 'Decent Work and Economic Growth', color: 'from-red-400 to-red-500' },
              { number: '9', title: 'Industry, Innovation, Infrastructure', color: 'from-orange-400 to-orange-500' },
              { number: '13', title: 'Climate Action', color: 'from-green-500 to-green-600' },
            ].map((sdg) => (
              <div class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class={`w-16 h-16 bg-gradient-to-br ${sdg.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span class="text-2xl font-bold text-white">{sdg.number}</span>
                </div>
                <h4 class="text-sm font-semibold text-primary">{sdg.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-gradient-to-br from-solar-green/20 to-highlight-green/10 rounded-3xl p-12">
                <h3 class="text-3xl font-bold text-primary mb-8">Our 2030 Targets</h3>
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-2xl font-bold text-solar-green">1GW</span>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">Installed Capacity</div>
                      <div class="text-sm text-text-muted">Target by 2030</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-2xl font-bold text-solar-green">0</span>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">Net Zero Operations</div>
                      <div class="text-sm text-text-muted">Carbon neutral by 2030</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-2xl font-bold text-solar-green">100%</span>
                    </div>
                    <div>
                      <div class="font-semibold text-primary">Panel Recycling</div>
                      <div class="text-sm text-text-muted">End-of-life responsibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-6">
                Looking Ahead
              </span>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Our Sustainability Goals
              </h2>
              <p class="text-lg text-text-muted mb-8 leading-relaxed">
                We're committed to ambitious targets that will multiply our positive impact on the environment and communities we serve. By 2030, we aim to be a leader in sustainable energy practices across India.
              </p>
              <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Partner With Us <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Join the Sustainable Energy Movement
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Be part of India's clean energy revolution and contribute to a greener tomorrow.
          </p>
          <a href="/contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Green Journey
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </main>
  )
}
