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
 * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const changeCase = function () {
    
// }

// const str = 'JavaScript';

// const arrStr = str.split('');
// console.log(arrStr);

// let reversStr = '';

// for (const letter of arrStr) {
//     if (letter === letter.toLocaleLowerCase()) {
//         reversStr += letter.toLocaleUpperCase();
//     } else {
//         reversStr += letter.toLocal
//     }
// }

// console.log(reversStr);
  
//   console.log(changeCase('qweRTY')); // QWErty
//   console.log(changeCase('mAnGo')); // MaNgO
//   console.log(changeCase('AjAx')); // aJaX



/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */
// const title = 'Top 10 benefits of React framework';
// const slugify = function (str) {
//     return str.toLocaleLowerCase().split(' ').join('-');
// }
  
//   console.log(slugify('Top 10 benefits of React framework'));
//   console.log(slugify('Azure Static Web Apps are Awesome'));
//   console.log(slugify('Technical writing tips for non-native English speakers'));



// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
    
//     changeName(newName) {
//     // console.log("this: ", this);
//       this.name = newName;
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack)
//     }
    

//   };



// 1. Створи пустий об'єкт user. Додай в об'єкт властивість userName зі своїм іменем. Додай в об'єкт властивість age зі своїм віком. Додай в об'єкт метод showUserName, який виводить твоє ім'я. Додай в об'єкт метод updateAge, який додає під час виклику до твоєго віку 1.
// const user = {
    
//     userName: 'Олег',
//     age: 15,
//     updateAge(number){
//        return this.age += number
//     },
//     showUserName() {
//         console.log(this.userName);
//     },
// }

// user.showUserName();
// console.log(user.updateAge(1));

// 3. Створіть об'єкт calculator з трьома методами:

// read(a, b) - запитує у користувача два числових значення і зберігає їх як властивості об'єкта.
// sum() - повертає суму збережених значень.
// mult() - повертає добуток збережених значень.

// const calculator = {
//     read(a, b) {
//         this.num1 = a;
//         this.num2 = b;
//         console.log(calculator);
//     },
//     sum() {
//         return this.num1 + this.num2;
//     }
// }
// calculator.read(3, 5)
// console.log(calculator.sum());


// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// const keys = Object.keys(feedback);

// let totalFeedback = 0;

// for (const key of keys) {
    
//     totalFeedback += feedback[key]

    // console.log(key);
// }
// console.log(feedback['good']);

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];
  
// console.table(friends);
  

// for (const friend of friends) {
    
// }





// const findFriendByName = function (allFriends) {

//     const friendsName = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         friendsName.push(friend.name);
//     }
//     return friendsName
//   };
  
//   console.log(findFriendByName(friends));



// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

// const getOnlineFriends = function (allFriends) {
//    const friendOnline = [];
//    for (const friend of allFriends) {
//      if(friend.online){
//       friendOnline.push(friend.name)
//      }
//    }
//    return friendOnline;
// }
// console.log(getOnlineFriends(friends)


// const getFriendsByStatus = function (allFriends) {
//     const friendByStat = {
//       onlineFriends: [],
//       offlineFriends: [],
//     }

//     for (const friend of allFriends) {

//         if (friend.online) {
//             friendByStat.onlineFriends.push(friend.name);
//         } else {
//             friendByStat.offlineFriends.push()
//         }
//     }
// };
  
//   console.log(getFriendsByStatus(friends));

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line

//     switch (password) {
      
//         case password:
//             message = "Canceled by user!";
//             break;
      
//         case password:
//             message = "Welcome!";
      
//         default:
//             message = "Access denied, wrong password!";

//             // Change code above this line
//             return message;
//     }
// }
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);




//   https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg

// const imgEl = document.createElement('img');
// imgEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// imgEl.alt = 'img';
// imgEl.width = '50';


// console.log(imgEl);

// const navItemEl = document.createElement('li')

// navItemEl.classList.add('site-nav__item');

// const linkEl = document.createElement('a');

// linkEl.classList.add('nav-link');

// console.log(linkEl);

// navItemEl.appendChild('linEl');

