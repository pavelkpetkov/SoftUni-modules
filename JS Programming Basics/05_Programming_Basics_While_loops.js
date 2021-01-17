//30.05.2020 While Loops Lab

//Task 1

function solve(input) {
    let index = 0;
    while (true) {
       let text = input[index++];
        if (text === "Stop") {
            break;
        }
        console.log(text);
    }
}
solve(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"])

//Task 2

function solve(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let currentPass = input[index++];
    while (currentPass !== password) {
        currentPass = input[index++];
    }
    console.log(`Welcome ${username}!`);
}
solve(["Gosho", "secret", "secret"])

//Task 3

function solveThree(input) {
    let numberToCheck = Number(input[0]);
    let index = 1;
    let currentNumber = Number(input[index++]);
    let sum = 0;
    while (sum < numberToCheck) {
        sum += currentNumber;
        currentNumber = Number(input[index++]);
    }
    console.log(sum);
}
solveThree(["20", "1", "2", "3", "4", "5", "6"])

//Task 4

function solve(numArr) {
    num = Number(numArr[0]);
    let myArrayNum = 1;
    while (myArrayNum <= num) {
        console.log(myArrayNum);
        myArrayNum = 2 * myArrayNum + 1;
    }
}
solve(["31"])

//Task 5

function solve(input) {
    let index = 0;
    let sum = 0;
    let currentOperation = input[index];
    while (currentOperation !== "NoMoreMoney") {
        currentOperation = + currentOperation;
        if (currentOperation < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${currentOperation.toFixed(2)}`);
        sum += currentOperation;
        currentOperation = input[++index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
solve(["5.51", "69.42", "100", "NoMoreMoney"])

// Also this works:

function solveNew(imput) {
    let sum = 0;
    for (let index = 0; index < imput.length; index++) {
        let currentOperation = imput[index];
        if (currentOperation !== "NoMoreMoney") {
            currentOperation = + currentOperation;
            if (currentOperation < 0) {
                console.log("Invalid operation!");
                break;
            }
            sum += currentOperation;
            console.log(`Increase: ${currentOperation.toFixed(2)}`);
        }
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
solveNew(["120", "45.55", "-150"]);

//Task 6

function solve (input) {
    let index = 0;
    let currentNum = input[index++];
    let maxNum = -10000000 ;
    while (currentNum !== "Stop") {
        currentNum = + currentNum;
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }
        currentNum = input[index++];
    }
    console.log(maxNum)
}
solve(["-1", "-2", "Stop"]);

//Task 7

function solve (input) {
    let index = 0;
    let currentNum = input[index++];
    let minNum = 10000000 ;
    while (currentNum !== "Stop") {
        currentNum = + currentNum;
        if (currentNum < minNum) {
            minNum = currentNum;
        }
        currentNum = input[index++];
    }
    console.log(minNum)
}
solve(["100", "99", "80", "70", "Stop"])

//Task 8

function solve(input) {
    let name = input[0];
    let index = 1;
    let grades = Number(input[index]);
    let poorGrades = 0;
    let yearFinished = 1;
    let combinedGrades = 0;
    while (index < input.length) {
        if (grades < 4) {
            poorGrades++
        } else {
            yearFinished++;
        }
        if (poorGrades >= 2) {
            console.log(`${name} has been excluded at ${yearFinished} grade`)
            break;
        }
        combinedGrades += grades;
        index++;
        grades = Number(input[index]);
    }
    if (yearFinished >= 12) {
        console.log(`${name} graduated. Average grade: ${(combinedGrades / 12).toFixed(2)}`)
    }
}
solve()

//Task 9

function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volumeTotal = width * length * height;
    let volumeBoxes = 0;
    let index = 3;
    let boxes = input[index++];
    while (boxes != "Done") {
        if (volumeBoxes > volumeTotal) {
            console.log(`No more free space! You need ${(volumeBoxes - volumeTotal)} Cubic meters more.`);
            break;
        }
        boxes = + boxes;
        volumeBoxes += boxes;
        boxes = input[index++]
    }
    if (volumeTotal >= volumeBoxes) {
        console.log(`${volumeTotal - volumeBoxes} Cubic meters left.`)
    }
}
solve(["10", "1", "2", "4", "6", "Done"])


//31.05.2020 Exercise:


//Task 1

function solve (input) {
    let desiredBook = input[0];
    let index = 1;
    let checked = 0;
    let checkingBook = input[index++];
    while (checkingBook !== desiredBook || checkingBook !== "No More Books") {
        if (checkingBook == desiredBook) {
            console.log(`You checked ${checked} books and found it.`)
            break;
        }
        if  (checkingBook == "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${checked} books.`)
            break;
        }
        checked++;
        checkingBook = input[index++];
    }
}
solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

