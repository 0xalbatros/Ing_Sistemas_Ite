//Un conjunto es cualquier coleccion de objetos los cuales comparten una o varias caracteristicas en comun, dicha caracteristica permite agrupar objetos para formar un conjunto bien definido, para determinar si el objeto pertenece o no a un conjunto.

//Operaciones de conjuntos: Interseccion, Union, Diferencia, Diferencia geometrica, Complemento.

//En este archivo se intentara replicar la logica de los conjuntos y sus operaciones de conjuntos.

//Universo: Todos los objetos que existen en todos los conjuntos, sin repetirse. Delimita el alcance de los conjuntos.

//Subconjunto: Cuando un conjunto es derivado de otro conjunto se dice que es subconjunto del tal conjunto.


class Conjunto extends Array {
    static name = ""

    //Recibe otro conjunto como argumento y devuelve los elementos en comun entre los dos conjuntos
    inter(conjunto) {
        return new Conjunto(...(this.filter(objs => conjunto.includes(objs))))
    }
    //Recibe otro conjunto como argumento y devuelve los elementos de ambos conjuntos sin repetirse.
    union(conjunto) {
        return new Conjunto(...new Set([...this, ...conjunto]))
    }
    //Recibe otro conjunto como argumento y devuelve un conjunto sin los elementos que coincidan en ambos conjuntos.
    dif(conjunto) {
        return new Conjunto(...(this.filter(elemento => !conjunto.includes(elemento))))
    }
    //Recibe otro conjunto como argumento y devuelve la union de ambos elementos restando su interseccion 
    difSim(conjunto){
        let u = this.union(conjunto)
        let i = this.inter(conjunto)
        return new Conjunto(...(u.filter(elemento => !i.includes(elemento))))
    }
}

let U = new Conjunto("a","b","c","d","e","f","g")
let A = new Conjunto("a","b","c","d","e")
let B = new Conjunto("a","c","e","g")
let C = new Conjunto("b","e","f","g")


const Problema1 = A.union(B.inter(C))
const Problema2 = C.union(A.inter(B))
const Problema3 = A.dif(B.inter(C))
const Problema4 = B.dif(C)
const Problema5 = B.inter(U.dif(A))
const Problema6 = U.dif((A.inter(C)))
const Problema7 = U.dif(A).union(U.dif(C))

//Ejemplos de diferencia simetrica

const DifSim1 = A.difSim(B)
const DifSim2 = A.difSim(C)

console.log("a) A U (B n C)" + " = " + "{" + Problema1 + "}")
console.log("b) (A n B) U C" + " = " + "{" + Problema2 + "}")
console.log("c) A - (B n C)" + " = " + "{" + Problema3 + "}")
console.log("d) B - C" + " = " + "{" + Problema4 + "}")
console.log("e) B n A'" + " = " + "{" + Problema5 + "}")
console.log("f) (A n C)'" + " = " + "{" + Problema6 + "}")
console.log("g) A' U C'" + " = " + "{" + Problema7 + "}")
console.log("Ejemplo de diferencia simetrica:")
console.log("A Δ B" + " = " + "{" + DifSim1 + "}")
console.log("A Δ C" + " = " + "{" + DifSim2 + "}")








