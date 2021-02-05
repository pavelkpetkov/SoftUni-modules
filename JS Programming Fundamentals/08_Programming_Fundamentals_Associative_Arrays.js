
// function wordsTracker (input) {
//     let words = input.shift().split(' ');
//     let myObj = {};
//     for (const iterator of words) {
//         myObj[`${iterator}`] = 0;
//     }
//     // console.log(myObj);
//     for (let line of input) {
//         if (myObj.hasOwnProperty(line)) {
//             myObj[`${line}`] ++;
//         }
//     }
//     let entries = Object.entries(myObj);
//     entries.sort(([keyA, valueA], [keyB, valueB]) => {
//         return valueB - valueA;
//     })
//     for (const sorted of entries) {
//         console.log(`${sorted[0]} - ${sorted[1]}`);
//     }
//     // for (const key in myObj) {
//     //     console.log(`${key} - ${myObj[key]}`);
//     // }
// }
// wordsTracker([
//     'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
//     ,'words','this','and','sentence','because','this','is','your','task'])

// function odd(input) {
//     let myArr = input.split(' ');
//     let myMap = new Map();
//     for (let line of myArr) {
//         if (!myMap.has(line.toLowerCase())) {
//             myMap.set(line.toLowerCase(), 1);
//         } else {
//             let myValue = myMap.get(line.toLowerCase());
//             myValue++;
//             myMap.set(line.toLowerCase(), myValue);
//         }
//     }
//     for (let [name, count] of myMap) {
//         if (count % 2 == 0) {
//             myMap.delete(name);
//         }
//     }
//     let result = Array.from(myMap.keys());
//     console.log(result.join(' '));
// }
// odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

// function piccolo(input) {
//     let parking = {};
//     for (let line of input) {
//         let [command, num] = line.split(', ');
//         // console.log(`${command} -> ${num}`);
//         if (!parking.hasOwnProperty(num) && command == 'IN') {
//             parking[num] = 'IN';
//         } else if (parking.hasOwnProperty(num) && command == 'OUT') {
//             delete parking[num];
//         }
//     }
//     let checkKeys = Object.keys(parking);
//     if (checkKeys.length == 0) {
//         console.log('Parking Lot is Empty');
//     }   
//     // for (const key in parking) {
//     //     console.log(`${key} ${parking[key]}`)
//     // }
//     // for (let key in parking) {
//     //     let myArr = key.split('');
//     //     let myNumOnly = myArr.slice(2, 6).map(Number);
//     //     // console.log(myNumOnly)
//     //     let myNumber = myNumOnly[0] * 1000 + myNumOnly[1] * 100 + myNumOnly[2] * 10 + myNumOnly[3];
//     //     parking[key] = myNumber;
//     // }
//     let entries = Object.entries(parking);
//     entries.sort(([keyA, valueA], [keyB, valueB]) => {
//         return keyA.localeCompare(keyB);
//     });
//     for (let result of entries) {
//         console.log(result[0]);
//     }
// }

// function partyTime(input) {
//     let inTheHouseVIP = [];
//     let inTheHouseREG = [];
//     let current = input[0];
//     while (current !== 'PARTY') {
//         current = input[0];
//         if (current == 'PARTY') {
//             input.shift();
//             break;
//         }
//         let first = current.substring(0, 1);
//         if (first == '0' || first == '2' || first == '1' || first == '3' || first == '4' ||
//             first == '5' || first == '6' || first == '7' || first == '8' || first == '9') {
//             inTheHouseVIP.push(current);
//         } else {
//             inTheHouseREG.push(current)
//         }
//         input.shift();
//     }

//     for (let arriving of input) {
//         let first = arriving.substring(0, 1);
//         if (first == '0' || first == '2' || first == '1' || first == '3' || first == '4' ||
//             first == '5' || first == '6' || first == '7' || first == '8' || first == '9') {
//             let index = inTheHouseVIP.indexOf(arriving);
//             if (index > -1) {
//                 inTheHouseVIP.splice(index, 1);
//             };
//         } else {
//             let index = inTheHouseREG.indexOf(arriving);
//             if (index > -1) {
//                 inTheHouseREG.splice(index, 1);
//             };
//         }
//     }
//     let counter = inTheHouseREG.length + inTheHouseVIP.length;
//     console.log(counter);
//     if (inTheHouseVIP.length > 0) {
//         for (let line of inTheHouseVIP) {
//             console.log(line);
//         }
//     }
//     if (inTheHouseREG.length > 0) {
//         for (let line of inTheHouseREG) {
//             console.log(line);
//         }
//     }
//     // console.log(inTheHouseVIP);
//     // console.log(inTheHouseREG);
// }
// partyTime();


// function cardGame(input) {
//     let myObj = {};
//     for (let i = 0; i < input.length; i++) {
//         let [name, cards] = input[i].split(': ');
//         let cardsArr = cards.split(', ');
//         if (!myObj.hasOwnProperty(name)) {
//             myObj[name] = cardsArr;
//         } else {
//             let value = myObj[name];
//             let newValue = value.concat(cardsArr);
//             myObj[name] = newValue;
//         }

