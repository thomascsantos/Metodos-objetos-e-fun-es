// DESESTRUTURANDO UM OBJETO  COM UMA VARIAVEL QUE JA FOI DECLARADO NO CASO "BANANA"

 let banana
 let pessoa = {
    nome: "thomas",
    idade: 25,
    cidade: "recife"
};

({
    nome: nome,
    idade: banana,
    cidade
} = pessoa)

console.log(banana)


// // DESESTRTURANDO UM ARRAY
// let fruits = ["banana", "maça", "pera"]

// const [banana] = fruits
// console.log(banana)