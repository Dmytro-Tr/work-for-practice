let buttons = document.querySelectorAll(".ripple-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (evt) {
    let x = evt.pageX;
    let y = evt.pageY;

    let buttonTop = evt.target.offsetTop;
    let buttonLeft = evt.target.offsetLeft;

    let xInside = x - buttonLeft;
    let yInside = y - buttonTop;

    let circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 1000);
  });
});
