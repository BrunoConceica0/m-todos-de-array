import insertBook from "./methodForEarch.js";
const btnfilterBooks = document.querySelectorAll(".nav button");
function filterbooks(books) {
  btnfilterBooks.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.target.value;
      const booksQuantity = books.filter((book) => book.quantidade > 0);
      const filteredbooks =
        //se a categoria for igual a disponivel ele retorna os livros disponiveis
        category == "disponivel"
          ? booksQuantity.filter((book) => book.quantidade > 0)
          : //se a categoria for igual a não disponivel ele retorna os livros não disponiveis
            booksQuantity.filter((book) => book.categoria === category);
      category == "disponivel" ? insertValueTotal(filteredbooks) : "";
      insertBook(filteredbooks);
    });
  });
  // elementToinsertBook.innerHTML = "" para limpar o conteudo da div quando for chamado a função de filtar
}

export default filterbooks;
