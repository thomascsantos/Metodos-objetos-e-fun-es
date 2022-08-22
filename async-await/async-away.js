function primeira() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("TRATANDO DADOS ")
            resolve()
        }, 2000)
    })
}
async function segunda() {
    try {
        console.log("AGURDANDO DADOS")
        await primeira()
        console.log("DADOS TRATADOS")
    } catch (error) {
        console.log("houve algum erro" + error)
    }
}
segunda()