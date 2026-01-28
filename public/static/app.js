// Imperra Energy - Main JavaScript
// Contact: +91 9558360879 | imperraenergypvtltd@gmail.com

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initMobileMenu();
  initSolarCalculator();
  initContactForm();
  initFAQ();
  initAnimations();
  initSmoothScroll();
  initClickablePhones();
  initLazyLoading();
});

// Header Scroll Effect
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
        
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Mobile Menu Toggle - Improved for touch devices
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (!menuBtn || !menu) return;

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    
    if (isOpen) {
      menu.classList.remove('hidden');
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      menu.style.maxHeight = '0';
      setTimeout(() => {
        if (!isOpen) menu.classList.add('hidden');
      }, 300);
      menuBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
      toggleMenu();
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleMenu();
    }
  });
}

// Solar Savings Calculator with improved validation and error handling
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
    const billAmount = parseFloat(data.monthlyBill);
    if (!data.monthlyBill || isNaN(billAmount) || billAmount <= 0) {
      showToast('Please enter a valid monthly electricity bill amount', 'error');
      return;
    }

    if (billAmount < 1000) {
      showToast('Monthly bill should be at least ₹1,000 for accurate estimation', 'error');
      return;
    }

    if (!data.city) {
      showToast('Please select your city', 'error');
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

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        displayResults(result.data);
        showToast('Calculation complete! See your estimated savings below.', 'success');
      } else {
        throw new Error(result.message || 'Calculation failed');
      }
    } catch (error) {
      console.error('Calculator error:', error);
      showToast('Unable to calculate savings. Please try again or call us at +91 9558360879', 'error');
      
      // Show fallback results based on rough estimation
      const fallbackData = calculateFallback(data);
      displayResults(fallbackData);
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Fallback calculation if API fails
function calculateFallback(data) {
  const billAmount = parseFloat(data.monthlyBill) || 50000;
  const savingsPercent = data.propertyType === 'industrial' ? 0.60 : 0.55;
  const monthlySavings = Math.round(billAmount * savingsPercent);
  const estimatedUnits = billAmount / 7;
  const systemSizeKW = Math.max(Math.round(estimatedUnits / 120), 5);
  
  return {
    monthlySavings,
    annualSavings: monthlySavings * 12,
    fiveYearSavings: monthlySavings * 60,
    savingsPercent: Math.round(savingsPercent * 100),
    systemSizeKW,
    annualCO2Offset: Math.max(Math.round(systemSizeKW * 1.2), 1),
    paybackYears: 4.5,
    isEstimate: true
  };
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

  // Add estimate notice if using fallback
  if (data.isEstimate) {
    const notice = resultsDiv.querySelector('.estimate-notice');
    if (!notice) {
      const noticeEl = document.createElement('p');
      noticeEl.className = 'estimate-notice text-xs text-center text-orange-600 mt-4';
      noticeEl.textContent = '* Estimated values. Contact us for accurate assessment.';
      resultsDiv.appendChild(noticeEl);
    }
  }

  // Scroll to results
  setTimeout(() => {
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
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

// Contact Form with comprehensive validation
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Add real-time validation
  const phoneInput = form.querySelector('input[name="phone"]');
  const emailInput = form.querySelector('input[name="email"]');
  const nameInput = form.querySelector('input[name="name"]');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      // Allow only numbers, spaces, and + for phone
      e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', (e) => {
      if (e.target.value && !isValidEmail(e.target.value)) {
        e.target.classList.add('border-red-500');
        showFieldError(e.target, 'Please enter a valid email address');
      } else {
        e.target.classList.remove('border-red-500');
        hideFieldError(e.target);
      }
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString().trim(),
      company: formData.get('company')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      service: formData.get('service'),
      requirement: formData.get('requirement')?.toString().trim()
    };

    // Comprehensive validation
    const errors = [];

    if (!data.name || data.name.length < 2) {
      errors.push('Please enter your full name');
    }

    if (!data.email || !isValidEmail(data.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!data.phone || !isValidPhone(data.phone)) {
      errors.push('Please enter a valid 10-digit phone number');
    }

    if (errors.length > 0) {
      showToast(errors[0], 'error');
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
        const successDiv = document.getElementById('form-success');
        if (successDiv) {
          successDiv.classList.remove('hidden');
        }
        showToast('Thank you! We will contact you within 24 hours.', 'success');
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      showToast('Unable to submit form. Please call us at +91 9558360879', 'error');
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Validation helpers
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  // Indian phone numbers should have 10 digits (or 12 with country code)
  return digits.length >= 10 && digits.length <= 12;
}

function showFieldError(element, message) {
  let errorEl = element.parentElement.querySelector('.field-error');
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'field-error text-xs text-red-500 mt-1';
    element.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function hideFieldError(element) {
  const errorEl = element.parentElement.querySelector('.field-error');
  if (errorEl) errorEl.remove();
}

// FAQ Accordion
function initFAQ() {
  const toggles = document.querySelectorAll('.faq-toggle');
  
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i, svg');
      const isOpen = !content.classList.contains('hidden');

      // Close all other FAQs
      toggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherContent = otherToggle.nextElementSibling;
          const otherIcon = otherToggle.querySelector('i, svg');
          otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// Scroll Animations with Intersection Observer
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

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

// Make all phone numbers clickable on mobile
function initClickablePhones() {
  // Find all text nodes that contain phone numbers
  const phoneRegex = /(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/g;
  
  document.querySelectorAll('p, span, div, td, li').forEach(el => {
    if (el.children.length === 0 && el.textContent.match(phoneRegex)) {
      const text = el.textContent;
      const matches = text.match(phoneRegex);
      if (matches) {
        let html = text;
        matches.forEach(match => {
          const cleanNumber = match.replace(/[\s-]/g, '');
          html = html.replace(match, `<a href="tel:${cleanNumber}" class="text-solar-green hover:underline">${match}</a>`);
        });
        el.innerHTML = html;
      }
    }
  });
}

// Lazy loading for images
function initLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.loading = 'lazy';
    });
  } else if ('IntersectionObserver' in window) {
    // Fallback to Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
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
  toast.className = `toast ${type} fixed bottom-20 lg:bottom-6 right-4 left-4 lg:left-auto lg:max-w-md p-4 rounded-xl shadow-2xl z-[60] transform translate-y-full opacity-0 transition-all duration-300`;
  
  const bgColor = type === 'success' ? 'bg-solar-green text-primary' : 
                  type === 'error' ? 'bg-red-500 text-white' : 
                  'bg-primary text-white';
  
  toast.classList.add(...bgColor.split(' '));
  
  const iconSvg = type === 'success' 
    ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
    : type === 'error'
    ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>'
    : '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
  
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      ${iconSvg}
      <span class="font-medium">${message}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Show toast
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-full', 'opacity-0');
  });

  // Auto-hide after 4 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Property Type Selection styling
document.querySelectorAll('input[name="propertyType"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('input[name="propertyType"]').forEach(r => {
      const parent = r.closest('label').querySelector('div');
      if (!parent) return;
      
      if (r.checked) {
        parent.classList.add('border-solar-green', 'bg-solar-green/5');
        parent.classList.remove('border-gray-200');
      } else {
        parent.classList.remove('border-solar-green', 'bg-solar-green/5');
        parent.classList.add('border-gray-200');
      }
    });
  });
});

// Console branding
console.log(
  '%c⚡ Imperra Energy',
  'font-size: 24px; font-weight: bold; color: #9CD44D; text-shadow: 2px 2px #0B2A45;'
);
console.log(
  '%cEngineering Tomorrow\'s Energy Today\n📞 +91 9558360879 | 📧 imperraenergypvtltd@gmail.com',
  'font-size: 12px; color: #0B2A45;'
);
