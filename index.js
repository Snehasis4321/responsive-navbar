const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navLinks = document.getElementsByClassName("navbar-link");

mobile_nav.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("active");
});

// add click event on navLinks
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("active");
  });
}
