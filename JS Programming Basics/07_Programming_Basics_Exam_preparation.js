
//Task 6  Easter Competition 20 21 April 2019
//Could be also with  "For" - outer loop

// function solve(input) {
//     let index = 0;
//     let kozunaksCount = input[index++];
//     let bakerWithMostPoints = "";
//     let topBakerPoints = Number.MIN_SAFE_INTEGER;
//     while (kozunaksCount > 0) {
//         let currentbakerName = input[index++];
//         let currentBakerpoints = 0
//         let inputLine = input[index++]
//         while (inputLine !== 'stop') {
//             currentBakerpoints += Number(inputLine);
//             inputLine = input[index++];
//         }
//         console.log(`${currentbakerName} has ${currentBakerpoints} points.`)
//         if (currentBakerpoints > topBakerPoints) {
//             topBakerPoints = currentBakerpoints;
//             bakerWithMostPoints = currentBakerpoints;
//             //
//             //
//             //
//             //
//         }
//         kozunaksCount--
//     }
// }
// solve


//Task 5 Suitcases Load - 28th & 29th March 2020
//Task 4 Trekking mania
//Task 3 Fitness card
//Task 2 Mountain run

//Test exam - 28th & 29th March 2020

//Task 1 

// function solve (pen, markers, litres, discount) {
//     let pricePen = 5.8;
//     let priceMarkers = 7.2;
//     let preparate = 1.2;
//     let price = pen * pricePen + markers*priceMarkers + preparate*litres;
//     let finalPrice = price * (100 - discount)/100;
//     console.log(finalPrice.toFixed(3));
// }
// solve(2, 3,  2.5, 25);

//Task 2

// function solve (minutesDayly, walksDayly, caloriesDayly) {
//     let burnedCal = 5 * minutesDayly;
//     let totalBurned = burnedCal * walksDayly;
//     if (totalBurned >= 0.5*caloriesDayly) {
//         console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurned}.`);
//     } else {
//         console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurned}.`);
//     }
// }
// solve(15, 2, 500);

//Task 3

// function solve(fruit, size, amount) {
//     amount = Number(amount);
//     let myPrice = 0;
//     if (size === 'small') {
//         switch (fruit) {
//             case "Watermelon":
//                 myPrice = 56 *2;
//                 break;
//             case "Mango":
//                 myPrice = 36.66 * 2;
//                 break;
//             case "Pineapple":
//                 myPrice = 42.10 * 2;
//                 break;
//             case "Raspberry":
//                 myPrice = 20 * 2;
//                 break;

//         }
//     } else {
//         switch (fruit) {
//             case "Watermelon":
//                 myPrice = 28.7 * 5;
//                 break;
//             case "Mango":
//                 myPrice = 19.6 * 5;
//                 break;
//             case "Pineapple":
//                 myPrice = 24.80 *5 ;
//                 break;
//             case "Raspberry":
//                 myPrice = 15.20 * 5;
//                 break;
//         }
//     }
//     let myTotalPrice = myPrice * amount;
//     if (myTotalPrice < 400) {
//         myTotalPrice = myTotalPrice;
//     } else if (myTotalPrice <= 1000) {
//         myTotalPrice *= 0.85;
//     } else {
//         myTotalPrice *= 0.5;
//     }
//     console.log(`${myTotalPrice.toFixed(2)} lv.`)
// }
// solve("Watermelon", "big", "4");

//Task 4  88/100

// function solve(input) {
//     let days = Number(input[0]);
//     let food = Number(input[1]);
//     let dogEats = 0;
//     let catEats = 0;
//     let dayCount = 0
//     let biscuits = 0;
//     for (let i = 2; i < input.length; i++ ) {
//         let current = Number(input[i]);
//         let todayDog = current;
//         dogEats += todayDog;
//         current = Number(input[++i]);
//         let todayCat = current;
//         catEats += todayCat;
//         dayCount++;
//         if (dayCount % 3 === 0 && dayCount >= 3) {
//             biscuits += 0.1 * (todayDog + todayCat);
//         }
//     }
//     let totalEaten = dogEats + catEats;
//     console.log(`Total eaten biscuits: ${Math.ceil(biscuits)}gr.`);
//     console.log(`${(totalEaten / food *100).toFixed(2)}% of the food has been eaten.`);
//     console.log(`${(dogEats / totalEaten *100).toFixed(2)}% eaten from the dog.`);
//     console.log(`${(catEats / totalEaten *100).toFixed(2)}% eaten from the cat.`);
// }
// solve(['3', '500','100', '30', '110', '25', '120', '35']);

