const support = require("./support.js")

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  
  
  const nonReturnedBooks = support.getNonReturnedBooks(books);

  const returnedBooks = support.getReturnedBooks(books);

  const result = [];

  result.push(nonReturnedBooks);

  result.push(returnedBooks);

  return result;
}

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;

  const result = transactions.map((transaction) => {
    //use the function of accounts.js to find account by id
    function findAccountById(accounts, id) {
      return accounts.find((account) => account.id === id);
    }

    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });

  result.splice(10);

  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
