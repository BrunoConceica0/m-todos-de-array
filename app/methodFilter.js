import insertBook from "./methodForEarch.js";
import insertValueTotal from "./insertValueTotal.js";
import { filterQuantityBooks, filterBooksByCategory } from "./filters.js";
const btnfilterBooks = document.querySelectorAll(".nav button");
const valueTotal = document.getElementById("valor_total_livros_disponiveis");
function filterbooks(books) {
  btnfilterBooks.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const category = event.target.value;
      valueTotal.innerHTML = "";

      const filteredbooks =
        //se a categoria for igual a disponivel ele retorna os livros disponiveis
        category == "disponivel"
          ? filterQuantityBooks(books)
          : //se a categoria for igual a não disponivel ele retorna os livros não disponiveis e adiciona a classe indisponivel
            filterBooksByCategory(books, category);
      category == "" ? insertValueTotal(books) : "disponivel";
      // Aqui vai pegar o valor dos preços dos livros e somar somente os livros disponiveis na funcão insertValueTotal
      insertBook(filteredbooks);
    });
  });
  // elementToinsertBook.innerHTML = "" para limpar o conteudo da div quando for chamado a função de filtar
}

export default filterbooks;
