"use strict";

// 24 lesson - Навигация по DOM дереву - элементам, data-атрибуты, преимущества for...of

/* const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay"); */

/* btn.addEventListener("click", () => {
    console.log(btn);
    console.log(overlay);
}); */

// Пример использования data-атрибутов
/* const dataAttr = btn.dataset;
console.log(dataAttr); */

console.log(document.head);
console.log(document.body);

console.log(document.documentElement);

console.log(document.body.childNodes);

console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector("#current"));
console.log(document.querySelector("#current").parentNode);
console.log(document.querySelector("#current").parentNode.parentNode);

console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(
    document.querySelector('[data-current="3"]').previousElementSibling
);

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}