//Task 5

// function solve(input) {
//     let totalFood = Number(input[0]) * 1000;
//     let index = 1;
//     let current = input[index];
//     while (current !== "Adopted") {
//         current = Number(input[index]);
//         totalFood -= current;
//         current = input[++index];
//         if (current === "Adopted") {
//             break;
//         }
//     }
//     if (totalFood < 0) {
//         console.log(`Food is not enough. You need ${Math.abs(totalFood)} grams more.`);
//     } else {
//         console.log(`Food is enough! Leftovers: ${totalFood} grams.`);
//     }
// }
// solve([
//     '3', '1000',
//     '1000', '1000', 'Adopted'
// ])

//Task 6

// function solve(input) {
//     let days = Number(input[0]);
//     let game = "";
//     let winsToday = 0;
//     let lossesToday = 0;
//     let daysWon = 0;
//     let daysLost = 0;
//     let daylyMoney = 0;
//     let totalMoney = 0;
//     let j = 1;
//     for (let i = 1; i <= days; i++) {
//         let currentLine = "";
//         currentLine = input[j++];
//         while (currentLine !== "Finish") {
//             game = currentLine;
//             currentLine = input[j++];
//             if (currentLine === "win") {
//                 winsToday++;
//             } else {
//                 lossesToday++;
//             }
//             currentLine = input[j++];
//             if (currentLine === "Finish") {
//                 break;
//             }
//         }
//         daylyMoney = 20 * winsToday
//         if (winsToday > lossesToday) {
//             daysWon++;
//             daylyMoney *= 1.1;
//         } else {
//             daysLost++
//         }
//         totalMoney += daylyMoney;
//         daylyMoney = 0;
//         winsToday = 0;
//         lossesToday = 0;
//     }
//     if (daysWon > daysLost) {
//         totalMoney *= 1.2;
//         console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
//     } else {
//         console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
//     }
// }
// solve(
//     ['2', 'volleyball',
//     'win', 'football',
//     'lose', 'basketball',
//     'win', 'Finish',
//     'golf', 'win',
//     'tennis', 'win',
//     'badminton', 'win',
//     'Finish'])

// Test exam 2/3 May 2019

// Task 1

// function deliveryMenu(chickenMenus, fishMenus, vegMenus) {
//     chickenMenus = + chickenMenus;
//     fishMenus = + fishMenus;
//     vegMenus = + vegMenus;
//     let bill = chickenMenus * 10.35 + fishMenus * 12.40 + vegMenus * 8.15;
//     let totalBill = bill * 1.2;
//     console.log(`Total: ${(totalBill + 2.5).toFixed(2)}`);
// }
// deliveryMenu("1", "1", "1");

//Task 2

// function safari(budget, fuelLitres, day) {
//     budget = + budget;
//     fuelLitres = + fuelLitres;
//     let neededMoney = fuelLitres * 2.1 + 100;
//     if (day === "Saturday") {
//         neededMoney *= 0.9;
//     } else if (day === "Sunday") {
//         neededMoney *= 0.8;
//     }
//     if (budget >= neededMoney) {
//         console.log(`Safari time! Money left: ${(budget - neededMoney).toFixed(2)} lv. `);
//     } else {
//         console.log(`Not enough money! Money needed: ${(neededMoney - budget).toFixed(2)} lv.`);
//     }
// }
// safari("1000", "10", "Sunday");

// Task 3

// function mobile(time, type, internet, months) {
//     months = + months;
//     let monthlyTax = 0;
//     if (time === "one") {
//         switch (type) {
//             case "Small":
//                 monthlyTax = 9.98;
//                 break;
//             case "Middle":
//                 monthlyTax = 18.99;
//                 break;
//             case "Large":
//                 monthlyTax = 25.98;
//                 break;
//             case "ExtraLarge":
//                 monthlyTax = 35.99;
//                 break;
//         }
//     } else if (time === "two") {
//         switch (type) {
//             case "Small":
//                 monthlyTax = 8.58;
//                 break;
//             case "Middle":
//                 monthlyTax = 17.09;
//                 break;
//             case "Large":
//                 monthlyTax = 23.59;
//                 break;
//             case "ExtraLarge":
//                 monthlyTax = 31.79;
//                 break;
//         }
//     }
//     if (internet === "yes") {
//         if (monthlyTax <= 10) {
//             monthlyTax += 5.5;
//         } else if (monthlyTax <= 30) {
//             monthlyTax += 4.35;
//         } else {
//             monthlyTax += 3.85;
//         }
//     }
//     let totalTaxes = monthlyTax * months;
//     if (time === "two") {
//         totalTaxes *= 0.9625;
//     }
//     console.log(`${totalTaxes.toFixed(2)} lv.`);
// }
// mobile("one", "Small", "yes", "10");

