const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

addBookToLibrary("harry p", "jk", 400, false);
addBookToLibrary("hibbity dibbity", "huey", 1000, true);

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

displayBooks();
