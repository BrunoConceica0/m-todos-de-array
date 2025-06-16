import insertBook from "./methodForEarch.js";
import ApplycDiscount from "./methodMap.js";
import filterbooks from "./methodFilter.js";
import sortPrices from "./methodSortPrices.js";
import availability from "./booksAvailable.js";
import insertValueTotal from "./insertValueTotal.js";

// import booksAvailable from "./booksAvailable.js";

let books = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

// filtear livra nas categorias usando o chamado da função filterBooks

// btnfilterBooksofFront.addEventListener("click", () => {
//   const filteredBooks = filterBooks(books);
//   console.table(filteredBooks);
//   insertBook(filteredBooks);
// });

async function getSeachBooks() {
  const res = await fetch(endpointAPI);
  books = await res.json();

  let discountBooks = ApplycDiscount(books);
  insertBook(discountBooks);
  sortPrices(discountBooks);
  filterbooks(discountBooks);
  insertValueTotal(discountBooks);
  const availableBooks = document.getElementById("btnLivrosDisponiveis");
  availableBooks.addEventListener("click", () => availability(discountBooks));
}
getSeachBooks();
