"use strict";

// Callback-функции
// Callback - это функция, которая передается в другую функцию в качестве аргумента и вызывается внутри этой функции.
// Callback-функции позволяют создавать более гибкий и переиспользуемый код.

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 1000);
}

fetchData((user) => {
    console.log("User data received:", user);
});
// В этом примере функция fetchData имитирует асинхронную операцию (например, запрос к серверу) и вызывает переданную callback-функцию с полученными данными после задержки в 1 секунду.

// Пример с обработкой событий
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log("Button was clicked!");
});

// В этом примере мы создаем кнопку и добавляем обработчик события 'click', который является callback-функцией, вызываемой при клике на кнопку.

// Callback-функции широко используются в JavaScript, особенно в асинхронном программировании, для обработки результатов операций, таких как запросы к серверу, таймеры и события пользовательского интерфейса.

function first() {
    // Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    // Do something
    console.log(2);
}

function third() {
    // Do something
    setTimeout(function () {
        console.log(3);
    }, 1500);
}

first();
second();
third();

// Callback-функция - это функция которая должна быть выполнена после того как другая функция завершит своё выполнение

// Например, у нас есть функция learnJS которая принимает язык и функцию callback
// После того как learnJS выполнит console.log с языком, она вызовет функцию callback
function learnJS(lang, callback) { // function learnJS принимает два аргумента: lang и callback
    console.log(`Я учу: ${lang}`); // выводит в консоль строку с языком
    callback(); // вызывает функцию callback
}
// Мы вызываем функцию learnJS и передаем ей язык "JavaScript" и анонимную функцию которая выведет в консоль "Я прошёл этот урок!"
learnJS("JavaScript", function () { // анонимная функция
    console.log("Я прошёл этот урок!"); // выводит в консоль строку
});
// Мы также можем создать именованную функцию и передать её в качестве callback
function done() {
    console.log("Я прошёл этот урок!"); // выводит в консоль строку
}
learnJS("Java", done); // передаём функцию done в качестве callback

// Callback-функции позволяют нам создавать более гибкий и переиспользуемый код, так как мы можем передавать разные функции в качестве аргументов и изменять поведение функции learnJS без изменения её кода.