//     }

//     for (let name in myObj) {
//         let element = myObj[name];
//         let set = new Set(element);
//         let uniqueCards = Array.from(set);
//         myObj[name] = uniqueCards;
//     }

//     for (let name in myObj) {
//         let cards = myObj[name];
//         let totalScore = 0;
//         for (let i = 0; i < cards.length; i++) {
//             let element = cards[i];
//             let [P, T, K] = Array.from(element);
//             let score = 0;
//             let indexP = 0;
//             if (P == '1') {
//                 indexP = 10;
//             } else if (P == '2' || P == '3' || P == '4' || P == '5' || P == '6' || P == '7' ||
//                 P == '8' || P == '9') {
//                 indexP = Number(P);
//             } else {
//                 switch (P) {
//                     case 'J':
//                         indexP = 11;
//                         break;
//                     case 'Q':
//                         indexP = 12;
//                         break;
//                     case 'K':
//                         indexP = 13;
//                         break;
//                     case 'A':
//                         indexP = 14;
//                         break;
//                 }
//             }
//             let indexT = 0;
//             switch (T) {
//                 case 'S':
//                     indexT = 4;
//                     break;
//                 case 'H':
//                     indexT = 3;
//                     break;
//                 case 'D':
//                     indexT = 2;
//                     break;
//                 case 'C':
//                     indexT = 1;
//                     break;
//             }
//             if (P == '1') {
//                 switch (K) {
//                     case 'S':
//                         indexT = 4;
//                         break;
//                     case 'H':
//                         indexT = 3;
//                         break;
//                     case 'D':
//                         indexT = 2;
//                         break;
//                     case 'C':
//                         indexT = 1;
//                         break;
//                 }
//             }
//             score = indexT * indexP;
//             totalScore += score;
//         }
//         myObj[name] = totalScore;
//         console.log(`${name}: ${myObj[name]}`);
//     }
// }
// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

// function travelTime(input) {
//     let result = {};
//     for (let line of input) {
//         let [country, town, price] = line.split(' > ');
//         price = Number(price);
//         if (!result.hasOwnProperty(country)) {
//             result[country] = [town, price];
//         } else {
//             let value = result[country];
//             if (!value.includes(town)) {
//                 value.push(town);
//                 value.push(price);
//             } else {
//                 let index = value.indexOf(town);
//                 if (value[index + 1] > price) {
//                     value[index + 1] = price;
//                 }
//             }
//         }
//     }
//     for (let key in result) {
//         let value = result[key];
//         if (value.length > 2) {
//             let newObj = {};
//             for (let i = 0; i < value.length; i++) {
//                 let current = value[i];
//                 newObj[current] = value[i + 1];
//                 i++;
//             }
//             let entries = Object.entries(newObj);
//             entries.sort(([keyA, valueA], [keyB, valueB]) => {
//                 return valueA - valueB;
//             });
//             result[key] = entries;
//         }
//     }

//     let finalArray = Object.entries(result);
//     finalArray.sort(([keyA, valueA], [keyB, value]) => {
//         return keyA.localeCompare(keyB);
//     });
//     // console.log(finalArray)
//     for (let line of finalArray) {
//     let [destination, value] = line;
//         if (value[1][0] !== undefined) {
//             let where = "";
//             for (let i = 0; i < value.length; i++) {
//                 let town = value[i][0];
//                 let price = value[i][1];
//                 where += `${town} -> ${price} `;
//             }
//             console.log(`${destination} -> ${where}`);
//         } else {
//             let [town, price] = value;
//             console.log(`${destination} -> ${town} -> ${price}`);
//         }
//     }
// }
// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"]);

// function companyUsers(input) {
//     let result = {};
//     for (let line of input) {
//         let [company, employee] = line.split('->');
//         if (!result.hasOwnProperty(company)) {
//             result[company] = [employee];
//         } else {
//             if (!result[company].includes(employee)) {
//                 result[company].push(employee);
//             }
//         }
//     }
//     let entriesResult = Object.entries(result);
//     entriesResult.sort(([keyA, valueA], [keyB, valueB]) => {
//         return keyA.localeCompare(keyB);
//     });
//     // let sorted = new Map();
//     for (let line of entriesResult) {
//         let [company, employees] = line;
//         console.log(company);
//         for (let i = 0; i < employees.length; i++) {
//             let element = employees[i];
//             console.log(`--${element}`);
//         }
//     }
// }
// companyUsers(['SoftUni -> AA12345',
// 'SoftUni -> BB12345',
// 'Microsoft -> CC12345',
// 'HP -> BB12345'])

// function aMinerTask(input) {
//     let result = {};
//     for (let i = 0; i < input.length; i += 2) {
//         let element = input[i];
//         let quantity = Number(input[i + 1]);
//         if (!result.hasOwnProperty(element)) {
//             result[element] = quantity;
//         } else {
//             result[element] += quantity;
//         }
//     }
//     for (let key in result) {
//         console.log(`${key} -> ${result[key]}`);
//     }
// }
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'])
// aMinerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'])




// CHECK THIS FOR NESTED SORTING: !!!



