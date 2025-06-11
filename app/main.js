import insertBook from "./methodForEarch.js";
import ApplycDiscount from "./methodMap.js";
import filterBooks from "./methodFilter.js";
import sortPrices from "./methodSortPrices.js";

let books = [];
const btnfilterBooks = document.querySelectorAll(".nav button");

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

// filtear livra nas categorias usando o chamado da função filterBooks

btnfilterBooks.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const category = event.target.value;

    const filteredBooks = filterBooks(books, category);

    insertBook(filteredBooks);
  });
});

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
}
getSeachBooks();
