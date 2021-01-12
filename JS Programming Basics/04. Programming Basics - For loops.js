//23.05.2020 For Loops Lab

//Task 1

// function solve() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// solve();

//Task 2

// function solve(n) {
//     n = + n;
//     for (let i = n; i >= 1; i--) {
//         console.log(i);
//     }
// }
// solve("5");

//Task 3

// function solve(n) {
//     n = + n;
//     for (let i = 1; i <= n; i += 3) {
//         console.log(i);
//     }
// }
// solve("15");

//Task 4

// function solve(n) {
//     n = + n;
//     for (let i = 0; i <= n; i += 2) {
// console.log(Math.pow(2,i));
//     }
// }
// solve('8');

//Task 5

// function solve(txt) {
//     for (let i = 0; i < txt.length; i++) {
//         console.log(txt[i]);
//     }
// }
// solve("ice cream");

//Task 6

// function solve(txt) {
//     let sum = 0;
//     for (let i = 0; i < txt.length; i++) {
//         let charachter = txt[i];
//         switch (charachter) {
//             case "a":
//                 sum += 1;
//                 break;
//             case "e":
//                 sum += 2;
//                 break;
//             case 'i':
//                 sum += 3;
//                 break;
//             case 'o':
//                 sum += 4;
//                 break;
//             case 'u':
//                 sum += 5;
//                 break;
//         }
//     }
//     console.log(sum);
// }
// solve("beer");

//Task 7

// function solve (digits) {
//     let sum = 0;
//     let num = 0;
//     for (let i = 0; i < digits.length; i++) {
//         num = digits[i];
//         num = + num;
//         sum += num;
//     }
//     console.log(`The sum of the digits is:${sum}`);
// }
// solve("564891")

//Task 8

// function solve(num1, num2) {
//     num1 = + num1;
//     num2 = + num2;
//     let sum = 0;
//     let onlyNeeded = "";
//     for (let i = num1; i <= num2; i++) {
//         if (i % 9 == 0) {
//             sum += i;
//             onlyNeeded += i + ' ';
//         }
//     }
//     console.log(`The sum: ${sum}`);
//     console.log(onlyNeeded);
// }
// solve("100", "200");

//But because of Judge:

// function solve(num1, num2) {
//     num1 = + num1;
//     num2 = + num2;
//     let sum = 0;
//     let onlyNeeded = "";
//     for (let i = num1; i <= num2; i++) {
//         if (i % 9 == 0) {
//             sum += i;
//             onlyNeeded = i;
//         }
//     }
//     console.log(`The sum: ${sum}`);
//     for (let i = num1; i <= num2; i++) {
//         if (i % 9 == 0) {
//             sum += i;
//             onlyNeeded = i;
//             console.log(onlyNeeded);
//         }
//     }
// }
// solve("100", "200");

//Task 9

// function solve (age, priceP, priceToy) { // Because of Judge - need array for this task
//     age = + age;
//     priceP = + priceP;
//     priceToy = + priceToy;
//     let money = 0;
//     let toys = 0;
//     let brotherTakes = 0;
//     for (let i = 1; i <= age; i++) {
//         if (i % 2 === 0) {
//             money = money + ((i - (i/2))*10);
//             brotherTakes++;
//         } else {
//             toys++;
//         }
//     }
//     let totalMoney = money + (priceToy * toys) - brotherTakes;
//     if (totalMoney >= priceP) {
//         console.log(`Yes! ${(totalMoney - priceP).toFixed(2)}`);
//     } else {
//         console.log(`No! ${(priceP - totalMoney).toFixed(2)}`);
//     }
// }
// solve("21", "1570.98", "3");

// 24.05.2020 Exercise

//Task 1

//  function solve() {
//      for(let i = 7; i <= 997; i += 10) {
//          console.log(i);
//      }
//  }
//  solve();

// function solve() {
//     for (let i = 1; i <= 1000; i++) {
//         if (i % 10 === 7) {
//             console.log(i);
//         }
//     }
// }
// solve();

//Task 2

