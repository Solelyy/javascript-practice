//destructuring is a special way in js to takeout an object element so we can call them easily.

const student = {
    personal: {
        firstName: 'Jessa',
        lastName: 'Gozun',
    },
    school: {
        schlName: 'QCU',
        schlYear: '2025-2026'
    }
}

//destructuring so we can just call them individually without the .student or .student.personal, etc.
let {personal:{firstName, lastName}, school: {schlName, yearLvl}}= student;

student.school.course = 'Information Technology';

const {school: {course}} = student;

yearLvl = '2nd'; // this just update the copy, but the student.school.schlYear still has 2025-2026.

console.log(`Hi, I'm ${firstName} ${lastName}!
I'm pursuing my course, ${course} at ${schlName}. I'm on my ${yearLvl} year now.`);