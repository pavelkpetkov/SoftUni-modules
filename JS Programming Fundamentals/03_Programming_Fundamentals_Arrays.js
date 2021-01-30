// function triangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = "";
//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }
//         console.log(line);
//     }
// }
// triangle(3);

// function table(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} X ${i} = ${n * i}`);
//     }
// }
// table(5);

//LAB:

// function swapElements(imput) {
//     let n = parseInt(imput.length / 2);
//     let myChar = "";
//     for (let i = 1; i <= n; i++) {
//         myChar += imput[i - 1];
//         imput[i - 1] = imput[imput.length - i];
//         imput[imput.length - i] = myChar;
//         myChar = "";
//     }
//     let result = imput.join(" ");
//     console.log(result);
// }
// // swapElements(['a', 'b', 'c', 'd', 'e']);
// swapElements(['33', '123', '0', 'dd']);

//Exercises:

// function addOrSub(imput) {
//     let sumOne = 0;
//     let sumNew = 0;
//     for (let i = 0; i < imput.length; i++) {
//         let n = imput[i];
//         sumOne += n;
//         if (n % 2 == 0) {
//             n += i;
//             imput[i] = n;
//         } else {
//             n -= i;
//             imput[i] = n;
//         }
//         sumNew += n;
//     }
//     console.log(imput);
//     console.log(sumOne);
//     console.log(sumNew);
// }
// addOrSub ([-5, 11, 3, 0, 2]);

// function commonElemenets(imput1, imput2) {
//     for (let i = 0; i < imput1.length; i++ ) {
//         let current = imput1[i];
//         for (let j = 0; j < imput2.length; j++) {
//             let current2 = imput2[j];
//             if (current === current2) {
//                 console.log(current2);
//             }
//         }
//     }
// }
// commonElemenets(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);

// function mergeArrays(imput1, imput2) {
//     let thirdArr = [];
//     for (let i = 0; i < imput1.length; i++) {
//         if (i % 2 == 0) {
//             let currentElement1 = Number(imput1[i]);
//             let currentElement2 = Number(imput2[i]);
//             let currentElementCombo = currentElement1 + currentElement2;
//             thirdArr.push(currentElementCombo);
//         } else {
//             thirdArr.push(imput1[i] + imput2[i]);
//         }
//     }
//     console.log(thirdArr.join(' - '));
// }
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);

// function arrayRotation(imput, n) {
//     for (let i = 0; i < n; i++) {
//         let current = imput[0];
//         imput.push(current);
//         result = imput.shift();
//     }
//     console.log(imput.join(' '));
// }
// arrayRotation([51, 47, 32, 61, 21], 2)

// function maxNumber (imput) {
//     let result = [];
//     let element = Number.MIN_SAFE_INTEGER;
//     for (let i = imput.length - 1; i >= 0 ; i--) {
//         if (imput[i] > element) {
//             element = imput[i];
//             result.unshift(element);
//         }
//     }
// console.log(result.join(" "))
// }
// maxNumber([27, 19, 42, 2, 13, 45, 48]);

// function equalSum(array) {
//     let isFlag = false;
//     for (let i = 0; i < array.length; i++) {
//         let sumLeft = 0;
//         let sumRight = 0;
//         for (let j = 0; j < i; j++) {
//             sumLeft += array[j];
//         }
//         for (let k = i + 1; k < array.length; k++) {
//             sumRight += array[k];
//         }
//         if (sumRight == sumLeft) {
//             console.log(i);
//             isFlag = true;
//         }
//     }
//     if (isFlag == false) {
//         console.log("no");
//     }
// }
// equalSum([1]);

// function maxSeq(imput) {
//     let mutatedArr = [];
//     let counter = 0;
//     for (let i = 0; i < imput.length; i++) {
//         if (imput[i] === imput[i + 1]) {
//             mutatedArr.push(imput[i]);
//             if (counter == 0) {
//                 mutatedArr.push(imput[i]);
//             }
//             counter++;
//         } else {
//             counter = 0;
//         }
//     }
//     let result1 = [];
//     let result2 = [];
//     for (let j = 0; j < mutatedArr.length; j++) {
//         if (mutatedArr[j] === mutatedArr[j + 1]) {
//             result1.push(mutatedArr[j]);
//         } else {
//             result2.push(mutatedArr[j + 1]);
//         }