// console.log(navItemEl);




/*
 * Створюємо і додаємо колекцію
 */
// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
//   ];
  
//   const colorPickerContainerEl = document.querySelector('.js-color-picker');

// //   const option = colorPickerOptions[0];
// //   console.log(option);

// //   const buttonEl = document.createElement('button');
// //   buttonEl.type = 'button';
// //   buttonEl.textContent = option.label;
// //   buttonEl.style.backgroundColor = option.color;

// //   console.log(buttonEl);


//   const buttons = colorPickerOptions.map(function (option){

//   const buttonEl = document.createElement('button');

//   buttonEl.type = 'button';

//   buttonEl.textContent = option.label;

//   buttonEl.style.backgroundColor = option.color;
 
//   return buttonEl;
//   })
//   console.log(buttons);

//   colorPickerContainerEl.append(...buttons)

  /*
   * Пишемо функцію для створення розмітки колорпікеру
   */


//   const createBtnEl = function (options) {
//    return options.map(function (option) {
//       const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList = 'color-picker__option'
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;
//     return buttonEl
//     })    
    
//   }

//   const btns = createBtnEl(colorPickerOptions);


//   colorPickerContainerEl.append(...btns)


// const products = [
//     {
//       name: 'Товар-1',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 2000,
//       available: true,
//       onSale: true,
//     },
//     {
//       name: 'Товар-2',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 3000,
//       available: false,
//       onSale: false,
//     },
//     {
//       name: 'Товар-3',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 1500,
//       available: true,
//       onSale: false,
//     },
//     {
//       name: 'Товар-4',
//       description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//       price: 2500,
//       available: false,
//       onSale: false,
//     },
// ];

// const createArticle = function ({name, description, price}) {

// const articleEl = document.createElement('article');
// articleEl.classList.add = 'product';

// const productName = document.createElement('h2');
// productName.classList.add = 'prouct__name';
// productName.textContent = name;

// const productDescrEl = document.createElement('p');
// productDescrEl.classList.add = 'product__descr';
// productDescrEl.textContent = description;

// const productPridct = document.createElement('p');
// productPridct.classList.add = 'product__pridct';
// productPridct.textContent = `Ціна: ${price} кредитів`;

// articleEl.append(productName, productDescrEl, productPridct);

// return articleEl;
// }

// const elements = products.map(createArticle);

// console.log(elements);

// const containerEl = document.querySelector('.js-products');

// containerEl.append(...elements);

  
//  <article class="product">
//         <h2 class="product__name">Назва</h2>
//         <p class="product__descr">Опис</p>
//         <p product__pridct>Ціна: 1111 кредитів</p>
//     </article>

// const obj = {
//     name: 'Oleh',
//     age: 11
// }
// console.log(obj.name[0]);

// const refs = {
//     output: document.querySelector('.js-output'),
//     clearBtn: document.querySelector('.js-clear'),
//   };
  
//  window.addEventListener('keydown', onKeypress)
  
//   function onKeypress(event) {
//     // console.log(event);
//     // console.log('event.key: ', event.key);
//     console.log('event.code: ', event.code);
  
//     refs.output.textContent += event.key;
//   }
  
//   function onClearOutput() {}


// function Car(model, price, year, color) {
//     this.model = model;
//     this.price = price;
//     this.year = year;
//     this.color = color;
// }

// // const carInstance = new Car();

// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);

// const mazda = new Car('Mazda Rx-7', 70000, 2010, 'yellow');
// console.log(mazda);



// function Customer(name, age, date) {
//     this.name = name;
//     this.age = age;
//     this.date = date;
// }
// Customer.prototype.changeDate = function (newDate) {
//     this.date = newDate;
// }





// class Customer{
//     constructor(name, age, date) {
//         this.name = name;
//         this.age = age;
//         this.date = date;
//     }
    
//     get name() {
//         this.name
//     }
//     set date(newDate) {
//         this._date = newDate;
//     }
// }
// console.log(date);


// const customer1 = new Customer('Олег', 15, '1.3.2023');

// const customer2 = new Customer('Іван', 20, '11.23.2022');