function somaPares(numero) {
  let soma = 0;
  for (let i = 0; i <= numero; i += 2) {
    soma += i;
  }
  return soma;
}