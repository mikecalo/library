const newBookBtn = document.querySelector('#newBookBtn')
const addBookBtn = document.querySelector('#addBookBtn')
const cardContainer = document.querySelector('#cardContainer')

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function() {
	this.isRead = !this.isRead
}

function addBookToLibrary(event) {
	event.preventDefault();
	const title = document.querySelector('#title')
	const author= document.querySelector('#author')
	const pages = document.querySelector('#pages')
	const isRead = document.querySelector('#isRead')
	const newBook = new Book(title.value, author.value, pages.value, isRead.checked);
  	myLibrary.push(newBook);
	displayBooks()
}

function displayBooks() {
	clearBooks()
  	myLibrary.forEach((book, index) => {
		const bookHTML = `
		<div class="card-body">
		<h5 class="card-title" id="title">${book.title}</h5>
		<p class="card-text" id="author">Author: ${book.author}</p>
		<p class="card-text" id="pages">Pages: ${book.pages}</p>
		<input class="form-check-input" type="checkbox" onclick=updateRead(${index}) id="isReadCard" ${book.isRead ? 'checked' : ''}>
        <label class="form-check-label readStatus" for="isReadCard">
        Read
        </label>
		</div>
		<button class="btn btn-danger" onclick=deleteBook(${index}) id="deleteBookBtn">
		<i class="material-symbols-outlined text-light">delete</i>
		</button>
	`;
		const cardElement = document.createElement('div')
		cardElement.classList.add('col-sm-3', 'cards', 'card', 'm-1', 'bg-primary', 'text-light')
		if (book.isRead) {
			cardElement.classList.add('read')
		}
		cardElement.innerHTML = bookHTML
		cardContainer.appendChild(cardElement)
  });
}

function clearBooks() {
	cardContainer.innerHTML = ''
}

function deleteBook (index) {
	myLibrary.splice(index, 1)
	displayBooks()
}

function updateRead(index) {
	myLibrary[index].toggleRead()
	displayBooks()
}

// EVENTS
// toggle form
newBookBtn.addEventListener("click", () => {
	let formContainer = document.querySelector('#formContainer')
	if (formContainer.style.display == 'none') {
		formContainer.style.display = 'block'
	} else {
		formContainer.style.display = 'none'
	}
})

// add book entered by user via form
addBookBtn.addEventListener('click', addBookToLibrary)