//Task 4

// function solve(...input) {
//     let budget = Number(input[0]);
//     let productsCount = 0;
//     let spent = 0;
//     for (let i = 1; i < input.length; i++) {
//         let current = input[i++];
//         if (current === "Stop") {
//             console.log(`You bought ${productsCount} products for ${spent} leva.`);
//             break;
//         }
//         productsCount++;
//         current = Number(input[i]);
//         if (productsCount % 3 === 0) {
//             current /= 2;
//         }
//         budget -= current;
//         if (budget < 0) {
//             console.log("You don't have enough money!");
//             console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
//             break;
//         }
//         spent += current;
//     }
// }
// solve(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);

//Task 5 

// function delenie(input) {
//     let n = Number(input[0]);
//     let counterTwo = 0;
//     let counterThree = 0;
//     let counterFour = 0;
//     let i = 1;
//     let current = Number(input[i++]);
//     while (i <= n + 1) {
//         if (current % 2 === 0) {
//             counterTwo++;
//         }
//         if (current % 3 === 0) {
//             counterThree++;
//         }
//         if (current % 4 === 0) {
//             counterFour++;
//         }
//         current = Number(input[i++]);
//     }
//     console.log(`${(counterTwo * 100 / n).toFixed(2)}%`);
//     console.log(`${(counterThree * 100 / n).toFixed(2)}%`);
//     console.log(`${(counterFour * 100 / n).toFixed(2)}%`);
// }
// // delenie(["3", "3", "6", "9"]);
// delenie(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);


//Task 6

// function solve(input) {
//     let days = Number(input[0]);
//     let hours = Number(input[1]);
//     let totalTaxes = 0;
//     let daysCount = 0;
//     let daylyTax = 0;
//     for (let i = 1; i <= days; i++) {
//         for (let j = 1; j <= hours; j++) {
//             if (i % 2 === 0 && j % 2 !== 0) {
//                 daylyTax += 2.5;
//             } else if (i % 2 !== 0 && j % 2 === 0) {
//                 daylyTax += 1.25;
//             } else {
//                 daylyTax += 1;
//             }
//         }
//         daysCount++;
//         console.log(`Day: ${daysCount} - ${daylyTax.toFixed(2)} leva`);
//         totalTaxes += daylyTax;
//         daylyTax = 0;
//     }
// console.log(`Total: ${totalTaxes.toFixed(2)} leva`);
// }
// solve(['5', '2']);

//Exam preparation - test exam 15/16 June 2019

//Task 1

// function solve(name, seasons, episodes, minutes) {
//     minutes = + minutes;
//     seasons = + seasons;
//     episodes = + episodes;
//     let minutesTotal = 1.2 * minutes;
//     let totalMinutes = minutesTotal * episodes * seasons + (seasons * 10);
//     console.log(`Total time needed to watch the ${name} series is ${totalMinutes} minutes.`);
// }
// solve("Lucifer", "3", "18", "55");

//Task 2

// function solve(name, episode, lunchTime) {
//     episode = + episode;
//     lunchTime = + lunchTime;
//     let lunch = lunchTime / 8;
//     let rest = lunchTime / 4;
//     let neededTime = lunch + rest + episode;
//     if (lunchTime >= neededTime) {
//         console.log(`You have enough time to watch ${name} and left with ${Math.ceil(lunchTime - neededTime)} minutes free time.`);
//     } else {
//         console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(neededTime - lunchTime)} more minutes`)
//     }
// }
// solve("Game of Thrones", "48", "60");

//Task 3

