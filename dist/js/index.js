let hamburger = document.querySelector(".hamburger");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerCloser = document.querySelector(".hamburger-closer");
let menuLinks = document.querySelectorAll(".hamburger__item");

hamburger.addEventListener("click", function () {
  hamburgerMenu.classList.add("hamburger-menu__active");
});

hamburgerCloser.addEventListener("click", function () {
  hamburgerMenu.classList.remove("hamburger-menu__active");
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerMenu.classList.remove("hamburger-menu__active");
  });
});
