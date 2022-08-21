class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.singleRooms = (capacity * 0.5).toFixed(0);
        this.doubleRooms = (capacity * 0.3).toFixed(0);
        this.maisonetteRooms = (capacity * 0.2).toFixed(0);
    };

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (roomType == 'single') {
            if (this.singleRooms > 0) {
                let obj = {
                    'client name': clientName,
                    'room type': roomType,
                    'nights': nights,
                    'rent number': this.currentBookingNumber
                }
                this.currentBookingNumber++;
                this.singleRooms --;
                this.bookings.push(obj);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${obj['rent number']}.`;
            } else {
                let message = `No ${roomType} rooms available!`;
                if (this.doubleRooms > 0) {
                    message += ` Available double rooms: ${this.doubleRooms}.`;
                }
                if (this.maisonetteRooms > 0) {
                    message += ` Available maisonette rooms: ${this.maisonetteRooms}.`
                }
                return message;
            }
        }
        if (roomType == 'double') {
            if (this.doubleRooms > 0) {
                let obj = {
                    'client name': clientName,
                    'room type': roomType,
                    'nights': nights,
                    'rent number': this.currentBookingNumber
                }
                this.currentBookingNumber++;
                this.doubleRooms --;
                this.bookings.push(obj);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${obj['rent number']}.`;
            } else {
                let message = `No ${roomType} rooms available!`;
                if (this.singleRooms > 0) {
                    message += ` Available single rooms: ${this.singleRooms}.`;
                }
                if (this.maisonetteRooms > 0) {
                    message += ` Available maisonette rooms: ${this.maisonetteRooms}.`
                }
                return message;
            }
        }
        if (roomType == 'maisonette') {
            if (this.maisonetteRooms > 0) {
                let obj = {
                    'client name': clientName,
                    'room type': roomType,
                    'nights': nights,
                    'rent number': this.currentBookingNumber
                }
                this.currentBookingNumber++;
                this.maisonetteRooms --;
                this.bookings.push(obj);
                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${obj['rent number']}.`;
            } else {
                let message = `No ${roomType} rooms available!`;
                if (this.singleRooms > 0) {
                    message += ` Available single rooms: ${this.singleRooms}.`;
                }
                if (this.doubleRooms > 0) {
                    message += ` Available double rooms: ${this.doubleRooms}.`
                }
                return message;
            }
        }
    }

    checkOut(number) {
        let isItIn = false;
        for (const each of this.bookings) {
            if (each['rent number'] == number) {
                isItIn = true;
                let index = this.bookings.indexOf(each);
                let price;
                if (each['room type'] == 'single') {
                    price = 50;
                    this.singleRooms ++;
                } else if (each['room type'] == 'double') {
                    price = 90;
                    this.doubleRooms ++;
                } else {
                    price = 135;
                    this.maisonetteRooms ++;
                }
                let total = each['nights'] * price;
                let messageOut = `We hope you enjoyed your time here, Mr./Mrs. ${each['client name']}. The total amount of money you have to pay is ${total} BGN.`;
                this.bookings.splice(index, 1);
                return messageOut;
            } 
        }
        if (isItIn == false) {
            return `The booking ${number} is invalid.`;
        }
    }

    report () {
        let report = `${this.name.toUpperCase()} DATABASE:\n--------------------`;
        if (this.bookings.length == 0) {
            report += '\nThere are currently no bookings.';
        } else {
            for (const eachGuest of this.bookings) {
                report += `\nbookingNumber - ${eachGuest['rent number']}\nclientName - ${eachGuest['client name']}\nroomType - ${eachGuest['room type']}\nnights - ${eachGuest['nights']}\n----------`
            }
            report = report.substring(0, report.lastIndexOf('\n'));
        }

        return report;
    }
}

let hotel = new Hotel('HotUni', 13);

hotel.rentARoom('Peter', 'single', 8);
hotel.rentARoom('Robert', 'double', 8);
hotel.rentARoom('Geroge', 'maisonette', 12);

console.log(hotel.checkOut(3));

console.log(hotel.report());
// console.log(hotel.roomsPricing);
