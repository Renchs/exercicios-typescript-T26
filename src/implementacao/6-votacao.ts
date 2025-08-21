function apuraVotacao(votos: Array<number>) {

    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;

    votos.map((voto) => {
        voto == 1 ? candidato1++ :
        voto == 2 ? candidato2++ :
        voto == 3 ? candidato3++ : null;
    })

    const result = candidato1 > candidato2 && candidato1 > candidato3 ? "Vencedor: 1" :
    candidato2 > candidato1 && candidato2 > candidato3 ? "Vencedor: 2" :
    candidato3 > candidato2 && candidato3 > candidato1 ? "Vencedor: 3" : "Empate";

    return result;
}
module.exports = apuraVotacao;