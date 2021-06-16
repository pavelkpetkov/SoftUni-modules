//Task 01.Rectangle:

// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     calcArea() {
//         return this.width * this.height;
//     }
// }

// let rect = new Rectangle(4, 5, 'Red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

//Task 02.Data Class:

// class Request {
//     constructor(method, uri, version, message) {
//         this.method = method;
//         this.uri = uri;
//         this.version = version;
//         this.message = message;
//         this.response = undefined;
//         this.fulfilled = false;
//     }
// }

// let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
// console.log(myData);

//Task 03.Tickets:

// function tickets(arr, type) {
//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = price;
//             this.status = status;
//         }
//     }
//     let result = [];
//     for (let each of arr) {
//         let [destination, price, status] = each.split('|');
//         price = Number(price);
//         let tickets = new Ticket;
//         tickets.destination = destination;
//         tickets.price = price;
//         tickets.status = status;
//         result.push(tickets);
//     }
//     // console.log(result)

//     let sorted = result.sort((a, b) => {
//         if (type == 'destination') {
//             return a.destination.localeCompare(b.destination);
//         } else if (type == 'price') {
//             return a.price - b.price;
//         } else if (type == 'status') {
//             return a.status.localeCompare(b.status);
//         }
//     })

//     return sorted;
// }
// tickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination')

//Task 04.Sorted List:

// class List {
//     constructor() {
//         this.arr = [];
//         this.size = 0;
//     }
//     add(element) {
//         this.arr.push(element);
//         this.arr.sort((a, b) => a - b);
//         this.size ++;
//         return this.arr;

//     }
//     remove(index) {
//         if (index >= 0 && index < this.arr.length) {
//             this.arr.splice(index, 1);
//             this.arr.sort((a, b) => a - b);
//             this.size --;
//             return this.arr;
//         }
//     }
//     get (index) {
//         if (index >= 0 && index < this.arr.length) {
//             return this.arr[index];
//         }
//     }
// }

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));

// let list = new List();
// list.add(5);
// console.log(list.get(0));
// list.add(3);
// console.log(list.get(0));
// list.remove(0);
// console.log(list.get(0));
// console.log(list.size);

//Task 05.Length Limit:

// class Stringer {
//     constructor(string, length) {
//         this.innerString = string;
//         this.innerLength = Number(length);
//     }
//     increase(length) {
//         this.innerLength += Number(length);
//     }
//     decrease(length) {
//         this.innerLength -= Number(length);
//         if (this.innerLength < 0) {
//             this.innerLength = 0;
//         }
//     }
//     toString() {
//         if (this.innerLength == 0) {
//             return '...'
//         } else if (this.innerString.length > this.innerLength) {
//             return this.innerString.slice(0, this.innerLength) + '...';
//         } else {
//             return this.innerString;
//         }
//     }
// }

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Test

//Task 06.Company:

// class Company {
//     constructor() {
//         this.departments = [];
//     }
//     addEmployee(username, Salary, Position, Department) {
//         if (username == '' || username == undefined || username == null) {
//             throw new Error('Invalid input!');
//         } else if (Salary == '' || Salary == undefined || Salary == null) {
//             throw new Error('Invalid input!');
//         } else if (Position == '' || Position == undefined || Position == null) {
//             throw new Error('Invalid input!');
//         } else if (Department == '' || Department == undefined || Department == null) {
//             throw new Error('Invalid input!');
//         } else if (Salary < 0) {
//             throw new Error('Invalid input!');
//         } else {
//             Salary = Number(Salary);
//             let isItFilled = false;
//             for (let eachDep of this.departments) {
//                 if (eachDep.Department == Department) {
//                     eachDep.usernames.push(`${username}`);
//                     eachDep.Salaries.push(Salary);
//                     eachDep.Positions.push(`${Position}`);
//                     isItFilled = true;
//                     return `New employee is hired. Name: ${username}. Position: ${Position}`;
//                 }
//             }
//             if (!isItFilled) {
//                 let dep = {
//                     Department: Department,
//                     usernames: [`${username}`],
//                     Salaries: [Salary],
//                     Positions: [`${Position}`]
//                 }
//                 this.departments.push(dep)
//                 return `New employee is hired. Name: ${username}. Position: ${Position}`;
//             }
//         }
//     }
//     bestDepartment() {