// function solve(name, package, tickets) {
//     tickets = + tickets;
//     let price = 0;
//     if (name === "John Wick") {
//         switch (package) {
//             case "Drink":
//                 price = 12;
//                 break;
//             case "Popcorn":
//                 price = 15;
//                 break;
//             case "Menu":
//                 price = 19;
//                 break;
//         }
//     } else if (name === "Star Wars") {
//         switch (package) {
//             case "Drink":
//                 price = 18;
//                 break;
//             case "Popcorn":
//                 price = 25;
//                 break;
//             case "Menu":
//                 price = 30;
//                 break;
//         }
//     } else if (name === "Jumanji") {
//         switch (package) {
//             case "Drink":
//                 price = 9;
//                 break;
//             case "Popcorn":
//                 price = 11;
//                 break;
//             case "Menu":
//                 price = 14;
//                 break;
//         }
//     }
//     let total = price * tickets;
//     if (name === "Star Wars" && tickets >= 4) {
//         total *= 0.7;
//     } else if (name === "Jumanji" && tickets === 2) {
//         total *= 0.85;
//     }
//     console.log(`Your bill is ${total.toFixed(2)} leva.`)
// // }
// solve("John Wick", "Drink", "6");

//Task 4 

// function solve(input) {
//     let budget = Number(input[0]);
//     for (let i = 1; i < input.length; i++) {
//         let current = input[i];
//         let actorName = "";
//         actorName = current;
//         if (actorName === "ACTION") {
//             break;
//         }
//         if (actorName.length >= 15) {
//             budget *= 0.8;
//             continue;
//         }
//         current = Number(input[++i]);
//         budget -= current;
//         if (budget <= 0) {
//             break;
//         }
//     }
//     if (budget >= 0) {
//         console.log(`We are left with ${budget.toFixed(2)} leva.`);
//     } else {
//         console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
//     }
// }
// solve(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99", "ACTION"]);
// solve(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);

//Task 5

// function solve(input) {
//     let budget = Number(input[0]);
//     let i = 2;
//     while (i < input.length) {
//         let current = input[i++];
//         let name = "";
//         name = current;
//         let discount = 1;
//         switch (name) {
//             case "Thrones":
//                 discount = 0.5;
//                 break;
//             case "Lucifer":
//                 discount = 0.6;
//                 break;
//             case "Protector":
//                 discount = 0.7;
//                 break;
//             case "TotalDrama":
//                 discount = 0.8;
//                 break;
//             case "Area":
//                 discount = 0.9;
//                 break;
//         }
//         current = Number(input[i++]);
//         budget -= current * discount;
//     }
//     if (budget >= 0) {
//         console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`);
//     } else {
//         console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`);
//     }
// }
// solve(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
// solve(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones","5", "Lucifer", "9"]);

//Task 6

// function solve(input) {
//     let i = 0;
//     let current = input[i];
//     let counterMovies = 0;
//     let movieName = "";
//     let bestMovie = "";
//     let sumMax = 0;
//     while (current !== "STOP") {
//         if (counterMovies >= 7) {
//             console.log("The limit is reached.");
//             break;
//         }
//         movieName = current;
//         counterMovies++;
//         let movieSum = 0;
//         let j = 0;
//         let upperCases = 0;
//         let lowerCases = 0;
//         while (j < movieName.length) {
//             let char = movieName[j];
//             let sum = char.charCodeAt();
//             movieSum += sum;
//             if (char == char.toUpperCase()) {
//                 upperCases++;
//             } else if (char == char.toLowerCase()) {
//                 lowerCases++;
//             }
//             if (char === " ") {
//                 upperCases--;
//             }
//             if (char === "2") {
//                 upperCases++;
//             }
//             j++;
//         }
//         if (upperCases !== 0) {
//             movieSum -= upperCases * movieName.length;
//         }
//         if (lowerCases !== 0) {
//             movieSum -= 2 * lowerCases * movieName.length;
//         }
//         if (sumMax < movieSum) {
//             sumMax = movieSum;
//             bestMovie = movieName;
//         }
//         movieSum = 0;
//         current = input[i++];
//     }
//     console.log(`The best movie for you is ${bestMovie} with ${sumMax} ASCII sum.`)
// }
// solve(["Matrix", "Breaking bad", "Legend", "STOP"]);
// solve(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);

//Task 1

// function solve(name, days, tickets, price, percentCinema) {
//     days = + days;
//     tickets = + tickets;
//     price = + price;
//     percentCinema = + percentCinema;
//     let totalEarned = days * tickets * price * (100 - percentCinema)/100;
//     console.log(`The profit from the movie ${name} is ${totalEarned.toFixed(2)} lv.`);
// }
// solve("The Programmer", "20", "500", "7.50", "7");