//     }
// }
// maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);


// function maxSequence(imput) {
//     let result1 = [];
//     let result2 = [];
//     let result = [];
//     for (let i = 0; i < imput.length; i++) {
//         let isOneToPush = false;
//         if (result1.length == 0) {
//             while (imput[i] === imput[i + 1]) {
//                 result1.push(imput[i]);
//                 isOneToPush = true;
//                 i++;
//             }
//             if (isOneToPush) {
//                 result1.push(imput[i]);
//             }
//         } else {
//             while (imput[i] === imput[i + 1]) {
//                 result2.push(imput[i]);
//                 isOneToPush = true;
//                 i++;
//             }
//             if (isOneToPush) {
//                 result2.push(imput[i]);
//             }
//         }
//         if (result1.length >= result2.length) {
//             result2 = [];
//             if (result.length < result1.length) {
//                 result = result1;
//             }
//         } else {
//             result1 = [];
//             if (result.length < result2.length) {
//                 result = result2;
//             }
//         }
//     }
//     console.log(result.join(" "));
// }
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);

// function maxSequenceBetter(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let currentSeq = [arr[i]];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 currentSeq.push(arr[j]);
//             } else {
//                 break;
//             }
//         }
//         if (result.length < currentSeq.length) {
//             result =  currentSeq;
//         }
//     }
//     console.log(result.join(" "));
// }
// maxSequenceBetter([0, 1, 1, 5, 2, 2, 6, 3, 3]);


// function magicSum(imput, n) {
//     for (let i = 0; i < imput.length - 1; i++) {
//         for (let j = i + 1; j < imput.length; j++) {
//             if (imput[i] + imput[j] === n) {
//                 if (imput[i] !== imput[j] && imput[j] !== imput[j + 1]) {
//                     console.log(`${imput[i]} ${imput[j]}`);
//                 }
//             }
//         }
//     }
// }
// magicSum([6, 5, 3, 4, 3, 3], 7);

// function magicSumJUDGE100(imput, n) {
//     for (let i = 0; i < imput.length; i++) {
//         for (let j = i + 1; j < imput.length; j++) {
//             if (imput[i] + imput[j] == n) {
//                 console.log(`${imput[i]} ${imput[j]}`);
//             }
//         }
//     }
// }
// magicSumJUDGE100([6, 5, 3, 4, 3, 3], 7);

// function darkD(imput) {
//     let myString = imput[0]
//     let arr = myString.split('|');
//     let myHealth = 100;
//     let myCoins = 0;
//     let room = 0
//     let isDead = false;
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
//         room++;
//         let currentArr = current.split(' ');
//         let num = Number(currentArr[1]);
//         if (currentArr[0] === "potion") {
//             let myInitialHealt = myHealth;
//             myHealth += num;
//             if (myHealth > 100) {
//                 console.log(`You healed for ${100 - myInitialHealt} hp.`)
//                 myHealth = 100;
//             } else {
//                 console.log(`You healed for ${num} hp.`);
//             }
//             console.log(`Current health: ${myHealth} hp.`);
//         } else if (currentArr[0] === "chest") {
//             myCoins += num;
//             console.log(`You found ${num} coins.`);
//         } else {
//             let monster = currentArr[0];
//             myHealth -= num;
//             if (myHealth > 0) {
//                 console.log(`You slayed ${monster}.`);
//             } else {
//                 console.log(`You died! Killed by ${monster}.`);
//                 console.log(`Best room: ${room}`)
//                 isDead = true;
//                 break;
//             }
//         }
//     }
//     if (isDead == false) {
//         console.log("You've made it!");
//         console.log(`Coins: ${myCoins}`);
//         console.log(`Health: ${myHealth}`);
//     }
// }
// darkD("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// darkD([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ])

