const listLink = document.getElementById('listLink');
const addBookLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');

const contactSection = document.getElementById('contact-section');
const addBookSection = document.getElementById('form_section');
const booksSection = document.getElementById('books_section');

export const listHandler = (event) => {
  event.preventDefault();
  listLink.style.color = 'blue';
  addBookLink.style.color = 'black';
  contactLink.style.color = 'black';
  booksSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const addBookHandler = (event) => {
  event.preventDefault();
  listLink.style.color = 'black';
  addBookLink.style.color = 'blue';
  contactLink.style.color = 'black';
  booksSection.style.display = 'none';
  addBookSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

export const contactHandler = (event) => {
  event.preventDefault();
  listLink.style.color = 'black';
  addBookLink.style.color = 'black';
  contactLink.style.color = 'blue';
  booksSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
};
