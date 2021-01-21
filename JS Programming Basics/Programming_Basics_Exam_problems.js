// EXAM 27.06 June 2020 Programming Basics:

//Task 1

function solve (bees, flowers) {
    bees = + bees;
    flowers = + flowers;
    let honey = bees * flowers * 0.21;
    let complete = honey/100;
    let honeycombs = parseInt(complete);
    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${((complete - honeycombs)*100).toFixed(2)} grams of honey left`);
}
solve("25", "6400");

//Task 2

function solve(inteligence, power, sex) {
    inteligence = + inteligence;
    power = + power;
    let role = "";
    if (inteligence >= 80 && power >= 80 && sex === "female") {
        role = "Queen Bee";
    } else if (inteligence >= 80) {
        role = "Repairing Bee";
    } else if (inteligence >= 60) {
        role = "Cleaning Bee";
    } else if (power >= 80 && sex === "male") {
        role = "Drone Bee";
    } else if (power >= 60) {
        role = "Guard Bee";
    } else {
        role = "Worker Bee";
    }
console.log(role);
}
solve("82", "81", "female");

//Task 3

function solve(flower, count, season) {
    count = + count;
    let amounth = 0;
    if (season === "Spring") {
        switch (flower) {
            case "Sunflower":
                amounth = 10;
                break;
            case "Daisy":
                amounth = 12;
                break;
            case "Lavender":
                amounth = 12;
                break;
            case "Mint":
                amounth = 10;
                break;
        }
    } else if (season === "Summer") {
        switch (flower) {
            case "Sunflower":
                amounth = 8;
                break;
            case "Daisy":
                amounth = 8;
                break;
            case "Lavender":
                amounth = 8;
                break;
            case "Mint":
                amounth = 12;
                break;
        }
    } else if (season === "Autumn") {
        switch (flower) {
            case "Sunflower":
                amounth = 12;
                break;
            case "Daisy":
                amounth = 6;
                break;
            case "Lavender":
                amounth = 6;
                break;
            case "Mint":
                amounth = 6;
                break;
        }
    }
    let total = amounth * count;
    if (season === "Summer") {
        total *= 1.1;
    } else if (season === "Autumn") {
        total *= 0.95;
    } else if (season === "Spring" && flower === "Daisy") {
        total *=1.1;
    } else if (season === "Spring" && flower === "Mint") {
        total *=1.1;
    }
    console.log(`Total honey harvested: ${total.toFixed(2)}`);
} 
solve("Daisy", "15", "Spring");

//Task 4

function solve(initialPop, years) {
    initialPop = + initialPop;
    years = + years;
    let newPopulation = initialPop;
    let bornBees = 0;
    let deadBees = 0;
    let countYears = 1;
    let flewAway = 0;
    for (let i = 1; i <= years; i++) {
        bornBees = (Math.floor(newPopulation / 10)) * 2;
        newPopulation = newPopulation + bornBees;
        if (countYears >= 5 && countYears % 5 === 0) {
            flewAway = (Math.floor(newPopulation / 50)) * 5;
            newPopulation = newPopulation - flewAway;
        }
        deadBees = (Math.floor(newPopulation / 20)) * 2;
        newPopulation = newPopulation - deadBees;
        countYears ++;
        bornBees = 0;
        deadBees = 0;
        flewAway = 0;
    }
    console.log(`Beehive population: ${newPopulation}`);
}
solve("1000", "23");

//Task 5

function solve (bees, healthBear, attackBear) {
    bees = + bees;
    healthBear = + healthBear;
    attackBear = + attackBear;
    let attackBees = bees * 5;
    while (bees >= 100) {
        if (healthBear <= 0) {
            console.log(`Beehive won! Bees left ${bees}.`);
            break;
        }
        bees -= attackBear;
        attackBees = bees * 5;
        healthBear -= attackBees;
    }
    if (bees < 100 && bees >= 0) {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    } else if (bees < 0) {
        console.log(`The bear stole the honey! Bees left 0.`);
    }
}
solve("200", "10000", "300");

//Task 6

function solve(input) {
    let needed = Number(input[0]);
    let gathered = 0;
    let isDone = false;
    let index = 1;
    let current = input[index++];
    while (current !== "Winter has come") {
        let name = current;
        if (current === "Winter has come") {
            break;
        }
        current = Number(input[index]);
        let quantity = 0;
        for (let j = 1; j <= 6; j++) {
            current = Number(input[index++]);
            quantity += current;
        }
        if (quantity < 0) {
            console.log(`${name} was banished for gluttony`);
        }
        gathered += quantity;
        if (gathered >= needed) {
            console.log(`Well done! Honey surplus ${(gathered - needed).toFixed(2)}.`);
            isDone = true;
            break;
        }
        current = input[index++];
    }
    if (!isDone) {
        if (gathered >= needed) {
            console.log(`Well done! Honey surplus ${(gathered - needed).toFixed(2)}.`);
        } else {
            console.log(`Hard Winter! Honey needed ${(needed - gathered).toFixed(2)}.`);
        }
    }
}
solve(['1000', 'Maya', '50', '10.5', '19.5', '30', '100', '100', 'Winter has come']);
solve(['300', 'Beeatrice', '50', '-10', '40', '30', '100', '100', 'Winter has come']);
solve(['1000', 'Maya', '-50', '-10', '-20.70', '20.40', '10.30', '40', 'Yama', '50', '10', '20', '30', '100', '100', 'Winter has come']);

// let i = 0;
// while (i < 6) {
//     i++;
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }