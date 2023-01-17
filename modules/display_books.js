/* eslint-disable import/no-cycle */
import { booksArray } from '../index.js';
import appendBookToDOM from './add_remove_fromDOM.js';

const loadBooks = () => {
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
};

export default loadBooks;