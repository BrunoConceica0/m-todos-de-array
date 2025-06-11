import insertBook from "./methodForEarch.js";
// usando o metodo sort para ordenar os livros de forma crescente
function sortPrices(books) {
  const btnSortPrice = document.getElementById("btnOrdenarPorPreco");
  btnSortPrice.addEventListener("click", () => {
    //Usando [...books]  para não alterar o array original

    const booksSorted = [...books].sort((a, b) => a.preco - b.preco);
    insertBook(booksSorted);
  });
}
export default sortPrices;
