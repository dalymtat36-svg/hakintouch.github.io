function toggleMenu() {
const nav = document.querySelector(".navbar nav");
nav.classList.toggle("active");
}

document.querySelectorAll(".navbar nav a").forEach(link => {
link.addEventListener("click", () => {
document.querySelector(".navbar nav").classList.remove("active");
});
});
