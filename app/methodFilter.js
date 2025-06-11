function filterBooks(books, category) {
  if (books == "todos") return books;

  const filteredBooks = books.filter((book) => book.categoria === category);

  return filteredBooks;
  // elementToinsertBook.innerHTML = "" para limpar o conteudo da div quando for chamado a função de filtar
}

export default filterBooks;
