function tabuada(numero) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  return resultado;
}