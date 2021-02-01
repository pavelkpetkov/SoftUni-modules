/*
function train(imput) {
    let myArr = imput[0];
        myArr = myArr.split(" ");
        myArr = myArr.map(Number);
    let maxPassengers = Number(imput[1]);

    for (let i = 2; i < imput.length; i++) {
        let current = imput[i];
        let currentArr = current.split(" ");
        if (currentArr.includes("Add")) {
            myArr.push(currentArr[1]);
        } else {
            currentArr = Number(currentArr);
            for (let j = 0; j < myArr.length; j++) {
                let passengers = myArr[j];
                if (passengers + currentArr <= maxPassengers) {
                    myArr[j] = passengers + currentArr;
                    break;
                }
            }
        }
    }
    console.log(myArr.join(" "));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
*/

// function distinctArray(imput) {
//     for (let i = 0; i < imput.length; i++) {
//         let element = imput[i];
//         for (let j = i + 1; j < imput.length; j++) {
//             let elseElement = imput[j];
//             if (element === elseElement) {
//                 imput.splice(j, 1);
//             }
//         }
//     }
//     for (let i = 0; i < imput.length; i++) {
//         let element = imput[i];
//         for (let j = i + 1; j < imput.length; j++) {
//             let elseElement = imput[j];
//             if (element === elseElement) {
//                 imput.splice(j, 1);
//             }
//         }
//     }
//     console.log(imput.join(" "));
// }
// distinctArray([20, 8, 12, 13, 4, 4, 8, 8, 5]);


// function houseParty (imput) {
//     let listArr = [];
//     for (let i = 0; i < imput.length; i++) {
//         let element = imput[i].split(" ");
//         if (element.includes("not")) {
//             if(listArr.includes(element[0]) === false) {
//                 console.log(`${element[0]} is not in the list!`)
//             } else {
//                 let removedFromList = listArr.indexOf(element[0]);
//                 listArr.splice(removedFromList, 1);
//             }

//         } else {
//             if (listArr.includes(element[0])) {
//                 console.log(`${element[0]} is already in the list!`)
//             } else {
//                 listArr.push(element[0]);
//             }
//         }
//     }
//     for (let j = 0; j < listArr.length; j++) {
//         console.log(listArr[j]) 
//     }
// }
// houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])


// function sorting(imput) {
//     let result = [];
//     let copiedArr = imput.slice();
//     let ascending = imput.sort((a, b) => a - b);
//     let descending = copiedArr.sort((a, b) => b - a);
//     for (let i = 0; i < imput.length / 2; i++) {
//         while (imput.length > result.length) {
//             result.push(descending[i]);
//             if (imput.length === result.length) {
//                 break;
//             }
//             result.push(ascending[i]);
//             break;
//         }
//     }
//     console.log(result.join(" "));
// }
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


// function sortByTwoCriteria(imput) {
//     for (let i = 0; i < imput.length - 1; i++) {
//         let currentI = imput[i];
//         let counter = imput[i].length;
//          for (let m = i; m < imput.length; m++) {
//             let counterNext = imput[m].length;
//             if (counter > counterNext) {
//                 imput.splice(i, 1, imput[m]);
//                 imput.splice(m, 1, currentI);
//                 break;
//             }
//          }
//     }
//     for (let j = 0; j < imput.length - 1; j++) {
//         let newElement = imput[j];
//         let nextElement = imput[j + 1];
//         let counterNew = 1;
//         if (newElement.length === nextElement.length) {
//             let smallArr = [];
//             let countLetters = newElement.length;
//             smallArr.push(imput[j]);
//             smallArr.push(imput[j + 1]);
//             counterNew++;
//             let p = j;
//             while ((p + 2) <= imput.length - 1) {
//                 let thirdInRow = imput[p + 2];
//                 if (countLetters === thirdInRow.length) {
//                     smallArr.push(imput[p + 2]);
//                     counterNew++;
//                 } else {
//                     break;
//                 }
//                 p++;
//             }
//             smallArr.sort();
//             smallArr.reverse();
//             imput.splice(j, smallArr.length);
//             for (let k = 0; k < counterNew; k++) {
//                 imput.splice(j, 0, smallArr[k]);
//             }
//         }
//     }
//     for (let n = 0; n < imput.length; n++) {
//         console.log(imput[n]);
//     }
// }
// sortByTwoCriteria(["alpha", "beta", "gamma"]);
// sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// sortByTwoCriteria(["test", "Deny", "omen", "Default"])


