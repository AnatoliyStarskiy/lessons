"use strict";

// Типы данных

// Простые типы

let number = 1; // Числа 1,2, 3
let string = "String"; // Строки "string", "Name"
let boolean = true; // Логический тип (boolean)
let nullValue = null; // Значение null
let undefinedValue; // Значение undefined
let symbolValue = Symbol("description"); // Символы
let bigintValue = 1234567890123456789012345678901234567890n; // Большие целые числа

// Объекты

// Специальные типы объектов
let object = { key: "value" }; // Обычный объект
let array = [1, 2, 3]; // Массив
let date = new Date(); // Дата
let regex = /ab+c/; // Регулярное выражение
let functionExample = function () {}; // Функция
let errorExample = new Error("Ошибка"); // Ошибка

// Обычные объекты

let user = {
    name: "John",
    age: 30,
};
let arr = [1, 2, 3, 4, 5];

// Числа

let numberExample = 1;

console.log(numberExample);
console.log(-4/0); // Infinity
console.log("string" * 9); // NaN


// Строки

let stringExample = "Hello, world!";
console.log(stringExample);


// Булевый тип
let booleanExample = true;
console.log(booleanExample);

// Булевый тип
let booleanExample2 = false;
console.log(booleanExample2);

// Null
let nullValue = null;
console.log(nullValue);

// Undefined
let undefinedValue;
console.log(undefinedValue);

// Symbol
let symbolValue = Symbol("description"); // Символ
console.log(symbolValue); // Symbol(description)

// BigInt
let bigintValue = 1234567890123456789012345678901234567890n;
console.log(bigintValue); // 1234567890123456789012345678901234567890n

// Массив
let arrayExample = [1, 2, 3]; // Массив чисел. Ключи - индексы
console.log(arrayExample); // [1, 2, 3]

// Объект
let objectExample = { key: "value" }; // Ключ-значение. 
console.log(objectExample); // { key: "value" }

const objPerson = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(objPerson);
console.log(objPerson.name); // John
console.log(objPerson.age); // 30
console.log(objPerson.isStudent); // false
console.log(objPerson["name"]); // John
console.log(objPerson["age"]); // 30
console.log(objPerson["isStudent"]); // false


// Разница между объектом и массивом
// Объект - это набор пар "ключ-значение"
// Массив - это упорядоченный набор значений, доступ к которым осуществляется по индексу 


const arrExample = [10, 20, 30];
const arrObject = {
    0: 10,
    1: 20,
    2: 30
};

console.log(arrExample[0]); // 10
console.log(arrObject[0]); // 10

console.log(arrExample.length); // 3
console.log(Object.keys(arrObject).length); // 3
console.log(arrObject.length); // undefined


arrObject.b = 40; // Добавление нового свойства в объект
console.log(arrObject); // { '0': 10, '1': 20, '2': 30, b: 40 }
console.log(arrExample); // [10, 20, 30]

arrExample.push(40); // Добавление нового элемента в массив
arrObject['c'] = 70;

console.log(arrExample); // [10, 20, 30, 40]
console.log(arrObject); // { '0': 10, '1': 20, '2': 30, b: 40, c: 70 }