//         for (const each of this.departments) {
//             let total = 0
//             let counter = 0
//             for (let i = 0; i < each.usernames.length; i++) {
//                 total += each.Salaries[i];
//                 counter++;
//             }
//             let average = total / counter;
//             each.average = average;
//         }

//         let sorted = this.departments.sort((a, b) => {
//             return b.average - a.average
//         })

//         let resultArr = [];
//         for (let j = 0; j < sorted[0].usernames.length; j++) {
//             resultArr.push([sorted[0].usernames[j], sorted[0].Salaries[j], sorted[0].Positions[j]]);
//         }

//         let sortedEmpl = resultArr.sort((a, b) => {
//             return b[1] - a[1] || a[0].localeCompare(b[0]);
//         })
//         let list = '';
//         for (const iterator of sortedEmpl) {
//             list += `${iterator[0]} ${iterator[1]} ${iterator[2]}\n`;
//         }
//         list = list.trim();
//         let output = `Best Department is: ${sorted[0].Department}\nAverage salary: ${sorted[0].average.toFixed(2)}\n${list}`
//         // console.log(output)
//         return output
//     }
// }

// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());

// Task 07.HEX:

// class Hex {
//     constructor(value) {
//         this.value = Number(value);
//     }
//     valueOf() {
//         return this.value;
//     }
//     toString() {
//         return '0x' + this.value.toString(16).toUpperCase();
//     }
//     plus(input) {
//         // if (typeof input == 'number') {
//         //     this.value += Number(input);
//         // } else if (typeof input == 'object') {
//         //     this.value += input.valueOf();
//         // }
//         // let obj = new Hex(this.value)
//         return new Hex(this.value + input)
//     }
//     minus(input) {
//         return new Hex(this.value - input)
//     }
//     parse(input) {
//         return parseInt(input, 16);
//     }
// }

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString() === '0xF');

//Task 08.Juice Flavours:

// function juice(input) {
//     let myObj = {};
//     let myBottles = {};
//     for (const iterator of input) {
//         let [type, quantity] = iterator.split(' => ');
//         quantity = Number(quantity);
//         if (myObj.hasOwnProperty(type)) {
//             myObj[type] += quantity;
//             if (myObj[type] >= 1000) {
//                 let bottles = Math.floor(myObj[type] / 1000);
//                 myObj[type] -= bottles * 1000;
//                 if (myBottles.hasOwnProperty(type)) {
//                     myBottles[type] += bottles;
//                 } else {
//                  myBottles[type] = bottles;
//                 }
//             }
//         } else {
//             myObj[type] = quantity;
//             if (myObj[type] >= 1000) {
//                 let bottles = Math.floor(myObj[type] / 1000);
//                 myObj[type] -= bottles * 1000;
//                 if (myBottles.hasOwnProperty(type)) {
//                     myBottles[type] += bottles;
//                 } else {
//                  myBottles[type] = bottles;
//                 }
//             }
//         }
//     }
//     // console.log(myObj)
//     for (const key in myBottles) {
//         console.log(`${key} => ${myBottles[key]}`)
//     }
// }
// juice(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549'])

//Task 09.Auto Company:

function auto (input) {

        let result = {};
    for (const iterator of input) {
        let [brand, model, cars] = iterator.split(' | ');
        cars = Number(cars);
        if (result.hasOwnProperty(brand)) {
            if (result[brand].hasOwnProperty(model)) {
                result[brand][model] += cars;
            } else {
                result[brand][model] = cars;
            }
        } else {
            result[brand] = {};
            result[brand][model] = cars;
        }
    }
    for (const key in result) {
        console.log(key);
        for (const keyIn in result[key]) {
            console.log(`###${keyIn} -> ${result[key][keyIn]}`);
        }
    }
}
auto(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])