// function bombNumbers(arr, bomb) {
//     let bingo = bomb[0];
//     let place = arr.indexOf(bingo)
//     arr.splice((place - bomb[1]), (2 * bomb[1] + 1));

//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result += element;
//     }
//     console.log(result);
// }
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])


// function bombNumbers(arr, bomb) {
//     let result = 0;
//     for (let j = 0; j < arr.length; j++) {
//         let bingo = bomb[0];
//         let place = arr.indexOf(bingo);
//         if (place == -1) {
//             break;
//         }
//         let range = (2 * bomb[1] + 1);
//         if (range / 2 >= arr.length) {
//             arr = [];
//             break;
//         } else {
//             let initialDetonation = place - bomb[1];
//             if (initialDetonation < 0) {
//                 arr.splice(0, (range + initialDetonation))
//             } else {
//                 arr.splice(initialDetonation, range);
//             }
//             //for more bombs:
//             let isFlag = false;
//             for (let k = 0; k < arr.length; k++) {
//                 if (bingo === arr[k]) {
//                     isFlag = true;
//                     break;
//                 }
//             }
//             if (isFlag == false) {
//                 break;
//             }
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         result += element;
//     }
//     console.log(result);
// }
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
// bombNumbers([4, 5, 3], [4, 2]);
// bombNumbers([4, 5, 3], [2, 1]);


// function searchForNumber(arr, imput) {
//     let count = imput[0];
//     let deleted = imput[1];
//     let number = imput[2];
//     let newArr = arr.slice(0, count);
//     newArr.splice(0, deleted);
//     let counter = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] == number) {
//             counter++;
//         }
//     }
//     console.log(`Number ${number} occurs ${counter} times.`);
// }
// searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])


// function arrayManipulator(arrInt, arrStr) {
//     for (let i = 0; i < arrStr.length; i++) {
//         let command = arrStr[i];
//         let commandArray = command.split(" ");
//         if (commandArray.includes("addMany")) {
//             if (Number(commandArray[1]) <= arrInt.length) {
//                 for (let j = (commandArray.length - 1); j >= 2; j--) {
//                     let pushed = Number(commandArray[j]);
//                     arrInt.splice(Number(commandArray[1]), 0, pushed);
//                 }
//             }
//         }
//         if (commandArray.includes("add")) {
//             if (Number(commandArray[1]) <= arrInt.length) {
//                 arrInt.splice(commandArray[1], 0, Number(commandArray[2]));
//             }
//         }
//         if (commandArray.includes("contains")) {
//             let flag = false;
//             for (let k = 0; k < arrInt.length; k++) {
//                 let element = arrInt[k];
//                 if (element === Number(commandArray[1])) {
//                     console.log(k);
//                     flag = true;
//                 }
//             }
//             if (flag === false) {
//                 console.log(-1);
//             }
//         }
//         if (commandArray.includes("remove")) {
//             if (Number(commandArray[1]) >= 0) {
//                 arrInt.splice(Number(commandArray[1]), 1);
//             }
//         }
//         if (commandArray.includes("shift")) {
//             if (Number(commandArray[1]) > 0) {
//                 for (let n = 0; n < Number(commandArray[1]); n++) {
//                     let newArray = [];
//                     for (let p = 0; p < arrInt.length - 1; p++) {
//                         newArray.push(arrInt[p + 1]);
//                     }
//                     newArray.push(arrInt[0]);
//                     arrInt = newArray;
//                 }
//             } else {
//                 for (let n = 0; n > Number(commandArray[1]); n--) {
//                     let newArray = [];
//                     for (let p = 0; p < arrInt.length - 1; p++) {
//                         newArray.push(arrInt[p]);
//                     }
//                     newArray.unshift(arrInt[arrInt.length - 1]);
//                     arrInt = newArray;
//                 }
//             }

