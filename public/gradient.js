document.addEventListener("mousemove", function (e) {
  const { pageY, pageX } = e;

  const root = document.querySelector(":root");

  root.style.setProperty("--gradient-x", `${pageX}px`);
  root.style.setProperty("--gradient-y", `${pageY}px`);
});