//Task 2

function solve(input) {
    let badGradesMax = Number(input[0]);
    let badGrades = 0;
    let score = 0;
    let allTasks = 0;
    let lastTask = "";
    let index = 1;
    let current = input[index++];
    while (index <= input.length) {
        if (current == "Enough") {
            console.log(`Average score: ${(score / ((index - 2) / 2)).toFixed(2)}`);
            console.log(`Number of problems: ${allTasks}`);
            console.log(`Last problem: ${lastTask}`);
        }
        lastTask = current;
        allTasks++;
        current = Number(input[index++]);
        if (current <= 4) {
            badGrades++;
        }
        if (badGrades >= badGradesMax) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }
        score += current;
        current = input[index++];
    }
}
solve(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);

//Task 3

function solve(input) {
    let needed = Number(input[0]);
    let currentMoney = Number(input[1]);
    let daysSpending = 0;
    let totalDays = 0;
    let index = 2;
    let current = input[index++];
    while (index < input.length) {
        if (current == "spend") {
            daysSpending++;
            totalDays++;
            current = Number(input[index++]);
            currentMoney -= current;
        } else if (current == "save") {
            totalDays++;
            daysSpending = 0;
            current = Number(input[index++]);
            currentMoney += current;
        }
        if (daysSpending == 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }
        if (currentMoney < 0) {
            currentMoney = 0;
        }
        if (currentMoney >= needed) {
            console.log(`You saved the money for ${totalDays} days.`)
            break;
        }
        current = input[index++];
    }
}
solve(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])

//Task 4

function steps(input) {
    let index = 0;
    let totalSteps = 0;
    let currentSteps = input[index];
    while (index < input.length) {
        currentSteps = input[index];
        if (currentSteps != "Going home") {
            currentSteps = Number(input[index]);
            totalSteps += currentSteps;
        }
        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }
        if (currentSteps === "Going home") {
            index++;
            currentSteps = Number(input[index]);
            totalSteps += currentSteps;
            if (totalSteps >= 10000) {
                console.log("Goal reached! Good job!");
                console.log(`${totalSteps - 10000} steps over the goal!`);
                break;
            }
            if (totalSteps < 10000) {
                console.log(`${10000 - totalSteps} more steps to reach goal.`);
                break;
            }
        }
        index++;
    }
}
steps(["1000", "1500", "2000", "6500"]);

//Task 5

function coins(input) {
    let change = Number(input[0]) * 100;
    change = Math.floor(change);
    let coinsCount = 0;
    while (change !== 0) {
        if (change >= 200) {
            change -= 200;
            coinsCount++;
        } else if (change >= 100) {
            change -= 100;
            coinsCount++;
        } else if (change >= 50) {
            change -= 50;
            coinsCount++;
        } else if (change >= 20) {
            change -= 20;
            coinsCount++;
        } else if (change >= 10) {
            change -= 10;
            coinsCount++;
        } else if (change >= 5) {
            change -= 5;
            coinsCount++;
        } else if (change >= 2) {
            change -= 2;
            coinsCount++;
        } else if (change >= 1) {
            change -= 1;
            coinsCount++;
        }
    }
    console.log(coinsCount);
}
coins(["2.73"])

//Task 6

function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let areaCake = width * length;
    let index = 2;
    let current = input[index];
    while (index < input.length) {
        current = input[index];
        if (current != "STOP") {
            current = Number(input[index]);
            areaCake -= current;
        } else {
            console.log(`${areaCake} pieces are left.`);
            break;
        }
        if (areaCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(areaCake)} pieces more.`);
            break;
        }
        index++;
    }
}
solve(["10", "2", "2", "4", "6", "STOP"]);










