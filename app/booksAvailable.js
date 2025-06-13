import insertBook from "./methodForEarch.js";

function availability(books) {
  const booksQuantity = books.filter((book) => book.quantidade > 0);

  if (booksQuantity.length === 0) {
    alert("Não há livros disponíveis no momento");
  } else {
    insertBook(booksQuantity);
  }
}

export default availability;
