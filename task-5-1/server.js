const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

let books = [
  {isbn: "978-3-8369-2150-4", title: "The Midnight Library", year: 2020, author: "Matt Haig"},
  {isbn: "978-0-14-242750-1", title: "1984", year: 1949, author: "George Orwell"},
  {isbn: "978-0-446-40557-7", title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger"},
  {isbn: "978-1-101-60313-1", title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee"},
  {isbn: "978-1-250-03195-8", title: "The Hunger Games", year: 2008, author: "Suzanne Collins"},
  {isbn: "978-1-84724-482-8", title: "The Hobbit", year: 1937, author: "J.R.R. Tolkien"},
  {isbn: "978-0-575-13376-0", title: "Pride and Prejudice", year: 1813, author: "Jane Austen"},
  {isbn: "978-1-59397-780-3", title: "The Da Vinci Code", year: 2003, author: "Dan Brown"},
  {isbn: "978-1-101-01427-0", title: "Harry Potter and the Sorcerer's Stone", year: 1997, author: "J.K. Rowling"},
  {isbn: "978-0-8041-7015-8", title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald"}
]

app.get('/books', (_, response) => {
  response.send(books);
});

app.get('/books/:isbn', (request, response) => {
  const isbn = request.params.isbn;
  response.send(books.find((book) => book.isbn === isbn));
});

// POST /books: Spread Operator

// PUT /books/{isbn}: .map()

// DELETE /books/{isbn}: .filter()

app.patch('/books/:isbn', (request, response) => {
  // books = books.map((book) =>
  //   book.isbn === request.params.isbn ? {...book, ...request.body} : book
  // );
  books = books.map((book) => {
    if(book.isbn === request.params.isbn) {
      return {...book, ...request.body};
    } else {
      return book;
    }
  })
  response.send(books);
});

app.listen(port, () => {
  console.log(`Library API listening on port ${port}`);
});
