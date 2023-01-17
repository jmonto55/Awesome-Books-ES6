import storeData from './storage.js';
import { booksArray } from '../index.js';

export default class Book {
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
    let booksArrayLocal = booksArray;
    booksArrayLocal = booksArray.filter((e) => e.id !== book.id);
    storeData(booksArrayLocal);
    window.location.reload();
  }
}
