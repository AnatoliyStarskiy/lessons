"use strict";

// Циклы
// while, do while, for
// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

let num = 50;

// while
while (num < 55) {
    console.log(num);
    num++;
}

// do while

do {
    console.log(num);
    num++;
} while (num < 55);

// Пример с do while, который выполнится хотя бы один раз
num = 60;

// do while
// Выполнится хотя бы один раз

do {
    console.log(num);
    num++;
} while (num <= 60);

// for
// Выполнится хотя бы один раз
// Пример с for

for (let i = 1; i < 8; i++) {
    console.log(i);
}

const array = [1, 2, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    if (i === 3) {
        break;
        /* continue; */
    }

    const element = array[i];
    console.log(element);
}

// Циклы в цикле и метки

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    second: for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
    }
}

// Пирамидка

/* let star = '*';

for (let i = 0; i <= 6; i++) {
    console.log(star);
    star = star + '*';
} */

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    second: for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        third: for (let k = 0; k < 3; k++) {
            if (k === 2) {
                continue first;
            }
            console.log(`Third level: ${k}`);
        }
    }
}
