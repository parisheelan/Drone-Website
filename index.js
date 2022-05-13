//Dark Mode Toggle

const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Dark Mode that changes according to device preference

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark");
}
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  body.classList.remove("dark");
}

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