function arenaTier(input) {
    let result = {};
    // fill the object:
    for (let command of input) {
        if (command == 'Ave Cesar') {
            break;
        } else if (command.includes('->')) {
            let [name, tech, skill] = command.split(' -> ');
            skill = Number(skill);
            if (!result.hasOwnProperty(name)) {
                result[name] = [tech, skill];
            } else {
                if (!result[name].includes(tech)) {
                    result[name].push(tech);
                    result[name].push(skill);
                } else {
                    let indexSkill = result[name].indexOf(tech) + 1;
                    if (result[name][indexSkill] < skill) {
                        result[name].splice(indexSkill, 1, skill);
                    }
                }
            }
        } else {
            let [one, two] = command.split(' vs ');
            if (result.hasOwnProperty(one) && result.hasOwnProperty(two)) {
                for (let i = 0; i < result[one].length; i += 2) {
                    let tech1 = result[one][i];
                    let isFlag = false;
                    for (let tech2 of result[two]) {
                        if (tech1 === tech2) {
                            let index1 = result[one].indexOf(tech1) + 1;
                            let index2 = result[two].indexOf(tech2) + 1;
                            if (result[one][index1] > result[two][index2]) {
                                delete result[two];
                            } else if (result[one][index1] < result[two][index2]) {
                                delete result[one];
                            }
                            isFlag = true;
                            break;
                        }
                    }
                    if (isFlag) {
                        break;
                    }
                }
            }
        }
    }
    // sort the names by their sum of the skills in the arrays OR alphabetically:

    let entries = Object.entries(result);
    let sortedBig = entries.sort(([keyA, arrA], [keyB, arrB]) => {
        let sumA = 0;
        for (let j = 1; j < arrA.length; j += 2) {
            sumA += arrA[j];
        }
        let sumB = 0;
        for (let k = 1; k < arrB.length; k += 2) {
            sumB += arrB[k];
        }
        if (sumA == sumB) {
            return keyB.localeCompare(keyA);
        } else {
            return sumB - sumA
        }
    });
    // Make NESTED arrays in order to sort them out:
    for (let eachGladiator of sortedBig) {
        let newNestedArr = [];
        for (let m = 0; m < eachGladiator[1].length; m += 2) {
            let current = eachGladiator[1][m];
            let currentValue = eachGladiator[1][m + 1];
            let pushed = [current, currentValue];
            newNestedArr.push(pushed);
        }
        eachGladiator.splice(1, 1, newNestedArr);
    }
    // Sort the nested arrays and print:
    for (let finalSort of sortedBig) {
        let sum = 0;
        let sorted = finalSort[1].sort(([techA, valTechA], [techB, valTechB]) => {

            if (valTechA == valTechB) {
                return techA.localeCompare(techB);
            } else {
                return valTechB - valTechA;
            }
        });
        finalSort.splice(1, 1, sorted);
        for (let n = 0; n < finalSort[1].length; n++) {
            sum += finalSort[1][n][1];
        }
        console.log(`${finalSort[0]}: ${sum} skill`);
        for (let l = 0; l < finalSort[1].length; l++) {
            console.log(`- ${finalSort[1][l][0]} <!> ${finalSort[1][l][1]}`);
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar']);

// function legendaryFarming(str) {
//     let precious = {
//         'shards': 0,
//         'fragments': 0,
//         'motes': 0,
//     }
//     let junk = {};
//     let inputArr = str.split(' ');
//     for (let i = 1; i < inputArr.length; i+=2) {
//         let current = inputArr[i].toLowerCase();
//         let quantity = inputArr[i - 1];
//         quantity = Number(quantity);
//         if (precious.hasOwnProperty(current)) {
//             precious[current] += quantity;
//             if (precious['shards'] >= 250) {
//                 precious['shards'] -= 250;
//                 console.log('Shadowmourne obtained!');
//                 break;
//             } else if (precious['fragments'] >= 250) {
//                 precious['fragments'] -= 250;
//                 console.log('Valanyr obtained!');
//                 break;
//             } else if (precious['motes'] >= 250) {
//                 precious['motes'] -= 250;
//                 console.log('Dragonwrath obtained!');
//                 break;
//             }
//         } else {
//             if (junk.hasOwnProperty(current)) {
//                 junk[current] += quantity;
//             } else {
//                 junk[current] = quantity;
//             }
//         }
//     }

//     let entriesP = Object.entries(precious);
//     let sortedP = entriesP.sort(([keyA, valueA], [keyB, valueB]) => {
//         if (valueA == valueB) {
//             return keyA.localeCompare(keyB);
//         } else {
//             return valueB - valueA;
//         }
//     })
//     for (let key of sortedP) {
//         console.log(`${key[0]}: ${key[1]}`);
//     }

//     let entriesJ = Object.entries(junk);
//     let sortedJ = entriesJ.sort(([keyA, valueA], [keyB, valueB]) => {
//         return keyA.localeCompare(keyB);
//     });
//     for (let keyJ of sortedJ) {
//         console.log(`${keyJ[0]}: ${keyJ[1]}`);
//     }
// }
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')