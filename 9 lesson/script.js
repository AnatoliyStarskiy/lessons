"use strict";
// Функции
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
// }

// Функции  - это наши действия в JS. И изменяют информцию так, как мы укажем.
// Также они значительно сокращают и упрощают код, когда нам нужно повторить одно и то же действие много раз.
// Нам нет нужно каждый раз писать одно и то же, мы просто вызываем функцию.

function showFirstMessage() {
    console.log("Hello World!");
}

showFirstMessage(); // Вызов функции

// Имя функции должно отражать то, что она делает. Например, showFirstMessage - показывает первое сообщение.

// Параметры функции - это то, что мы передаем в функцию для работы с ней.
// Например, в showFirstMessage мы передаем текст, который хотим показать.
// Чаще всего это глаголы, например, calcSum - вычислить сумму, createCard - создать карточку и т.д.

// Существуют также анонимные функции, которые не имеют имени и обычно используются один раз.
// Например, в обработчиках событий или таймерах.

let num = 20; // Эта переменная видна во всем файле и называестя глобальной.
let numExample = 10; // Эта переменная видна во всем файле и называестя глобальной.

function showMessage(text) {
    console.log(text);
    let num = 20; // Эта переменная видна только внутри функции и называтеся локальной.
    numExample = 15; // Мы изменили глобальную переменную, так как не использовали let, const или var.
}

showMessage("Hello World!"); // Вызов функции с параметром

function calcSum(a, b) {
    console.log(a + b);
}

calcSum(4, 5); // Вызов функции с параметрами 4 и 5
calcSum(10, 5); // Вызов функции с параметрами 10 и 5

console.log(num); // 20 - глобальная переменная
console.log(numExample); // 15 - глобальная переменная была изменена внутри функции

// Переменные, объявленные внутри функции (локальные), не видны снаружи функции.
// Например, переменные a и b внутри calcSum, а также переменная num внутри showMessage.
// console.log(a + b); // Ошибка - переменные a и b не видны вне функции
// console.log(text); // Ошибка - переменная text не видна вне функции

// Функция может что-то возвращать с помощью return.
// Например, мы можем вернуть сумму двух чисел.

// Замыкание функции - это когда функция запоминает свое окружение, даже если она вызывается вне этого окружения.
// Например, функция может использовать переменные из внешнего контекста, в котором она была создана.

function ret() {
    // Замыкание
    let num = 50; // Локальная переменная
    return function () {
        // Возвращаем анонимную функцию
        console.log(num); // Эта функция запоминает переменную num из внешнего контекста
    };
}

const anotherNum = ret(); // anotherNum теперь содержит функцию, которая запомнила num = 50
anotherNum(); // Выводит 50

// Функции бывают разных типов:
// Function Declaration - объявление функции
function funcDeclaration() {
    console.log("Function Declaration");
}
funcDeclaration(); // Можно вызвать до объявления

// Function Expression - функциональное выражение
const funcExpression = function () {
    console.log("Function Expression");
};
funcExpression(); // Можно вызвать только после объявления

// Стрелочные функции (Arrow Functions) - более короткий синтаксис для функций
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(3, 4)); // 7

// Отличие стрелочных функций в том, что они не имеют своего контекста this и не могут быть использованы как конструкторы.

// Аргументы функции
// В функции можно передавать любое количество аргументов.
// Если аргументов больше, чем параметров, лишние игнорируются.
// Если аргументов меньше, недостающие параметры будут undefined.

function showArgs(a, b, c) {
    console.log(a); // Первый аргумент
    console.log(b); // Второй аргумент
    console.log(c); // Третий аргумент
}
showArgs(1, 2); // Третий аргумент будет undefined
showArgs(1, 2, 3, 4, 5); // Лишние аргументы игнорируются

function convert(amount, currency = "USD") {
    // Параметр по умолчанию

    const rates = { // Курсы валют
        USD: 1, // Базовая валюта
        EUR: 0.85, // Евро
        RUB: 70, // Российский рубль
    };
    return amount * (rates[currency] || 1); // Конвертация с проверкой наличия курса
}


console.log(convert(500)); // 35000
console.log(convert(500, "EUR")); // 4250
console.log(convert(500, "RUB")); // 35000
console.log(convert(500, "GBP")); // 500 - курс не найден, используется 1

// Можно использовать параметры по умолчанию
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!


// Про важность return
function sum(a, b) {
    return a + b; // Возвращаем сумму
    console.log("This will not be executed"); // Этот код не выполнится
}
const resultSum = sum(3, 4); // resultSum будет 7
console.log(resultSum); // 7

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    return curr * amount; // Возвращаем конвертированную сумму
}

function promotion(result, discount) {
    console.log(result * discount); // Применяем скидку
}

const res = convert(500, usdCurr); // Конвертируем 500 в гривны
promotion(res, 0.9); // Применяем скидку 10%

function doNothing() {}
console.log(doNothing() === undefined); // true - функция всегда что-то возвращает, если нет return, то всё равно равносильно return undefined
// Функции - это объекты первого класса в JavaScript, что означает, что их можно передавать как аргументы, возвращать из других функций и присваивать переменным.

function higherOrderFunction(callback) { // Функция высшего порядка 
    // Принимает другую функцию как аргумент
    callback(); // Выполняет переданную функцию
    
}
higherOrderFunction(() => { // Передаем анонимную функцию как аргумент
    console.log("Callback function executed"); // Callback function executed
});



// Рекурсивные функции
function factorial(n) {
    if (n <= 1) return 1; // Базовый случай
    return n * factorial(n - 1); // Рекурсивный вызов
}
console.log(factorial(5)); // 120

// Методы и свойства у функций
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Hello!

// Функции могут иметь свои собственные свойства
sayHello.customProperty = "I'm a custom property";
console.log(sayHello.customProperty); // I'm a custom property

// Функции - это объекты первого класса в JavaScript, что означает, что их можно передавать как аргументы, возвращать из других функций и присваивать переменным.