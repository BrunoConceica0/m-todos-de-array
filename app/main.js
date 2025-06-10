import insertBook from "./methodForEarch.js";
let book = [];
const endpointAPI ="https://guilhermeonrails.github.io/casadocodigo/livros.json";
console.log;

async function getSeachBooks() {
  const res = await fetch(endpointAPI);
  book = await res.json();
  insertBook(book);
}

getSeachBooks();
