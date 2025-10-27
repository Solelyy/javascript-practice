//this is a modern way of declaring a class. 
//A class in JavaScript is a blueprint for creating objects — 
// just like a constructor function, but with cleaner and modern syntax.

class Person {
    constructor (name, age, birthdate){
        this._name = name;
        this._age = age;
        this._birthdate = birthdate;
    }

    //getters
    get name() { return this._name; }
    get age() { return this._age; }
    get birthdate() { return this._birthdate; } 

    //setters
    set name(newName) { return this._name = newName; }
    set age(newAge) { return this._age = newAge; }
    set birthdate(newBirthdate) { return this._birthdate = newBirthdate; }

    introduce() {
        console.log(`Hello, I'm ${this.name}, I'm ${this.age}. I was born on ${this.birthdate}.`);
    }
}
export default Person;
