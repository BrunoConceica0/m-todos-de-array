function filterbooks(booksQuantity, category) {
  const filteredbooks =
    //se a categoria for igual a disponivel ele retorna os livros disponiveis
    category == "disponivel"
      ? booksQuantity.filter((book) => book.quantidade > 0)
      : //se a categoria for igual a não disponivel ele retorna os livros não disponiveis
        booksQuantity.filter((book) => book.categoria === category);

  return filteredbooks;
  // elementToinsertBook.innerHTML = "" para limpar o conteudo da div quando for chamado a função de filtar
}

export default filterbooks;
