let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector(".random");

colorPicker = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
};

randomColors = () => {
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  body.style.background =
    "linear-gradient(to right, " +
    "#" +
    randomColor1 +
    ", " +
    "#" +
    randomColor2 +
    ")";

  css.textContent = body.style.background + ";";

  //replace color1 and color2 with randomColor1 & 2;
  let changeColor1 = document.querySelector(".color1");
  let changeColor2 = document.querySelector(".color2");
  changeColor1.setAttribute("value", `#${randomColor1}`);
  changeColor2.setAttribute("value", `#${randomColor2}`);
};

color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);
random.addEventListener("click", randomColors);

// lets figure out a way to change in the input colors when we click the random BG colors
