const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu on link click
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animations for header
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", scrollRevealOption);
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container form", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__container a", { ...scrollRevealOption, delay: 1500 });

// Swiper configuration
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Fly-in animation for choose cards and image
const chooseCards = document.querySelectorAll(".choose__card");
const chooseImage = document.querySelector(".choose__image");

const chooseObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.9 });

chooseCards.forEach((card) => chooseObserver.observe(card));
if (chooseImage) chooseObserver.observe(chooseImage);

// Fly-in animation for modern elements
const modernElements = document.querySelectorAll(
  ".modern__img-1, .modern__img-2, .modern__img-3, .section__header, .section__subheader, .modern__card, .btn"
);

const modernObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fly-in");
    }
  });
}, { threshold: 0.2 });

modernElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.2}s`;
  modernObserver.observe(el);
});

// 🔹 Fly-in animation for team cards
const teamCards = document.querySelectorAll('.team__card');

const teamObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add("fly-in"); // optional: use class instead
      teamObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

teamCards.forEach(card => {
  card.style.animationPlayState = 'paused'; // Initially paused
  teamObserver.observe(card);
});
