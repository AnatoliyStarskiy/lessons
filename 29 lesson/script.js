
// Lesson 29 Оператор опциональной цепочки (?.)
// Оператор опциональной цепочки (?.) позволяет безопасно обращаться к вложенным свойствам объекта, даже если одно из промежуточных свойств отсутствует или имеет значение null/undefined. Если свойство не существует, вместо ошибки будет возвращено undefined.

'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// Пример обычного обращения к свойству

if (block) {
    console.log(block.textContent); // Выведет текстовое содержимое блока
} else {
    console.log('Блок не найден');
}

// Пример использования опциональной цепочки
console.log(box?.textContent); // Выведет текстовое содержимое блока, если box существует, иначе undefined


box?.textContent = "Новое содержимое"; // Безопасно изменяет текстовое содержимое, если box существует ecли нет - ничего не происходит

const userData = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    say: function() {
        console.log('Hello');
    }
};

// Безопасное обращение к вложенным свойствам
console.log(userData.address?.street); // Выведет '123 Main St'
console.log(userData.contact?.email); // Выведет undefined, не вызовет ошибку

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js); // Выведет значение, если все свойства существуют
}

userData.say?.(); // Выведет 'Hello', если метод say существует
userData.run?.(); // Ничего не произойдет, если метод run не существует

// Пример с массивом
const users = [
    { name: 'Alice', skills: { js: true } },
    { name: 'Bob' }
];

console.log(users[0].skills?.js); // Выведет true
console.log(users[1].skills?.js); // Выведет undefined, не вызовет ошибку

// Пример с функцией
function getUser(id) {
    const users = {
        1: { name: 'Alice' },
        2: { name: 'Bob' }
    };
    return users[id];
}

console.log(getUser(1)?.name); // Выведет 'Alice'
console.log(getUser(3)?.name); // Выведет undefined, не вызовет ошибку  