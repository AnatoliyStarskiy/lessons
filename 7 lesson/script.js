"use strict";

// Условия

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error");
}
// 4 не равно 9, поэтому сработает else и выведется "Error"
// В консоли будет выведено: Error
// Операторы сравнения
// >, <, >=, <=, ==, ===, !=
// 4 == 9 - равно ли 4 и 9? Нет, не равно
// 4 === 9 - строгое равно ли 4 и 9? Нет, не равно
// 4 != 9 - не равно ли 4 и 9? Да, не равно
// 4 > 9 - больше ли 4 чем 9? Нет, не больше
// 4 < 9 - меньше ли 4 чем 9? Да, меньше
// 4 >= 9 - больше или равно ли 4 чем 9? Нет, не больше и не равно
// 4 <= 9 - меньше или равно ли 4 чем 9? Да, меньше и не равно
// Сравнение разных типов данных
// 4 == "4" - равно ли 4 и "4"? Да, равно (нестрогое сравнение, типы приводятся к одному типу)
// 4 === "4" - строгое равно ли 4 и "4"? Нет, не равно (разные типы данных)

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Ok!");
}
// В данном случае num равно 50, поэтому сработает else и выведется "Ok!"
// В консоли будет выведено: Ok!
// Тернарный оператор
(num === 50) ? console.log("Ok!") : console.log("Error");
// В данном случае num равно 50, поэтому сработает первая часть и выведется "Ok!"
// В консоли будет выведено: Ok!

// switch

const switchNum = 50;

switch (switchNum) {
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("Много");
        break;
    case 50:
        console.log("Ok!");
        break;
    default:
        console.log("НЕ в этот раз");
}


// В данном случае switchNum равно 50, поэтому сработает default и выведется "НЕ в этот раз"
// В консоли будет выведено: НЕ в этот раз




// Логические операторы
// && - и

const hamburgers = true;
const fries = true;

if (hamburgers && fries) {
    console.log("Я сыт!");
}

console.log((hamburgers && fries)); // true, так как оба значения true
// Если бы одно из значений было false, то результат был бы false
// Например:
const cola = false;

console.log((hamburgers && fries && cola)); // false, так как одно значение false
// Если бы все значения были true, то результат был бы true
// Например:
const nuggets = true;

console.log((hamburgers && fries && cola && nuggets)); // false, так как одно значение false    
// Если бы все значения были true, то результат был бы true

const hamburgersCount = 5;
const friesCount = 1;
const colaCount = 0;

if (hamburgersCount >= 3 && friesCount && colaCount) {
    console.log("Все довольны!");
} else {
    console.log("Мы уходим!");
}


console.log(1&0); // 0
console.log(1&&5); // 5
console.log(null&&5); // null
console.log(0&&"dfgdfg"); // 0
console.log(1&&2&&3); // 3




// || - или


let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport); // done, так как первое true значение
// Если бы все значения были false, то результат был бы false
// Например:
johnReport = "";
alexReport = null;
samReport = 0;
mariaReport = false;

console.log(johnReport || alexReport || samReport || mariaReport); // false, так как все значения false
// Если бы одно из значений было true, то результат был бы true
// Например:    
mariaReport = "done";
console.log(johnReport || alexReport || samReport || mariaReport); // done, так как первое true значение


// ! - не

console.log(!0); // true, так как 0 это false, а !false это true
console.log(!5); // false, так как 5 это true, а !true это false
