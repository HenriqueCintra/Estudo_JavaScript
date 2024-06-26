function calcularFolhaPagamento(valorHora, horasTrabalhadas) {
    const salarioBruto = valorHora * horasTrabalhadas;
    let descontoIR = 0;

    if (salarioBruto <= 900) {
        descontoIR = 0;
    } else if (salarioBruto <= 1500) {
        descontoIR = salarioBruto * 0.05;
    } else if (salarioBruto <= 2500) {
        descontoIR = salarioBruto * 0.10;
    } else {
        descontoIR = salarioBruto * 0.20;
    }

    const descontoSindicato = salarioBruto * 0.03;
    const fgts = salarioBruto * 0.11;
    const totalDescontos = descontoIR + descontoSindicato;
    const salarioLiquido = salarioBruto - totalDescontos;

    console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Desconto IR: R$ ${descontoIR.toFixed(2)}`);
    console.log(`Desconto Sindicato: R$ ${descontoSindicato.toFixed(2)}`);
    console.log(`FGTS (não descontado): R$ ${fgts.toFixed(2)}`);
    console.log(`Total de Descontos: R$ ${totalDescontos.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

const valorHora = parseFloat(prompt("Informe o valor da sua hora:"));
const horasTrabalhadas = parseFloat(prompt("Informe a quantidade de horas trabalhadas no mês:"));

calcularFolhaPagamento(valorHora, horasTrabalhadas);
