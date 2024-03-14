import { OperacionesBases } from "./operacionesBases.js"


const {conversionDecABase, conversionADec, conversionBasefraccionADecimal, sumaBases, multiplicacionBases} = OperacionesBases()



// 1.- Realiza las siguientes operaciones Aritméticas de números binarios y convierte el resultado a decimal: 

const uno_a = ["1100011", "1011101", "1001101"]
const uno_b = ["1110101.1101", "11110001.01011"] 
const uno_c = ["1011101", "1101"]


console.log("1.-")
console.log("1_a) " + sumaBases(uno_a, 2))
console.log("1_b) " + sumaBases(uno_b, 2))
console.log("1_c) " + multiplicacionBases(uno_c, 2))

// 2.- Realiza las siguientes operaciones Aritméticas del sistema base 5:

const dos_a = ["2322", "23134"]
const dos_b = ["1243", "32"]

console.log("2.-")
console.log("2_a) " + sumaBases(dos_a, 5))
console.log("2_b) " + multiplicacionBases(dos_b, 5))

// 3.- Realiza las siguientes operaciones Aritméticas con números hexadecimales:

const tres_a = ["17A", "3C"]
const tres_b = ["20F5", "31B"]
const tres_c = ["2E0C", "A7F"]

console.log("3.-")
console.log("3_a) " + sumaBases(tres_a, 16))
console.log("3_b) " + sumaBases(tres_b, 16))
console.log("3_c) " + multiplicacionBases(tres_c, 16))

// 4.- Convierte a los diferentes sistemas numéricos cada cifra dada en cada renglón. 

const base_10 = 274
const base_7 = "435"
const base_9 = "508"

const decimal = [base_10, conversionADec(base_7, 7).resultado, conversionADec(base_9, 9).resultado]
const baseSiete = [conversionDecABase(base_10, 7).resultado, base_7, conversionDecABase(conversionADec(base_9, 9).resultado, 7).resultado]
const baseNueve = [conversionDecABase(base_10, 9).resultado, conversionDecABase(conversionADec(base_7, 7).resultado, 9).resultado, base_9]

console.log("4.-")
console.log({decimal})
console.log({baseSiete})
console.log({baseNueve})






