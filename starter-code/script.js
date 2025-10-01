const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const faqItems = document.querySelectorAll(".faq-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // treure actius
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // afegir actiu
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
