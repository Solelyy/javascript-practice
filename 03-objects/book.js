const book = {
    title: 'Life of an IT girl',
    author: 'Jessa',
    yearPublished: 2025,
    isAvailable: true
}

console.log(`Book title: ${book.title}
Author: ${book.author}`);

book.genre= 'narrative';
book.isAvailable = false;
delete book.yearPublished;

console.log(book);