"use strict";

// Методы trim()
// trim() - удаляет пробелы в начале и конце строки
// trimStart() - удаляет пробелы в начале строки
// trimEnd() - удаляет пробелы в конце строки
// Эти методы не изменяют исходную строку, а возвращают новую строку.

const stringWithSpaces = "   Hello world   ";
console.log(stringWithSpaces.trim()); // "Hello world"
console.log(stringWithSpaces.trimStart()); // "Hello world   "
console.log(stringWithSpaces.trimEnd()); // "   Hello world"

console.log(logg.slice(6, 11)); // 'world' - извлечение подстроки с 6 по 11 индекс (не включая 11)
console.log(logg.substr(6, 5)); // 'world' - извлечение подстроки с 6 индекса длиной 5 символов
console.log(logg.substr(-5, 4)); // 'worl' - извлечение подстроки с конца строки длиной 4 символа   
console.log(stringWithSpaces); // "   Hello world   " - исходная строка не изменена

// Пример использования trim() для очистки ввода пользователя
const userInput = "   some user input   ";
const cleanInput = userInput.trim();
console.log(cleanInput); // "some user input"
