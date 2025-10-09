"use strict";

// Передача по ссылке и по значению, spread оператор (ES6-ES9)
// Примитивные типы данных (числа, строки, булевы значения, null, undefined, символы) передаются по значению.
// Объекты (массивы, функции, объекты) передаются по ссылке.
// Spread оператор (...) позволяет разворачивать массивы и объекты в местах, где ожидаются отдельные элементы или свойства.
// Он полезен для создания копий массивов и объектов, а также для объединения нескольких массивов или объектов.
// Пример с массивами

let a = 5;
let b = a; // Копирование по значению

b = b + 5;

console.log(b); // 10
console.log(a); // 5

const obj = {
    a: 5,
    b: 1,
};

const copy = obj; // Копирование по ссылке

copy.a = 10; // Изменение свойства в копии

console.log(copy); // { a: 10, b: 1 }
console.log(obj); // { a: 10, b: 1 }

// Создание поверхностной копии объекта - это копия первого уровня, вложенные объекты копируются по ссылке
// Для глубокого копирования объектов используются специализированные функции или библиотеки

function copyObject(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 3
    }
}

const newNumbers = copyObject(numbers); // Поверхностная копия объекта
newNumbers.a = 10; // Изменение свойства в копии
newNumbers.c.x = 10; // Изменение вложенного свойства в копии

// Создание поверхностной копии объекта с помощью Object.assign 

console.log(newNumbers); // { a: 10, b: 5, c: { x: 10, y: 3 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 10, y: 3 } }


const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Объединение объектов { a: 2, b: 5, c: { x: 10, y: 3 }, d: 17, e: 20 }
const clone = Object.assign({}, add); // Создание поверхностной копии объекта
clone.d = 20; // Изменение свойства в копии
console.log(add); // { d: 17, e: 20 }
console.log(clone); // { d: 20, e: 20 }


// Создание поверхностной копии массива с помощью slice

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Поверхностная копия массива - метод slice без аргументов 
newArray[1] = 'changed'; // Изменение элемента в копии
console.log(oldArray); // ['a', 'b', 'c']
console.log(newArray); // ['a', 'changed', 'c']

// Создание поверхностной копии массива с помощью spread оператора

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // Объединение массивов с помощью spread оператора
console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']

// Создание поверхностной копии массива с помощью spread оператора

const array = ["a", "b"];
const newArray2 = [...array]; // Поверхностная копия массива
console.log(newArray2); // ['a', 'b']
const q = { one: 1, two: 2 };
const newObj = { ...q }; // Поверхностная копия объекта
console.log(newObj); // { one: 1, two: 2 }  


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num); // Передача элементов массива в функцию с помощью spread оператора

