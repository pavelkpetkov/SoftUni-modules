//exercises:

//Task 'Calorie object':

// function calories(arr) {
//     let myObj = {};
//     for (let i = 0; i < arr.length; i+= 2) {
//         myObj[arr[i]] = Number(arr[i + 1]);
//     }
//     console.log(myObj);
// }
// calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

//Task 'Construction Crew':

// function constructionCrew(worker) {
//     if (worker.dizziness) {
//         worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
//         worker.dizziness = false;
//     }
//     return worker;
// }
// console.log(constructionCrew({
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }));

//Task 'Car Factory':

// function carFactory(client) {
//     let result = {
//         model: client.model
//     }
//     if (client.power <= 90) {
//         result.engine = {
//             power: 90,
//             volume: 1800
//         };
//     } else if (client.power <= 120) {
//         result.engine = {
//             power: 120,
//             volume: 2400
//         };
//     } else {
//         result.engine = {
//             power: 200,
//             volume: 3500
//         };
//     }
//     result.carriage = { type: client.carriage, color: client.color };
//     if (client.wheelsize % 2 == 0) {
//         let tyres = --client.wheelsize;
//         result.wheels = [tyres, tyres, tyres, tyres];
//     } else {
//         let tyres = client.wheelsize;
//         result.wheels = [tyres, tyres, tyres, tyres];
//     }
//     return result;
// }
// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));
// console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }));

//Task 'Heroic Inventory':

// function heroicInv (input) {

//     let result = [];
//     for (let each of input) {
//         let [name, level, items] = each.split(' / ');
//         level = Number(level);
//         items = items ? items.split(', ') : [];
//         result.push( {name, level, items})
//     }
//     console.log(JSON.stringify(result));
// }
// heroicInv (['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']);

//Task 'Lower prices in cities':

// function lowestPrices (inputArray) {
//     let result = {};
//     for (let line of inputArray) {
//         let [town, product, price] = line.split(' | ');
//         price = Number(price);
//         if (!result.hasOwnProperty(product)) {
//             result[product] = [price, town];
//         } else {
//             if (result[product][0] > price) {
//                 result[product][0] = price;
//                 result[product][1] = town;
//             }
//         }
//     }
//     for (const key in result) {
//         console.log(`${key} -> ${result[key][0]} (${result[key][1]})`);
//     }
// }
// lowestPrices(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10'])

//Task 'Storage catalogue':

// function storageCatalogue(inputArray) {
//     let catalogue = {};
//     for (let eachLine of inputArray) {
//         let [name, price] = eachLine.split(' : ');
//         price = + price;
//         let capitalLetter = name[0];
//         if (!catalogue.hasOwnProperty(capitalLetter)) {
//             catalogue[capitalLetter] = {};
//             catalogue[capitalLetter][name] = price;
//         } else {
//             catalogue[capitalLetter][name] = price;
//         }
//     }
// console.log(catalogue);
//     let sorted = Object.entries(catalogue).sort(([keyA, valueA], [keyB, valueB]) => {
//         return keyA.localeCompare(keyB);
//     })
//     for (let line of sorted) {
//         let nestedSorted = Object.entries(line[1]).sort(([keyA, valueA], [keyB, valueB]) => {
//             return keyA.localeCompare(keyB);
//         });
//         console.log(line[0]);
//         for (const item of nestedSorted) {
//             console.log(`  ${item[0]}: ${item[1]}`)
//         }
//     }
// }
// storageCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);

//Task 'Towns to JSON':

// function towns (inputArray) {
//     const [one, two, three] = inputArray[0].substring(2, inputArray[0].length - 2).split(' | ');
//     let result = []
//     for (let i = 1; i < inputArray.length; i++) {
//         let [p1, p2, p3] = inputArray[i].substring(2, inputArray[i].length - 2).split(' | ');
//         p2 = Number(p2);
//         p3 = Number(p3);
//         p2 = p2.toFixed(2);
//         p3 = p3.toFixed(2);
//         let obj = {};
//         obj[one] = p1;
//         obj[two] = Number(p2);
//         obj[three] = Number(p3);
//         result.push(obj);
//     }
//     console.log(JSON.stringify(result));
// }
// towns(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |'])

//Task 'Rectangle':

// function rectangle (width, height, color) {
//     width = Number(width);
//     height = Number(height);
//     let colorOutput = `${color[0].toUpperCase()}`;
//     for (let i = 1; i < color.length; i++) {
//         colorOutput += color[i];
//     }
//     return {
//         width,
//         height,
//         color : colorOutput,
//         calcArea () {
//             return this.width * this.height;
//         }
//     }
// }
// let rect = rectangle(4, '6', 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

//Task 'Sorted list':

// function result() {
//     let result = [];
//     return {
//         add(element) {
//             result.push(element);
//             this.size++;
//             result = result.sort((a, b) => {
//                 return a - b;
//             })
//         },
//         remove(index) {
//             if (index >= 0 && index < result.length) {
//                 this.size--;
//                 result.splice(index, 1);
//             }
//         },
//         get(indexGet) {
//             if (indexGet >= 0 && indexGet < result.length) {
//                 return result[indexGet];
//             }
//         },
//         size: 0
//     }
// }
// let list = result();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));

//Task 'Heroes':

// function solve () {

//      return {
//         fighter (name) {
//             return {
//                 name: name,
//                 health: 100,
//                 stamina: 100,
//                 fight () {
//                     this.stamina--;
//                     console.log(`${this.name} slashes at the foe!`);
//                 }
//             }
//         },
//         mage (name) {
//             return {
//                 name: name,
//                 health: 100,
//                 mana: 100,
//                 cast (spell) {
//                     this.mana--;
//                     console.log(`${name} cast ${spell}`);
//                 }
//             }
//         }
//      }
// }
// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);

//Task 'Jan's Notation':

// function solve(inputArray) {
//     let numbers = [];
//     let flag = true;
//     for (let each of inputArray) {
//         if (typeof each == 'number') {
//             numbers.push(each);
//         } else {
//             if (numbers.length < 2) {
//                 flag = false;
//                 console.log('Error: not enough operands!');
//             } else {
//                 let result = 0;
//                 if (each == '+') {
//                     result = numbers[numbers.length - 1] + numbers[numbers.length - 2];
//                 } else if (each == '-') {
//                     result = numbers[numbers.length - 2] - numbers[numbers.length - 1];
//                 } else if (each == '*') {
//                     result = numbers[numbers.length - 1] * numbers[numbers.length - 2];
//                 } else if (each == '/') {
//                     result = numbers[numbers.length - 2] / numbers[numbers.length - 1];
//                 }
//                 numbers.pop();
//                 numbers.pop();
//                 numbers.push(result);
//             }
//         }
//     }
//     if (numbers.length > 1) {
//         console.log('Error: too many operands!');
//     } else if (numbers.length == 1 && flag){
//         console.log(`${numbers[0]}`);
//     }
// }
// solve([15, '/'])
