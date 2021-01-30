//Exercises:

// function smallestNumber (one, two, three) {
//     if (one <= two && one <= three) {
//         console.log(one);
//     } else if (two <= one && two <= three) {
//         console.log(two);
//     } else if (three <= one && three <= two) {
//         console.log(three)
//     } 
// }
// smallestNumber(600, 342, 123) 

// function addAndSubtract(one, two, three) {
//     let Sum = one + two;
//     let result = Sum - three;
//     console.log(result);
// }
// addAndSubtract(23, 6, 10);

// function addSub(one, two, three) {
//     function sum() {
//         return one + two;
//     }
//     function subtract () {
//         return sum() - three;
//     }
//     console.log(subtract());
// }
// addSub(23, 6, 10)

// function charInRange(one, two) {
//     let n = one.charCodeAt(0);
//     let m = two.charCodeAt(0);
//     let result = "";
//     if (n < m) {
//         for (let i = n + 1; i < m; i++) {
//             result += String.fromCharCode(i) + " ";
//         }
//         console.log(result.trim());
//     } else {
//         for (let j = m + 1; j < n; j++) {
//             result += String.fromCharCode(j) + " ";
//         }
//         console.log(result.trim());
//     }
// }
// charInRange('a', 'd');

// function oddAndEvenSum (num) {
//     let myString = num.toString();
//     // console.log(myString)
//     let sumOdd = 0;
//     let sumEven = 0;
//     for (let i = 0; i < myString.length; i++) {
//         let current = Number(myString[i]);
//         if (current % 2 === 0) {
//             sumEven += current;
//         } else {
//             sumOdd += current;
//         }
//     }
//     console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
// }
// oddAndEvenSum(1000435);


// function palindromeIntegers (imput) {

//     for (let i = 0; i < imput.length; i++) {
//         let current = imput[i].toString();
//         let n = parseInt(current.length/2);
//         let isMagic = true;
//         for (let j = 0; j < n; j++) {
//            if (Number(current[j]) !== Number(current[current.length - j - 1])) {
//             isMagic = false;
//             break;
//            } else {
//                isMagic = true;
//            }
//         }
//         if (isMagic) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
// }
// palindromeIntegers([132, 323, 421, 121]);

// function passwordValidator(imput) {
//     let isLongEnough = false;
//     let isFullEnough = true;
//     let hasItHumbers = false;
//     let counterOfNumbers = 0;
//     if (imput.length >= 6 && imput.length <= 10) {
//         isLongEnough = true;
//     }
//     for (let i = 0; i < imput.length; i++) {
//         let current = imput[i];
//         if (current.charCodeAt() < 48 || current.charCodeAt() > 122) {
//             isFullEnough = false;
//         } else if (current.charCodeAt() > 57 && current.charCodeAt() < 65) {
//             isFullEnough = false;
//         } else if (current.charCodeAt() > 90 && current.charCodeAt() < 97) {
//             isFullEnough = false;
//         }
//         if (current.charCodeAt() > 47 && current.charCodeAt() < 57) {
//             counterOfNumbers++;
//         }
//     }
//     if (counterOfNumbers >= 2) {
//         hasItHumbers = true;
//     }
//     if (isLongEnough === false) {
//         console.log('Password must be between 6 and 10 characters');
//     }
//     if (isFullEnough === false) {
//         console.log('Password must consist only of letters and digits');
//     }
//     if (hasItHumbers === false) {
//         console.log('Password must have at least 2 digits');
//     }
//     if (isLongEnough && isFullEnough && hasItHumbers) {
//         console.log('Password is valid')
//     }
// }
// passwordValidator('Pa$s$s')

// function matrixNxN (n) {
//     for (let i = 0; i < n; i++) {
//         let result = "";
//       for (let j = 0; j < n; j++) {
//           result += n + " ";
//       }  
//       console.log(result.trim());  
//     }
// }
// matrixNxN(7)

// function perfectNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n / 2; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     if (sum === n) {
//         console.log("We have a perfect number!");
//     } else {
//         console.log("It's not so perfect.")
//     }
// }
// perfectNumber(1236498);

// function loadingBar(n) {
//     let myBar = [];
//     let num = n / 10;
//     let counter = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num === 0) {
//             break;
//         } else {
//             myBar.push("%");
//             counter++;
//         }
//     }
//     for (let j = 1; j <= (10 - num); j++) {
//         if (num === 10) {
//             break;
//         } else {
//             myBar.push(".")
//         }
//     }
//     myBar.unshift("[");
//     myBar.push("]");
//     if (counter == 10) {
//         console.log(`${counter * 10}% Complete!`);
//         console.log(`${myBar.join("")}`);
//     } else {
//         console.log(`${counter * 10}% ${myBar.join("")}`);
//         console.log("Still loading...");
//     }
// }
// loadingBar(50);

// function factorialDivision(n, m) {
//     let fact1 = 1;
//     let fact2 = 1;
//     for (let i = 1; i <= n; i++) {
//         fact1 *= i;
//     }
//     for (let j = 1; j <= m; j++) {
//         fact2 *= j;
//     }
//     console.log((fact1/fact2).toFixed(2))
// }
// factorialDivision(6, 2)
