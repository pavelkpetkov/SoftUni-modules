//Lection 16.05.2020 Conditional statements Advanced - Lab

//Task 1

function solve(num) {
    num = + num;
    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}
solve("-524");

//Task 2

function solve(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
solve("Sunday");

//Task 3

function solve(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log('unknown');
            break;
    }
}
solve("cat");

//Task 4

function solve(age, sex) {
    age = + age;
    if (sex === 'm') {
        if (age < 16) {
            console.log('Master');
        } else {
            console.log('Mr.');
        }
    } else if (sex === "f") {
        if (age < 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
    }
}
solve("13.5", "m");

//Task 5

function solve(product, city, quantity) {
    quantity = + quantity;
    let price = 0;
    if (city == "Sofia") {
        switch (product) {
            case 'coffee':
                price = 0.5;
                break;
            case 'water':
                price = 0.8;
                break;
            case 'beer':
                price = 1.2;
                break;
            case 'sweets':
                price = 1.45;
                break;
            case 'peanuts':
                price = 1.6;
                break;
        }
    } else if (city == 'Plovdiv') {
        switch (product) {
            case 'coffee':
                price = 0.4;
                break;
            case 'water':
                price = 0.7;
                break;
            case 'beer':
                price = 1.15;
                break;
            case 'sweets':
                price = 1.30;
                break;
            case 'peanuts':
                price = 1.5;
                break;
        }
    } else if (city == 'Varna') {
        switch (product) {
            case 'coffee':
                price = 0.45;
                break;
            case 'water':
                price = 0.7;
                break;
            case 'beer':
                price = 1.10;
                break;
            case 'sweets':
                price = 1.35;
                break;
            case 'peanuts':
                price = 1.55;
                break;
        }
    }
    console.log(quantity * price);
}
solve("sweets", "Sofia", "2.23");

//Task 6

function solve(num) {
    num = + num;
    if (num >= -100 && num <= 100 && num != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
solve("-25");

//Task 7

function solve(time, day) {
    time = + time;
    let workingTime = time >= 10 && time <= 18;
    if (!workingTime) {
        console.log('closed');
    } else if (day == "Sunday") {
        console.log('closed');
    } else {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Friday':
            case 'Wednesday':
            case 'Thursday':
            case 'Saturday':
                console.log('open')
                break;
        }
    }
}
solve("11", "Sunday");

//Task 8

function solve(day) {
    let price = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            break;
        case 'Wednesday':
        case 'Thursday':
            price = 14;
            break;
        case 'Saturday':
        case 'Sunday':
            price = 16;
            break;
    }
    console.log(price);
}
solve("Sunday");

//Task 9

function solve(name) {
    switch (name) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log("fruit");
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}
solve("water");

// Task 10

function solve(num) {
    num = + num;
    if ((num >= 100 && num <= 200) || num == 0) {
    } else {
        console.log("invalid");
    }
}
solve("0");

//Task 11

function solvefruit(fruit, day, col) {
    col = + col;
    let price = 0;
    let weekend = day == 'Saturday' || day == 'Sunday';
    let accurateFruit = fruit == 'banana' || fruit == 'apple' || fruit == "orange" || fruit == 'grapefruit' || fruit == 'kiwi' || fruit == 'pineapple' || fruit == 'grapes';
    let workingDay = day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday';
    if (workingDay && accurateFruit) {
        switch (fruit) {
            case 'banana':
                price = 2.5;
                break;
            case 'apple':
                price = 1.2;
                break;
            case 'orange':
                price = 0.85;
                break;
            case 'grapefruit':
                price = 1.45;
                break;
            case 'kiwi':
                price = 2.70;
                break;
            case 'pineapple':
                price = 5.50;
                break;
            case 'grapes':
                price = 3.85;
                break;
            default:
                console.log("error");
                break;
        }
        console.log((col * price).toFixed(2));
    } else if (weekend && accurateFruit) {
        switch (fruit) {
            case 'banana':
                price = 2.7;
                break;
            case 'apple':
                price = 1.25;
                break;
            case 'orange':
                price = 0.90;
                break;
            case 'grapefruit':
                price = 1.60;
                break;
            case 'kiwi':
                price = 3.00;
                break;
            case 'pineapple':
                price = 5.60;
                break;
            case 'grapes':
                price = 4.20;
                break;
            default:
                console.log("error");
                break;
        }
        console.log((col * price).toFixed(2));
    } else {
        console.log('error');
    }
}
solvefruit("grapes", "Saturday", "0.5")

//Task 12

function solve(city, num) {
    num = + num;
    let commission = 0;
    let cities = city == 'Sofia' || city == 'Varna' || city == 'Plovdiv';
    if (num < 0 || !cities) {
        console.log('error');
    } else if (num >= 0 && num <= 500) {
        switch (city) {
            case 'Sofia':
                commission = num * 0.05;
                break;
            case 'Varna':
                commission = num * 0.045;
                break;
            case 'Plovdiv':
                commission = num * 0.055;
                break;
        }
        console.log(commission.toFixed(2));
    } else if (num > 500 && num <= 1000) {
        switch (city) {
            case 'Sofia':
                commission = num * 0.07;
                break;
            case 'Varna':
                commission = num * 0.075;
                break;
            case 'Plovdiv':
                commission = num * 0.08;
                break;
        }
        console.log(commission.toFixed(2));
    } else if (num > 1000 && num <= 10000) {
        switch (city) {
            case 'Sofia':
                commission = num * 0.08;
                break;
            case 'Varna':
                commission = num * 0.1;
                break;
            case 'Plovdiv':
                commission = num * 0.12;
                break;
        }
        console.log(commission.toFixed(2));
    } else {
        switch (city) {
            case 'Sofia':
                commission = num * 0.12;
                break;
            case 'Varna':
                commission = num * 0.13;
                break;
            case 'Plovdiv':
                commission = num * 0.145;
                break;
        }
        console.log(commission.toFixed(2));
    }
}
solve("Kaspichan", "-50");

//Task 13

function skiholiday(days, room, grade) {
    days = + days;
    let nights = days - 1;
    let cost = 0;
    if (days < 10) {
        switch (room) {
            case 'room for one person':
                cost = 18 * nights;
                break;
            case 'apartment':
                cost = (25 * nights) * 0.7;
                break;
            case 'president apartment':
                cost = (35 * nights) * 0.9;
                break;
        }
    } else if (days <= 15) {
        switch (room) {
            case 'room for one person':
                cost = 18 * nights;
                break;
            case 'apartment':
                cost = (25 * nights) * 0.65;
                break;
            case 'president apartment':
                cost = (35 * nights) * 0.85;
                break;
        }
    } else {
        switch (room) {
            case 'room for one person':
                cost = 18 * nights;
                break;
            case 'apartment':
                cost = (25 * nights) * 0.5;
                break;
            case 'president apartment':
                cost = (35 * nights) * 0.8;
                break;
        }
    }
    if (grade == 'positive') {
        cost = cost * 1.25;
    } else if (grade == 'negative') {
        cost = cost * 0.9;
    }
    console.log(cost.toFixed(2));
}
skiholiday("2", "apartment", "positive")

// Exercise 17.05.2020

//Task 1

function solve(type, rows, columns) {
    rows = + rows;
    columns = + columns;
    if (type === "Premiere") {
        console.log((12 * rows * columns).toFixed(2) + ' leva');
    } else if (type === "Normal") {
        console.log((7.5 * rows * columns).toFixed(2) + ' leva');
    } else if (type === "Discount") {
        console.log((5 * rows * columns).toFixed(2) + ' leva');
    }
}
solve("Discount", "12", "30")

//Task 2

function solve(temp, timeOfDay) {
    temp = + temp;
    let outfit = "";
    let shoes = "";
    switch (timeOfDay) {
        case "Morning":
            if (temp >= 10 && temp <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        case "Afternoon":
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;
        case "Evening":
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}
solve("28", "Evening")

//Task 3

function solve(flower, count, budget) {
    budget = + budget;
    count = + count;
    let expenses = 0;
    if (flower === "Roses") {
        if (count > 80) {
            expenses = count * 5 * 0.9;
        } else {
            expenses = count * 5;
        }
    } else if (flower === "Dahlias") {
        if (count > 90) {
            expenses = count * 3.8 * 0.85;
        } else {
            expenses = count * 3.8;
        }
    } else if (flower === 'Tulips') {
        if (count > 80) {
            expenses = count * 2.8 * 0.85;
        } else {
            expenses = count * 2.8;
        }
    } else if (flower === "Narcissus") {
        if (count < 120) {
            expenses = count * 3.0 * 1.15;
        } else {
            expenses = count * 3.0;
        }
    } else if (flower === "Gladiolus") {
        if (count < 80) {
            expenses = count * 2.5 * 1.20;
        } else {
            expenses = count * 2.5;
        }
    }
    if (budget >= expenses) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - expenses).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(expenses - budget).toFixed(2)} leva more.`)
    }
}
solve("Tulips", "88", "260")

//Task 4

function solve(budget, season, fishermen) {
    budget = + budget;
    fishermen = + fishermen;
    let rent = 0;
    let discount = 0;
    if (season === "Spring") {
            rent = 3000;
    } else if (season === "Summer" || season === "Autumn"){
            rent = 4200;
    } else if (season === "Winter") {
            rent = 2600;
    }
    if (fishermen <= 6) {
        discount = 0.9;
    } else if (fishermen > 6 && fishermen <= 11) {
        discount = 0.85;
    } else {
        discount = 0.75;
    }
    if (season != "Autumn" && fishermen % 2 == 0) {
        discount = discount * 0.95;
    }
    let neededMoney = rent * discount;
    if (budget >= neededMoney) {
        console.log(`Yes! You have ${(budget - neededMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(neededMoney - budget).toFixed(2)} leva.`);
    }
}
solve("2000", "Winter", "14");

//Task 5

function solve(budget, season) {
    budget = + budget;
    let destination = "";
    let type = "";
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season ==="summer") {
                type = "Camp";
                price = 0.3 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            price = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season ==="summer") {
                type = "Camp";
                price = 0.4 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            price = 0.8 * budget;
        }
    } else if (budget > 1000) {
        destination = "Europe";
                type = "Hotel";
                price = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(price).toFixed(2)}`);
}
solve("678.53", "winter");

//Task 6

function solve(num1, num2, operator) {
    num1 = + num1;
    num2 = + num2;
    let result = 0;
    let evenOrOdd = "";
    if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    } else {
    switch (operator) {
        case '+':
            result = num1 + num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} + ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case '-':
            result = num1 - num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} - ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case '*':
            result = num1 * num2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} * ${num2} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            break;
        case '%':
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
            break;
    }
}
}
solve("10", "3", "%");

