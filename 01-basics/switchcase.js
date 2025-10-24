let grade = 76;

switch (true) {
    case (grade > 100 || grade < 0):
        console.log('Invalid grade');
        break;
    case (grade >= 98):
        console.log(`Grade: ${grade} - With highest honors!`);
        break;
    case (grade >= 95):
        console.log(`Grade: ${grade} - With high honors!`);
        break;
    case (grade >= 90):
        console.log(`Grade: ${grade} - With honors!`);
        break;
    case (grade >= 75):
        console.log(`Grade: ${grade} - Passed!`);
        break;
    default:
        console.log(`Grade: ${grade} - Failed.`);    
}