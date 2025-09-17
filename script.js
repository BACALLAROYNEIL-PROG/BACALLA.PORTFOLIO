// ====== NAVBAR ACTIVE ON SCROLL ======
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

// ====== TYPING EFFECT ======
const typingText = document.querySelector(".typing-text");
const words = ["Web Developer", "Programmer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex++;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 150);
}
typeEffect();

// ====== HAMBURGER MENU ======
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.onclick = () => {
  navbar.classList.toggle("active");
};
// ====== SCROLL REVEAL ANIMATIONS ======
function revealOnScroll() {
  const reveals = document.querySelectorAll("section, .card, .experience-box, .contact-box, .home-img img");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load
