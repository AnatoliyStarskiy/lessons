"use strict";

// Основы ООП в JavaScript, прототипно-ориентированное наследование
// В JavaScript объекты могут наследовать свойства и методы друг от друга через прототипы.
// Каждый объект имеет внутреннюю ссылку на свой прототип, который может быть другим объектом.
// Если свойство или метод не найден в самом объекте, JavaScript ищет его в прототипе.
// Это позволяет создавать иерархии объектов и повторно использовать код.

let str = "Some";
let strObj = new String(str);

console.log(typeof(str)); // "string"
console.log(typeof(strObj)); // "object"

console.dir([1, 2, 3]); // Массив
// Массивы в JavaScript являются объектами и наследуют от Array.prototype.
//__proto__ - это ссылка на прототип объекта, который был создан с помощью конструктора.

// Прототипы и наследование

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
}

const john = {
    health: 100
};

// Устаревший способ установки прототипа
// john.__proto__ = soldier; // Устанавливаем прототип john на soldier
// console.log(john.armor); // 100, так как john наследует armor от soldier
john.__proto__ = soldier; // Устанавливаем прототип john на soldier
// Теперь john наследует свойства от soldier

console.log(john.armor); // 100, так как john наследует armor от soldier
console.log(john.health); // 100, так как свойство health есть в john
john.sayHello(); // "Hello", так как john наследует sayHello от soldier


// Современный способ установки прототипа
Object.setPrototypeOf(john, soldier);
console.log(john.armor); // 100
console.log(john.health); // 100
john.sayHello(); // "Hello"

// Создание объекта с заданным прототипом
const jane = Object.create(soldier);
console.log(jane.armor); // 100
console.log(jane.health); // 400 (унаследовано от soldier)
jane.sayHello(); // "Hello"