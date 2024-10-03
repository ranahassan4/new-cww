window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function () {
  const navLinks = document.querySelectorAll(".menu a");
  navLinks.forEach((link) => {
    link.style.color = "rgb(222, 63, 143)"; // New color on hover (spring green)
  });
});

nav.addEventListener("mouseleave", function () {
  const navLinks = document.querySelectorAll(".menu a");
  navLinks.forEach((link) => {
    link.style.color = "white"; // New color on hover (spring green)
  });
});
