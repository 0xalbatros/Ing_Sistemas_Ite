export const OperacionesBases = () => {

    const conversionADec = (num, base) => {
        if(typeof num == "string") {
            if(num.split(".")[1]){
                let resultado = parseInt(num.split(".")[0], base) + conversionBasefraccionADecimal(num, base)
                let texto = `${num} a base decimal: ${resultado}`
                return {resultado, texto}
            }else{
                let resultado = parseInt(num, base)
                let texto = `${num} a base decimal: ${resultado}`
                return {resultado, texto}
            } 
        } else {
            return console.log("Debe ser valores: string, numero")
        }
    }

    const conversionDecABase = (num, base) => {
        if(typeof num == "number") {
            let texto = `${num} a base ${base}: ${num.toString(base)}`
            let resultado = num.toString(base)
            return {texto, resultado}
        }
    }

    const sumaBases = (num, base) => {
        let proceso = ["Sumar"]
        const res = num.map(n => {
            let {resultado, texto} = conversionADec(n, base)
            proceso.push(`\t${texto}`)
            return resultado
        })
        .reduce((acum, num) => num + acum, 0)
        .toString(base)
        let {texto} = conversionADec(res, base)
        proceso.push("\tes igual a")
        proceso.push(`\t${texto}`)
        
        return proceso.join("\n")
    }

    const multiplicacionBases = (num, base) => {
        let proceso = ["Multiplicar"]
        const res = num.map(n => {
            let {resultado, texto} = conversionADec(n, base)
            proceso.push(`\t${texto}`)
            return resultado
        })
        .reduce((acum, n) => n*acum, 1)
        .toString(base)
        let {texto} = conversionADec(res, base)
        proceso.push("\tes igual a")
        proceso.push(`\t${texto}`)

        return proceso.join("\n")
    }


    const conversionBasefraccionADecimal = (num, base) => {
        let i = 0
        let res = []
        num.split(".")[1]
        .split("")
        .map(strg => parseInt(strg))
        .reduce((acum, num) => {
            ++i
            res.push(num * (1/acum**i))
            return acum
        }, base)
        return res.reduce((acum, num) => num + acum, 0)
    }
    return {conversionDecABase, conversionADec, conversionBasefraccionADecimal, sumaBases, multiplicacionBases}
}