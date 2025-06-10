function filterBooks(books, category) {
  if (books == "todos") return books;

  const filteredBooks = books.filter((book) => book.categoria === category);

  return filteredBooks;
}

export default filterBooks;
