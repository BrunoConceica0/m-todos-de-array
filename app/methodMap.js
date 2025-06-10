function ApplycDiscount(books) {
  const discount = 0.3;
  const booksWithDiscount = books.map((book) => {
    return { ...book, preco: book.preco - book.preco * discount };
  });
  return booksWithDiscount;
}
export default ApplycDiscount;
