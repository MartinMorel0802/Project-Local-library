function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}


function sortAccountsByLastName(accounts) { 
return accounts.sort((account1, account2) => {
  const lastName1 = account1.name.last 
  const lastName2 = account2.name.last
  return lastName1.toLowerCase() < lastName2.toLowerCase() ? -1 : 1; })}


function getTotalNumberOfBorrows(account, books) {
const {id} = account
let total = 0
for (let book in books){
  const {borrows} = books[book];
  borrows.forEach((element) =>{
    if( element.id === id){
      total++
    }
  })
}
return total
}


function getBooksPossessedByAccount(account, books, authors) {
const accountId = account.id;
const getAuthorById = (authors, id) => {
return authors.find((author) => author.id === id);
};
let result = [];

result = books.filter((book) => {
  return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
});

result = result.map((book) => {
  const author = getAuthorById(authors, book.authorId);
  const newBook = {
    ...book,
    author,
  };

  return newBook;
});

return result;

}

module.exports = {
findAccountById,
sortAccountsByLastName,
getTotalNumberOfBorrows,
getBooksPossessedByAccount,
};

