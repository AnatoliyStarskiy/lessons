"use strict";

// 26 lesson - События на мобильных устройствах - touchstart, touchmove, touchend

// touchstart - событие возникает, когда палец касается экрана
window.addEventListener("touchstart", (e) => {
    console.log("Touch start"); // Выводим сообщение в консоль
    console.log(e.touches); // Все пальцы, которые сейчас на экране (псевдомассив)
    console.log(e.targetTouches); // Все пальцы, которые касаются текущего элемента
    console.log(e.changedTouches); // Все пальцы, которые участвовали в текущем событии
});
// touchmove - событие возникает, когда палец движется по экрану
window.addEventListener("touchmove", (e) => {
    console.log("Touch move"); // Выводим сообщение в консоль
    console.log(e.touches); // Все пальцы, которые сейчас на экране (псевдомассив)
    console.log(e.targetTouches); // Все пальцы, которые касаются текущего элемента
    console.log(e.changedTouches); // Все пальцы, которые участвовали в текущем событии

});
// touchend - событие возникает, когда палец отрывается от экрана
window.addEventListener("touchend", (e) => {
    console.log("Touch end"); // Выводим сообщение в консоль
    console.log(e.touches); // Все пальцы, которые сейчас на экране (псевдомассив)
    console.log(e.targetTouches); // Все пальцы, которые касаются текущего элемента
    console.log(e.changedTouches); // Все пальцы, которые участвовали в текущем событии
});
// tochenter - событие возникает, когда палец впервые касается экрана
window.addEventListener("touchenter", (e) => {
    console.log("Touch enter"); // Выводим сообщение в консоль
});
// touchleave - событие возникает, когда палец покидает область элемента
window.addEventListener("touchleave", (e) => {
    console.log("Touch leave"); // Выводим сообщение в консоль
});
// touchcancel - событие возникает, когда касание прерывается (например, из-за системного уведомления)
window.addEventListener("touchcancel", (e) => {
    console.log("Touch cancel"); // Выводим сообщение в консоль
});

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение (например, скроллинг)
        console.log('Box touch start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение (например, скроллинг)
        console.log('Box touch move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение (например, скроллинг)
        console.log('Box touch end');
    });

    box.addEventListener('touchenter', (e) => {
        console.log('Box touch enter');
    });

    box.addEventListener('touchleave', (e) => {
        console.log('Box touch leave');
    });

    box.addEventListener('touchcancel', (e) => {
        console.log('Box touch cancel');
    });
});

// touches - все пальцы, которые сейчас на экране (псевдомассив)
// targetTouches - все пальцы, которые касаются текущего элемента
// changedTouches - все пальцы, которые участвовали в текущем событии