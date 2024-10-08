const newBookBtn = document.querySelector('#newBookBtn')
const addBookBtn = document.querySelector('#addBookBtn')
const deleteBookBtn = document.querySelector('#deleteBookBtm')
const cardContainer = document.querySelector('#cardContainer')

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
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
  	myLibrary.forEach((book) => {
		const bookHTML = `
			<div class="card mb-3">
				<div class="card-body">
					<h5 class="card-title" id="title">${book.title}</h5>
					<p class="card-text" id="author">Author: ${book.author}</p>
					<p class="card-text" id="pages">Pages: ${book.pages}</p>
					<input class="form-check-input" type="checkbox" id="isReadCard" ${book.isRead ? 'checked' : ''}>
					<label class="form-check-label" for="isReadCard">
						Read
					</label>
				</div>
				<button class="btn btn-danger" id="deleteButton">
				<i class="material-symbols-outlined text-light">delete</i>
				</button>
			</div>
	`;
		const cardElement = document.createElement('div')
		cardElement.classList.add('col-sm-3', 'cards')
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

// Events
newBookBtn.addEventListener("click", () => {
	let formContainer = document.querySelector('#formContainer')
	if (formContainer.style.display == 'none') {
		formContainer.style.display = 'block'
	} else {
		formContainer.style.display = 'none'
	}
})

addBookBtn.addEventListener('click', addBookToLibrary)

