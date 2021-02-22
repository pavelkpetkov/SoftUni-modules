

// function problemOne (input) {
//     let orderCount = input.shift();
//     let total = 0;
//     for (let i = 0; i < orderCount; i++) {
//         let pricePerCapsule = input.shift();
//         let days = input.shift();
//         let capsulesCount = input.shift();
//         let price = pricePerCapsule * days * capsulesCount;
//         console.log(`The price for the coffee is: $${price.toFixed(2)}`);
//         total += price;
//     }

//     console.log(`Total: $${total.toFixed(2)}`);
// }
// problemOne (([1,
// 1.53,
// 30,
// 8]));
// problemOne (([2,
//     4.99,
//     31,
//     3,
//     0.35,
//     31,
//     5])
//     )

// function problemTwo (input) {
//     let list = input.shift().split(', ');
//     let countBlacklisted = 0;
//     let countLost = 0;
//     // console.log(list)
//     let i = 0;
//     let current = input[i];
//     while (current != 'Report') {
//         current = input[i];
//         if (current == 'Report') {

//             break;
//         }
//         let [command, index, newName] = current.split(' ');
//         if (command == 'Blacklist') {
//             if (list.includes(index)) {
//                 let indexList = list.indexOf(index);
//                 list.splice(indexList, 1, 'Blacklisted');
//                 console.log(`${index} was blacklisted.`);
//                 countBlacklisted ++;
//             } else {
//                 console.log(`${index} was not found.`);
//             }
//         } else if (command == 'Error') {
//             index = Number(index);
//             if (list[index] !== 'Blacklisted' && list[index] !== 'Lost') {
//                 let username = list[index];
//                 list.splice(index, 1, 'Lost');
//                 console.log(`${username} was lost due to an error.`);
//                 countLost ++;
//             }
//         } else if (command == 'Change') {
//             index = Number(index);
//             if (index >= 0 && index < list.length) {
//                 let currentName = list[index];
//                 list.splice(index, 1, newName);
//                 console.log(`${currentName} changed his username to ${newName}.`);
//             }
//         }
//         i++;
//     }
//     console.log(`Blacklisted names: ${countBlacklisted}`);
//     console.log(`Lost names: ${countLost}`);
//     console.log(list.join(' '));
// }
// problemTwo (["Mike, John, Eddie, William",
// "Error 3",
// "Error 3",
// "Change 0 Mike123",
// "Blacklist Eddie",
// "Report"])
// ;



function problemThree(input) {
    let list = input.shift().split(':');
    // console.log(list)
    let newDeck = [];
    let i = 0;
    let current = input[i];
    while (current != 'Ready') {
        current = input[i];
        if (current == 'Ready') {
            break;
        }
        let [command, card, index] = current.split(' ');
        if (command == 'Add') {
            if (list.includes(card)) {
                newDeck.push(card);
            } else {
                console.log('Card not found.');
            }
        } else if (command == 'Insert') {
            if (list.includes(card) && index >= 0 && index <= newDeck.length) {
                newDeck.splice(index, 0, card);
            } else {
                console.log("Error!")
            }
        } else if (command == 'Remove') {
            if (newDeck.includes(card)) {
                let index = newDeck.indexOf(card);
                newDeck.splice(index, 1);
            } else {
                console.log('Card not found.');
            }
        } else if (command == 'Swap') {
            let index1 = newDeck.indexOf(card);
            let index2 = newDeck.indexOf(index);
            newDeck.splice(index1, 1, index);
            newDeck.splice(index2, 1, card);
        } else if (command == "Shuffle") {
            for (let j = 0; j < parseInt(newDeck.length / 2); j++) {
                let swapCard = newDeck[j];
                let endCard = newDeck[newDeck.length - 1 - j];
                let endIndex = newDeck.length - 1 - j;
                newDeck.splice(j, 1, endCard);
                newDeck.splice(endIndex, 1, swapCard);
            }
        }
        i++;
    }
    console.log(newDeck.join(' '));
}
problemThree(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0",
"Ready"])
;



