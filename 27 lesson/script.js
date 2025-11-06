"use strict";

// 27 lesson - Async, defer, динамические скрипты

// defer и async - атрибуты для тега <script> в HTML
// defer - скрипт будет загружен параллельно с HTML, но выполнен только после полной загрузки HTML
// async - скрипт будет загружен и выполнен сразу, не дожидаясь полной загрузки HTML

const p = document.querySelectorAll("p");
console.log(p);

// Defer example:
// Скрипт с defer будет выполнен после загрузки HTML, поэтому элементы <p> будут найдены

// Async example:
// Скрипт с async может быть выполнен до полной загрузки HTML, поэтому элементы <p> могут не быть найдены
// Используют например с метриками аналитики, где не важно когда именно выполнится скрипт

// Динамическое создание и добавление скриптов

const script = document.createElement("script"); // Создаем новый элемент <script>
script.src = "test.js"; // Указываем источник скрипта
script.async = true; // Можно указать async или defer
document.body.appendChild(script); // Добавляем скрипт в конец тела документа, он начнет загружаться и выполняться

function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Чтобы сохранить порядок выполнения скриптов
    document.body.append(script);
}

loadScript("test.js");
