function multiplosDe3() {
  let resultado = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      resultado += i + "\n";
    }
  }
  return resultado;
}