// function ladyBugs(input) {
//     let cages = [];
//     if (input[0] === 0) {
//         console.log();
//     } else {
//         for (let i = 1; i <= input[0]; i++) {
//             cages.push(0);
//         }
//         // console.log(cages);   ---> [0, 0, 0]
//         let indexes = input[1];
//         if (indexes === "" || indexes === " ") {
//             console.log(cages.join(' '));
//         } else if (input.length === 1) {
//             console.log(cages.join(' '));
//         } else {
//             let arrIndexes = indexes.split(' ');
//             let indexesArrayNum = [];
//             // console.log(arrIndexes)  --> ['0', '1']
//             for (let j = 0; j < arrIndexes.length; j++) {
//                 let current = Number(arrIndexes[j]);
//                 if (current < 0) {
//                     continue;
//                 }
//                 indexesArrayNum.push(current);
//             }
//             // console.log(indexesArrayNum); --->  [0, 1]
//             let fillCages = cages;
//             for (let k = 0; k < indexesArrayNum.length; k++) {
//                 let current2 = indexesArrayNum[k];
//                 if (current2 <= fillCages.length - 1) {
//                     fillCages[current2] = 1;
//                 }
//             }
//             // console.log(fillCages) //--->  [1, 1, 0]
//             for (let m = 2; m < input.length; m++) {
//                 let commandArray = input[m].split(' ');
//                 //    console.log(commandArray)  --> ['0', 'right', '1'] .....
//                 let bug = Number(commandArray[0]);
//                 if (bug < 0) {
//                     continue;
//                 }
//                 let flyNumber = Number(commandArray[2]);
//                 if (commandArray[1] === "right") {
//                     if (fillCages[bug] === 1) {
//                         fillCages[bug] = 0;
//                         if (fillCages[bug + flyNumber] === 0) {
//                             fillCages[bug + flyNumber] = 1;
//                         } else {
//                             for (let n = 0; n < cages.length; n++) {
//                                 if (fillCages[bug + flyNumber + n] === 0 && (bug + flyNumber + n) < fillCages.length && 0 <= bug <= cages.length - 1) {
//                                     fillCages[bug + flyNumber + n] = 1;
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                 } else if (commandArray[1] === "left") {
//                     if (fillCages[bug] === 1) {
//                         fillCages[bug] = 0;
//                         if (fillCages[bug - flyNumber] === 0) {
//                             fillCages[bug - flyNumber] = 1;
//                         } else {
//                             for (let n = 0; n < cages.length; n++) {
//                                 if (fillCages[bug - flyNumber - n] === 0 && (bug - flyNumber - n) < fillCages.length && 0 <= bug <= cages.length - 1) {
//                                     fillCages[bug - flyNumber - n] = 1;
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             console.log(fillCages.join(' '));
//         }
//     }
// }
// ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
// ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladyBugs([5, '3', '3 left 2', '1 left -2']);
// ladyBugs([10, '0 1 2 3 4 5 6 7 8 9', '-5 left 1', '-1 right 1', '-9 left 3', '-8 left 1', '-2 right 0']);
// ladyBugs([3, '3', '3 left 1']);

function newLadybugs (input) {
    let cages = [];
    let cagesNum = Number(input[0]);
    let bugIndexes = input[1].split(' ');
    for (let i = 0; i < cagesNum; i++) {
        for (let j = 0; j < bugIndexes.length; j++) {
            let bugInCage = Number(bugIndexes[j]);
            if (i === bugInCage) {
                cages.push(1);
                break;
            }
        }
        if (cages[i] == undefined) {
            cages.push(0);
        }
    }
    for (let k = 2; k < input.length; k++) {
        let [bug, direction, spaces] = input[k].split(' ');
        bug = Number(bug);
        spaces = Number(spaces);
        if (cages[bug] === 1) {
            if (direction == 'left') {
                cages[bug] = 0;
                let resultIndex = bug - spaces;
                while (resultIndex >= 0) {
                    if (cages[resultIndex] === 0) {
                        cages[resultIndex] = 1;
                        break;
                    } else {
                        resultIndex -= spaces;
                    }
                }
            } else if (direction == 'right') {
                cages[bug] = 0;
                let resultIndex = bug + spaces;
                while (resultIndex < cages.length) {
                    if (cages[resultIndex] === 0) {
                        cages[resultIndex] = 1;
                        break;
                    } else {
                        resultIndex += spaces;
                    }
                }
            }
        }
    }
        console.log(cages.join(' '));
}
newLadybugs ([3, '0 1', '0 right 1', '2 right 1']);
newLadybugs ([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
newLadybugs ([5, '3', '3 left 2', '1 left -2']);
// newLadybugs ([10, '0 1 2 3 4 5 6 7 8 9', '-5 left 1', '-1 right 1', '-9 left 3', '-8 left 1', '-2 right 0']);
// newLadybugs ([3, '3', '3 left 1']);
