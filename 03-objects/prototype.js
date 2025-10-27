/*
Prototype in JS allows objects to share methods and properties 
through a common blueprint, making code more efficient and reusable.
*/

function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this. year = year;
}

Car.prototype.getInfo = function () {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
}

const car1 = new Car ('Toyota', 'Caht', '2024');
const car2 = new Car ('Honda', 'Doog', '2002');

console.log(car1.getInfo ===car2.getInfo); // this check if they share same prototype method returns true.

car1.getInfo();
car2.getInfo();