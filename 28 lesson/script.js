// Lesson 27 Оператор нулевого слияния (Nullish, ??) ES11)
// нулевой оператор (??) возвращает правый операнд, когда левый операнд равен null или undefined, иначе возвращает левый операнд.

"use strict";

const box = document.querySelector(".box");

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`; // если h равен null или undefined, то будет 200
    elem.style.width = `${w ?? 200}px`; // если w равен null или undefined, то будет 200
    elem.innerHTML = (h ?? 200) * (w ?? 200); // если h или w равен null или undefined, то будет 200
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? "User");
console.log(userName || userKey || "User");
