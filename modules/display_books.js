import { booksArray } from "../index.js";
import appendBookToDOM from './add_remove_fromDOM.js';

export const loadBooks = () => {
  booksArray.forEach((book) => {
  appendBookToDOM(book);
  });
}
