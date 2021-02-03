
// function employees(imput) {
//     for (let i = 0; i < imput.length; i++) {
//         let myObj = {
//             name: imput[i],
//             number: imput[i].length,
//         }
//         console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`);
//     }
// }
// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

// function towns (imput) {
//     let result = {};
//     for (let i = 0; i < imput.length; i++) {
//         let current = imput[i].split(' | ');
//         result.town = current[0];
//         result.latitude = (Number(current[1])).toFixed(2);
//         result.longitude = (Number(current[2])).toFixed(2);
//         console.log(result);
//     }
// }
// towns (['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])

// function storeProvision(stock, ordered) {
//     let store = {};
//     for (let i = 0; i < stock.length; i++) {
//         let element = stock[i];
//         if (i == 0 || i % 2 == 0) {
//             store[element] = Number(stock[i + 1]);
//         }
//     }
//     // console.log(store)
//     let myKeysOfStock = Object.keys(store);
//     for (let j = 0; j < ordered.length; j++) {
//         let added = ordered[j];
//         if (j == 0 || j % 2 == 0) {
//             let isFlag = true;
//             for (let k = 0; k < myKeysOfStock.length; k++) {
//                 let current = myKeysOfStock[k];
//                 if (current == ordered[j]) {
//                     isFlag = false;
//                     store[current] += Number(ordered[j + 1])
//                 }
//             }
//             if (isFlag) {
//                 store[added] = Number(ordered[j + 1]);
//             }
//         }
//     }
//     // console.log(Object.keys(store))
//     let keys = Object.keys(store);
//     let values = Object.values(store);
//     for (let k = 0; k < keys.length; k++) {
//         console.log(`${keys[k]} -> ${values[k]}`);
//     }
// }
// storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
// ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

// function movies(imput) {
//     for (let i = 0; i < imput.length; i++) {
//         let movieName;
//         let myMovie = {};
//         let command = imput[i].split(' ');
//         if (command.includes('addMovie')) {
//             command.shift();
//             movieName = command.join(' ');
//             myMovie['name'] = `${movieName}`;
//         }
//         for (let j = 0; j < imput.length; j++) {
//             if (imput[j].includes(`${movieName} `) && imput[j].includes(' directedBy ')) {
//                 let nextCommand = imput[j].split(' ');
//                 let count = nextCommand.indexOf('directedBy');
//                 nextCommand.splice(0, (count + 1));
//                 let directorName = nextCommand.join(' ');
//                 myMovie['director'] = directorName;
//             } else if (imput[j].includes(`${movieName} `) && imput[j].includes(' onDate ')) {
//                 let nextCommand = imput[j].split(' ');
//                 let count2 = nextCommand.indexOf('onDate');
//                 nextCommand.splice(0, (count2 + 1));
//                 let dated = nextCommand.join(' ');
//                 myMovie['date'] = dated;
//             }
//         }
//         if (Object.keys(myMovie).length == 3) {
//             let text = JSON.stringify(myMovie);
//             console.log(text);
//         }
//     }
// }
// movies(['addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen']);

// function newSolveMovies(arr) {
//     let movies = [];
//     for (const line of arr) {
//         if (line.includes('addMovie')) {
//             let currentMovie = {};
//             let name = line.substring(9);
//             currentMovie.name = name;
//             movies.push(currentMovie);
//         } else if (line.includes('directedBy')) {
//             let [movie, movieDirector] = line.split(' directedBy ');
//             let myMovie = movies.find(x => x.name == movie);
//             if (myMovie) {
//                 myMovie.director = movieDirector;
//             }
//         } else {
//             //'Godfather onDate 29.07.2018'
//             let [movie, movieDate] = line.split(' onDate ');
//             let myMovie = movies.find(x => x.name == movie);
//             //if true:
//             if (myMovie) {
//                 myMovie.date = movieDate;
//             }
//         }
//     }
//     movies.forEach(movie => {
//         if (movie.name && movie.director && movie.date) {
//             console.log(JSON.stringify(movie));
//         }
//     })
// }
// newSolveMovies(['addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen']);


// function inventory(imput) {
//     let result = [];
//     for (let i = 0; i < imput.length; i++) {
//         let eachOfThem = imput[i].split(" / ");
//         let hero = {};
//         hero['Hero'] = eachOfThem[0];
//         hero['level'] = Number(eachOfThem[1]);
//         hero['Items'] = eachOfThem[2].split(", ").sort((a, b) => a.localeCompare(b)).join(', ');
//         result.push(hero);
//     }
//     result.sort((a, b) => {
//         return a.level - b.level;
//     });
//  result.forEach((e) => {
//      console.log(`Hero: ${e['Hero']}`);
//      console.log(`level => ${e['level']}`);
//      console.log(`items => ${e['Items']}`);
//  });
// }
// inventory(["Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara"]);

