// A function that takes an array of authors and an author ID and returns an author object.
const getAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
};

// A function that takes an array of books and returns an array of the non-returned books
const getNonReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.some((transaction) => !transaction.returned));
};

// A function that takes an array of books and returns an array of the returned books
const getReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.every((transaction) => transaction.returned));
};

// A function that takes an array of books and an author ID and returns an array of books written by the given author
const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId);
};

module.exports = {
  getNonReturnedBooks,
  getReturnedBooks,};
