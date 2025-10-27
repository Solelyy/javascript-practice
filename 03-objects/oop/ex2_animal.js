//this includes abstraction

class Animal {
    #name; // this is private field, not just a convention naming like _ (underscore)
    constructor(name) {
        //this prevents direct instantiation (abstract)
        if (this.contructor === Animal) {
            throw new Error ("Cannot instantiate 'Animal' class directly.")
        }
        this.#name = name;
    }

    get name() { return this.#name; }
    set name(name) { return this.#name = name; }
    
    makeSound() {
        throw new Error ("Method must be implemented in subclass.");
    }

    move() {
        console.log(`${this.#name} is moving...`);
    }
}

export default Animal;