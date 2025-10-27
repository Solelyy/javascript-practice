import {Dog, Cat} from './ex2_dog.js';

//Polymorphism
const animals = [
    new Dog ('Cassy', 'Shihtzu'),
    new Cat ('Shadow', 'Puspin'),
];

for (const animal of animals) {
    animal.makeSound();
}