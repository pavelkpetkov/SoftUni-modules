// function revealWords (words, sentence) {
//     let wordsArray = words.split(', ');
//     let arr = sentence.split(' ');
//     for (let word of arr) {
//         for (let isOnPlace of wordsArray) {
//             if (word.includes('*')) {
//                 if (word.length == isOnPlace.length) {
//                     let index = arr.indexOf(word);
//                     arr.splice(index, 1, isOnPlace);
//                 }
//             }
//         }
//     }
//     console.log(arr.join(' '));
// }
// revealWords('great, learning',
// 'softuni is ***** place for ******** new programming languages');

// function hashTags (input) {
//     let myArr = input.split(' ');
//     for (let word of myArr) {
//         let flag;
//         if (word.length > 1 && word.startsWith('#')) {
//             flag = true;
//             for (let i = 1; i < word.length; i++) {
//                 let numChar = word.charCodeAt(i);
//                 if (numChar < 65 || numChar > 122) {
//                     flag = false;
//                 } else if (numChar > 90 && numChar < 97) {
//                     flag = false;
//                 }
//             }
//         }
//         if (flag) {
//             console.log(word.substring(1, word.length))
//         }
//     }
// }
// hashTags('Nowadays everyone uses # to tag a #special word in #socialMedia')

// function extractFile (line) {
//     let arr = line.split('\\').pop().split('.');
//     let last = arr.pop();
//     console.log(`File name: ${arr.join('.')} \nFile extension: ${last}`);
// }
// extractFile('C:\\\Projects\\Data-Structures\\LinkedList.cs');

// function stringSub (word, find) {
//     let lookingFor = word.toLowerCase();
//     let findToLower = find.toLowerCase();
//     if (findToLower.includes(` ${lookingFor} `) || findToLower.startsWith(`${lookingFor} `) || findToLower.endsWith(` ${lookingFor}`)) {
//         console.log(lookingFor);
//     } else {
//         console.log(`${lookingFor} not found!`);
//     }
// }
// stringSub ('pyth6/on',
// 'pyth6/oNn is the best programming language'
// );

// function replaceRepeating(str) {
//     let arr = str.split('');
//     for (let i = 0; i < arr.length;) {
//         if (arr[i] === arr[i + 1]) {
//             arr.splice(i + 1, 1);
//         } else {
//             i++;
//         }
//     }
//     console.log(arr.join(''));
// }
// replaceRepeating('qqqwerqwecccwd')

// function caseSplitter(stringgg) {
//     let arr = stringgg.split('');
//     for (let i = 1; i < arr.length; i++) {
//         let char = arr[i];
//         if (char !== char.toLowerCase()) {
//             arr.splice(i, 0, " ")
//             i++;
//         }
//     }
//     console.log(arr.join('').split(' ').join(', '));
// }
// caseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

// function cutAndReverse (input) {
//     let firstHalf = input.substring(0, input.length/2).split('').reverse().join('');
//     // console.log(firstHalf) 
//     let secondHalf = input.substring(input.length / 2, input.length).split('').reverse().join('');
//     console.log(`${firstHalf}\n${secondHalf}`);
// }
// cutAndReverse ('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')

// function hardWords (input) {
//     let text = input[0].split(' ');
//     let words = input[1];
//     for (let i = 0; i < text.length; i++) {
//         let element = text[i];
//         if (element.includes('_')) {
//             let count = element.length;
//             if (element.endsWith('.')) {
//                 count = element.length - 1;
//                 for (let word of words) {
//                     if (word.length == count) {
//                         word += ".";
//                         text.splice(i, 1, word);
//                     }
//                 }
//             } else if (element.endsWith(',')) {
//                 count = element.length - 1;
//                 for (let word of words) {
//                     if (word.length == count) {
//                         word += ",";
//                         text.splice(i, 1, word);
//                     }
//                 }
//             } else {
//                 for (let word of words) {
//                     if (word.length == count) {
//                         text.splice(i, 1, word);
//                     }
//                 }
//             }
//         }
//     }
// console.log(text.join(' '));
// }
// hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
// ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

// function passwordGenerator(input) {
//     let first = input[0].toLowerCase();
//     let second = input[1].toLowerCase();
//     let third = input[2].toUpperCase();
//     let passwordArr = (first + second).split('');
//     let counter = 0;
//     for (let i = 0; i < passwordArr.length; i++) {
//         let char = passwordArr[i];
//         if (char == 'a' || char == 'o' || char == 'u' || char == 'i' || char == 'e') {
//             let index = counter;
//             if (counter > third.length - 1) {
//                 index = counter - third.length;
//                 counter = 0;
//             }
//             passwordArr.splice(i, 1, third[index])
//             counter++;
//         }
//     }
//     console.log(`Your generated password is ${passwordArr.reverse().join('')}`);
// }
// passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
// passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
// passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);

// function lettersChangeNumbers(input) {
//     let array = input.split(' ');
//     let total = 0;
//     let num = 0;
//     for (let line of array) {
//         if (line !== '') {
//             let one = line[0];
//             let last = line[line.length - 1];
//             num = Number(line.substring(1, line.length - 1));
//             // console.log(num)
//             if (one === one.toUpperCase()) {
//                 let position = line.charCodeAt(0) - 64;
//                 num /= position;
//             } else {
//                 let position = line.charCodeAt(0) - 96;
//                 num *= position;
//             }
//             if (last === last.toUpperCase()) {
//                 let position = line.charCodeAt(line.length - 1) - 64;
//                 num -= position;
//             } else {
//                 let position = line.charCodeAt(line.length - 1) - 96;
//                 num += position;
//             }
//             total += num;
//         }
//     }
//     console.log(total.toFixed(2));
// }
// lettersChangeNumbers('a1A');


///////////////////////////////////////
//SAME PROBLEMS ABOVE, BUT WITH REGEX
///////////////////////////////////////

// function revWords(wordsStr, text) {
//     let pattern = /\*+/g;
//     let words = wordsStr.split(', ');
//     let matches = text.match(pattern);

//     for (let word of words) {
//         for (let m of matches) {
//             if (word.length == m.length) {
//                 text = text.replace(m, word);
//             }
//         }
//     }
//     console.log(text);
// }
// revWords('great, learning',
//     'softuni is ***** place for ******** new programming languages'
// );

// function hashTag (text) {
//     let pattern = /\#[a-zA-Z]+/g
//     let matches = text.match(pattern);
//     for (let line of matches) {
//         line = line.substring(1);
//         console.log(line)
//     }
// }
// hashTag ('Nowadays everyone uses # to tag a #special word in #socialMedia')

function fileName (str) {

    let pattern = /[\\\\](?<name>[\w\-\_]+[\.]?[\w+]*)\.(?<ext>\w+)/
    let matches = pattern.exec(str);
    let name = matches.groups.name;
    let ext = matches.groups.ext;

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}
fileName ('C:\\Projects\\Data-Structures\\LinkedList.cs')