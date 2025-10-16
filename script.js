const tabs = document.querySelectorAll(".tab");
const featuresSection = document.querySelector(".features");
const contents = document.querySelectorAll(".content");
const faqItems = document.querySelectorAll(".faq-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("active", "text-black", "md:text-black");
      t.classList.add("text-gray-500");
      // ocultar la línia inferior si la tens
    });
    contents.forEach(c => {
      c.classList.add("hidden");
      c.classList.remove("flex", "active");
    });

    // activant el tab clicat
    tab.classList.add("active", "text-black", "md:text-black");
    tab.classList.remove("text-gray-500");
    const targetId = tab.dataset.target;
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.remove("hidden");
      targetContent.classList.add("flex", "active");
    }

    // si vols afegir clases al section per estil decoratiu (per exemple aplicacions condicionals)
    featuresSection.classList.remove("tab-bookmarking", "tab-searching", "tab-sharing");
    featuresSection.classList.add(`tab-${targetId}`);
  });
});

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const arrow = item.querySelector('.arrow');

  question.addEventListener('click', () => {
    const isActive = item.classList.toggle('active');

    if (isActive) {
      answer.classList.remove('hidden');
      answer.classList.add('block');
      arrow.style.transform = 'rotate(180deg)';
      arrow.style.filter = 'invert(23%) sepia(90%) saturate(7490%) hue-rotate(357deg) brightness(92%) contrast(126%)';
    } else {
      answer.classList.remove('block');
      answer.classList.add('hidden');
      arrow.style.transform = 'rotate(0deg)';
      arrow.style.filter = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  if (menuOpenIcon && mobileNavMenu) {
    menuOpenIcon.addEventListener('click', function() {
      mobileNavMenu.classList.remove('hidden');
      mobileNavMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  }
  if (menuCloseIcon && mobileNavMenu) {
    menuCloseIcon.addEventListener('click', function() {
      mobileNavMenu.classList.remove('flex');
      mobileNavMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
});

// Newsletter form validation
const newsletterForm = document.querySelector('.newsletter form');
const emailInput = newsletterForm.querySelector('input[type="email"]');
const inputWrapper = newsletterForm.querySelector('.input-wrapper');

newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
 
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  removeError();
 
  if (!emailRegex.test(email)) {
    showError();
  } else {
    console.log('Email valid:', email);
  }
});

function showError() {
  inputWrapper.classList.add('error');
 
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-message';
  errorMsg.textContent = "Whoops, make sure it's an email";
 
  emailInput.style.backgroundImage = "url('images/icon-error.svg')";
  emailInput.style.backgroundRepeat = "no-repeat";
  emailInput.style.backgroundPosition = "right 1rem center";
  emailInput.style.backgroundSize = "1.2rem";

  inputWrapper.appendChild(errorMsg);
}

function removeError() {
  inputWrapper.classList.remove('error');
  emailInput.style.backgroundImage = "none";
  const existingError = inputWrapper.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
}