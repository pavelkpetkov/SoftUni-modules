// function solve(num) {
//     console.log(num*2);
// }
// solve(20);

// function solveTwo(num) {
//     num = + num;
//     if (num >= 5.5) {
//         console.log("Excellent");
//     } else {
//         console.log("Not excellent");
//     }
// }
// solveTwo(5.4);

// function solveThree () {
//     let i = 1;
//     while (i <= 5) {
//         console.log (i);
//         i++
//     }
// }
// solveThree ();

// function solveFour (num) {
//     num = + num;
//     while (num >= 1) {
//         console.log (num);
//         num --;
//     }
// }
// solveFour (8);

// function solveFive (m, n) {
//     m = + m;
//     n = + n;
//     while (m >= n) {
//         console.log (m);
//         m--;
//     }
// }
// solveFive(6, 2);

// function solveSix (name, age, grade) {
//     age =+ age;
//     grade =+ grade;
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}.`);
// }
// solveSix ('John', 15, 5.54678);

// function solveSeven(number) {
//     number = + number;
//     switch (number) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//         default:
//             console.log("Error!");
//     }
// }
// solveSeven (15);

// function solveEight (country) {
//     if (country == "England" || country == "USA") {
//         console.log("English");
//     } else if (country == "Spain" || country == "Argentina" || country == "Mexico") {
//         console.log("Spanish");       
//     } else {
//         console.log("unknown");
//     }
// }
// solveEight ("Mexico");

// function solveNine(day, age) {
//     age = + age;
//     let price = 0;
//     if (day == "Weekday") {
//         if (age >= 0 && age <= 18) {
//             price = 12;
//         } else if (age > 18 && age <= 64) {
//             price = 18;
//         } else if (age > 64 && age <= 122) {
//             price = 12;
//         } else {
//             console.log("Error!");
//         }
//     } else if (day == "Weekend") {
//         if (age >= 0 && age <= 18) {
//             price = 15;
//         } else if (age > 18 && age <= 64) {
//             price = 20;
//         } else if (age > 64 && age <= 122) {
//             price = 15;
//         } else {
//             console.log("Error!");
//         }
//     } else {
//         if (age >= 0 && age <= 18) {
//             price = 5;
//         } else if (age > 18 && age <= 64) {
//             price = 12;
//         } else if (age > 64 && age <= 122) {
//             price = 10;
//         } else {
//             console.log("Error!");
//         }
//     }
//     if (age >= 0 && age <= 122) {
//         console.log (`${price}$`);
//     }
// }
// solveNine('Holiday', 15);

// function solveTen () {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
// //             console.log (i);
// //         }
// //     }
// // }
// solveTen();

// function solveEleven (num) {
//     let sum = 0;
//     let counter = 1;
//     let i = 1;
//     while (counter <= num) {
//         if (i % 2 != 0) {
//             counter ++;
//             sum += i;
//             console.log(i);
//         }
//         i++;
//     }
// console.log(`Sum: ${sum}`);
// }
// solveEleven (7);

//Excercises

function solve(num) {
    num = + num;
    let output = "";
    if (num >= 0 && num <= 2) {
        output = "baby";
    } else if (num >= 3 && num <= 13) {
        output = "child";
    } else if (num >= 14 && num <= 19) {
        output = "teenager";
    } else if (num >= 20 && num <= 65) {
        output = "adult";
    } else if (num >= 66) {
        output = "elder";
    } else {
        output = "out of bounds";
    }
    console.log(output);
}
// solve(20);

function solveTwo (one, two) {
    one =+ one;
    two =+ two;
    if (two > 15) {
        two = 15
    }
    let result = one.toFixed(two);
    console.log(parseFloat(result));
}
// solveTwo(10.5,3);

function solveThree (n) {
    n = + n;
    if (n % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (n % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (n % 6 === 0) {
        console.log(`The number is divisible by 6`);
    } else if (n % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (n % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log("Not divisible");
    }
} 
// solveThree (1643);

function vacation(people, kind, day) {
    people = + people;
    let price = 0;
    if (kind === "Business" && people >= 100) {
        people -= 10; 
    }
    let totalPrice =0;
    if (day === "Friday") {
        switch (kind) {
            case "Students":
                price = 8.45;
                break;
            case "Business":
                price = 10.90;
                break;
            case "Regular":
                price = 15;
                break;
        }
    } else if (day === "Saturday") {
        switch (kind) {
            case "Students":
                price = 9.80;
                break;
            case "Business":
                price = 15.60;
                break;
            case "Regular":
                price = 20;
                break;
        }
    } else if (day === "Sunday") {
        switch (kind) {
            case "Students":
                price = 10.46;
                break;
            case "Business":
                price = 16.0;
                break;
            case "Regular":
                price = 22.5;
                break;
        }
    }
    totalPrice = people * price;
    if (kind === "Students" && people >= 30) {
        totalPrice *= 0.85;
    }
    if (kind === "Regular" && people >= 10 && people <= 20) {
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
// vacation (40, "Regular", "Saturday");

function year (number) {
    let isItTrue = false;
    if (number % 4 === 0 && number % 100 !== 0) {
        isItTrue = true;
    }
    if (number % 400 === 0) {
        isItTrue = true;
    }
    if (isItTrue) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
// year(1600);

// function printAndSum (one, two) {
//     let sum = 0;
//     let i = one;
//     let result = "";
//     while (i <= two) {
//         result += i + " ";
//         sum += i;
//         i++;
//     }
//     console.log(result);
//     console.log(`Sum: ${sum}`);
// }


// function password(input) {
//     let user = input[0];
//     let password = "";
//     let i = 1;
//     for (let j = user.length - 1; j >= 0; j--) {
//         let char = user[j];
//         password += char;
//         char = "";
//     }
//     let counter = 0;
//     while (i < input.length) {
//         if (input[i] === password) {
//             console.log(`User ${user} logged in.`);
//         } else {
//             counter++;
//             if (counter == 4) {
//                 console.log(`User ${user} blocked!`);
//                 break;
//             };
//             console.log("Incorrect password. Try again.");
//         };
//         i++;
//     };
// };
// password(['sunny','rainy','cloudy','sunny','not sunny']);

// function pyramid(base, increment) {
//     base = + base;
//     increment = + increment;
//     let stone = 0;
//     let marble = 0;
//     let lapisLazuli = 0;
//     let gold = 0;
//     let counter = 0;
//     for (let i = base; i >= 1; i -= 2) {
//         counter++;
//         let layerDecor = 0;
//         let layerStone = 0;
//         if (i === 1 || i === 2) {
//             layerDecor = i * i * increment;
//             gold += layerDecor;
//         } else if (counter % 5 === 0) {
//                 layerDecor = (2 * i + (2 * (i - 2))) * increment;
//                 lapisLazuli += layerDecor;
//                 layerStone = (i * i - (2 * i + (2 * (i - 2)))) * increment;
//                 stone += layerStone;
//         } else {
//             layerDecor = (2 * i + (2 * (i - 2))) * increment;
//             marble += layerDecor;
//             layerStone = (i * i - (2 * i + (2 * (i - 2)))) * increment;
//             stone += layerStone;
//         }
//     }
//     console.log(`Stone required: ${Math.ceil(stone)}`);
//     console.log(`Marble required: ${Math.ceil(marble)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
//     console.log(`Gold required: ${Math.ceil(gold)}`);
//     console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
// }
// pyramid(23, 0.5);

// function bitcoin(imput) {
//     let i = 0;
//     let sum = 0;
//     let bitC = 0;
//     let dayCount = 0;
//     let dayFirst = 0;
//     let isFlag = false;
//     while (i < imput.length) {
//         let shift = imput[i];
//         dayCount++;
//         if (dayCount % 3 === 0) {
//             shift *= 0.7;
//         };
//         let currentSum = shift * 67.51;
//         sum += currentSum;
//         if (sum >= 11949.16) {
//             while (sum >= 11949.16) {
//                 bitC++;
//                 sum -= 11949.16;
//                 if (isFlag) {
//                 } else if (bitC == 1) {
//                     isFlag = true;
//                     dayFirst += dayCount;
//                 };
//             };
//         };
//         currentSum = 0;
//         i++;
//     };
//     console.log(`Bought bitcoins: ${bitC}`);
//     if (isFlag) {
//         console.log(`Day of the first purchased bitcoin: ${dayFirst}`);
//     };
//     console.log(`Left money: ${sum.toFixed(2)} lv.`);
// };
// bitcoin([3124.15, 504.212, 2511.124]);