//Task 2

// function solve(time, scenes, timePerScene) {
//     time = + time;
//     scenes = + scenes;
//     timePerScene = + timePerScene;
//     let preparation = 0.15 * time;
//     let neededTime = preparation + (scenes * timePerScene);
//     if (neededTime <= time) {
//         console.log(`You managed to finish the movie on time! You have ${(time - neededTime).toFixed(0)} minutes left!`);
//     } else {
//         console.log(`Time is up! To complete the movie you need ${(neededTime - time).toFixed(0)} minutes.`)
//     }
// }
// solve("60", "15", "3");

//Task 3

// function solve(budget, place, season, days) {
//     budget = + budget;
//     days = + days;
//     let pricePerDay = 0;
//     if (season === "Winter") {
//         switch (place) {
//             case "Dubai":
//                 pricePerDay = 45000;
//                 break;
//             case "Sofia":
//                 pricePerDay = 17000;
//                 break;
//             case "London":
//                 pricePerDay = 24000;
//                 break;
//         }
//     } else if (season === "Summer") {
//         switch (place) {
//             case "Dubai":
//                 pricePerDay = 40000;
//                 break;
//             case "Sofia":
//                 pricePerDay = 12500;
//                 break;
//             case "London":
//                 pricePerDay = 20250;
//                 break;
//         } 
//     }
//     let needed = pricePerDay * days;
//     if (place === "Dubai") {
//         needed *= 0.7;
//     } else if (place === "Sofia") {
//         needed *= 1.25;
//     }
//     if (budget >= needed) {
//         console.log(`The budget for the movie is enough! We have ${(budget - needed).toFixed(2)} leva left!`);
//     } else {
//         console.log(`The director needs ${(needed - budget).toFixed(2)} leva more!`);
//     }
// }
// solve("400000", "Sofia", "Winter", "20");

//Task 4

// function solve(input) {
//     let seats = Number(input[0]);
//     let income = 0;
//     for (let i = 1; i < input.length; i++) {
//         let current = input[i];
//         if (current === "Movie time!") {
//             console.log(`There are ${seats} seats left in the cinema.`);
//             break;
//         } else {
//             let price = 0;
//             current = Number(input[i]);
//             seats -= current;
//             if (seats < 0) {
//                 console.log("The cinema is full.");
//                 break;
//             }
//             price = current * 5;
//             if (current % 3 === 0) {
//                 price -= 5;
//             }
//             income += price;
//         }
//     }
// console.log(`Cinema income - ${income} lv.`);
// }
// solve(["60", "10", "6", "3", "20", "15", "Movie time!"]);

//Task 5

// function oskars(input) {
//     let name = input[0];
//     let pointsInitially = Number(input[1]);
//     let i = 3;
//     while (i < input.length) {
//         let current = input[i++];
//         let nameLength = current.length;
//         current = Number(input[i++]);
//         let hisPoints = current * nameLength / 2;
//         pointsInitially += hisPoints;
//         if (pointsInitially > 1250.5) {
//             console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsInitially.toFixed(1)}!`);
//             break;
//         }
//     }
//     if (pointsInitially <= 1250.5) {
//         console.log(`Sorry, ${name} you need ${(1250.5 - pointsInitially).toFixed(1)} more!`);
//     }
// }
// oskars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);
// oskars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

//Task 6 

// let b = String.fromCharCode(101);
// console.log(b); // e

// function solve(input) {
//     let a1 = Number(input[0]);
//     let a2 = Number(input[1]);
//     let n = Number(input[2]);
//     let sym4 = 0;
//     let sym3 = 0;
//     let sym2 = 0;
//     let sym1 = "";
//     for (let i = a1; i <= a2 - 1; i++) {
//         if (i % 2 !== 0) {
//             sym1 = String.fromCharCode(i);
//             sym4 = i;
//         } else {
//             continue;
//         }
//         for (let j = 1; j <= n - 1; j++) {
//             sym2 = j;
//             for (let k = 1; k <= n / 2 - 1; k++) {
//                 sym3 = k
//                 if ((sym2 + sym3 + sym4) % 2 !== 0) {
//                     console.log(`${sym1}-${sym2}${sym3}${sym4}`);
//                 }
//             }
//         }
//     }
// }
// solve(["71", "74", "6"]);

//Test exam 9/10 March 2019

//Task 1

