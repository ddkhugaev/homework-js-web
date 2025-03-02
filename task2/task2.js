let form = document.querySelector("#form");
let spisok = document.querySelector("#spisok");

form.onsubmit = function (evt) {
    evt.preventDefault();

    let newLi = document.createElement("li")
    let text = document.querySelector("#text");
    newLi.textContent = text.value;
    spisok.append(newLi)
    text.value = "";
}