"use strict";

// Отлавливаем ошибки в своем коде при помощи консоли разработчика. Breakpoints
// https://learn.javascript.ru/debugging-chrome#breakpoints

// Elements - вкладка для просмотра иерархии DOM и стилей CSS
// Console - вкладка для просмотра ошибок, логов и выполнения JS кода
// Sources - вкладка для отладки JS кода (breakpoints, watch, call stack и т.д.)
// Network - вкладка для просмотра сетевых запросов (AJAX, загрузка страниц и т.д.)
// Performance - вкладка для анализа производительности страницы
// Memory - вкладка для анализа использования памяти
// Application - вкладка для просмотра данных приложения (localStorage, cookies и т.д.)
// Security - вкладка для просмотра информации о безопасности страницы
// Lighthouse - вкладка для проведения аудита страницы

// Пример использования breakpoints
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'Button Clicked!';
});

// Пример использования консоли для логирования
console.log('Hello, World!');
console.warn('This is a warning!');
console.error('This is an error!');

// Пример использования консоли для измерения времени выполнения
console.time('Timer');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('Timer');       
// Пример использования консоли для группировки логов
console.group('Group 1');
console.log('Log 1');
console.log('Log 2');
console.groupEnd('Group 1');
console.group('Group 2');
console.log('Log 3');
console.log('Log 4');
console.groupEnd('Group 2');
// Пример использования консоли для трассировки стека вызовов
function funcA() {
    funcB();
}   
function funcB() {
    funcC();
}
function funcC() {
    console.trace();
}       

funcA();
// Пример использования консоли для просмотра объектов
const obj = { a: 1, b: 2, c: { d: 3, e: 4 } };
console.dir(obj);   

// Пример использования консоли для просмотра таблиц
const arr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];
console.table(arr);