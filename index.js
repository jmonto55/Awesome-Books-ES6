import Book from './modules/book.js';
import { listHandler, addBookHandler, contactHandler, } from './modules/navigation.js';
import appendBookToDOM from './modules/add_remove_fromDOM.js';
import { loadBooks } from './modules/display_books.js';

const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');
const bookForm = document.getElementById('booksForm');
const booksSection = document.getElementById('books_section');
const dateElement = document.getElementById('date');

export let booksArray = [];

export const retrieveData = () => {
  const parseData = JSON.parse(window.localStorage.getItem('books'));
  if (parseData) {
    booksArray = parseData;
  }
}

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

const setDateTime = () => {
  dateElement.innerHTML = new Date().toLocaleString();
}

window.onload = () => {
  booksSection.classList.add('visible');
  retrieveData();
  loadBooks();
  setDateTime();
};

listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
