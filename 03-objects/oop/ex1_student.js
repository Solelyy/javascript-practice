import Person from './ex1_person.js';

class Student extends Person {
    constructor (name, age, birthdate, course, school){
        super (name, age, birthdate);
        this._course = course; //underscore indicates a "private" field (by convention)
        this._school = school;
    }

    //getters
    get course() {
        return this._course;
    }

    get school() {
        return this._school;
    }

    //setters
    set course(newCourse) {
        return this._course = newCourse;
    }

    set school (newSchool) {
        return this._school = newSchool;
    }

    introduce() {
        //method overriding
        super.introduce();
        console.log(`I'm pursuing ${this.course} at ${this.school}.`);
    }

    //static method, belongs to the class itself.
    static getSchlMotto () {
        console.log('\nMy school motto is, "To become #1 local university of employable graduates."');
    }
}

const s1 = new Student ('Jessa Gozun', 20, '09/23/2005', 'IT', 'Quezon City University');

s1.introduce();
Student.getSchlMotto();

//testing the new course declaration.
console.log(`Current course: ${s1.course}`);
s1.course = 'Computer Science';
console.log(`New course: ${s1.course}`);