// function solve(num) {
//     num = + num;
//     for (let i = 1; i <= 10; i++) {
//         let result = i*num;
//         console.log(`${i} * ${num} = ${result}`);
//     }
// }
// solve(5);

//Task 3

// function solve(num1, num2) {
//     num1 = + num1;
//     num2 = + num2;
//     for ( let i = num1; i <= num2; i += 4){
//         console.log(i);
//     }
// }
// solve("2020", "2032")

//Task 4

// function solve(num) {
//     num = + num;
//     let factoriel = 1;
//     for (let i = 1; i <= num; i++) {
//         factoriel = i * factoriel; // OR factoriel *= i;
//     }
//     console.log(factoriel);
// }
// solve(8)

//Task 5

// function solve(text) {
//     let count = text.length;
//     let countWords = 1;
// for (let i = 0; i <= count; i++) {
//     let character = text[i];
//     if (character === " ") {
//         countWords ++;
//     }
// }
//    if (countWords > 10) {
//        console.log(`The message is too long to be send! Has ${countWords} words.`);
//    } else {
//        console.log('The message was send successfully!');
//    }
// }
// solve("This message has ten words and you can send it!")

//Task 6 - Error in task

// function solve(benzin, razhod, laps) {
//     benzin = + benzin;
//     razhod = + razhod;
//     laps = + laps;
//     let lapStop = 0;
//     for (let i = 1; i <= laps; i++) {
//         benzin -= razhod
//         if (i == 1) {
//             razhod -= 0.1;
//         }
//         if (benzin <= 0) {
//             break;
//         }
//         lapStop++
//     }
//     if (benzin <= 0) {
//         console.log(`You are out of fuel in round ${lapStop}!`)
//     } else {
//         console.log('Congrats! You won the race!')
//     }
// }
// solve("70", "6.5", "10")

//Task 7

// function solve(input) {
//     let n = Number(input[0]);
//     let p1Count = 0;
//     let p2Count = 0;
//     let p3Count = 0;
//     let p4Count = 0;
//     let p5Count = 0;
//     for (let i = 1; i <= n; i++) {
//         let char = Number(input[i])
//         if (char < 200) {
//             p1Count++
//         } else if (char < 400) {
//             p2Count++
//         } else if (char < 600) {
//             p3Count++
//         } else if (char < 800) {
//             p4Count++
//         } else {
//             p5Count++
//         }
//     }
//     console.log(`${(p1Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p2Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p3Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p4Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p5Count / n * 100).toFixed(2)}%`);
// }
// solve(["7","800","801","250","199","399","599","799"])

//Task 8

// function solve(input) {
//     let n = Number(input[0]);
//     let p1Count = 0;
//     let p2Count = 0;
//     let p3Count = 0;
//     for (let i = 1; i <= n; i++) {
//         let char = Number(input[i])
//         if (char % 2 === 0) {
//             p1Count++
//         }
//         if (char % 3 === 0) {
//             p2Count++
//         }
//         if (char % 4 === 0) {
//             p3Count++
//         }
//     }
//     console.log(`${(p1Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p2Count / n * 100).toFixed(2)}%`);
//     console.log(`${(p3Count / n * 100).toFixed(2)}%`);
// }
// solve(["10","680","2","600","200","800","799","199","46","128","65"])

//Task 9

function solve(input) {
    let n = Number(input[0]);       // Seems not needed
    let salary = Number(input[1]);
    for (let i = 1; i < input.length; i++) {  //Important to use input.length instead of n
        let tab = input[i];
        switch (tab) {
            case "Facebook":
               salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }
    if (salary > 0){
        console.log(`${(salary).toFixed(0)}`)
    }
}
solve(["10","1050","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])


// Task 10

// function solveTen(input) {
//     let n = Number(input[0]);
//     let num = 100000;
//     for (let i = 1; i <= n; i++) {
//         let min = Number(input[i]);
//         if (min < num) {
//             num = min;
//         }
//     }
//     console.log(num);
// }
// solveTen(["1",
// "999"])








