var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

color1.value = "#FF0000"
color2.value = "#FFFF00"
css.textContent = "linear-gradient(to right, red, yellow);";

function getRandom() {
    let rand1 = Math.floor(Math.random()*16777215).toString(16);
    let rand2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = 
    "linear-gradient(to right, " 
    + "#" + rand1 + ", " 
    + "#" + rand2 
    + ")";
    color1.value = "#" + rand1;
    color2.value = "#" + rand2;
    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

random.addEventListener("click", getRandom)

