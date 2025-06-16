function filterQuantityBooks(books) {
  return books.filter((book) => book.quantidade > 0);
}
function filterBooksByCategory(books, category) {
  return books.filter((book) => book.categoria === category);
}
export { filterQuantityBooks, filterBooksByCategory };
