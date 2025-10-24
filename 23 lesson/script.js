"use strict";

// 23 lesson - События и их обработчики


/* const btn = document.querySelector("button"); */ // Старый способ получения элемента по селектору. ОН устарел потому что возвращает только первый элемент, который подходит под селектор 
const btn = document.querySelectorAll("button")[0]; // Новый способ получения элемента - это метод querySelectorAll, который возвращает коллекцию элементов, подходящих под селектор. Чтобы получить первый элемент из этой коллекции, нужно указать индекс [0]
const btns = document.querySelectorAll("button"); // Получаем все кнопки на странице 
const overlay = document.querySelector(".overlay"); // Получаем элемент с классом overlay


/* btn.onclick = function () { // Старый способ назначения обработчика события. Не рекомендуется к использованию, так как позволяет назначить только один обработчик на одно событие
    alert("click"); // При клике на кнопку появляется окно с сообщением "click"
}
 */

/* btn.addEventListener("click", function () { // Новый способ назначения обработчика события. Позволяет назначить несколько обработчиков на одно событие
    alert("click"); // При клике на кнопку появляется окно с сообщением "click"
});

btn.addEventListener("click", function () { // Можно назначить несколько обработчиков на одно событие
    alert("second click"); // При клике на кнопку появляется окно с сообщением "second click"
}); */

/* btn.addEventListener("mouseenter", (e) => { // Событие mouseenter срабатывает когда курсор мыши наведен на элемент
    console.log("Hover"); // В консоли появляется сообщение "Hover"
    console.log(e); // Выводим объект события в консоль 
}); */

let i = 0; // Счетчик кликов

const deleteElement = (e) => { // Функция-обработчик события
    console.log(e.target); // Выводим в консоль элемент, на котором произошло событие
    console.log(e.currentTarget); // Выводим в консоль элемент, на котором висит обработчик события
    console.log(e.type); // Выводим в консоль тип события

    // e.target.remove(); // Удаляем элемент, на котором произошло событие

    i++; // Увеличиваем счетчик кликов на 1

    if (i == 1) { // Если счетчик кликов равен 1
        btn.removeEventListener("click", deleteElement); // Удаляем обработчик события с кнопки 
    }
};

/* btn.addEventListener("mouseenter", function (event) { // Событие mouseenter срабатывает когда курсор мыши наведен на элемент
    console.log(event.target); // Выводим в консоль элемент, на котором произошло событие
    event.target.remove(); // Удаляем элемент, на котором произошло событие
}); */

/* btn.addEventListener("click", deleteElement); // Назначаем обработчик события клика на кнопку
overlay.addEventListener("click", deleteElement); // Назначаем обработчик события клика на оверлей */

btns.forEach(btn => { // Перебираем все кнопки на странице
    btn.addEventListener("click", deleteElement, {once: true}); // Назначаем обработчик события клика на каждую кнопку. Опция {once: true} позволяет выполнить обработчик только один раз. Это альтернатива удалению обработчика внутри функции
})

const link = document.querySelector("a"); // Получаем ссылку на странице

link.addEventListener("click", function (event) { // Назначаем обработчик события клика на ссылку
    event.preventDefault(); // Отменяем стандартное поведение ссылки (переход по адресу)

    console.log(event.target); // Выводим в консоль элемент, на котором произошло событие
});

// console.log(btns); // Выводим коллекцию кнопок в консоль
// console.log(overlay); // Выводим оверлей в консоль
// console.log(btn); // Выводим кнопку в консоль    

