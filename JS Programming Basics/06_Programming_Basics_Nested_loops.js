//06.06.2020 Lab

//Task 1

function solve(){
    let hours = 0;
    while (hours <= 23) {
        let minutes = 0;
        while (minutes <= 59) {
            console.log(`${hours}:${minutes}`);
            minutes++;
        }
        hours++;
    }
}
solve()

//Task 2

function solve() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let result = i * j;
            console.log(`${i} * ${j} = ${result}`)
        }
    }
}
solve();

//Task 3

function solve(input) {
    let n = Number(input[0]);
    let count = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    while (first <= n) {
        while (second <= n) {
            while (third <= n) {
                if ((first + second + third) == n) {
                    count++;
                }
                third++;
                if (third > n) {
                    third = 0;
                    break;
                }
            }
            second++;
            if (second > n) {
                second = 0;
                break;
            }
        }
        first++;
    }
    console.log(count);
}
solve(["5"]);

function solve(input) {
    let n = Number(input[0]);
    let count = 0;
    for (let first = 0; first <= n; first++) {
        for (let second = 0; second <= n; second++) {
            for (let third = 0; third <= n; third++) {
                if (first + second + third == n) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
solve(["20"]);

//Task 4

function solve(input) {
    let startInt = Number(input[0]);
    let endInt = Number(input[1]);
    let magicNum = Number(input[2]);
    let count = 0;
    let didWeFind = false;
    for (let i = startInt; i <= endInt; i++) {
        for (let j = startInt; j <= endInt; j++) {
            count++;
            if (i + j === magicNum) {
                didWeFind = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if (didWeFind) {
            break;
        }
    }
    if (!didWeFind) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}
solve(["23",
"24",
"20"])

//Task 5

//This is not working (10/100 & infinite):

// function solve(input) {
//     let destination = '';
//     let budget = 0;
//     let index = 0;
//     let currentLine = input[index];
//     while (currentLine !== 'End') {
//         destination = input[index++];
//         currentLine = input[index];
//         if (currentLine === "End") {
//             break;
//         }
//         let neededMoney = Number(input[index]);
//         while (neededMoney > budget) {
//             currentLine = Number(input[++index]);
//             budget += currentLine;
//         }
//         if (neededMoney <= budget) {
//             console.log(`Going to ${destination}!`);
//             budget = 0;
//         }
//         currentLine = input[index++];
//     }
// }
// solve()

//This works:

function solve(input) {
    let destination = '';
    let budget = 0;
    let isGoing = false;
    for (let index = 0; index < input.length; index++) {
        let currentLine = input[index];
        if (currentLine === "End") {
            break;
        }
        destination = input[index++]
        let neededMoney = Number(input[index]);
        while (!isGoing) {
            currentLine = Number(input[++index]);
            budget += currentLine;
            if (neededMoney <= budget) {
                isGoing = true;
            }
        }
        if (neededMoney <= budget) {
            console.log(`Going to ${destination}!`);
            budget = 0;
            isGoing = false;
        }
    }
}
solve(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])

//Task 6

function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let type = '';
    for (let i = floors; i >= 1; i--) {
        let roomsFloor = "";
        if (i == floors) {
            type = "L";
        } else if (i % 2 === 0 ) {
            type = "O"
        } else {
            type = "A"
        }
        for (let j = 0; j < rooms; j++) {
            let room = `${type}${i}${j} `;
            roomsFloor += room;
        }
        console.log(`${roomsFloor}`);
        roomsFloor = "";
    }
}
solve(["9", "5"])

//Task 7

function solve(input) {
    let index = 0;
    let movieName = "";
    let totalTickets = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
    let movieTickets = 0;
    let currentLine = input[index++];
    while (currentLine != "Finish") {
        if (currentLine === "Finish") {
            break;
        }
        movieName += currentLine;
        currentLine = Number(input[index++]);
        let movieAvailableTickets = currentLine;
        currentLine = input[index++];
        while (currentLine != "End") {
            switch (currentLine) {
                case "student":
                    studentCount++;
                    movieTickets++;
                    break;
                case "kid":
                    kidsCount++;
                    movieTickets++;
                    break;
                case "standard":
                    standardCount++;
                    movieTickets++;
                    break;
            }
            if (movieAvailableTickets === movieTickets) {
                break;
            }
            currentLine = input[index++];
        }
        console.log(`${movieName} - ${((movieTickets / movieAvailableTickets) * 100).toFixed(2)}% full.`)
        totalTickets += movieTickets;
        movieTickets = 0;
        movieName = "";
        if (currentLine === "Finish") {
            break;
        }
        currentLine = input[index++];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentCount / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsCount / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
solve(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


//Task 8

function solve(input) {
    let days = Number(input[0]);
    let index = 1;
    let totalMoney = 0;
    let daysWon = 0;
    let daysLost = 0;
    let gameName = "";
    for (let i = 1; i <= days; i++) {
        let current = input[index];
        let winsToday = 0;
        let losesToday = 0;
        while (current != "Finish") {
            gameName = input[index];
            let winOrLose = input[++index];
            if (winOrLose === "win") {
                winsToday++;
            } else {
                losesToday++;
            }
            current = input[++index];
            if (current === "Finish") {
                break;
            }
        }
        let weWinToday = false;
        if (winsToday > losesToday) {
            weWinToday = true;
        }
        let daylyMoney = winsToday * 20;
        if (weWinToday) {
            daylyMoney *= 1.10;
            daysWon++;
        } else {
            daysLost++;
        }
        totalMoney += daylyMoney;
        winsToday = 0;
        losesToday = 0;
        current = input[index++];
    }
    if (daysLost < daysWon) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
solve(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])


//07.06.2020 Exercise


//Task 1

function solve(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current ++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}
solve(["7"]);

//Task 2

function solve(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let myString = "";
    let myBingo = "";
    for (let i = firstNum; i <= secondNum; i++) {
        myString += i;
        let evenNum = 0;
        let oddNum = 0;
        for (let j = 0; j < 6; j++) {
            let myChar = Number(myString[j]);
            if (j % 2 !== 0) {
                evenNum += myChar;
            } else {
                oddNum += myChar;
            }
        }
        if (evenNum === oddNum) {
            myBingo += i + " ";
        }
        myString = "";
    }
    console.log(myBingo);
}
solve(["100115",
"100120"])

//Task 3

// WHY THIS IS NOT WORKING???

// function solve(input) {
//     let index = 0;
//     let current = input[index];
//     let sumPrime = 0;
//     let sumNotPrime = 0;
//     let isPrime = false;
//     while (current != "stop") {
//         current = input[index];
//         if (current === 'stop') {
//             break;
//         }
//         current = Number(input[index]);
//         if (current < 0) {
//             current = 0;
//             console.log("Number is negative.")
//         }
//         if (current == 1) {
//             sumPrime += 1;
//             sumNotPrime -= 1;
//         }
//         for (let j = 2; j < current; j++) {
//             if (current < 0) {
//                 current = 0;
//             }
//             if (current % j === 0) {
//                 isPrime = false;
//                 break;
//             } else if (current % j !== 0) {
//                 isPrime = true;
//             }
//         }
//         if (isPrime) {
//             sumPrime += current;
//         } else {
//             sumNotPrime += current;
//         }
//         current = input[index++];
//         if (current === 'stop') {
//             break;
//         }
//     }
//     console.log(`Sum of all prime numbers is: ${sumPrime}`);
//     console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
// }
// solve(["-30",
// "-83",
// "-33",
// "-1",
// "-20",
// "stop"])

//AND THIS WORKS???

function solve(input) {
    let index = 0;
    let current = input[index];
    let sumPrime = 0;
    let sumNotPrime = 0;
    while (current != "stop") {
        current = input[index];
        let num = Number(current);
        if (num < 0) {
            console.log("Number is negative.");
        } else {
            let count = 0;
            for (let i = 1; i <= num; i++) {
                if (num % i ===0 ) {
                    count++;
                }
            }
            if (count === 2) {
                sumPrime += num;
            } else {
                sumNotPrime += num;
            }
        }
        current = input[++index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}
solve(["30",
"83",
"33",
"-1",
"20",
"stop"])


//Task 4

function trainers(input) {
    let n = Number(input[0]);
    let index = 1;
    let current = input[index++];
    let totalgrades = 0;
    let tasks = 0;
    while (current !== "Finish") {
        if (current === "Finish") {
            break;
        }
        let presentationName = current;
        let gradesPresentation = 0;
        for (let i = 1; i <= n; i++) {
            current = Number(input[index++]);
            gradesPresentation += current;
        }
        let meanCurrent = gradesPresentation / n;
        console.log(`${presentationName} - ${(meanCurrent).toFixed(2)}.`);
        tasks ++;
        totalgrades += meanCurrent;
        current = input[index++];
    }
    console.log(`Student's final assessment is ${(totalgrades / tasks).toFixed(2)}.`)
}
trainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

//Task 5

function solve(input) {
    let n = Number(input[0]);
    let mySpecials = "";
    for (let i = 1111; i <= 9999; i++) {
        let current = "";
        current = i.toString();
        let isItOk = 0;
        for (let j = 0; j <= 3; j++) {
            let char = Number(current[j]);
            if (n % char === 0) {
                isItOk++;
            }
            if (isItOk === 4) {
                mySpecials += current + " ";
            }
        }
    }
console.log(mySpecials);
}
solve(["16"]);