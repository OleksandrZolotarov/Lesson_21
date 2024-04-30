"use strict"

// 1.Що потрапить в консоль? 
// let someVar = 0;
// ++someVar;
// if (someVar) {
// console.log(someVar);
// }
// Відповідь: 1

let someVar = 0
++someVar
if (someVar) {
    console.log(someVar);
}

// 2.За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

let string = ` Пункт № `
for (let i = 1; i < 11; ++i) {
    console.log(string + i);
}
//PS. Я був близький до вирішення,але без gpt не обійшлося,і я бачу шо сам би не вирішив(не допетрав би оце що до string треба +і)

// 3.Що потрапить в консоль ?
// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
//     console.log('000');
// }
// Відповідь: нічого не потрапить так як умова не виконана(false)


// 4.Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// PS. Не знаю,як зробити,щоб не повертала помилку
let string2 = "Результат ділення: "

function getDiv(a = 0, b = 0) { return a / b; }
function showMessage(result) {

    if (result === 0 || isNaN(result) || result == 'Infinity') { console.log("") }
    else { console.log(string2 + result) }
}
showMessage(getDiv(10, 4))




// 5.Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
let someArray = [10, "ne10", 'число', 'true', 'false']
someArray.forEach(value => {
    console.log(value);
    if (value === 10) { console.log(value) }
}
)



// =====

// 1. Створіть конструкцію if-else, яка буде перевіряти змінну varTwo на рівність 2 або 3, та якщо це правда, виведіть у консоль Умова true.


let varTwo = 3
if (varTwo === 3 || varTwo === 2) { console.log('Умова' + " " + Boolean(varTwo)) }

// 2. Створіть конструкцію if-else, яка буде перевіряти чи varTwo рівне 2 або чи varOne більше 3, та якщо це правда, виведіть у консоль Умова true.

let varOne = 4
if (varTwo === 2 || varOne > 3) { console.log('Умова true') }

// 3. Створіть масив numbers з числами від 1 до 10. Виведіть сумму всіх елементів масиву у консоль.

//PS. Тут я сам не знайшов рішення,а gpt та google дають таке до якого б я не додумався
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);






// 4. Створіть функцію sumArray, яка приймає масив чисел та повертає їхню суму. Виведіть результат роботи цієї функції для масиву чисел [1, 2, 3, 4, 5].
//PS Це теж не сам робив
function sumArray(arr) {

    let total = 0;
    for (let i = 0; i < array.length; ++i) {
        total = total + arr[i];
    }
    return total;
}

let array = [1, 2, 3, 4, 5]
let result = sumArray(array);
console.log(result);

// 5. Створіть масив mixedArray з випадковими числами та рядками (приклад [1, 'text', 'text', 10, '25', ...]). Використайте цикл for для цього масиву та зробіть наступне, якщо елемент масиву є числом збережіть елемент у змінну mixedArrayNumbers, якщо це рядок то у масив mixedArrayString. В результаті у вас має бути 2 масива, один з числами і другий з рядками.

// PS Тут структуру сам вибудував,але не знав синтаксис... "typeof mixedArray[i]"(наприклад)...я туди або [i],(i) або value пхав без mixedArray

let mixedArray = [1, 'text', 2, 'par']
let mixedArrayString = []
let mixedArrayNumbers = []

for (let i = 0; i < mixedArray.length; ++i) {
    if (typeof mixedArray[i] === 'string') { mixedArrayString.push(mixedArray[i]) }
    else if (typeof mixedArray[i] === 'number') { mixedArrayNumbers.push(mixedArray[i]) }
}
console.log(mixedArrayString)
console.log(mixedArrayNumbers)


// 6. Створіть функцію multiplyArray, яка приймає масив чисел та множник, та повертає новий масив, в якому кожен елемент масиву помножений на цей множник. Виведіть результат роботи цієї функції для масиву [1, 2, 3, 4, 5] та множника 3.

function multiplyArray(arr) {


    for (let i = 0; i < arr.length; ++i) { array2[i] = array2[i] * 3 } return arr
}
let array2 = [1, 2, 3, 4, 5,]
let multiply = multiplyArray(array2)
console.log(multiply)

