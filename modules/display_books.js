/* eslint-disable import/no-cycle */
import { booksArray } from '../index.js';
import appendBookToDOM from './add_remove_fromDOM.js';

export default function loadBooks() {
  booksArray.forEach((book) => {
    appendBookToDOM(book);
  });
}