//         }
//         if (commandArray.includes("sumPairs")) {
//             let newResult = [];
//             if (arrInt.length % 2 == 0) {
//                 for (let m = 0; m < arrInt.length; m++) {
//                     newResult.push(arrInt[m] + arrInt[m + 1]);
//                     m++;
//                 }
//             } else {
//                 for (let m = 0; m < arrInt.length - 1; m++) {
//                     newResult.push(arrInt[m] + arrInt[m + 1]);
//                     m++;
//                 }
//                 newResult.push(arrInt[arrInt.length - 1]);
//             }
//             arrInt = newResult;
//         }
//         if (commandArray.includes("print")) {
//             console.log(`[ ${arrInt.join(', ')} ]`);
//             break;
//         }
//     }
// }
// arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print', 'add 1 8']);
// arrayManipulator([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "sumPairs", "print"])
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// arrayManipulator([], ['contains -100', "add 0 -100", 'contains -100', 'remove 0', 'print', 'add 0 20']);


// function gladiatorInventory (input) {
//     let inventory = input[0].split(' ');
//     for (let i = 1; i < input.length; i++) {
//         let [command, item] = input[i].split(' ');
//         // console.log([command, item]);
//         if (command == 'Buy' && !inventory.includes(item)) {
//             inventory.push(item);
//         } else if (command == 'Trash' && inventory.includes(item)) {
//             let index = inventory.indexOf(item);
//             inventory.splice(index, 1);
//         } else if (command == 'Repair' && inventory.includes(item)) {
//             let index = inventory.indexOf(item);
//             inventory.splice(index, 1);
//             inventory.push(item);
//         } else if (command == 'Upgrade') {
//             let arrUpgrade = item.split('-');
//             let itemToUpgrade = arrUpgrade[0];
//             if (inventory.includes(itemToUpgrade)) {
//                 let index = inventory.indexOf(itemToUpgrade);
//                 inventory.splice(index + 1, 0, arrUpgrade.join(':'));
//             }
//         }
//     }
// console.log(inventory.join(' '));
// }
// gladiatorInventory (['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel']);
// gladiatorInventory(['SWORD Shield Spear',
// 'Trash Bow',
// 'Repair Shield',
// 'Upgrade Helmet-V'])

// function buildingAWall(input) {
//     input = input.map(Number);
//     let result = [];
//     // console.log(input)
//     let reduced = 0;
//     while (reduced !== (30 * input.length)) {
//         let daylyConcrete = 0;
//         let counter = 0;
//         for (let i = 0; i < input.length; i++) {
//             let element = input[i];
//             if (element < 30) {
//                 element++;
//                 counter++;
//                 input[i] = element;
//             }
//         }
//         daylyConcrete = counter * 195;
//         result.push(daylyConcrete);
//         reduced = input.reduce((sum, b) => sum + b);
//     }
//     console.log(result.join(', '));
//     let total = result.reduce((sum, b) => sum + b);
//     console.log(`${total * 1900} pesos`);
// }
// buildingAWall([17, 22, 17, 19, 17])

function newArrayManipulator(arr, input) {

    for (let i = 0; i < input.length; i++) {
        let [command, one, two] = input[i].split(' ');
        one = Number(one);
        two = Number(two);
        if (command == 'add') {
            if (one <= arr.length) {
                arr.splice(one, 0, two);
            }
        } else if (command == 'contains') {
            console.log(arr.indexOf(one));
        } else if (command == 'remove') {
            arr.splice(one, 1);
        } else if (command == 'shift') {
            for (let m = 1; m <= one; m++) {
                let current = arr[0];
                arr.push(current);
                arr.shift();
            }
        } else if (command == 'sumPairs') {
            let newArr = [];
            if (arr.length % 2 == 0) {
                for (let j = 0; j < arr.length - 1; j++) {
                    let element = arr[j] + arr[j + 1];
                    j++;
                    newArr.push(element);
                }
            } else {
                for (let j = 0; j < arr.length - 2; j++) {
                    let element = arr[j] + arr[j + 1];
                    j++;
                    newArr.push(element);
                }
                newArr.push(arr[arr.length - 1]);
            }
            arr = newArr;
        } else if (command == 'addMany') {
            let commandAddMany = input[i].split(' ');
            commandAddMany.shift();
            commandAddMany.shift();
            for (let k = commandAddMany.length - 1; k >= 0; k--) {
                let element = Number(commandAddMany[k]);
                arr.splice(one, 0, element);
            }
        } else if (command == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
            break;
        }
    }
}
// newArrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// newArrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print', 'add 1 8']);
// newArrayManipulator([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "sumPairs", "print"])
newArrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// newArrayManipulator([], ['contains -100', "add 0 -100", 'contains -100', 'remove 0', 'print', 'add 0 20']);