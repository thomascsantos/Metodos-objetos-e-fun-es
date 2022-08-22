// let lancamentos = [{
//         pais: "US",
//         total: 23
//     },
//     {
//         pais: "RUS",
//         total: 10
//     }
// ]
// let totalLancamentos = lancamentos.reduce((anterior, atual) => 
//     anterior + atual.total , 0)
// console.log(totalLancamentos)

let videGames = [{
    nome: "thomas",
    quantidade: 2,
    tipo: "x-box"
}, {
    nome: "dayane",
    quantidade: 5,
    tipo: "play-station"
}]
let totalvideGames = videGames.reduce((anteriorGame, atual) => anteriorGame + atual.quantidade, 0)
console.log(totalvideGames)