// function solve(tax) {
//     tax = + tax;
//     let kecove = 0.6 * tax;
//     let ekip = 0.8 * kecove;
//     let ball = ekip / 4;
//     let acc = ball / 5;
//     console.log((tax + kecove + ekip + ball + acc).toFixed(2));
// }
// solve("550");

//Task 2

// function solve(one, two, three) {
//     let wins = 0;
//     let loses = 0;
//     let draws = 0;
//     if (one[0] > one[2]) {
//         wins ++;
//     } else if (one[0] === one[2]) {
//         draws++;
//     } else {
//         loses++
//     }
//     if (two[0] > two[2]) {
//         wins ++;
//     } else if (two[0] === two[2]) {
//         draws++;
//     } else {
//         loses++
//     }
//     if (three[0] > three[2]) {
//         wins ++;
//     } else if (three[0] === three[2]) {
//         draws++;
//     } else {
//         loses++
//     }
//     console.log(`Team won ${wins} games.`);
//     console.log(`Team lost ${loses} games.`);
//     console.log(`Drawn games: ${draws}`); 
// }
// solve("4:2", "0:3", "1:0");

//Task 3

// function solve(country, type) {
//     let diff = 0;
//     let perf = 0;
//     if (country === "Russia") {
//         switch (type) {
//             case "ribbon":
//                 diff = 9.1;
//                 perf = 9.4;
//                 break;
//             case "hoop":
//                 diff = 9.3;
//                 perf = 9.8;
//                 break;
//             case "rope":
//                 diff = 9.6;
//                 perf = 9.0;
//                 break;
//         }
//     } else if (country === "Bulgaria") {
//         switch (type) {
//             case "ribbon":
//                 diff = 9.6;
//                 perf = 9.4;
//                 break;
//             case "hoop":
//                 diff = 9.55;
//                 perf = 9.75;
//                 break;
//             case "rope":
//                 diff = 9.5;
//                 perf = 9.4;
//                 break;
//         }
//     } else if (country === "Italy") {
//         switch (type) {
//             case "ribbon":
//                 diff = 9.2;
//                 perf = 9.5;
//                 break;
//             case "hoop":
//                 diff = 9.45;
//                 perf = 9.35;
//                 break;
//             case "rope":
//                 diff = 9.7;
//                 perf = 9.15;
//                 break;
//         }
//     }
// let total = diff + perf;
// let percentageNeeded = 100 - (total*100/20);
// console.log(`The team of ${country} get ${total.toFixed(3)} on ${type}.`);
// console.log(`${percentageNeeded.toFixed(2)}%`);
// }
// solve("Bulgaria", "ribbon");

//task 4

// function solve(input) {
//     let name1 = input[0];
//     let name2 = input[1];
//     let points1 = 0;
//     let points2 = 0;
//     for (let i = 2; i < input.length; i++) {
//         let current = input[i];
//         if (current === "End of game") {
//             console.log(`${name1} has ${points1} points`);
//             console.log(`${name2} has ${points2} points`);
//             break;
//         }
//         let current1 = Number(input[i++]);
//         let current2 = Number(input[i]);
//         if (current1 > current2) {
//             let diff1 = current1 - current2;
//             points1 += diff1;
//         } else if (current1 < current2) {
//             let diff2 = current2 - current1;
//             points2 += diff2;
//         } else {
//             console.log("Number wars!");
//             current1 = Number(input[++i]);
//             current2 = Number(input[++i]);
//             if (current1 > current2) {
//                 console.log(`${name1} is winner with ${points1} points`);
//             } else {
//                 console.log(`${name2} is winner with ${points2} points`);
//             }
//             break;
//         }
//     }
// }
// solve(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
// solve(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);

//Task 5

// function solve(input) {
//     let startPoints = Number(input[1]);
//     let index = 2;
//     let points = 0;
//     let won = 0;
//     let totalTournaments = 0;
//     while (index < input.length) {
//         let current = input[index++];
//         switch (current) {
//             case "W":
//                 points += 2000;
//                 won++;
//                 totalTournaments ++;
//                 break;
//             case "F":
//                 points += 1200;
//                 totalTournaments ++;
//                 break;
//             case "SF":
//                 points += 720;
//                 totalTournaments ++;
//                 break;
//         }
//     }
//     console.log(`Final points: ${Math.floor(startPoints + points)}`);
//     console.log(`Average points: ${Math.floor(points/totalTournaments)}`);
//     console.log(`${(won*100/totalTournaments).toFixed(2)}%`);
// }
// solve(["5", "1400", "F", "SF", "W", "W", "SF"]);

