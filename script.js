const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
const btn = document.getElementById("btn-cv");
const cvSection = document.getElementById("cv-section");

btn.addEventListener("click", () => {
    cvSection.classList.toggle("cv-hidden");
});
window.addEventListener("load", function () {
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});