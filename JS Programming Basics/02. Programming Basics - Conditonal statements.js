//Lection 09.05.2020 Conditional statements - Lab

function solve() {
    //булеви стойности true/false
    let firstNum = 3;
    let secondNum = 5;
    let isBigger = firstNum > secondNum;
    console.log(isBigger);
}
solve();

function solvee() {
    let firstNum = 10;
    let secondNum = 5;
    let isBigger = firstNum > secondNum;
    if (isBigger) {
        console.log('First number is bigger than second')
    }
    console.log('End');
}
solvee();

//Task 1

function isExcellent(number) {
    number = Number(number);
    if (number >= 5.50) {
        console.log("Excellent!");
    }
};
isExcellent("5");

//Task 2 

function biggerNum (firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (firstNum >= secondNum) {
        console.log(firstNum);
    } else {
        console.log(secondNum);
    }
}
biggerNum("-86", "7");

//Task 3

function isEven (num) {
    num = Number(num);
    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
isEven("2688");

//Task 4

function between100And200 (num) {
    num = Number(num);
    if (num < 100) {
        console.log('Less than 100');
    } 
    else if (num <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}
between100And200("85");

//Task 5

function passwordGuess (pass) {
    if (pass === "s3cr3t!P@ssw0rd") {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
passwordGuess ('s3cr3t!P@ssw0rd')

//Task 6 

function figures (a, b, c) {
    b = Number(b);
    c = Number(c);
    let area;
    if (a === 'square') {
        area = b * b;
    } else if (a === 'rectangle') {
        area = b * c;
    } else if (a === 'circle') {
        area = b*b*Math.PI;
    } else {
        area = b * c /2;
    }
    console.log(area.toFixed(3));
}
// figures("rectangle", "7","2.5");
// figures ("circle", "6");
// figures("triangle", "4.5", "20");
figures("square", "5");

//Task 7

function toyShop (excursion, puzzles, dolls, bears, minions, trucks) {
    excursion = Number(excursion);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    bears = Number(bears);
    minions = Number(minions);
    trucks = Number(trucks);

    let prPu = 2.6;
    let prDo = 3;
    let prBe = 4.1;
    let prMi = 8.2;
    let prTr = 2;

    let totalIncome = (puzzles * prPu) + (dolls * prDo) + (bears * prBe) + (minions * prMi) + (trucks * prTr);
    let totalToys = puzzles + dolls + bears + minions + trucks;
    if (totalToys >= 50) {
        totalIncome = 0.75 * totalIncome;
    }
    let rent = 0.1 * totalIncome;
    let totalEarned = totalIncome - rent;
    if (totalEarned >= excursion) {
        let restMoney = (totalEarned - excursion).toFixed(2);
        console.log(`Yes! ${restMoney} lv left.`)
    } else {
        let neededMoney = (excursion - totalEarned).toFixed(2);
        console.log(`Not enough money! ${neededMoney} lv needed.`);
    }
}
// toyShop("40.8", "20", "25", "30", "50", "10");
toyShop("320", "8", "2", "5", "5", "1");

//10.05.2020 Exercise

//Task 1

function compete (first, second, third) {
    first = Number(first);
    second = Number(second);
    third = Number(third);
    let totalTime = first + second + third;
    let mins = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${mins}:0${seconds}`);
    } else {
        console.log(`${mins}:${seconds}`);
    }
}
compete("35", "45", "44");

//Task 2

function bonuses (num) {
    num = Number(num);
    let bonus = 0;
    if (num <= 100) {
        bonus = 5;
    } else if (num > 100 && num < 1000) {
        bonus = 0.2 * num;
    } else {
        bonus = 0.1 * num;
    }
    if (num % 2 === 0) {
        bonus ++;
    }
    if (num % 5 === 0 && num % 10 !== 0) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(num + bonus);
}
bonuses("15875");

//Task 3

function speedLimiter (num) {
    num = Number(num);
    if (num <= 10) {
        console.log("slow");
    } else if (num > 10 && num <= 50) {
        console.log ("average");
    } else if (num > 50 && num <= 150) {
        console.log("fast");
    } else if (num > 150 && num <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speedLimiter("-50");

//Task 4

function convertLength (num, vhod, izhod) {
    num = Number(num);
    let baseME = 0;
    if (vhod === "mm") {
        baseME = num / 1000;
    } else if (vhod === "cm") {
        baseME = num / 100;
    } else if (vhod === "m") {
        baseME = num;
    }
    let convertedME = 0;
    if (izhod === "mm") {
        convertedME = baseME * 1000;
    } else if (izhod === "cm") {
        convertedME = baseME * 100;
    } else if (izhod === "m") {
        convertedME = baseME;
    }
    console.log(convertedME.toFixed(3));
}
// convertLength("12", "mm", "m");
// convertLength("150", "m", "cm");
convertLength("45", "cm", "mm");

//Task 5

function timePlusMinutes (hours, minutes) {
    hours = + hours;
    minutes = + minutes;
    let newMinutes = minutes + 15;
    let newHours = hours;
    if (newMinutes >= 60) {
        newMinutes = newMinutes % 60;
        newHours = hours + 1;
    }
    if (newHours > 23) {
        newHours = 0;
    }
    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }
}
timePlusMinutes("12", "49");

//Task 6

function movie (budget, people, priceclothesPerPerson) {
    budget = + budget;
    people = + people;
    priceclothesPerPerson = + priceclothesPerPerson;
    let decorExpences = 0.1 * budget;
    let clothesExpences = priceclothesPerPerson * people;
    if (people > 150) {
        clothesExpences = 0.9 * clothesExpences;
    }
    let expences = decorExpences + clothesExpences;
    if (budget < expences) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expences - budget).toFixed(2)} leva more.`);
    } else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - expences).toFixed(2)} leva left.`);
    }
}
// movie("20000", "120", "55.5");
// movie("15437.62", "186", "57.99");
movie("9587.88", "222", "55.68");

//Task 7

function vankataSwims (record, distance, timePerMeter) {
    record = + record;
    distance = + distance;
    timePerMeter = + timePerMeter;
    let lagging = (Math.floor(distance / 15)) * 12.5;
    let time = timePerMeter * distance + lagging;
    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}
// vankataSwims("10464", "1500", "20");
vankataSwims("55555.67", "3017", "5.03");

//Task 8

function scholarship (income, grade, minSalary) {
    income = + income;
    grade = + grade;
    minSalary = + minSalary;
    let socialScholarship = 0.35 * minSalary;
    let gradeScholarship = 25 * grade;
    if (grade < 4.5) {
        console.log("You cannot get a scholarship!");
    } else if (income < minSalary && grade < 5.5) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if (income < minSalary && grade >= 5.5) {
        if (gradeScholarship >= socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else if (income >= minSalary && grade >= 5.5) {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
    } else if (income >= minSalary && grade < 5.5) {
        console.log("You cannot get a scholarship!");
    }
}
// scholarship("480.00", "4.60", "450.00");
scholarship("300.00", "5.65", "420.00");
