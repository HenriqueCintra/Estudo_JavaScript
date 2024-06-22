function pesoIdeal(altura, sexo) {
  if (sexo === 1) {
    return (62.1 * altura) - 44.7;
  } else if (sexo === 2) {
    return (72.7 * altura) - 58;
  } else {
    return "Código de sexo inválido.";
  }
}
