let subjects = new Map();

subjects.set(1, 'Math');
subjects.set(2, 'Science');
subjects.set(3, 'History');

console.log(`Subjects: 
${[...subjects.entries()].map(([key, value]) => `${key}: ${value}`).join(" \n")}`
);

console.log(`Subject with key 2: ${subjects.get(2)}`);
console.log(`\nDeleting subject with key 1.`);
subjects.delete(1);
console.log(`Subjects after deletion: 
${[...subjects.entries()].map(([key, value]) =>  `${key}: ${value}`).join(" \n")}`
);