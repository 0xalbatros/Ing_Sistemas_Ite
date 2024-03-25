// Multiplicar 3 numeros

// Logica en JS, buscamos equivalentes en python, por eso se llego al reduce()

const multiplicarNumeros = (numeros) => {
    let error = []
    if (numeros.length !== 3) {
        error.push("Error: Deben ser 3 números")
    }
    if (numeros.some(n => typeof n !== "number" || isNaN(n))) {
        error.push("Error: Todos los elementos deben ser números")
    }
    if (resultado.length == 0) {
        return numeros.reduce((acum, n) => n * acum, 1)
    }
    return error
}
