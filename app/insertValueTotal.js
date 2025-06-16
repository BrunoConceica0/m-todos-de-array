import convertReal from "./convetReal.js";
const valueTotal = document.getElementById("valor_total_livros_disponiveis");

function insertValueTotal(books) {
  let value = books.reduce((acc, books) => acc + books.preco, 0);
  value = convertReal(value);
  // Se
  value.length !== 0
    ? (valueTotal.innerHTML = ` 
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${value}</span></p>
    </div>
  `)
    : (valueTotal.innerHTML = "");
}
export default insertValueTotal;
