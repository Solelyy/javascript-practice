function Book (title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished= yearPublished;

    this.getSummary = function () {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`)
    };
}

const book1 = new Book ('Hotdog', 'Jessa', '2025');
const book2 = new Book ('Egg', 'Sofi', '2024');

book1.getSummary();
book2.getSummary();