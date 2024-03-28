import Grafica from "./Graficar.js"
import Arc from "./Arc.js"

const grafica = new Grafica("grafica1", 50)


let draw = () => {
    grafica.createRect(0,0, grafica.width,grafica.height, "white")
    grafica.planoCartesiano()
    grafica.trazar("(2*x)/(Math.sqrt(3*x-1))", 100)
    grafica.trazar("0.5*x-4", 100)
    grafica.trazar("-2*x+7", 100)
    grafica.trazar("2 -Math.sin(x)+3", 100)
    grafica.trazar("2 -Math.sin(x-3)", 100)
    grafica.trazar("0.3*(2-Math.sin(x))", 100)
    grafica.trazar("2-Math.sin(x*0.3)", 100)
}

Arc.newGraf("grafica1", 50)

let posX = 0
let posY = 0
let radio = 120
let length = 20
let direction = true
let speed = 2
let color = {
    r: 255,
    g: 25,
    b: 255,
    a: 1,
}
let lineWidth = 10
let numberOfArcs = 1000

let arcs = []
const spin = () => {
    while (arcs.length < numberOfArcs) {
        let arc = new Arc(
            posX,
            posY,
            radio,
            length,
            direction,
            speed,
            `rgb(${Math.random()*color.r}, ${Math.random()*color.g}, ${Math.random()*color.b}, ${color.a})`,
            lineWidth
        )
        arcs.push(arc)
    }
    grafica.ctx.clearRect(0,0, grafica.width, grafica.height)
    arcs.forEach((arc) => {
        arc.move()
        arc.draw()
    })

    arcs = arcs.filter((arc) => arc.radio > arc.speed / 100)
}

arcs.sort(function (a, b) {
    return b.radio, a.radio
})

let update = () => {
    spin()
}

let fps = 60
let start = () => {
    setInterval(update, 1000 / fps)
}
//draw()
//spin()
//start()
