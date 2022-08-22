let promessa = new Promise((resolve, reject) => {
    let nome = "thoms"
    if (nome === "thomas") {
        resolve("o usuario thomas foi encontrado")
    } else {
        reject("usuario não encontrato")
    }
})
promessa.then((resolvido) => {
    console.log(resolvido)
}).catch((rejeitado) => {
    console.log("aconteceu algum erro " + rejeitado)
})