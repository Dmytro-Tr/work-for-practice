const btn = document.querySelector(".ripple-hover-button");

btn.addEventListener("mouseover", (evt) => {
  const x = evt.pageX - btn.offsetLeft;
  const y = evt.pageY - btn.offsetTop;

  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
});
