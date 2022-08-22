// function incentivar(mensagem,...nomes) {
//     console.log(mensagem,nomes)
// }
// incentivar("hskjadhkjdas","aaaa","bbb")

function nomes(n1,n2,...rest) {
    console.log(n1,n2,rest)
}
nomes("a","b","c","d","f")

function soma(...num) {
    let res = 0
    for (n of num) {
        res += n
    }
    return res
}
console.log(soma(1, 5))