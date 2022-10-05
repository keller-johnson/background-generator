var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function colorPicker() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomColors() {
  var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background =
    "linear-gradient(to right, " +
    "#" +
    randomColor1 +
    ", " +
    "#" +
    randomColor2 +
    ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);
random.addEventListener("click", randomColors);

// lets figure out a way to change in the input colors when we click the random BG colors
