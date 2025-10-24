"use strict";

// Получение элементов со страницы

// 1) По id - getElementById
// id уникален и такой элемент будет только один на странице
// <div id="box"></div>
// поэтому нет смысла использовать множественное число - getElement**s**ById
// и нет смысла использовать селектор с # - просто указываем id
const box = document.getElementById("box");
console.log(box);


// 2) По тегу - getElementsByTagName
// возвращает HTML коллекцию (псевдо-массив) всех элементов с данным тегом
// <button></button>
// <button></button>
// поэтому используем множественное число - getElement**s**ByTagName
// и указываем просто тег
// HTML коллекция - это не массив, но у неё есть свойства length и можно обращаться по индексу
// но нет методов массива, таких как forEach
const btns = document.getElementsByTagName("button");

console.log(btns);
console.log(btns[1]);

// 3) По классу - getElementsByClassName
// возвращает HTML коллекцию (псевдо-массив) всех элементов с данным классом
// <div class="circle"></div>
// <div class="circle"></div>
// поэтому используем множественное число - getElement**s**ByClassName
// и указываем просто класс без точки
// HTML коллекция - это не массив, но у неё есть свойства length и можно обращаться по индексу
// но нет методов массива, таких как forEach
const circles = document.getElementsByClassName("circle");

console.log(circles);


// 4) Универсальный метод - querySelector и querySelectorAll
// querySelector возвращает первый найденный элемент по любому CSS селектору
// querySelectorAll возвращает все найденные элементы по любому CSS селектору в виде NodeList (псевдо-массив)
// NodeList - это не массив, но у него есть свойства length и можно обращаться по индексу
// и в отличие от HTML коллекции, у NodeList есть метод forEach
// поэтому используем множественное число для querySelectorAll - querySelector**All**
// и указываем любой CSS селектор
// Например, по классу с точкой в начале 
// <div class="heart"></div>
// <div class="heart"></div>


const hearts = document.querySelectorAll(".heart");

console.log(hearts);

hearts.forEach((item) => {
    console.log(item);
});

// Например, по классу с точкой в начале, но только первый найденный элемент
// <div class="heart"></div>
// <div class="heart"></div>

const oneHeart = document.querySelector(".heart");

console.log(oneHeart);
 