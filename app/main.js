import insertBook from "./methodForEarch.js";
import ApplycDiscount from "./methodMap.js";
let books = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
console.log;

async function getSeachBooks() {
  const res = await fetch(endpointAPI);
  books = await res.json();
  let discountBooks = ApplycDiscount(books);
  insertBook(discountBooks);
}

getSeachBooks();