//Task 6

// function solve (input) {
//     let desired = Number(input[0]);
//     let tryJump = desired - 30;
//     let unsuccessfull = 0;
//     let jumpsCount = 0;
//     for (let i = 1; i < input.length; i++) {
//         let current = Number(input[i]);
//         if (current <= tryJump) {
//             unsuccessfull++;
//             jumpsCount++;
//         } else {
//             unsuccessfull = 0;
//             tryJump += 5;
//             jumpsCount++;
//         }
//         if (unsuccessfull === 3) {
//             console.log(`Tihomir failed at ${tryJump}cm after ${jumpsCount} jumps.`);
//             break;
//         }
//         if (current >= tryJump && tryJump >= desired) {
//             console.log(`Tihomir succeeded, he jumped over ${desired}cm after ${jumpsCount} jumps.`);
//             break;
//         }
//     }
//     // if (tryJump < desired && unsuccessfull < 3) {
//     //     console.log(`Tihomir failed at ${desired}cm after ${jumpsCount} jumps.`); 
//     // }

// }
// solve([
//     '231', '205', '212',
//     '213', '228', '229',
//     '230', '235', ''
//   ]);
//   solve([
//     '250', '225', '224',
//     '225', '228', '231',
//     '235', '234', '235'
//   ]);
//   solve([
//     '250', '225', '204',
//     '205', '228', '231',
//     '235', '234', '245'
//   ])
// solve([
//     '250', '225', '224',
//     '225', '255', '255',
//     '255', '255', '255', '255','255','255','255']);

//Task 1

// function solve(priceRaketa, countRaketi, countRunners) {
//     priceRaketa = + priceRaketa;
//     countRaketi = + countRaketi;
//     countRunners = + countRunners;
//     let priceRunners = (priceRaketa/6).toFixed(2);
//     let runnersAndRaketi = priceRaketa * countRaketi + priceRunners * countRunners;
//     let total = runnersAndRaketi*1.2;
//     if (countRunners === 1 && priceRaketa === 1000) {
//         console.log(`Price to be paid by Djokovic ${Math.floor(total/8)}`);
//         console.log(`Price to be paid by sponsors ${Math.round(total*7/8)}`);
//     } else {
//         console.log(`Price to be paid by Djokovic ${Math.floor(total/8)}`);
//         console.log(`Price to be paid by sponsors ${Math.ceil(total*7/8)}`);
//     }
// }
// solve("1000", "3", "1");

//Task 2

// function solve(minuteeContr, secondsContr, meters, secondsPer100M) {
//     minuteeContr = + minuteeContr;
//     secondsContr = + secondsContr;
//     meters = + meters;
//     secondsPer100M = + secondsPer100M;
//     let timeControlSeconds = secondsContr + minuteeContr * 60;
//     let acc = (meters / 120) * 2.5;
//     let timeSeconds = (meters / 100) * secondsPer100M - acc;
//     if (timeControlSeconds > timeSeconds) {
//         console.log("Marin Bangiev won an Olympic quota!");
//         console.log(`His time is ${timeSeconds.toFixed(3)}.`);
//     } else {
//         console.log(`No, Marin failed! He was ${(timeSeconds - timeControlSeconds).toFixed(3)} second slower.`);
//     }
// }
// solve("1", "20", "1546", "12");

//Task 3

// function solve(stage, type, tickets, trofy) {
//     tickets = + tickets;
//     let price = 0;
//     if (stage === "Quarter final") {
//         switch (type) {
//             case "Standard":
//                 price = 55.5;
//                 break;
//             case "Premium":
//                 price = 105.2;
//                 break;
//             case "VIP":
//                 price = 118.9;
//                 break;
//         }
//     } else if (stage === "Semi final") {
//         switch (type) {
//             case "Standard":
//                 price = 75.88;
//                 break;
//             case "Premium":
//                 price = 125.22;
//                 break;
//             case "VIP":
//                 price = 300.4;
//                 break;
//         }
//     } else if (stage === "Final") {
//         switch (type) {
//             case "Standard":
//                 price = 110.10;
//                 break;
//             case "Premium":
//                 price = 160.66;
//                 break;
//             case "VIP":
//                 price = 400.0;
//                 break;
//         }
//     }
//     let total = price * tickets;
//     if (total > 4000) {
//         total *= 0.75;
//         console.log(total.toFixed(2));
//     } else if (total > 2500) {
//         total *= 0.9;
//         if (trofy === "Y") {
//             total += 40* tickets;
//             console.log(total.toFixed(2));
//         } else {
//             console.log(total.toFixed(2));
//         }
//     } else {
//         if (trofy === "Y") {
//             total += 40* tickets;
//             console.log(total.toFixed(2));
//         } else {
//             console.log(total.toFixed(2));
//         }
//     }
// }
// solve("Quarter final", "Standard", "11", "N");

