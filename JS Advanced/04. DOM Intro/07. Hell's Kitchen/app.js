function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      // Select a tag name into another tag with ID:
      let input = document.querySelector('#inputs > textarea').value;
      //To make the string into ARRAY:
      let array = JSON.parse(input);

      let myObj = {};
      for (let eachRestaurant of array) {
         let [restaurant, ...workers] = eachRestaurant.split(' - ');
         let workersArray = workers[0].split(', ');
         if (!myObj.hasOwnProperty(restaurant)) {
            myObj[restaurant] = {};
            for (let worker of workersArray) {
               let [name, salary] = worker.split(' ');
               salary = Number(salary);
               myObj[restaurant][name] = salary;
            }
         } else {
            for (let worker of workersArray) {
               let [name, salary] = worker.split(' ');
               salary = Number(salary);
               if (!myObj[restaurant].hasOwnProperty(name)) {
                  myObj[restaurant][name] = salary;
               } else {
                  myObj.restaurant[name] = salary;
               }
            }
         }
      }
      // console.log(myObj);

      let bestRestaurant = {
         name: '',
         average: 0,
         best: 0,
         workers: {}
      }
      for (const key in myObj) {
         let count = 0;
         let sum = 0;
         let biggest = 0;
         for (const workers in myObj[key]) {
            let salary = Number(myObj[key][workers]);
            if (biggest < salary) {
               biggest = salary;
            }
            sum += salary;
            count++;
         }
         let averCurrent = sum / count;
         if (averCurrent > bestRestaurant.average) {
            bestRestaurant.average = averCurrent;
            bestRestaurant.name = `${key}`;
            // To do biggest:
            bestRestaurant.best = biggest;
            // To do workers:
            bestRestaurant.workers = myObj[key];
         } else {
            delete myObj[key];
         }
      }

      let sorted = Object.entries(bestRestaurant.workers).sort(([nameA, salaryA], [nameB, salaryB]) => {
         return salaryB - salaryA;
      });
      bestRestaurant.workers = sorted;


      let outputRestaurant = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.average.toFixed(2)} Best Salary: ${bestRestaurant.best.toFixed(2)}`;
      let outputWorker = '';
      for (let i = 0; i < sorted.length; i++) {
         outputWorker += `Name: ${sorted[i][0]} With Salary: ${sorted[i][1]} `;
      }
      document.querySelector('#bestRestaurant > p').textContent = outputRestaurant;
      document.querySelector('#workers > p').textContent = outputWorker;
   }
}