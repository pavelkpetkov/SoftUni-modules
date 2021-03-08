
//exercises:

//Task 'Fruit':

// function fruit(type, grams, price) {
//     grams = Number(grams);
//     price = Number(price);
//     console.log(`I need $${(price * grams / 1000).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${type}.`);
// }
// fruit('apple', 1563, 2.35);

// //Task 'GCD':

// function gcd(one, two) {
//     one = Number(one);
//     two = Number(two);
//     if (one < two) {
//         for (let i = one; i > 0; i--) {
//             if (one % i == 0 && two % i == 0) {
//                 console.log(i);
//                 break;
//             }
//         }
//     } else {
//         for (let i = two; i > 0; i--) {
//             if (one % i == 0 && two % i == 0) {
//                 console.log(i);
//                 break;
//             }
//         }
//     }
// }
// gcd(2154, 458);

// //Task 'Same Numbers':

// function sameNumbers(num) {
//     let str = `${num}`;
//     let arr = str.split('');
//     let flag = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             flag = false;
//             break;
//         }
//     }
//     arr = arr.map(Number);
//     let sum = arr.reduce(function (a, b) {
//         return a + b;
//     }, 0)
//     if (flag) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
//     console.log(sum);
// }
// sameNumbers(1234);

//Task 'Time to walk':

// function timeToWalk(steps, lengthStep, speed) {

//     let distance = steps * lengthStep;
//     let timeInHous = (distance / 1000) / speed;
//     let hours = (Math.trunc(timeInHous));
//     let minutes = (Math.trunc((timeInHous - hours) * 60));
//     let seconds = ((((timeInHous - hours) * 60) - minutes) * 60).toFixed(0);
//     for (let i = distance; i > 500; i -= 500) {
//         minutes ++;
//     };
//     hours = hours.toString().padStart(2, "0");
//     minutes = minutes.toString().padStart(2, "0");
//     seconds = seconds.toString().padStart(2, '0');
//     console.log(`${hours}:${minutes}:${seconds}`);
// }
// timeToWalk(400, 1, 5.9);

//Task 'Road radar':

// function roadRadar(speed, area) {
//     speed = Number(speed);
//     let limit;
//     switch (area) {
//         case 'motorway':
//             limit = 130;
//             break;
//         case 'interstate':
//             limit = 90;
//             break;
//         case 'city':
//             limit = 50;
//             break;
//         case 'residential':
//             limit = 20;
//             break;
//     }
//     if (speed <= limit) {
//         console.log(`Driving ${speed} km/h in a ${limit} zone`);
//     } else {
//         let difference = speed - limit;
//         if (difference <= 20) {
//             console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
//         } else if (difference <= 40) {
//             console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);   
//         } else {
//             console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
//         }
//     }
// }
// roadRadar(200, 'motorway');

// //Task 'Cooking by Numbers':

// function cookingNumbers (num, one, two, three, four, five) {
//     num = Number(num);
//     let arr = [one, two, three, four, five];
//     for (let command of arr) {
//         if (command == 'chop') {
//             num /= 2;
//             console.log(num);
//         } else if (command == 'dice') {
//             num = Math.sqrt(num);
//             console.log(num);
//         } else if (command == 'spice') {
//             num ++;
//             console.log(num);
//         } else if (command == 'fillet') {
//             num *= 0.8;
//             console.log(num);
//         } else if (command == 'bake') {
//             num *= 3;
//             console.log(num);
//         }
//     }
// }
// cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// //Task 'Validity Checker':

// function validityChecker(x1, y1, x2, y2) {
//     let distanceToOrigin1 = Math.sqrt(x1 ** 2 + y1 ** 2);
//     let distanceToOrigin2 = Math.sqrt(x2 ** 2 + y2 ** 2);
//     let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     if (Number.isInteger(distanceToOrigin1)) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     }
//     if (Number.isInteger(distanceToOrigin2)) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     } else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     }
//     if (Number.isInteger(distance)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }
// validityChecker(2, 1, 1, 1);

// //Task 'Words Uppercase':

// function wordsUppercase (string) {
//     let regex = /[\w]+/g
//     let match = regex.exec(string);
//     let result = [];
//     while (match !== null) {
//         result.push(match[0].toUpperCase());
//         match = regex.exec(string);
//     }
//     console.log(result.join(', '));
// }
// wordsUppercase ('Functions in JS can be nested, i.e. hold other functions I\'m');