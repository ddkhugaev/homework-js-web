// не знаю как сделать проверку ввведенного цвета
let form = document.querySelector("#form");
let color = document.querySelector("#color");
let body = document.querySelector("body");

form.onsubmit = function (evt) {
    evt.preventDefault();

    body.style.backgroundColor = color.value;
    console.log("new color")
}