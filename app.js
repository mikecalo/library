let myLibrary = [];

class Book {
  constructor(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
  }
}

function addBookToLibrary(title, author, year, read) {
  let newEntry = new Book(title, author, year, read);
  myLibrary.push(newEntry);
  console.log(myLibrary);
}

console.log(
  addBookToLibrary(
    "Harry Potter and the Half-Blood Prince",
    "J.K. Rowling",
    "2005",
    "Read"
  )
);

// 1. take user's input, use addBookToLibrary func to create 'new Book' and store the instance into the array myLibrary.
// 2. Make a form like field for user to enter title, author, year, and a button/toggle for if read or not
// 3. click event when user presses submit, use dom manip and use those inputs as arguments for addBookToLibrary func.
// 4. create new 'card' to add book that book to the book list.
