// 2. Створити рядок довільного змісту. Знайти довжину цього рядка.
    // Змінити його зміст і знайти індекс останньої і першої літери!
// let str = 'Олег вчиться писати JS.';
// console.log(str.length);
// str = 'Олег продовжує вчитись писати JS.';
// console.log(str.indexOf('О'));
// console.log(str.indexOf('.'));

// 3. Написати скрипт який виведе рядок в форматі
    // "Студент a b записався в школу d на курси i в групу h"
    // підставивши замість a b d i h значення змінних.
// const firstName = 'Олег';
// const lastName = 'Цап';
// const school = 'Goiteens';
// const group = '7';
// console.log(`Студент ${firstName} ${lastName} записався в школу ${school} на курси і групу ${group}.`);

// 4. Зміни ім"я товара на "Repair droid" і збільшіть його ціну
    // на 1500 кредитів. Переопреділіть значення змінних pricePerItem і productName
    // після їх об"явлення.
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = 'Repair droid';
// pricePerItem = 3500;

// 5. Об"явіть змінні використавуючи ключові слова const та let та присвойте
    // їм відповідні значення.
    // topSpeed - число 160.
    // distance - число 617.54.
    // login - рядок "mango935".
    // isOnline - буль true.
    // isAdmin - буль false.
// let topSpeed = 160;
// let distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// 6. Доповни код, надавши змінній totalPrice вираз для підрахунку загальної суми 
    // замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, 
    // а orderedQuantity - кількість одиниць товару в замовлення.
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);   

// 12. Створіть змінну яка буде генерувати псевдовипадкове число від 0 до 1 та зміни діапазон від 50 до 100.
// let randomNumber = Math.random();
// randomNumber = Math.random() * (100 - 50) + 50;
// console.log(Math.round(randomNumber));

// 11. Напиши скрип який буде збільшувати заробітню платню робітника на 10%. Початкова сума зп - 25000.589612 грн. Результат округли до сотої та виведи в консоль.

// const sallary = 25000.589612;
// const newSallary = (sallary/100*10) + sallary;
// console.log(newSallary.toFixed(2));

// 9. Ціна 1кг м"яса 200грн. Напиши скрипт який просить користувача ввести кількість м"яса в замовлені в кг. 
    // Порахуй загальну вартість замовлення та виведи результат користувачу.
// let pricePerKilo = '200grn';
// pricePerKilo = Number.parseInt(pricePerKilo);
// let orderedQuantity = prompt('Скільки кіло хочете взяти?');
// orderedQuantity = Number.parseFloat(orderedQuantity);
// const sum = pricePerKilo * orderedQuantity;
// alert((sum));

// 13. Напиши скрипт який знайде довжину рядка "Hello, world! Javascript is awesome!".
    // Зробить всі літери великими. Знайде в рядку
    // слово "javascript". Всі маніпуляції не повинні змінювати оригінальний рядок.
    
// const str = "Hello, world! Javascript is awesome!";
// const upStr = str.toUpperCase();

// const search = str.includes('javascript');
// console.log(search);

// Завдання №1

// let name = 'Генератор захисного поля';
// let price = 1000;
// console.log(`ОБрано ${name}, ціна за штуку ${price}`);
// price = 2000;
// console.log(`ОБрано ${name}, ціна за штуку ${price}`);


// Завдання №2

// const total = 100;
// const order = 200;
// if (total < order) {
//     console.log("На складі недостатньо товарів!");
// } else {
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер!");
// }



// Завдання №1
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const sum of cart) {
//     total += sum;
//     console.log(total);
// }

// Завдання №2

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     console.log(total);
//     }
// }

// Завдання №3

/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// let message = `Користувач ${loginToFind} не знайдено`;

// for (let i = 0; i < logins.length; i++ ) {
//     if (logins[i] !== loginToFind) {
//         console.log(`Користувач ${loginToFind} не знайдено.`);
//         continue;
//     } else {
//         console.log(`Користувач ${loginToFind} знайдено.`);
//     }
// }

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено.`;
//     }
// }
// console.log(message);

// if(logins.includes(loginToFind)){
//    message = `Користувач ${loginToFind} знайдено`;
// }
// console.log(message);

// const message = logins.includes(loginToFind)
// ? `Користувач ${loginToFind} знайдено.`
// : `Користувач ${loginToFind} не знайдено.`;

// Завдання №4

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const array3 = array1.concat(array2);
// let total = 0;

// console.log(array3);

// for (const num of array3) {
//     total += num;
// }
// console.log(total);

/*
 * Напиши скрипт пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);


/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 * - Спочатку через for
 * - Потім через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// // console.log(friends.join(','));
// for (const friend of friends) {
//     string += friend + ',';
// }
// console.log(string);

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'




/*
 * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const str = 'JavaScript';

// let reverStr = '';
// const arrStr = str.split('');
// console.log(arrStr);

// for (const letter of arrStr) {
//     if (letter === letter.toLocaleLowerCase()) {
//         reverStr += letter.toLocaleUpperCase();
//     } else {
//         reverStr += letter.toLocaleLowerCase();
//     }
// }
// console.log(reverStr);



/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */

// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// const normilizeTitle = title.toLocaleLowerCase();
// console.log(normilizeTitle);
// const arrTitle = normilizeTitle.split(' ');
// console.log(arrTitle);
// const slugTitle = arrTitle.join('-');
// console.log(slugTitle);

// const slugTitle = title.toLocaleLowerCase(), .split(' '), .join('-');



/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];
  
// console.table(cards);
  
// const cardToRemove = 'Карточка-3';
// const cardToInsert = 'Карточка-6';
// const cardToUpdate = 'Карточка-4';

// console.log(cards.indexOf(cardToRemove));
// console.log(cards.splice(index, 1));
// console.log(cards);

// cards.splice(5, 0, cardToInsert);
// console.log(cards);

// cards.splice(cards.length, 0, cardToInsert);
// console.log(cards);

// cards.splice(0, 1, cardToUpdate);
// console.log(cards);
  /*
   * Видалення (по індексу), метод indexOf()
   */

  
  /*
   * Додавання (по індексу)
   */
  
  /*
   * Оновлення (по індексу)
   */




/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін і повертає їх сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }


  
//   console.log(calculateTotalPrice([1, 2, 3])); // 6
//   console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
//   console.log(calculateTotalPrice([100, 200, 300])); // 600


/*
 * Напиши функцію logItems(items) для перебора і логування массива
 */

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

  
//   logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
//   logItems([1, 2, 3, 4, 5]);
//   logItems(['клавиатура', 'наушники', 'часы']);




/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдено.` 
// : `Користувач ${loginToFind} не знайдено.`;
// console.log(message);

// const findLogin = function (loginsArray, loginsToFind) {
//     const message = loginsArray.includes(loginToFind) 
// ? `Користувач ${loginToFind} знайдено.` 
// : `Користувач ${loginToFind} не знайдено.`;
//     return message;
// }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));





/*
 * Напиши функцію add для додавання довільної кількості аргументів (чисел)
 * - Операція ... (rest)
 */

// const add = function (...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg 
//     }

//     return sum;
//   };
  
//   console.log(add(1, 2, 3));
//   console.log(add(1, 2, 4, 5, 6));