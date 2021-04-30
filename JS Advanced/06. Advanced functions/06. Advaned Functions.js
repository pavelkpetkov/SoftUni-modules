//Task 01.Sort Array:

function srtArr (arr, srt) {

    if (srt == 'asc') {
        return sortAsc();
    } else if (srt == 'desc') {
        return sortDesc();
    }
    function sortAsc () {
        let sorted = arr.sort((a, b) => a - b);
        return sorted;
    }
    function sortDesc () {
        let sorted = arr.sort((a, b) => b - a);
        return sorted;
    }
}
srtArr ([14, 7, 17, 6, 8], 'desc');

//Task 02.Argument Info:

function argInfo(...input) {
    let info = new Map();
 
    input.forEach(x => {
        let type = typeof x;
 
        if (!info.has(type)) {
            info.set(type, 0);
        }
 
        info.set(type, info.get(type) + 1);
        console.log(`${type}: ${x}`);
    });
 
    [...info].sort(([aType, aCount], [bType, bCount]) => bCount - aCount)
        .forEach(([type, count]) => {
            console.log(`${type} = ${count}`);
        });
}

//Task 03.Fibonacci:

function getFibonator () {
    let numOne = 0;
    let numTwo = 1;
    return function fib () {
        let result = numOne + numTwo;
        numOne = numTwo;
        numTwo = result;
        return numOne;
    }
}

//Task 05.Functional Sum:

function add (a) {
    let sum = 0;
    sum += a;
    function calc (b) {
        sum += b;
        return calc;
    }
    calc.toString = () => sum;
    return calc
}
console.log(add(1)(6)(-3));

//Task 07.Simple calculator:

function solve() {
    let firstElement;
    let secondElement;
    let resultElement;
    return {
        init: (selector1, selector2, resultSelector) => {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
        },
        add: () => {
            resultElement.value = Number(firstElement.value) + Number(secondElement.value);
        },
        subtract: () => {
            resultElement.value = Number(firstElement.value) - Number(secondElement.value);
        }
    }
}