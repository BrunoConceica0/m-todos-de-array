function convertReal(real) {
  return real.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
export default convertReal;
