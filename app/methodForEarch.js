import convertReal from "./convetReal.js";
function insertBook(listOfBooks) {
  const elementToinsertBook = document.getElementById("livros");
  // elementToinsertBook.innerHTML = "" para limpar o conteudo da div quando for chamado a função de filtar
  elementToinsertBook.innerHTML = "";

  listOfBooks.forEach((book) => {
    // aqui eu estou chamando a função de verificar a disponibilidade do livro
    let availability = book.quantidade > 0 ? "" : " indisponivel";

    elementToinsertBook.innerHTML += `
    <div class="livro">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">${convertReal(book.preco)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
    `;
  });
}
export default insertBook;