//Task 7

function solve(month, nights) {
    nights = + nights;
    let discountStudio = 0;
    let discountAp = 0;
    switch (month) {
        case "May":
        case "October":
            if (nights > 7 && nights <= 14) {
                discountStudio = 0.95;
                discountAp = 1;
                console.log(`Apartment: ${(nights * 65 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 50 * discountStudio).toFixed(2)} lv.`);
            } else if (nights > 14) {
                discountStudio = 0.7;
                discountAp = 0.9;
                console.log(`Apartment: ${(nights * 65 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 50 * discountStudio).toFixed(2)} lv.`);
            } else {
                discountStudio = 1;
                discountAp = 1;
                console.log(`Apartment: ${(nights * 65 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 50 * discountStudio).toFixed(2)} lv.`);
            }
            break;
        case "June":
        case "September":
            if (nights > 14) {
                discountStudio = 0.80;
                discountAp = 0.9;
                console.log(`Apartment: ${(nights * 68.7 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 75.2 * discountStudio).toFixed(2)} lv.`);
            } else {
                discountStudio = 1;
                discountAp = 1;
                console.log(`Apartment: ${(nights * 68.7 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 75.2 * discountStudio).toFixed(2)} lv.`);
            }
            break;
        case "July":
        case "August":
            if (nights > 14) {
                discountStudio = 1;
                discountAp = 0.9;
                console.log(`Apartment: ${(nights * 77 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 76 * discountStudio).toFixed(2)} lv.`);
            } else {
                discountStudio = 1;
                discountAp = 1;
                console.log(`Apartment: ${(nights * 77 * discountAp).toFixed(2)} lv.`);
                console.log(`Studio: ${(nights * 76 * discountStudio).toFixed(2)} lv.`);
            };
            break;
    };
};
solve("August", "20");

