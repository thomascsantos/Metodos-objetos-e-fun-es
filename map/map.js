let pessoas = [{
    nome: "thomas",
    idade: 25
}, {
    nome: "day",
    idade: 30
}]
let nomePessoas = pessoas.map(pessoa => pessoa.nome + " " + pessoa.idade)
console.log(nomePessoas)

// SEM USAR O METODO "MAP" DO ARRAY ↓ ↓

// let nomePessoas = []
// for (i = 0; i < pessoas.length; i++) {
//    nomePessoas.push(pessoas[i]. nome)
// }
// console.log(nomePessoas)

// UTILIZANDO O METODO " MAP "↓ ↓

let consoles = [{
    nome: "X-box",
    preco: 2500
}, {
    nome: "play-Station",
    preco: 2000
}]
let nomeConsole = consoles.map(consoles => consoles.nome)
console.log(nomeConsole)