// Projeto 09/05/2024

function nivelRanqueadas(vitorias, derrotas){


    // Laço de repetição
    for ( let i = 0; i < nomeHeroi.length; i++){
        
        // variaveis
        let nome = nomeHeroi[i];
        let saldoVitorias =  vitorias[i] - derrotas[i];
        let nivel;
    
        // Estrutura de Decisão
        if (saldoVitorias< 10){
            nivel = "Ferro"
    
        } else if(saldoVitorias>= 11 && saldoVitorias<= 20) {
            nivel = "Bronze"
    
        } else if (saldoVitorias>= 21 && saldoVitorias <= 50){
            nivel = "Prata"
    
        } else if (saldoVitorias >= 51 && saldoVitorias<= 80) {
            nivel = "Ouro"
    
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "Diamante"
    
        } else if (saldoVitorias>= 90 && saldoVitorias <= 100) {
            nivel = "Lendário"
    
        } else if (saldoVitorias >= 101){
            nivel = "Imortal"
        }
    
        // Saída
        console.log("O Herói " + nome + " tem o saldo de " + saldoVitorias + " está no nível de " + nivel);
    }
}
    
let nomeHeroi = ["Homem-Aranha" , "Homem de Ferro"];
let vitorias = [101 , 176]
let derrotas = [50 , 75]
const resultado = nivelRanqueadas(vitorias, derrotas);
console.log(resultado);