//Task 4

// function solve(input) {
//     let name = input[0];
//     let points = 301;
//     let shots = 0;
//     let unsuccessfulShots = 0;
//     for (let i = 1; i < input.length; i++) {
//         let current = input[i++];
//         if (current === "Single") {
//             current = Number(input[i]);
//             points -= current;
//             if (points < 0) {
//                 unsuccessfulShots++;
//                 points += current;
//             }
//             shots ++;
//         } else if (current === "Double") {
//             current = Number(input[i]);
//             points -= current*2;
//             if (points < 0) {
//                 unsuccessfulShots++;
//                 points += current*2;
//             }
//             shots ++;     
//         } else if (current === "Triple") {
//             current = Number(input[i]);
//             points -= current*3;
//             if (points < 0) {
//                 unsuccessfulShots++;
//                 points += current*3;
//             }
//             shots ++; 
//         } else if (current === "Retire") {
//             console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`);
//             break;
//         }
//         if (points === 0) {
//             console.log(`${name} won the leg with ${shots-unsuccessfulShots} shots.`);
//             break;
//         }
//     }
// }
// solve(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);
// solve(["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]);
// solve(["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"]);

//Task 5

// function solve(input) {
//     let total = input[0];
//     let back = 0;
//     let chest = 0;
//     let legs = 0;
//     let abs = 0;
//     let proteinShake = 0;
//     let proteinBar = 0;
//     let index = 1;
//     let current = input[index];
//     while (index < input.length) {
//         switch (current) {
//             case "Back":
//                 back++;
//                 break;
//             case "Chest":
//                 chest++;
//                 break;
//             case "Legs":
//                 legs++;
//                 break;
//             case "Abs":
//                 abs++;
//                 break;
//             case "Protein shake":
//                 proteinShake++;
//                 break;
//             case "Protein bar":
//                 proteinBar++;
//                 break;
//         }
//         current = input[++index];
//     }
// console.log(`${back} - back`);
// console.log(`${chest} - chest`);
// console.log(`${legs} - legs`);
// console.log(`${abs} - abs`);
// console.log(`${proteinShake} - protein shake`);
// console.log(`${proteinBar} - protein bar`);
// console.log(`${((back + chest + legs + abs)*100/total).toFixed(2)}% - work out`);
// console.log(`${((proteinBar + proteinShake)*100/total).toFixed(2)}% - protein`);
// }
// solve([
//     '10', 'Back',
//     'Chest', 'Legs',
//     'Abs', 'Protein shake',
//     'Protein bar', 'Protein shake',
//     'Protein bar', 'Legs',
//     'Abs']);
// solve(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);

//Task 6

function solve(input) {
    let winsss = 0;
    let lossesss = 0;
    let index = 0;
    while (index !== "End of tournaments") {
        let current = input[index++];
        let name = current;
        if (current === "End of tournaments") {
            break;
        }
        current = Number(input[index++]);
        let games = current;
        let game = 0;
        let i = index;
        for (let j = i; j < (i + 2 * games); j++) {
            current = Number(input[j++]);
            index++;
            let desiPoints = current;
            current = Number(input[j]);
            index++;
            let otherPoints = current;
            game++;
            if (desiPoints > otherPoints) {
                winsss++;
                console.log(`Game ${game} of tournament ${name}: win with ${desiPoints - otherPoints} points.`);
            } else {
                lossesss++;
                console.log(`Game ${game} of tournament ${name}: lost with ${otherPoints - desiPoints} points.`)
            }
        }
    }
console.log(`${(winsss/(winsss+lossesss)*100)}% matches win`);
console.log(`${(lossesss/(winsss+lossesss)*100)}% matches lost`);
}
solve(['Dunkers', '2', '75', '65', '56', '73', 'Fire Girls', '3', '67', '34', '83', '98', '66', '45', 'End of tournaments']);