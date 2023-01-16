import Book from './modules/book.js';
import { listHandler, addBookHandler, contactHandler, } from './modules/navigation.js';
import appendBookToDOM from './modules/add_remove_fromDOM.js';
import { loadBooks } from './modules/display_books.js';
import { DateTime } from './modules/luxon.js';

const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');
const bookForm = document.getElementById('booksForm');
const booksSection = document.getElementById('books_section');

export let booksArray = [];

//Retrieve Local Storage Data
export const retrieveData = () => {
  const parseData = JSON.parse(window.localStorage.getItem('books'));
  if (parseData) {
    booksArray = parseData;
  }
}

//Event Listener Add Book
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newBook = new Book(
    bookForm.elements.title.value,
    bookForm.elements.author.value,
  );
  Book.addBook(newBook);
  bookForm.reset();
  appendBookToDOM(newBook);
});

//Date & Time
const time = document.getElementById('date');
const dt = DateTime.now();
time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

//Load Data
window.onload = () => {
  retrieveData();
  loadBooks();
};

//Event Listeners navigation
listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
