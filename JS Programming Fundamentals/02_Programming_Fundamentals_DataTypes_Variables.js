
// function sumDigits(num) {
//     num = + num;
//     let myString = num.toString();
//     let result = 0;
//     for (let i = 0; i < myString.length; i++) {
//         result += Number(myString[i]);
//     }
//     console.log(result);
// }
// sumDigits(97561)

// function charToString (one, two, three) {
//     console.log(`${one}${two}${three}`);
// }
// charToString('%','2','o');

// function townInfo (town, pop, area) {
// console.log(`Town ${town} has population of ${pop} and area ${area} square km.`)
// }
// townInfo ('Sofia', 1286383, 492);

// function metersKilometers (meters) {
// console.log((meters/1000).toFixed(2));
// }
// metersKilometers (798)

// function poundsDollars (pounds) {
// console.log((pounds*1.31).toFixed(3));
// }
// poundsDollars(80)

// function reversedChar (one, two, three) {
//  console.log(`${three} ${two} ${one}`);
// }
// reversedChar ('A', 'B', 'C');

// function upperOrLower(letter) {
//     if (letter == letter.toUpperCase()) {
//         console.log("upper-case");
//     } else {
//         console.log("lower-case");
//     }
// }
// upperOrLower("l");

// function calculator(one, symbol, two) {
//     if (symbol == "+") {
//         console.log((one + two).toFixed(2));
//     } else if (symbol == "-") {
//         console.log((one - two).toFixed(2));
//     } else if (symbol == "*") {
//         console.log((one * two).toFixed(2));
//     } else if (symbol == "/") {
//         console.log((one / two).toFixed(2));
//     } else if (symbol == "%") {
//         console.log((one % two).toFixed(2));
//     }
// }
// calculator(5, '+', 10);

// function gladiatorExpences(loses, prHelmet, prSword, prShield, prArmour) {
//     let counterHelmets = 0;
//     let counterSwords = 0;
//     let counterShields = 0;
//     let counterArmour = 0;
//     for (let i = 1; i <= loses; i++) {
//         if (i % 2 == 0) {
//             counterHelmets ++;
//         }
//         if (i % 3 == 0) {
//             counterSwords ++;
//         }
//         if (i % 6 == 0) {
//             counterShields ++;
//             if (counterShields % 2 == 0) {
//                 counterArmour ++;
//             }
//         }
//     }
//  let expenses = (counterHelmets * prHelmet) + (counterSwords * prSword) + (counterShields * prShield) + (counterArmour * prArmour);
// console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
// }
// gladiatorExpences(23, 12.50, 21.50, 40, 200);

function spices(yield) {
    let mined = 0;
    let days = 0;
    while (yield >= 100) {
        mined += yield;
        mined -= 26;
        if (mined < 0) {
            mined = 0;
        }
        yield -= 10;
        days++;
    }
    mined -= 26;
    if (mined < 0) {
        mined = 0;
    }
    console.log(`${days}`);
    console.log(`${mined}`);
}
spices(111);
