export default function storeData(booksArray) {
  if (window.localStorage) {
    const jsonData = JSON.stringify(booksArray);
    window.localStorage.setItem('books', jsonData);
  }
}
