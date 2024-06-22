function classificarProduto(codigo) {
  if (codigo === 1) {
    return "Alimento não perecível";
  } else if (codigo === 2 || codigo === 3 || codigo === 4) {
    return "Alimento perecível";
  } else if (codigo === 5 || codigo === 6) {
    return "Vestuário";
  } else if (codigo === 7) {
    return "Higiene pessoal";
  } else if (codigo >= 8 && codigo <= 15) {
    return "Limpeza e utensílios domésticos";
  } else {
    return "Código inválido";
  }
}