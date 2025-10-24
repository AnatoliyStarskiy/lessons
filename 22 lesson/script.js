"use strict";

// Получение элементов со страницы
// 1) По id - getElementById
// 2) По тегу - getElementsByTagName
// 3) По классу - getElementsByClassName
// 4) Универсальный метод - querySelector и querySelectorAll

const box = document.getElementById("box"), // по id
    btns = document.getElementsByTagName("button"), // по тегу
    circles = document.getElementsByClassName("circle"), // по классу
    wrapper = document.querySelector(".wrapper"), // по любому селектору - первый элемент
    hearts = wrapper.querySelectorAll(".heart"), // по любому селектору - все элементы
    oneHeart = wrapper.querySelector(".heart"); // по любому селектору - первый элемент

console.dir(box);

// Изменение стилей элементов
// через свойство style
// можно изменять только отдельные стили, которые пишутся в camelCase
// нельзя сразу задать несколько стилей, как в CSS файле
// для этого есть свойство cssText
// для множественных элементов нужно использовать циклы
// HTML коллекция - нельзя использовать forEach
// NodeList - можно использовать forEach

box.style.backgroundColor = "blue"; // camelCase вместо background-color
box.style.width = "500px"; // обязательно указывать единицы измерения

box.style.cssText = "background-color: blue; width: 500px"; // можно сразу несколько стилей

btns[1].style.borderRadius = "100%"; // второй кнопке делаем круглую форму

// для HTML коллекции используем классический цикл for
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "red";
}
// для NodeList можно использовать forEach
circles.forEach((item) => {
    item.style.color = "green";
});

// для NodeList можно использовать классический цикл for
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "green";
}

// для NodeList можно использовать forEach

hearts.forEach((item) => {
    item.style.backgroundColor = "green";
});

// Создание, добавление, удаление и замена элементов

const div = document.createElement("div"); // создаём новый элемент в памяти
const div2 = document.createElement("div"); // создаём новый элемент в памяти

// Добавление класса новому элементу

const text = document.createTextNode("Тут был я"); // старый способ создания текста

div.classList.add("black"); // добавляем класс новому элементу

// Добавление нового элемента на страницу

document.body.append(div); // добавляем в конец body

wrapper.append(div); // добавляем в конец wrapper - современный вариант
wrapper.appendChild(div); // устаревший вариант - добавляем в конец wrapper

wrapper.prepend(div2); // добавляем в начало wrapper - современный вариант
wrapper.insertBefore(div2, hearts[0]); // устаревший вариант - добавляем в начало wrapper

hearts[0].before(div); // вставляем перед первым элементом - современный вариант

/* wrapper.insertBefore(div, hearts[0]); */ // устаревший вариант

hearts[0].after(div); // вставляем после первого элемента - современный вариант

wrapper.insertBefore(div, hearts[1]); // устаревший вариант - вставляем перед вторым элементом

// Удаление элемента со страницы

circles[0].remove(); // современный вариант
wrapper.removeChild(hearts[1]); // устаревший вариант

hearts[0].replaceWith(circles[0]); // современный вариант
wrapper.replaceChild(circles[0], hearts[0]); // устаревший вариант

// Добавление содержимого в элемент

wrapper.append(div); // добавляем в конец wrapper
div.innerHTML = `<h1>Hello world</h1>`; // можно добавлять HTML разметку
div.textContent = "Hello world"; // добавляет только текстовое содержимое


div.textContent = "hello"; // добавляет только текстовое содержимое

// Вставка HTML разметки относительно элемента

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // перед div

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // в начало div
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // после div
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // в конец div   

// Вставка других элементов относительно элемента

div.insertAdjacentElement("beforebegin", hearts[0]); // перед div
div.insertAdjacentElement("afterend", hearts[0]); // после div
div.insertAdjacentElement("afterbegin", hearts[0]); // в начало div
div.insertAdjacentElement("beforeend", hearts[0]); // в конец div   
