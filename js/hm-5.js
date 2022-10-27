// Завдання №1 
const Arr1 = [1, 5, '4', 'hello'];
const Arr2 = [true, 2, {}, ['a'], 222];
// console.log(Arr1[2] + Arr2[2]);

// Завдання №2
Arr1[4] = 22;
// console.table(Arr1);

// Завдання №3
for (const arr1 of Arr1) {
    // console.log(typeof arr1);
}

// Завдання №4
const message = 'Welcome to Ukraine!'

// const arrMessage = message.split(''); 
// console.log(message.split(''));
// console.log(message.indexOf('l'));

// Завдання №5
const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);

// styles.splice(1, 0, 'Класика');
// console.log(styles);

// console.log(styles.shift());
// console.log(styles);

// styles.unshift('Реп', 'Реггі');
// console.log(styles);

// Завдання №6

// const ask = prompt('Вкажіть свою країну.');
console.log(ask);
const country = ['Китай', 'Чилі', 'Австралія', 'Індія', 'Ямайка'];
const prise = ['100', '250', '170', '80', '120'];

// switch (ask) {
//     case 'Китай':
//         alert(`Доставка в ${country[0]} буде коштувати ${prise[0]} кредитів.`);
//         break;
    
//     case 'Чилі':
//         alert(`Доставка в ${country[1]} буде коштувати ${prise[1]} кредитів.`);
//         break;
    
//     case 'Австралія':
//         alert(`Доставка в ${country[2]} буде коштувати ${prise[2]} кредитів.`);
//         break;
    
//     case 'Індія':
//         alert(`Доставка в ${country[3]} буде коштувати ${prise[3]} кредитів.`);
//         break;
    
//     case 'Ямайка':
//         alert(`Доставка в ${country[4]} буде коштувати ${prise[4]} кредитів.`);
//         break;
    
//     default:
//         alert(`У вашій країні доставка недоступна.`);
// }