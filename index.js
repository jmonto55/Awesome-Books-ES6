import {
    Book,
    booksArray,
} from './modules/book.js';
import {
    listHandler,
    addBookHandler,
    contactHandler,
} from './modules/navigation.js';

const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');
const booksList = document.getElementById('books_list');
const bookForm = document.getElementById('booksForm');

const booksSection = document.getElementById('books_section');

const dateElement = document.getElementById('date');

// let booksArray = [];

export let retrieveData = () => {
  const data = window.localStorage.getItem('books');
  const parseData = JSON.parse(data);
  if (parseData) {
    booksArray = parseData;
  }
}

export let storeData = (booksArray) => {
  if (window.localStorage) {
    const jsonData = JSON.stringify(booksArray);
    window.localStorage.setItem('books', jsonData);
  }
}



const removeBookFromDOM = (book) => {
  const removeBtn = document.getElementById(book.id);
  const bookItem = removeBtn.parentElement;
  bookItem.parentElement.removeChild(bookItem);
};

const appendBookToDOM = (book) => {
  const bookItem = document.createElement('li');
  const removeButton = document.createElement('button');
  bookItem.classList.add('book_item');
  removeButton.innerText = 'Remove';
  removeButton.setAttribute('type', 'button');
  removeButton.setAttribute('id', book.id);
  removeButton.classList.add('remove');
  bookItem.innerHTML = `
    <span>"${book.title}"   by   ${book.author}</span> 
   
    `;
  bookItem.append(removeButton);
  booksList.append(bookItem);
  removeButton.addEventListener('click', () => {
    Book.removeBook(book);
    removeBookFromDOM(book);
  });
};

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

const loadBooks = () => {
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
}

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
