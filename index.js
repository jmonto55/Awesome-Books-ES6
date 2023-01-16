import {
    listHandler,
    addBookHandler,
    contactHandler,
} from './modules/navigation.mjs';

const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');
const booksList = document.getElementById('books_list');
const bookForm = document.getElementById('booksForm');

const booksSection = document.getElementById('books_section');

const dateElement = document.getElementById('date');

let booksArray = [];

function retrieveData() {
  const data = window.localStorage.getItem('books');
  const parseData = JSON.parse(data);
  if (parseData) {
    booksArray = parseData;
  }
}

function storeData(booksArray) {
  if (window.localStorage) {
    const jsonData = JSON.stringify(booksArray);
    window.localStorage.setItem('books', jsonData);
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }

  static addBook(book) {
    const newBook = new Book(book.title, book.author);
    booksArray.push(newBook);
    storeData(booksArray);
    window.location.reload();
  }

  static removeBook(book) {
    booksArray = booksArray.filter((e) => e.id !== book.id);
    storeData(booksArray);
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

function loadBooks() {
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
}

function setDateTime() {
  dateElement.innerHTML = new Date().toLocaleString();
}

window.onload = () => {
  booksSection.classList.add('visible');
  retrieveData();
  loadBooks();
  setDateTime();
};

// const listHandler = (event) => {
//   event.preventDefault();
//   listLink.style.color = 'blue';
//   addBookLink.style.color = 'black';
//   contactLink.style.color = 'black';
//   booksSection.style.display = 'block';
//   addBookSection.style.display = 'none';
//   contactSection.style.display = 'none';
// }

// const addBookHandler = (event) => {
//   event.preventDefault();
//   listLink.style.color = 'black';
//   addBookLink.style.color = 'blue';
//   contactLink.style.color = 'black';
//   booksSection.style.display = 'none';
//   addBookSection.style.display = 'flex';
//   contactSection.style.display = 'none';
// }

// const contactHandler = (event) => {
//   event.preventDefault();
//   listLink.style.color = 'black';
//   addBookLink.style.color = 'black';
//   contactLink.style.color = 'blue';
//   booksSection.style.display = 'none';
//   addBookSection.style.display = 'none';
//   contactSection.style.display = 'block';
// }

listLink.addEventListener('click', listHandler);
addBookLink.addEventListener('click', addBookHandler);
contactLink.addEventListener('click', contactHandler);
