function podeVotar(anoNascimento) {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;
  if (idade >= 16) {
    return "Você pode votar este ano.";
  } else {
    return "Você não pode votar este ano.";
  }
}