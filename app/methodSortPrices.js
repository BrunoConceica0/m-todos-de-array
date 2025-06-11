import insertBook from "./methodForEarch.js";
function sortPrices(books) {
  const btnSortPrice = document.getElementById("btnOrdenarPorPreco");
  btnSortPrice.addEventListener("click", () => {
    console.log("ok");
    //Usando [...books]  para não alterar o array original
    
    const booksSorted = [...books].sort((a, b) => a.preco - b.preco);
    insertBook(booksSorted);
  });
}
export default sortPrices;