// function makeAdictionary(imput) {
//     let array = [];
//     for (let i = 0; i < imput.length; i++) {
//         let element = imput[i];
//         let myObj = JSON.parse(element);
//         array.push(myObj);
//     }
//     let newArray = [];
//     for (let j = 0; j < array.length; j++) {
//         let current = array[j];
//         let myNewObj = {};
//         myNewObj['term'] = Object.keys(current).join();
//         myNewObj['definition'] = Object.values(current).join();
//         newArray.push(myNewObj);
//     }
//     for (let k = 0; k < newArray.length; k++) {
//         for (let m = k + 1; m < newArray.length; m++) {
//             if (newArray[k].term === newArray[m].term) {
//                 newArray.splice(k, 1);
//             }
//         }
//     }
//     let sortedArray = newArray.sort((a, b) => {
//         if (a.term > b.term) {
//             return 1;
//         }
//         else if (a.term < b.term) {
//             return -1;
//         } else {
//             return 0;
//         }
//     })
//     sortedArray.forEach((e) => {
//         console.log(`Term: ${e.term} => Definition: ${e.definition}`);
//     })
// }
// makeAdictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Tape":"kur."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ])


// class Vehicle {
//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = parts;
//         parts.quality = parts.engine * parts.power;
//         this.fuel = fuel;
//     }

//     drive(fuelLoss) {
//         this.fuel -= fuelLoss;
//     }
// }

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);






//SHITTTTTT:


// class Storage {

//     constructor(capacity) {
//         this.capacity = capacity;
//         this.storage = [];
//         this.totalCost = 0;
//     }
//     // calculateTotalCost() {
//     //     let index = this.storage.length;
//     //     let sum = 0
//     //     for (let i = 0; i < index; i++) {
//     //         let eachOfArray = this.storage[i];
//     //         let oneQ = eachOfArray[quantity];
//     //         sum += oneQ;
//     //     }
//     // }

//     calculateQuantities() {
//         let index = this.storage.length;
//         let sum = 0
//         for (let i = 0; i < index; i++) {
//             let eachOfArray = this.storage[i];
//             let oneQ = eachOfArray.quantity;
//             sum += oneQ;
//         }
//        return sum;
//     }

//     addProduct(product) {
//         this.storage.push(product);
//     }
//     getProducts() {
//         for (let line of this.storage) {
//             let text = JSON.stringify(line);
//             console.log(text);
//         }
//     }
// }

// let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
// let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
// let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
// let storage = new Storage(50);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// storage.addProduct(productThree);
// storage.getProducts();
// console.log(storage.storage[1].name);
// console.log(storage.capacity);
// console.log(storage.calculateQuantities());
// console.log(storage.totalCost);
// console.log(storage.calculateQuantities());






// function catalogue (input) {
//     let result = {};
//     for (let line of input) {
//         let [name, price] = line.split(' : ');
//         let char = name[0];
//         if (!result.hasOwnProperty(char)) {
//             result[char] = [];
//             result[char].push(line);
//         } else {
//             result[char].push(line);
//         }
//     }
//     let entries = Object.entries(result);
//     let sorted = entries.sort((a, b) => {
//         return a[0].localeCompare(b[0]);
//     })
//     for (const current of sorted) {
//         console.log(current[0]);
//         // console.log(current[1]);
//         let sortedInside = current[1].sort((a, b) => {
//             return a.localeCompare(b)
//         });
//         for (const prop of sortedInside) {
//             let newString = prop.replace(' :', ':');
//             console.log(`  ${newString}`);
//         }
//     }
// }
// catalogue ([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'])



// CHECK this for sorting nested Objects:

function systemsRegister(input) {
    let result = {};
    for (let command of input) {
        let [system, component, subComp] = command.split(' | ');
        if (!result.hasOwnProperty(system)) {
            result[system] = {};
            result[system][component] = [];
            result[system][component].push(subComp);
        } else {
            if (!result[system].hasOwnProperty(component)) {
                result[system][component] = [];
                result[system][component].push(subComp);
            } else {
                result[system][component].push(subComp);
            }
        }
    }

    let myBigArray = Object.entries(result);

    for (let system of myBigArray) {
        let smallArr = Object.entries(system[1]);
        let sorted = smallArr.sort(([compA, subArrA], [compB, subArrB]) => {
            return subArrB.length - subArrA.length;
        })
        system.splice(1, 1, sorted);
    }

    let sortedOutside = myBigArray.sort(([sysA, arrA], [sysB, arrB]) => {
        if (arrA.length == arrB.length) {
            return sysA.localeCompare(sysB);
        } else {
            return arrB.length - arrA.length;
        }
    });

    for (let finalPrintSystem of sortedOutside) {
        console.log(finalPrintSystem[0])
        for (let finalPrintComponent of finalPrintSystem[1]) {
            console.log(`|||${finalPrintComponent[0]}`);
            for (let finalPrint of finalPrintComponent[1]) {
                console.log(`||||||${finalPrint}`);
            }
        }
    }
}
systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])