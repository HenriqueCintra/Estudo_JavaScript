function calcularOperacao(num1, num2, escolha) {
  switch (escolha) {
    case 1:
      return (num1 + num2) / 2; // Média
    case 2:
      return Math.abs(num1 - num2); // Diferença
    case 3:
      return num1 * num2; // Produto
    case 4:
      if (num2 !== 0) {
        return num1 / num2; // Divisão
      } else {
        return "Divisão por zero não é permitida";
      }
    default:
      return "Escolha inválida";
  }
}
