

// function solve (input) {
//     let email = input.shift();
//     for (let line of input) {
//         if (line == 'Complete') {
//             break;
//         } else {
//             let [command, one] = line.split(' ');
//             if (command == 'Make') {
//                 if (one == 'Upper') {
//                     email = email.toUpperCase();
//                     console.log(email);
//                 } else if (one == 'Lower') {
//                     email = email.toLowerCase();
//                     console.log(email);
//                 }
//             } else if (command == 'GetDomain') {
//                 one = Number(one);
//                 console.log(email.slice(-one));
//             } else if (command == 'GetUsername') {
//                 let index = email.indexOf('@');
//                 if (index == -1) {
//                     console.log(`The email ${email} doesn't contain the @ symbol.`);
//                 } else {
//                     console.log(`${email.substring(0, index)}`);
//                 }
//             } else if (command == 'Replace') {
//                 let indexR = email.indexOf(one);
//                 while (indexR != -1) {
//                     email = email.replace(`${one}`, '-');
//                     indexR = email.indexOf(one);
//                 }
//                 console.log(email);
//             } else if (command == 'Encrypt') {
//                 let arr = [];
//                 for (let a of email) {
//                     arr.push(a.charCodeAt(0));
//                 }
//                 console.log(arr.join(' '));
//             }
//         }
//     }
// }
// solve ([
//     'AnotherMail.com',
//     'Make Lower',
//     'GetUsername',
//     'Replace a',
//     'Complete'
//   ])

// function solve (input) {
//     let n = Number(input.shift());
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         let line = input[i];

//         let regex = /U\$(?<name>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5,}\d+)P@\$/g;
//         let matches = regex.exec(line)

//         if (matches == null) {
//             console.log('Invalid username or password');
//         } else {
//             count++;
//             console.log('Registration was successful');
//             console.log(`Username: ${matches.groups.name}, Password: ${matches.groups.pass}`);
//         }
//     }
//     console.log(`Successful registrations: ${count}`);
// }
// solve ([
//     '3',
//     'U$MichaelU$P@$asdqwe123P@$',
//     'U$NameU$P@$PasswordP@$',
//     'U$UserU$P@$ad2P@$'
//   ])
//   solve([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ])
// solve([
//     '3',
//     'U$myU$-->P@$asdqwe123P@$',
//     'Sara 1232412',
//     'U$NameU$P@$Pass234P@$'
//   ])

// function problem3 (input) {
//     let capacity = Number(input.shift());

//     let users = {};

//     for (let line of input) {
//         if (line == 'Statistics') {
//             break;
//         } else {
//             let [command, name, one, two] = line.split('=');
//             if (command == 'Add') {
//                 one = Number(one);
//                 two = Number(two);
//                 if (!users.hasOwnProperty(name)) {
//                     users[name] = {};
//                     users[name].sent = one;
//                     users[name].received = two;
//                 }
//             } else if (command == 'Message') {
//                 if (users.hasOwnProperty(name) && users.hasOwnProperty(one)) {
//                     users[name].sent ++;
//                     if (users[name].sent + users[name].received >= capacity) {
//                         console.log(`${name} reached the capacity!`);
//                         delete users[`${name}`];
//                     }
//                     users[one].received ++;
//                     if (users[one].received + users[one].sent >= capacity) {
//                         console.log(`${one} reached the capacity!`);
//                         delete users[`${one}`];
//                     }
//                 }
//             } else if (command == 'Empty') {
//                 if (name == 'All') {
//                     users = {};
//                 } else {
//                     if (users.hasOwnProperty(name)) {
//                         delete users[name];
//                     }
//                 }
//             }
//         }
//     }

//     let entries = Object.entries(users);

//     console.log(`Users count: ${entries.length}`);

//     entries.sort( ([userA, propA], [userB, propB]) => {
//         return propB.received - propA.received || userA.localeCompare(userB)
//     })
//     .forEach( x => console.log(`${x[0]} - ${x[1].received + x[1].sent}`));

// }
// problem3 ([
//     '10',
//     'Add=Mark=5=4',
//     'Add=Clark=3=5',
//     'Add=Berg=9=0',
//     'Add=Kevin=0=0',
//     'Message=Berg=Kevin',
//     'Statistics'
//   ]);
// problem3 ([
//     '20',
//     'Add=Mark=3=9',
//     'Add=Berry=5=5',
//     'Add=Clark=4=0',
//     'Empty=Berry',
//     'Add=Blake=9=3',
//     'Add=Michael=3=9',
//     'Add=Amy=9=9',
//     'Message=Blake=Amy',
//     'Message=Michael=Amy',
//     'Statistics'
//   ])

// let a = 10;
// let b = 20;
// let c = a > b ? a : b;
// console.log(c);

// for (let i = 10; i > 3; i -=2) {
//     console.log(i);
// }

let arr = ['z', 'a', 'd', 's'];

arr.sort((a, b) => b.localeCompare(a));

console.log(arr)

console.log(Number(true));

let a = 5;
let b = a++;
let c = ++a;
console.log(c);

let greet = 'Hello World';
console.log(greet.substring(3, 5));