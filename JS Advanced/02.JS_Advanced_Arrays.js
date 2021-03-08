//exercises:

//Task 'Delimiter':

// function delimiter (arr, delim) {
//     console.log(arr.join(`${delim}`));
// }
// delimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');

//Task 'N-th element':

// function nElement (arr, n) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += n) {
//         result.push(arr[i]);
//     }
//     return result;
// }
// nElement (['1', '2', '3', '4', '5'], 6)

//Task 'Add & remove elements':

// function addRemove (arr) {
//     let result = [];
//     let i = 0;
//     for (let command of arr) {
//         i++;
//         if (command == 'add') {
//             result.push(i);
//         } else if (command == 'remove') {
//             result.pop();
//         }
//     }
//     if (result.length == 0) {
//         console.log('Empty');
//     } else {
//         console.log(result.join('\n'));
//     }
// }
// addRemove (['remove', 'remove', 'remove']);

//Task 'Rotate array':

// function rotateArray (arr, num) {
//     num = + num;
//     for (let i = 0; i < num; i++) {
//         arr.unshift (arr[arr.length - 1]);
//         arr.pop();
//     }
//     console.log(arr.join(' '));
// }
// rotateArray (['Banana', 'Orange', 'Coconut', 'Apple'], 15);

//Task 'Extract':

// function extractSub(numbersArr) {
//     let result = [numbersArr[0]];
//     let biggest = numbersArr[0];
//     for (let i = 0; i < numbersArr.length - 1; i++) {
//         if (numbersArr[i + 1] >= biggest) {
//             result.push(numbersArr[i + 1]);
//             biggest = numbersArr[i + 1];
//         }
//     }
//     return result;
// }
// console.log(extractSub([20, 3, 2, 15, 6, 1]));

//Task 'List of Names':

// function listNames (arr) {
//     let result = arr.sort((a, b) => a.localeCompare(b));
//     for (let i = 0; i < result.length; i++) {
//         console.log(`${i + 1}.${result[i]}`);
//     }
// }
// listNames(["John", "Bob", "Christina", "Ema"])

//Task 'Sorting Numbers':

// function sortingNumbers (numbersArr) {
//     let sorted = numbersArr.sort((a, b) => a - b);
//     let result = [];
//     for (let i = 0; i < numbersArr.length / 2; i++) {
//         result.push(sorted[i]);
//         result.push(sorted[sorted.length - 1 - i]);
//     }
//     if (sorted.length % 2 !== 0) {
//         result.pop();
//     }
//     // console.log(sorted);
//     return result;
// }
// sortingNumbers ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 15]);

//Task 'Sort an array by two criteria':

// function twoCriteria(arr) {
//     let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
//     console.log(sorted.join('\n'));
// }
// twoCriteria(['alpha', 'beta', 'gamma']);
// twoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

//Task 'Magic matrices':

// function magicMatrices(arr) {
//     let isMagic = true;
//     function sumReducer(acc, c) {
//         return acc + c;
//     }
//     let sumRow = arr[0].reduce(sumReducer, 0);
//     let sumColumn = 0;
//     for (let j = 0; j < arr.length; j++) {
//         sumColumn += arr[j][0];
//     }
//     let sum = 0;
//     if (sumRow == sumColumn) {
//         sum = sumRow;
//         for (let i = 1; i < arr.length; i++) {
//             let sumRow = arr[i].reduce(sumReducer, 0);
//             let sumColumn = 0;
//             for (let row of arr) {
//                 sumColumn += row[i];
//             }
//             if (sum !== sumRow || sum !== sumColumn) {
//                 isMagic = false;
//                 break;
//             }
//         }
//     } else {
//         isMagic = false;
//     }
//     console.log(isMagic);
// }
// magicMatrices([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);

//Task 'Tic-tac-toe':

// function ticTakToe(movesArray) {
//     let matrix = [[false, false, false], [false, false, false], [false, false, false]];
//     let countX = 0;
//     let countO = 0;
//     let movesCounter = 0;
//     for (let i = 0; i < movesArray.length; i++) {
//         let [row, column] = movesArray[i].split(' ');
//         row = + row;
//         column = + column;
//         if (countX == 0 || countX == countO) {
//             if (matrix[row][column] == false) {
//                 matrix[row][column] = 'X';
//                 countX++;
//                 movesCounter ++;
//             } else {
//                 console.log(`This place is already taken. Please choose another!`);
//                 continue;
//             }
//         } else {
//             if (matrix[row][column] == false) {
//                 matrix[row][column] = 'O';
//                 countO++;
//                 movesCounter ++;
//             } else {
//                 console.log(`This place is already taken. Please choose another!`);
//                 continue;
//             }
//         }
//         //check rows:
//         if (matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2] && matrix[0][0] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][0] === matrix[0][1] && matrix[0][0] === matrix[0][2] && matrix[0][0] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2] && matrix[1][0] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[1][0] === matrix[1][1] && matrix[1][0] === matrix[1][2] && matrix[1][0] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2] && matrix[2][0] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[2][0] === matrix[2][1] && matrix[2][0] === matrix[2][2] && matrix[2][0] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         // check columns:
//         if (matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0] && matrix[0][0] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][0] === matrix[1][0] && matrix[0][0] === matrix[2][0] && matrix[0][0] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1] && matrix[0][1] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][1] === matrix[1][1] && matrix[0][1] === matrix[2][1] && matrix[0][1] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2] && matrix[0][2] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][2] === matrix[1][2] && matrix[0][2] === matrix[2][2] && matrix[0][2] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         //check diagonals:
//         if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2] && matrix[0][0] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2] && matrix[0][0] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0] && matrix[0][2] === 'X') {
//             console.log('Player X wins!');
//             break;
//         }
//         if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0] && matrix[0][2] === 'O') {
//             console.log('Player O wins!');
//             break;
//         }
//         if (movesCounter == 9) {
//             console.log('The game ended! Nobody wins :(');
//             break;
//         }
//     }
//     for (let line of matrix) {
//         console.log(line.join('\t'));
//     }
// }
// ticTakToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// ticTakToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// ticTakToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);

//Task 'Diagonal attack':

// function diagonalAttack(input) {
//     let matrix = [];
//     for (let line of input) {
//         let current = line.split(' ');
//         matrix.push(current);
//     }
//     // console.log(matrix)
//     let sumOne = 0;
//     let sumTwo = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         let currentOne = matrix[i][i];
//         let currentTwo = matrix[i][matrix.length - 1 - i];
//         currentOne = + currentOne;
//         currentTwo = + currentTwo;
//         sumOne += currentOne;
//         sumTwo += currentTwo;
//     }
//     if (sumTwo !== sumOne) {
//         for (let each of matrix) {
//             console.log(each.join(' '));
//         }
//     } else {
//         let result = [];
//         for (let k = 0; k < matrix.length; k++) {
//             let line = [];
//             for (let m = 0; m < matrix[k].length; m++) {
//                 line.push(sumOne);
//             }
//             line[k] = matrix[k][k];
//             line[matrix.length - 1 - k] = matrix[k][matrix.length - 1 - k];
//             result.push(line);
//         }
//         for (let each of result) {
//             console.log(each.join(' '));
//         }
//     }
// }
// diagonalAttack(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1'])
// diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0'])

//Task 'Orbit':

function orbit(arr) {
    let rows = arr[0];
    let cols = arr[1];
    let starRow = arr[2];
    let starCol = arr[3];
 
    let matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
