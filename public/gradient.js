document.addEventListener("mousemove", function (e) {
  const { clientX, clientY } = e;

  const root = document.querySelector(":root");

  root.style.setProperty("--gradient-x", `${clientX}px`);
  root.style.setProperty("--gradient-y", `${clientY}px`);
});
