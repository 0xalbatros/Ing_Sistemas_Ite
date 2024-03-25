//Un conjunto es cualquier coleccion de objetos los cuales comparten una o varias caracteristicas en comun, dicha caracteristica permite agrupar objetos para formar un conjunto bien definido, para determinar si el objeto pertenece o no a un conjunto.

//Operaciones de conjuntos: Interseccion, Union, Diferencia, Diferencia geometrica, Complemento.

//En este archivo se intentara replicar la logica de los conjuntos y sus operaciones de conjuntos.

//Universo: Todos los objetos que existen en todos los conjuntos, sin repetirse. Delimita el alcance de los conjuntos.

//Subconjunto: Cuando un conjunto es derivado de otro conjunto se dice que es subconjunto del tal conjunto.


export class Conjunto extends Array {
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




