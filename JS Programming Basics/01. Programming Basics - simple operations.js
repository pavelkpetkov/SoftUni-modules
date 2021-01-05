
// My first code here:

function area(a, b) {
    return a*b;
}
console.log(area(6, 7));
var myArray = []
    for (var i = 0; i < 11; i++ ) {
        myArray.push(i);
    }
console.log(myArray);

function hello () {
    let name = "Yana"
    console.log("Hello " + name);
}
hello ();

function newName (parameter) {
    console.log("Hello " + parameter + ".");
};
newName ("Yana");

let newVar = "Blondie";

function newNameName (parameter) {
    let myWife = "Yana";
    console.log("Hello " + parameter + " " + myWife + " " + newVar);
};
newNameName ("Hi Hi Hi");
newNameName (678);

function someNewName (parameter) {
    let myWife = "Yana";
    return ("Hello " + parameter + " " + myWife + " " + newVar);
};
let papapa = someNewName ("my");
console.log("5 + " + papapa);

let something = 89;
console.log(something);


//Lection 02.05.2020 - First steps in coding - Lab


//Task 1

function Hello () {
    console.log("Hello SoftUni");
}
Hello();

//Task 2

function numsFrom1ToZero () {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
numsFrom1ToZero ();

//Task 3

function solveOne (input) {
    let a = Number(input) ;
    let area = a * a;
    console.log (area);
}
solveOne ("6");

//Task 4

function solve (inches) {
    inches = Number(inches);
    let cm = inches * 2.54;
    console.log(cm);
}
solve ("5")
 
//Task 5

function greetings (input) {
    let name = input;
    console.log(`Hello, ${name}!`);
}
greetings ("Pesho");

//Task 6

function concatenateData (firstName, lastName, age, town) {
    let output = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(output);
}
concatenateData("Pavel", "Petkov", 32, "Sofia");

//Task 7

function architectWorks (name, projects) {
    let hours = Number(projects) * 3;
    let output = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
    console.log(output);
}
architectWorks("George", "4");

//Task 8

function zooFoodForDogs (dogs, otherDogs) {
    let billForDogs = dogs * 2.5;
    let billForOtherDogs = otherDogs * 4;
    let billForDogsFood = (billForDogs + billForOtherDogs).toFixed(2) + " lv.";
    console.log (billForDogsFood);
}
zooFoodForDogs("5", "4");

//Task 9

function yardGreening (input) {
    let totalPrice = Number(input) * 7.61;
    let discountGreening = (0.18 * totalPrice).toFixed(2);
    let finalPrice = (totalPrice - discountGreening).toFixed(2);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountGreening} lv.`);
}
yardGreening("150");



// Exercises 03.05.2020



//Task 1

function convertCurrency (imput) {
 let usd = Number(imput) * 1.79549;
 console.log(usd);
}
convertCurrency("22");

//Task 2

function convertRadians (inputRad) {
    let gradus = Number(inputRad) * 180 / Math.PI;
    console.log (gradus.toFixed(0));
}
convertRadians("3.1416");

//Task 3

function bankDeposit (sum, time, interest) {

    let intRateYear = Number(sum).toFixed(2) * Number(interest).toFixed(2) / 100;
    let intRateMonth = intRateYear / 12 ;
    let accumulatedSum = Number(sum) + Number(intRateMonth) * Number(time);

    console.log(accumulatedSum);
}
bankDeposit("2350", "6", "7");

//Task 4

function hoursDayly (pagesInBook, pagesOneHour, daysForBook) {
    let totalHoursNeeded  = Number(pagesInBook) / Number(pagesOneHour);
    console.log(totalHoursNeeded / Number(daysForBook));
}
hoursDayly("432", "15", "4");

//Task 5

function birthday (rentHall) {
    let cake = Number(rentHall) * 20 /100 ;
    let drinks = cake - (cake * 45 /100);
    let animator = Number(rentHall) / 3 ;
    let totalMoney = cake + drinks + animator + Number(rentHall);
    console.log(totalMoney);
}
birthday("3720");

//Task 6

function solve (days, cookers, cakes, gofrettes, pancakes) {
    let totalCakes = Number(days) * Number(cookers) * Number(cakes) * 45;
    let totalGofr = Number(days) * Number(cookers) * Number(gofrettes) * 5.8;
    let totalPancakes = Number(days) * Number(cookers) * Number(pancakes) * 3.2;
    let expences = (totalCakes + totalGofr + totalPancakes) / 8 ;
    let result = totalCakes + totalGofr + totalPancakes - expences;
    console.log(result.toFixed(2))
}
solve ("131", "5", "9", "33", "46");

//Task 7

function fruitsMarket (priceQgodi, colBanani, colPorto, colMalini, colQgodi) {
    let priceMalini = Number(priceQgodi) / 2;
    let pricePorto = priceMalini * 0.6;
    let priceBanana = priceMalini * 0.2;
    let totalQgodi = Number(priceQgodi) * Number(colQgodi);
    let totalMalini = priceMalini * Number(colMalini);
    let totalPorto = pricePorto * Number(colPorto);
    let totalBanana = priceBanana * Number(colBanani);
    let result = totalQgodi + totalMalini + totalPorto + totalBanana;
    console.log(result);
}
fruitsMarket ("63.5", "3.57", "6.35", "8.15", "2.5");

//Task 8

function aquariumLubo (length, width, height, percentage) {
    let lengthInDecimeters = Number(length) / 10;
    let widthInDecimeters = Number(width) / 10;
    let heightInDecimeters = Number(height) / 10;
    let totalFull = lengthInDecimeters * widthInDecimeters * heightInDecimeters;
    let otherThings = Number(percentage) / 100;
    let result = (totalFull - (totalFull * otherThings)).toFixed(3);
    console.log(result);
}
aquariumLubo("105", "77", "89", "18.5");


//Additional exercises:

//Task 1

function trapec (b1, b2, h) {
    let area = (Number(b1) + Number(b2)) * Number(h) / 2;
    console.log(area.toFixed(2));
}
trapec (8, 13, 7);

//Task 2

function triangle (a, hTriangle) {
    let area = (Number(a) * Number(hTriangle)) / 2;
    console.log(area.toFixed(2));
}
triangle (20, 30);

//Task 3

function convertTemp (gradCelcius) {
    let gradFar = (Number(gradCelcius) * 1.8) + 32;
    console.log(gradFar.toFixed(2))
}
convertTemp ('0');

//Task 4

function market (priceVeg, priceFruit, Veg, Fruits) {
    let totalVeg = Number(priceVeg) * Number(Veg);
    let totalFruits = Number(priceFruit) * Number(Fruits);
    let result = (totalVeg + totalFruits) / 1.94;
    console.log(result.toFixed(2))
}
market (0.194,
    19.4,
    10,
    10)

//Task 5 

function hall (lengthW, widthH) {
    let placesAtWidth = Math.floor(((Number(widthH) - 1) / 0.7));
    let placesAtLength = Math.floor((Number(lengthW) / 1.2));
    console.log((placesAtWidth * placesAtLength) - 3);
}
hall(15, 8.9);

//Task 6

function fishLand (priceSkum, priceCaca, colPalamud, colSaf, colMidi) {
    let pricePalamud = 1.6 * priceSkum;
    let priceSaf = 1.8 * priceCaca;
    let priceMidi = 7.5;
    let totalNeededMoney = ((colPalamud * pricePalamud) + (colSaf * priceSaf) + (colMidi * priceMidi)).toFixed(2);
    console.log(totalNeededMoney);
}
fishLand (6.90, 4.20, 1.5, 2.5, 1);

//Task 7

function housePainting (xheightOfHouse, ylengthOfHouse, hRoof) {
    let areaWallsFrontBack = ((xheightOfHouse ** 2)*2) - 1.2*2;
    let areaWallsSides = ((xheightOfHouse * ylengthOfHouse) * 2) - (1.5 ** 2) * 2;
    let areaRoof = (2 * xheightOfHouse * ylengthOfHouse) + (xheightOfHouse * hRoof);
    console.log(((areaWallsFrontBack + areaWallsSides)/3.4).toFixed(2));
    console.log((areaRoof / 4.3).toFixed(2));
}
housePainting(10.25, 15.45, 8.88);

//Task 8 

function calculateCircle (radius) {
    console.log(((radius ** 2) * Math.PI).toFixed(2));
    console.log((2 * radius * Math.PI).toFixed(2));
}
calculateCircle (4.5);

//Task 9

function weatherOutside (parameter) {
    let result = '';
    if (parameter == 'sunny') {
        result = "It's warm outside!";
    } else {
        result = "It's cold outside!";
    }
    console.log(result);
};
weatherOutside ("kufte");

//Task 10

function weatherAccurate (num) {
    let result = '';
    if (26 <= num && num <= 35 ) {
        result = 'Hot';
    } else if (20.1 <= num && num <=25.9) {
        result = "Warm";
    } else if (15 <= num && num <=20) {
        result = "Mild";
    } else if (12 <= num && num <= 14.9) {
        result = "Cool";
    } else if (5 <= num && num <= 11.9) {
        result = 'Cold';
    } else {
        result = "unknown";
    }
       console.log(result);
}
weatherAccurate (0.5);
