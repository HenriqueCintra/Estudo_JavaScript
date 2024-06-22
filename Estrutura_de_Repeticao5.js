function investimentoComFor(valor) {
  let rendimento = valor;
  for (let i = 0; i < 12; i++) {
    rendimento += rendimento * 0.01;
  }
  return rendimento;
}

function investimentoComWhile(valor) {
  let rendimento = valor;
  let meses = 0;
  while (meses < 12) {
    rendimento += rendimento * 0.01;
    meses++;
  }
  return rendimento;
}
