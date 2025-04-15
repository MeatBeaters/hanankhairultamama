document.querySelector('.header-button').addEventListener('click', function myFunction() {
document.querySelector('.header-link').classList.toggle('show');
document.querySelector('.header-button').classList.toggle('rotate');
});

let lastScroll = window.scrollY;
const navbar = document.getElementById("header-container-whole");

window.addEventListener("scroll", () => {
const currentScroll = window.scrollY;

if (currentScroll > lastScroll) {
navbar.classList.add("hide");
} else {
navbar.classList.remove("hide");
}
lastScroll = currentScroll;
});
