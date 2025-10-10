"use strict";

// Динамическая типизация в JavaScript
// https://learn.javascript.ru/types-conversion

// Типы данных в JavaScript:
// 1. Примитивные типы / Простые типы:
//    - Number (числа) - это числа с плавающей точкой (целые и дробные)
//    - String (строки) - это последовательность символов
//    - Boolean (булевый тип) - это логический тип (true/false)
//    - Null (отсутствие значения) - это специальное значение, обозначающее отсутствие какого-либо объекта
//    - Undefined (неопределенное значение) - это значение, которое присваивается переменной, которая была объявлена, но не инициализирована
//    - Symbol (уникальный идентификатор) - это уникальный и неизменяемый примитивный тип, используемый для создания уникальных идентификаторов
//    - BigInt (большие целые числа) - это тип данных для представления целых чисел произвольной длины

// Примеры примитивных типов
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let nul = null; // Null
let undef; // Undefined
let sym = Symbol("id"); // Symbol
let bigInt = 9007199254741991n; // BigInt

// 2. Объектные типы / Сложные типы:
// Специальные объекты:
//    - Object (объекты) - это коллекция свойств и методов
//    - Array (массивы) - это упорядоченная коллекция значений
//    - Function (функции) - это объекты, которые можно вызывать
//    - Date (даты) - это объекты для работы с датами и временем
//    - RegExp (регулярные выражения) - это объекты для работы с шаблонами строк
// Обычные объекты:
//    - Map (карты) - это коллекция ключ-значение
//    - Set (множества) - это коллекция уникальных значений
//    - WeakMap (слабые карты) - это коллекция ключ-значение с слабыми ссылками
//    - WeakSet (слабые множества) - это коллекция уникальных значений с слабыми ссылками
// Ошибки:
//    - Error (ошибки) - это объекты для представления ошибок

