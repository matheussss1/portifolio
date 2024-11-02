const root = document.querySelector(":root");
root.style.setProperty("--gradient-y", `${window.scrollY + 150}px`);
document.addEventListener("scroll", function (e) {
  root.style.setProperty("--gradient-y", `${window.scrollY + 150}px`);
});