//Task 8

function solveExam(hoursExam, minExam, hoursArrival, minArrival) {
    hoursExam = + hoursExam;
    minExam = + minExam;
    hoursArrival = + hoursArrival;
    minArrival = + minArrival;
    let onlyMinExam = (hoursExam * 60) + minExam;
    let onlyMinArrival = (hoursArrival * 60) + minArrival;
    let time = "";
    if ((onlyMinArrival - onlyMinExam) > 0) {
        time = 'Late';
    } else if (((onlyMinArrival - onlyMinExam) == 0) || ((onlyMinArrival - onlyMinExam) >= -30)) {
        time = 'On time';
    } else {
        time = 'Early'
    }
    console.log(time);

    let hoursDifference = Math.floor(Math.abs((onlyMinArrival - onlyMinExam) / 60));
    let minutesDifference = Math.abs((onlyMinArrival - onlyMinExam) % 60);

    if (Math.abs((onlyMinArrival - onlyMinExam)) != 0 && ((onlyMinArrival - onlyMinExam) < 0) && hoursDifference < 1) {
        console.log(`${Math.abs(minutesDifference)} minutes before the start`)
    } else if (Math.abs((onlyMinArrival - onlyMinExam)) != 0 && (onlyMinArrival - onlyMinExam) < 0 && hoursDifference >= 1) {
        if (minutesDifference < 10) {
            console.log(`${Math.abs(hoursDifference)}:0${Math.abs(minutesDifference)} hours before the start`)
        } else {
            console.log(`${Math.abs(hoursDifference)}:${Math.abs(minutesDifference)} hours before the start`)
        }
    } else if (Math.abs((onlyMinArrival - onlyMinExam)) != 0 && (onlyMinArrival - onlyMinExam) > 0 && hoursDifference < 1) {
        console.log(`${Math.abs(minutesDifference)} minutes after the start`)
    } else if (Math.abs((onlyMinArrival - onlyMinExam)) != 0 && (onlyMinArrival - onlyMinExam) > 0 && hoursDifference >= 1) {
        if (minutesDifference < 10) {
            console.log(`${Math.abs(hoursDifference)}:0${Math.abs(minutesDifference)} hours after the start`)
        } else {
            console.log(`${Math.abs(hoursDifference)}:${Math.abs(minutesDifference)} hours after the start`)
        }
    }
}
solveExam("9", "30", "9", "50");


//Task 9

function solve(year, holidays, weekendsHome) {
    holidays = + holidays;
    weekendsHome = + weekendsHome;
    let timesPlayed = 0;
    let weekendsSofia = 48 - weekendsHome;
    let freeWeekendsSofia = weekendsSofia * 0.75;
    let playedNormallyDays = ((2 * holidays / 3) + freeWeekendsSofia + weekendsHome);
    if (year === 'leap') {
        timesPlayed = playedNormallyDays * 1.15;
    } else if (year === 'normal') {
        timesPlayed = playedNormallyDays;
    }
    console.log(Math.floor(timesPlayed));
}
solve("leap", "0", "1")