// Примеры объектных типов
let obj = { name: "John", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function () {
    console.log("Hello!");
}; // Function
let date = new Date(); // Date
let regex = /ab+c/; // RegExp
let map = new Map(); // Map
let set = new Set(); // Set
let weakMap = new WeakMap(); // WeakMap
let weakSet = new WeakSet(); // WeakSet
let error = new Error("Something went wrong!"); // Error

// 3. Функциональные типы:
//    - Function (функции)
//    - AsyncFunction (асинхронные функции)
//    - GeneratorFunction (генераторные функции)
//    - AsyncGeneratorFunction (асинхронные генераторные функции)

// Динамическая типизация
// В JavaScript переменные не привязаны к определенному типу данных. Тип данных переменной может изменяться во время выполнения программы.

// to String
//  1) Явное преобразование к строке
// Для явного преобразования значения к строке можно использовать функцию String() или метод toString().
console.log(String(123)); // "123" - число становится строкой "123"
console.log(String(true)); // "true" - булевое значение true становится строкой "true"
console.log(String(false)); // "false" - булевое значение false становится строкой "false"
console.log(String(undefined)); // "undefined" - undefined становится строкой "undefined"//
console.log(String(null)); // "null" - null становится строкой "null"
console.log(String([1, 2])); // "1,2" - массив становится строкой "1,2"
console.log(String({ a: 1 })); // "[object Object]" - объект становится строкой "[object Object]"
console.log(String(function () {})); // "function() {}" - функция становится строкой "function() {}"
console.log((123).toString()); // "123" - число становится строкой "123"
console.log(true.toString()); // "true" - булевое значение true становится строкой "true"
console.log(false.toString()); // "false" - булевое значение false становится строкой "false"
// console.log((undefined).toString()); // Ошибка - нельзя вызвать метод toString() у undefined
// console.log((null).toString());      // Ошибка - нельзя вызвать метод toString() у null
console.log([1, 2].toString()); // "1,2" - массив становится строкой "1,2"
console.log({ a: 1 }.toString()); // "[object Object]" - объект становится строкой "[object Object]"
console.log(function () {}.toString()); // "function() {}" - функция становится строкой "function() {}"

// 2) Контатенация с пустой строкой
// Сложение с пустой строкой ('') приводит к преобразованию значения в строку.
console.log(123 + ""); // "123" - число становится строкой "123"
console.log(true + ""); // "true" - булевое значение true становится строкой "true"
console.log(false + ""); // "false" - булевое значение false становится строкой "false"
console.log(undefined + ""); // "undefined" - undefined становится строкой "undefined"
console.log(null + ""); // "null" - null становится строкой "null"
console.log([1, 2] + ""); // "1,2" - массив становится строкой "1,2"
console.log({ a: 1 } + ""); // "[object Object]" - объект становится строкой "[object Object]"
console.log(function () {} + ""); // "function() {}" - функция становится строкой "function() {}"

const number = 5;
console.log("http://vk.com/id" + number); // "http://vk.com/id5" - конкатенация строки и числа

const user = "Ivan";
console.log(`Hello, ${user}!`); // "Hello, Ivan!" - использование шаблонных строк

const fontSize = 26 + "px";
console.log(fontSize); // "26px" - число становится строкой "26px"

// to Number
// 1) Явное преобразование к числу
// Для явного преобразования значения к числу можно использовать функцию Number() или унарный плюс (+).
console.log(Number("123")); // 123 - строка "123" становится числом 123
console.log(Number(true)); // 1 - булевое значение true становится числом 1
console.log(Number(false)); // 0 - булевое значение false становится числом 0
console.log(Number(undefined)); // NaN - undefined становится NaN
console.log(Number(null)); // 0 - null становится числом 0
console.log(Number([1, 2])); // NaN - массив становится NaN
console.log(Number({ a: 1 })); // NaN - объект становится NaN
console.log(Number(function () {})); // NaN - функция становится NaN
console.log(+"123"); // 123 - строка "123" становится числом 123
console.log(+true); // 1 - булевое значение true становится числом 1
console.log(+false); // 0 - булевое значение false становится числом 0
// console.log(+undefined);        // Ошибка - нельзя вызвать метод toString() у undefined
// console.log(+null);             // Ошибка - нельзя вызвать метод toString() у null
console.log([1, 2] + ""); // "1,2" - массив становится строкой "1,2"
console.log({ a: 1 }.toString()); // "[object Object]" - объект становится строкой "[object Object]"
console.log(function () {}.toString()); // "function() {}" - функция становится строкой "function() {}"

// 2) Математические операции
// Математические операции (кроме сложения) приводят к преобразованию операндов к числам.
console.log("6" / "2"); // 3 - строки "6" и "2" становятся числами 6 и 2, результат 3
console.log("6" * "2"); // 12 - строки "6" и "2" становятся числами 6 и 2, результат 12
console.log("6" - "2"); // 4 - строки "6" и "2" становятся числами 6 и 2, результат 4
console.log("6" - 2); // 4 - строка "6" становится числом 6, результат 4
console.log("6" * 2); // 12 - строка "6" становится числом 6, результат 12
console.log("6" / 2); // 3 - строка "6" становится числом 6, результат 3
console.log("6" / 0); // Infinity - строка "6" становится числом 6, результат Infinity
console.log("6" / -0); // -Infinity - строка "6" становится числом 6, результат -Infinity
console.log("6" / "a"); // NaN - строка "6" становится числом 6, строка "a" становится NaN, результат NaN

// 3) Преобразование с помощью parseInt и parseFloat

console.log(parseInt("123", 10)); // 123 - строка "123" становится числом 123
console.log(parseFloat("123.45")); // 123.45 - строка "123.45" становится числом 123.45
console.log(parseInt("123abc", 10)); // 123 - строка "123abc" становится числом 123
console.log(parseFloat("123.45abc")); // 123.45 - строка "123.45abc" становится числом 123.45
console.log(parseInt("abc123", 10)); // NaN - строка "abc123" не может быть преобразована в число
console.log(parseFloat("abc123.45")); // NaN - строка "abc123.45" не может быть преобразована в число
console.log(parseInt("   123   ", 10)); // 123 - пробелы игнорируются
console.log(parseFloat("   123.45   ")); // 123.45 - пробелы игнорируются
console.log(parseInt("0xF", 16)); // 15 - строка "0xF" в шестнадцатеричной системе становится числом 15
console.log(parseInt("0b101", 2)); // 5 - строка "0b101" в двоичной системе становится числом 5
console.log(parseInt("0o17", 8)); // 15 - строка "0o17" в восьмеричной системе становится числом 15
console.log(parseInt("08", 10)); // 8 - строка "08" становится числом 8 (восьмеричная система не применяется)
console.log(parseInt("09", 10)); // 9 - строка "09" становится числом 9 (восьмеричная система не применяется)

let answ = +prompt("Введите число", "0");
console.log(answ); // преобразование строки из prompt в число

// Всё что мы получаем от пользователя - это строка. Даже если пользователь введет число, оно будет в виде строки.
// Поэтому если мы хотим работать с числом, нам нужно явно преобразовать строку в число при помощи унарного плюса (+) или функции Number().
// Если мы не преобразуем строку в число, то при выполнении математических операций мы можем получить неожиданный результат из-за конкатенации строк.
// Например:
let input = prompt("Введите число", "0");
console.log(input + 10); // если пользователь введет 5, то результат будет "510" - конкатенация строк
console.log(+input + 10); // если пользователь введет 5, то результат будет 15 - сложение чисел
console.log(Number(input) + 10); // если пользователь введет 5, то результат будет 15 - сложение чисел

// to Boolean
// 1) Явное преобразование к булевому типу
// Для явного преобразования значения к булевому типу можно использовать функцию Boolean() или двойное отрицание (!!).

// Что всегда становится false (ложь):
//  - false - само булевое значение false
//  - 0 и -0 - числовые значения 0 и -0
//  - "" - пустая строка
//  - null - специальное значение null
//  - undefined - специальное значение undefined
//  - NaN - специальное числовое значение Not-a-Number (не число)
// Всё остальное становится true (истина):
//  - true - само булевое значение true
//  - Любое другое число, кроме 0 и -0 (например, 1, -1, 3.14, Infinity, -Infinity)
//  - Непустая строка (например, "0", "false", "hello")
//  - Объекты (включая пустые объекты {} и массивы [])
//  - Функции

console.log(Boolean(1)); // true - число 1 становится true
console.log(Boolean(0)); // false - число 0 становится false
console.log(Boolean(-1)); // true - число -1 становится true
console.log(Boolean("Hello")); // true - непустая строка становится true
console.log(Boolean("")); // false - пустая строка становится false
console.log(Boolean(null)); // false - null становится false
console.log(Boolean(undefined)); // false - undefined становится false
console.log(Boolean(NaN)); // false - NaN становится false
console.log(Boolean({})); // true - пустой объект становится true
console.log(Boolean([])); // true - пустой массив становится true
console.log(Boolean(function () {})); // true - функция становится true
console.log(!!1); // true - число 1 становится true
console.log(!!0); // false - число 0 становится false
console.log(!!-1); // true - число -1 становится true
console.log(!!"Hello"); // true - непустая строка становится true
console.log(!!""); // false - пустая строка становится false
console.log(!!null); // false - null становится false
console.log(!!undefined); // false - undefined становится false
console.log(!!NaN); // false - NaN становится false
console.log(!!{}); // true - пустой объект становится true
console.log(!![]); // true - пустой массив становится true

let switcher = null; // switcher = 0; // switcher = undefined; // switcher = NaN; // switcher = ''; // switcher = false; // switcher = {}; // switcher = []; // switcher = 'Hello'; // switcher = 1; // switcher = -1; // switcher = true;

if (switcher) {
    console.log("Working...");
} else {
    console.log("Not working...");
} // Not working...

switcher = 1;

if (switcher) {
    console.log("Working...");
} else {
    console.log("Not working...");
} // Working...

// В условных операторах (if, while и т.д.) происходит неявное преобразование значения к булевому типу.
// Поэтому можно использовать любые типы данных в условных операторах, и они будут автоматически преобразованы к булевому типу.
// Например, в условии if (switcher) значение switcher будет преобразовано к булевому типу.
// Если switcher равно 0, null, undefined, NaN или пустой строке, то условие будет ложным (false).
// Если switcher равно любому другому значению (например, 1, -1, "Hello", {}, [] и т.д.), то условие будет истинным (true).

console.log(typeof Boolean("test")); // "boolean" - результат функции Boolean() имеет тип boolean
console.log(typeof !!"test"); // "boolean" - результат двойного отрицания имеет тип boolean
