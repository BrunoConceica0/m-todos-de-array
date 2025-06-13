import convertReal from "./convetReal.js";
const valueTotal = document.getElementById("valor_total_livros_disponiveis");
function insertValueTotal(books) {
  books.forEach((book) => {
    let value = (book.preco = convertReal(book.preco));

    if (value.length !== 0) {
      valueTotal.innerHTML = ` 
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${value}</span></p>
    </div>
  `;
    } else {
      valueTotal.innerHTML = "";
    }
  });
}
export default insertValueTotal;
