import Animal from './ex2_animal.js';

class Dog extends Animal {
    #breed;
    #name;

    constructor (name, breed){
        super(name);
        this.#breed = breed;
    }

    get breed() { return this.#breed; }
    set breed (breed) { return this.#breed = breed; }

    makeSound () {
        console.log(`🐶 ${this.name} barks! `);
    }
}

class Cat extends Animal {
    #breed;
    #name;

    constructor (name, breed) {
        super(name);
        this.#breed = breed;
    }

    get breed () { return this.#breed; }
    set breed (breed) { return this.#breed = breed; }

    makeSound() {
        console.log(`🐱 ${this.name} meows! `);
    }
}

export {Cat, Dog};