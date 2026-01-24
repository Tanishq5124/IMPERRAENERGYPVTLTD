// Imperra Energy - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initHeader();
  initMobileMenu();
  initSolarCalculator();
  initContactForm();
  initFAQ();
  initAnimations();
  initSmoothScroll();
});

// Header Scroll Effect
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    
    if (isOpen) {
      menu.classList.add('hidden');
      menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    } else {
      menu.classList.remove('hidden');
      menuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.add('hidden');
      menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
    }
  });
}

// Solar Savings Calculator
function initSolarCalculator() {
  const form = document.getElementById('savings-calculator');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      monthlyBill: formData.get('monthlyBill'),
      propertyType: formData.get('propertyType'),
      city: formData.get('city')
    };

    // Validate inputs
    if (!data.monthlyBill || !data.city) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner mx-auto"></div>';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/api/calculate-savings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        displayResults(result.data);
        showToast('Calculation complete!', 'success');
      } else {
        showToast('Error calculating savings. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Calculator error:', error);
      showToast('Network error. Please try again.', 'error');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Display Calculator Results
function displayResults(data) {
  const resultsDiv = document.getElementById('calculator-results');
  if (!resultsDiv) return;

  // Update values with animation
  animateValue('monthly-savings', 0, data.monthlySavings, '₹');
  animateValue('annual-savings', 0, data.annualSavings, '₹');
  animateValue('system-size', 0, data.systemSizeKW, '', ' kW');
  animateValue('co2-offset', 0, data.annualCO2Offset, '', ' T');

  // Show results section
  resultsDiv.classList.remove('hidden');
  resultsDiv.classList.add('results-enter');

  // Scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Animate Number Values
function animateValue(elementId, start, end, prefix = '', suffix = '') {
  const element = document.getElementById(elementId);
  if (!element) return;

  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(start + (end - start) * easeOutQuart);
    
    element.textContent = prefix + formatNumber(current) + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Format number with Indian numbering system
function formatNumber(num) {
  return num.toLocaleString('en-IN');
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      requirement: formData.get('requirement')
    };

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner mx-auto"></div>';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        // Hide form, show success
        form.classList.add('hidden');
        document.getElementById('form-success').classList.remove('hidden');
        showToast('Request submitted successfully!', 'success');
      } else {
        showToast(result.message || 'Error submitting form. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Form error:', error);
      showToast('Network error. Please try again.', 'error');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Email Validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// FAQ Accordion
function initFAQ() {
  const toggles = document.querySelectorAll('.faq-toggle');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      const isOpen = !content.classList.contains('hidden');

      // Close all other FAQs
      toggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          otherToggle.nextElementSibling.classList.add('hidden');
          otherToggle.querySelector('i').style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Scroll Animations
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate counters
        if (entry.target.classList.contains('counter')) {
          const target = parseInt(entry.target.dataset.target);
          const prefix = entry.target.dataset.prefix || '';
          const suffix = entry.target.dataset.suffix || '';
          animateValue(entry.target.id, 0, target, prefix, suffix);
        }
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll('.counter, .animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Toast Notification
function showToast(message, type = 'info') {
  // Remove existing toasts
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Show toast
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto-hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Property Type Selection
document.querySelectorAll('input[name="propertyType"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('input[name="propertyType"]').forEach(r => {
      const parent = r.closest('label').querySelector('div');
      const icon = parent.querySelector('i');
      
      if (r.checked) {
        parent.classList.add('border-solar-green', 'bg-solar-green/5');
        parent.classList.remove('border-gray-200');
        icon.classList.add('text-solar-green');
        icon.classList.remove('text-text-muted');
      } else {
        parent.classList.remove('border-solar-green', 'bg-solar-green/5');
        parent.classList.add('border-gray-200');
        icon.classList.remove('text-solar-green');
        icon.classList.add('text-text-muted');
      }
    });
  });
});

// Card Glow Effect on Mouse Move
document.querySelectorAll('.card-glow').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    const speed = el.dataset.speed || 0.5;
    const yPos = -(window.pageYOffset * speed);
    el.style.setProperty('--parallax-y', yPos + 'px');
  });
});

// Console Easter Egg
console.log(
  '%c⚡ Imperra Energy',
  'font-size: 24px; font-weight: bold; color: #9CD44D; text-shadow: 2px 2px #0B2A45;'
);
console.log(
  '%cEngineering Tomorrow\'s Energy Today',
  'font-size: 14px; color: #0B2A45;'
);
