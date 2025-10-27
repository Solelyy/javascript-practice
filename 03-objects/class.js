//this is a modern way of declaring a class. 
//A class in JavaScript is a blueprint for creating objects — 
// just like a constructor function, but with cleaner and modern syntax.

class Person {
    constructor (name, age, birthdate){
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}, I'm ${this.age}. I was born on ${this.birthdate}.`);
    }
}

const p1 = new Person ('Jessa', 19, '09/23/2005');
const p2 = new Person ('Taylor', 35, '12/13/1989');

p1.introduce();
p2.introduce();
