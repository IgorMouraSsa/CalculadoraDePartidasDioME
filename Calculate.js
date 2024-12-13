function CalcularSaldoAtualDeVitorias(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    const nivel = VerificaNivelDeVitoria(vitorias);
    return { saldo, nivel };
}

function VerificaNivelDeVitoria(vitorias) {
  
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}
 
const vitorias = 225;
const derrotas = 25;
const resultado = CalcularSaldoAtualDeVitorias(vitorias, derrotas);
console.log(`Saldo: ${resultado.saldo}, Ranque: ${resultado.nivel}`);
