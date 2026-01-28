export const ContactPage = () => {
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
              Get in Touch
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Let's Build Your
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-solar-green to-highlight-green"> Energy Future</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              Ready to start your solar journey? Our experts are here to help you design the perfect energy solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 class="text-3xl font-display font-bold text-primary mb-6">
                Request a Proposal
              </h2>
              <p class="text-text-muted mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a customized proposal.
              </p>

              <form id="contact-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-primary mb-2">
                      Full Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-primary mb-2">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main"
                      required
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-primary mb-2">
                      Phone Number <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 95583 60879"
                      class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="solar-epc">Solar Park EPC</option>
                    <option value="rooftop">Industrial & Rooftop Solar</option>
                    <option value="captive">Captive Solar Solutions</option>
                    <option value="om">O&M Services</option>
                    <option value="other">Other / Consultation</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-primary mb-2">
                    Your Requirement
                  </label>
                  <textarea
                    name="requirement"
                    rows={5}
                    placeholder="Tell us about your energy needs, estimated capacity required, location, etc."
                    class="w-full px-4 py-4 bg-bg-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-solar-green focus:border-solar-green transition-all text-text-main resize-none"
                  ></textarea>
                </div>

                <div>
                  <label class="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" class="mt-1 w-5 h-5 rounded border-gray-300 text-solar-green focus:ring-solar-green" />
                    <span class="text-sm text-text-muted">
                      I agree to receive communications from Imperra Energy. You can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <i class="fas fa-paper-plane"></i>
                  Submit Request
                </button>

                <p class="text-xs text-center text-text-muted">
                  By submitting this form, you agree to our <a href="#" class="text-solar-green hover:underline">Privacy Policy</a>.
                </p>
              </form>

              {/* Success Message (hidden by default) */}
              <div id="form-success" class="hidden mt-8 p-6 bg-solar-green/10 rounded-xl text-center">
                <div class="w-16 h-16 bg-solar-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-check text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-primary mb-2">Thank You!</h3>
                <p class="text-text-muted">Your request has been submitted. Our team will contact you within 24 hours.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div class="bg-bg-light rounded-3xl p-10 mb-8">
                <h3 class="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">Office Address</h4>
                      <p class="text-text-muted">
                        Imperra Energy Pvt. Ltd.<br />
                        Ring Road, Surat<br />
                        Gujarat - 395002, India
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">Phone</h4>
                      <p class="text-text-muted">
                        <a href="tel:+919558360879" class="hover:text-solar-green transition-colors">+91 95583 60879</a>
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-highlight-green to-solar-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">Email</h4>
                      <p class="text-text-muted">
                        <a href="mailto:imperraenergypvtltd@gmail.com" class="hover:text-solar-green transition-colors">imperraenergypvtltd@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-solar-green to-highlight-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-clock text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-primary mb-1">Business Hours</h4>
                      <p class="text-text-muted">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div class="mt-8 pt-8 border-t border-gray-200">
                  <h4 class="font-semibold text-primary mb-4">Connect With Us</h4>
                  <div class="flex gap-4">
                    <a href="#" class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <i class="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a href="#" class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <i class="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#" class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <i class="fab fa-youtube text-lg"></i>
                    </a>
                    <a href="#" class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-solar-green transition-colors">
                      <i class="fab fa-facebook-f text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div class="grid grid-cols-2 gap-4">
                <a href="tel:+919558360879" class="bg-gradient-to-br from-solar-green to-highlight-green rounded-2xl p-6 text-center text-primary hover:shadow-xl transition-all">
                  <i class="fas fa-phone text-3xl mb-3"></i>
                  <div class="font-semibold">Call Now</div>
                  <div class="text-sm opacity-80">Quick response</div>
                </a>
                <a href="https://wa.me/919558360879" class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-center text-white hover:shadow-xl transition-all">
                  <i class="fab fa-whatsapp text-3xl mb-3"></i>
                  <div class="font-semibold">WhatsApp</div>
                  <div class="text-sm opacity-80">Chat with us</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="bg-bg-light py-16">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div class="h-96 bg-gradient-to-br from-primary/10 to-solar-green/10 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-map-marked-alt text-7xl text-solar-green/50 mb-4"></i>
                <p class="text-text-muted">Interactive map placeholder</p>
                <p class="text-sm text-text-muted">Surat, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-solar-green/10 text-solar-green text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h2 class="text-4xl font-display font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div class="space-y-4">
            {[
              {
                question: 'How long does it take to get a solar system installed?',
                answer: 'Installation time varies based on system size. Rooftop systems typically take 2-4 weeks, while large-scale solar parks can take 6-12 months from approval to commissioning.'
              },
              {
                question: 'What financing options are available?',
                answer: 'We offer multiple financing models including CAPEX (full ownership), OPEX/PPA (pay for power), and third-party investor models. Our team can help you choose the best option for your business.'
              },
              {
                question: 'What is the typical ROI for solar installations?',
                answer: 'Most commercial and industrial solar installations see ROI within 3-5 years, with total savings of 40-70% on electricity bills over the system lifetime of 25+ years.'
              },
              {
                question: 'Do you provide maintenance services?',
                answer: 'Yes, we offer comprehensive O&M (Operations & Maintenance) services including preventive maintenance, performance monitoring, and 24/7 support to ensure optimal system performance.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We provide services across India, with major operations in Gujarat, Maharashtra, Rajasthan, Karnataka, and Tamil Nadu. Contact us to discuss your location.'
              }
            ].map((faq, index) => (
              <div class="border border-gray-200 rounded-2xl overflow-hidden">
                <button class="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-bg-light transition-colors faq-toggle">
                  <span class="font-semibold text-primary pr-4">{faq.question}</span>
                  <i class="fas fa-chevron-down text-solar-green transition-transform"></i>
                </button>
                <div class="hidden px-6 pb-6">
                  <p class="text-text-muted leading-relaxed">{faq.answer}</p>
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
            Ready to Start Saving?
          </h2>
          <p class="text-xl text-gray-300 mb-10">
            Take the first step toward energy independence. Our team is ready to help.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-solar-green to-highlight-green text-primary font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
              <i class="fas fa-calculator"></i>
              Try Solar Calculator
            </a>
            <a href="tel:+919558360879" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <i class="fas fa-phone"></i>
              Talk to Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
