import { storeData } from "../index.js";
export let booksArray = [];

export class Book {
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