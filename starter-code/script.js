const tabs = document.querySelectorAll(".tab");
const featuresSection = document.querySelector(".features");
const contents = document.querySelectorAll(".content");
const faqItems = document.querySelectorAll(".faq-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    const targetId = tab.dataset.target;
    document.getElementById(targetId).classList.add("active");

    featuresSection.classList.remove("tab-bookmarking", "tab-searching", "tab-sharing");
    featuresSection.classList.add(`tab-${targetId}`);
  });
});

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const mobileNav = document.getElementById('mobileNav');
  const closeNav = document.getElementById('closeNav');
  const logo = document.querySelector('.logo');

  menuIcon.addEventListener('click', function() {
    mobileNav.classList.add('active');
    menuIcon.classList.add('hide');
    logo.classList.add('hide'); 
    document.body.style.overflow = 'hidden';
  });

  closeNav.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    menuIcon.classList.remove('hide');
    logo.classList.remove('hide');
    document.body.style.overflow = '';
  });
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
  
  // Create error message
  const errorMsg = document.createElement('div');
  errorMsg.className = 'error-message';
  errorMsg.textContent = 'Whoops, make sure it\'s an email';

  emailInput.style.backgroundImage = "url('images/icon-error.svg')";
  
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