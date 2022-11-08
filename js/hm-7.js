// Завдання №1

// const str = function () {
//     console.log('Привіт JavaScript');
// }

// str();

// Завдання №2

// const strName = function (name) {
//     const str = `Привіт, ${name}`;
//     console.log(str);
// }

// strName('Василь');

// Завдання №3

//const mul = function (n, m) {
//     const dob = n * m;
//     console.log(dob);
//     const sum = n + m;
//     console.log(sum);
//     const diff = n - m;
//     console.log(diff);
// }

// mul(10, 20);

// Завдання №4

// const myNewArrowFunction = (...rest) => {
//     console.log(rest);
// }

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// Завдання №5

const myAverageScore = function (myScore) {
    let total = 0;
    for (const averageScore of myScore) {
        total += averageScore / 4;
    }
    console.log(total);

    if (total > 91 && total < 100) {
        console.log('My average score: A');
    } else if (total > 81 && total < 90) {
        console.log('My average score: B');
    } else if (total > 71 && total < 80) {
        console.log('My average score: C');
    } else {
        console.log('My average score: D');
    }
}



// myAverageScore([100, 75, 81, 96]);
// myAverageScore([45, 63, 85, 70]);
// myAverageScore([77, 82, 60, 58]);
// myAverageScore([93, 99, 93, 96]);