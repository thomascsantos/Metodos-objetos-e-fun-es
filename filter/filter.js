let pessoas = [{
        nome: "thomas",
        idade: 25
    },
    {
        nome: "day",
        idade: 44
    },
    {
        nome: "rafael",
        idade: 36
    }
]
let pessoasMaisDe30 = pessoas.filter(pessoa => pessoa.idade > 30)
console.log(pessoasMaisDe30)
// SEM USAR O METODO "FILTER" SERIA ASSIM QUE EU PERCORERRIA MEU ARRAY DE PESSOAS ↓↓

// let pessoasMaisDe30 = []
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade >= 30) {
//         pessoasMaisDe30.push(pessoas[i])
//     }
// }
// USANDO O METODO "FILTER" ↓↓


let consoles = [{
    nome: "X-box",
    preco: 2500
}, {
    nome: "Play-Station",
    preco: 4000
}, {
    nome: "Mega-drive",
    preco: 100
}]
let consoleBarato = consoles.filter(console => console.preco > 1000)
console.log(consoleBarato)