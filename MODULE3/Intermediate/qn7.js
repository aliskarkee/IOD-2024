const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
// QUNESTION A 
function getBookTitle(bookId) {
    const book = books.find(b => b.id === bookId);
    
    return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3)); 

// question b
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

console.log(getOldBooks());

// question c
function addGenre() {
    return books.map(book => ({
        ...book,
        genre: 'classic'
    }));
}
console.log(addGenre());

// question d 
function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}


console.log(getTitles('G')); 
console.log(getTitles('F')); 

// question e 
function latestBook() {
    let latest = null;

    books.forEach(book => {
        if (latest === null || book.year > latest.year) {
            latest = book;
        }
    });

    return latest;
}
console.log(latestBook());

