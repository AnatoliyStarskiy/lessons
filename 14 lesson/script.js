"use strict";

// Массивы и псевдомассивы
// Массив - это упорядоченная коллекция данных, которая может содержать элементы любого типа.
// Псевдомассив - это объект, который имеет числовые индексы и свойство length, но не обладает всеми методами массива.
// Псевдомассивы часто встречаются в DOM-операциях, например, в свойствах document.forms или arguments функции.

const arr = [1, 2, 3, 6, 8];
arr.pop(); // Удаляет последний элемент из массива
console.log(arr); // [1, 2, 3, 6]
arr.push(10); // Добавляет элемент в конец массива
console.log(arr); // [1, 2, 3, 6, 10]
arr.shift(); // Удаляет первый элемент из массива
console.log(arr); // [2, 3, 6, 10]
arr.unshift(5); // Добавляет элемент в начало массива
console.log(arr); // [5, 2, 3, 6, 10]

// Перебор массива

// 1. Цикл for с индексами элементов массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. Цикл for...of - перебирает значения элементов массива
for (const value of arr) {
    // value - значение элемента массива
    console.log(value); // 5, 2, 3, 6, 10
}

// 3. Метод forEach - перебирает значения элементов массива более функционально
// arr.forEach(function(value, index, array) {
//   console.log(value); // 5, 2, 3, 6, 10
//   console.log(index); // 0, 1, 2, 3, 4
//   console.log(array); // сам массив arr
// });
arr.forEach((value, index, array) => {
    // value - значение элемента массива
    console.log(value); // 5, 2, 3, 6, 10
    console.log(index); // 0, 1, 2, 3, 4
    console.log(array); // сам массив arr
});

arr.forEach(function (value, index, array) {
    console.log(`${value}: ${index} внутри массива ${array}`); // 5: 0 внутри массива 5,2,3,6,10
});

// 4. Цикл for...in - перебирает ключи (индексы) элементов массива (не рекомендуется для массивов)
/* for (const index in arr) { // index - индекс элемента массива
  console.log(arr[index]); // 5, 2, 3, 6, 10
} */

let arrText = "hello";
arrText = arrText.split(""); // строка превращается в псевдомассив
console.log(arrText); // ['h', 'e', 'l', 'l', 'o']
arrText = arrText.join(""); // псевдомассив превращается в строку
console.log(arrText); // 'hello'
const str = "test";
const products = str.split(","); // строка превращается в псевдомассив
products.push("test"); // добавляем элемент в конец массива
console.log(products); // ['test']
console.log(products.length); // 1 - длина массива (количество элементов)
console.log(products[0]); // 'test'

// splice - метод для удаления, замены и добавления элементов в массив
const someArr = [1, 2, 3, 4, 5];
someArr.splice(1, 2); // удаляем 2 элемента начиная с индекса 1
console.log(someArr); // [1, 4, 5]
someArr.splice(1, 1, "a", "b"); // удаляем 1 элемент начиная с индекса 1 и добавляем 'a' и 'b'
console.log(someArr); // [1, 'a', 'b', 5]
someArr.splice(2, 0, "c", "d"); // не удаляем элементы, а добавляем 'c' и 'd' начиная с индекса 2
console.log(someArr); // [1, 'a', 'c', 'd', 'b', 5]

// slice - метод для создания нового массива из части существующего массива
const anotherArr = [1, 2, 3, 4, 5];
const newArr = anotherArr.slice(1, 4); // создаем новый массив из элементов с индекса 1 по индекс 4 (не включая 4)
console.log(newArr); // [2, 3, 4]
console.log(anotherArr); // [1, 2, 3, 4, 5] - исходный массив не изменился

// concat - метод для объединения массивов
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = arr1.concat(arr2); // объединяем arr1 и arr2
console.log(mergedArr); // [1, 2, 3, 4]
console.log(arr1); // [1, 2] - исходный массив не изменился
console.log(arr2); // [3, 4] - исходный массив не изменился

// sort - метод для сортировки массива
const unsortedArr = [3, 1, 4, 2, 5];
unsortedArr.sort(); // сортируем массив по возрастанию (по умолчанию сортирует как строки)
console.log(unsortedArr); // [1, 2, 3, 4, 5]
unsortedArr.sort((a, b) => b - a); // сортируем массив по убыванию (числовая сортировка)
// a - первый элемент, b - второй элемент
// если результат отрицательный, a будет перед b
// если результат положительный, b будет перед a
// если результат 0, порядок не изменится
console.log(unsortedArr); // [5, 4, 3, 2, 1]

// filter - метод для создания нового массива из элементов, которые проходят проверку в переданной функции
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0); // создаем новый массив из четных чисел
console.log(evenNumbers); // [2, 4, 6]
const oddNumbers = numbers.filter((num) => num % 2 !== 0); // создаем новый массив из нечетных чисел
console.log(oddNumbers); // [1, 3, 5]

// map - метод для создания нового массива из результатов вызова функции для каждого элемента массива
const squaredNumbers = numbers.map((num) => num ** 2); // создаем новый массив из квадратов чисел
console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36]
const doubledNumbers = numbers.map((num) => num * 2); // создаем новый массив из удвоенных чисел
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]

// reduce - метод для последовательной обработки каждого элемента массива с сохранением промежуточного результата
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
); // сумма всех чисел в массиве
// accumulator - аккумулятор, хранит промежуточный результат
// currentValue - текущий элемент массива

console.log(sum); // 21
const product = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
); // произведение всех чисел в массиве
console.log(product); // 720

// find - метод для поиска первого элемента массива, который удовлетворяет условию в переданной функции
const foundNumber = numbers.find((num) => num > 3); // ищем первое число больше 3
console.log(foundNumber); // 4
const notFoundNumber = numbers.find((num) => num > 6); // ищем первое число больше 6
console.log(notFoundNumber); // undefined - такого числа нет

// findIndex - метод для поиска индекса первого элемента массива, который удовлетворяет условию в переданной функции
const foundIndex = numbers.findIndex((num) => num > 3); // ищем индекс первого числа больше 3
console.log(foundIndex); // 3
const notFoundIndex = numbers.findIndex((num) => num > 6); // ищем индекс первого числа больше 6
console.log(notFoundIndex); // -1 - такого числа нет

// reverse - метод для разворота массива
const originalArr = [1, 2, 3, 4, 5];
originalArr.reverse(); // разворачиваем массив
console.log(originalArr); // [5, 4, 3, 2, 1]

// every - метод для проверки, удовлетворяют ли все элементы массива условию в переданной функции
const allEven = numbers.every((num) => num % 2 === 0); // проверяем, все ли числа четные
console.log(allEven); // false
const allPositive = numbers.every((num) => num > 0); // проверяем, все ли числа положительные
console.log(allPositive); // true

// split - метод для разделения строки на массив подстрок по заданному разделителю
const text = "Hello, world! Welcome to JavaScript.";
const words = text.split(" "); // разделяем строку на слова по пробелу
console.log(words); // ['Hello,', 'world!', 'Welcome', 'to', 'JavaScript.']

const strPrompt = prompt("Введите числа через запятую", "2, 1, 5,3,4");
const productsPrompt = strPrompt.split(","); // превращаем строку в массив (убираем пробел после запятой)
console.log(productsPrompt); // выводим массив в консоль
productsPrompt.sort(compareNum); // сортируем массив численно по возрастанию
console.log(productsPrompt); // выводим массив в консоль
alert(productsPrompt.join("; ")); // превращаем массив обратно в строку и выводим через точку с запятой


function compareNum(a, b) {
    return a - b;
}