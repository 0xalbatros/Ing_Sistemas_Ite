import Grafica from "./Graficar.js"

const grafica = new Grafica("grafica1",25)




let draw = () => {
    grafica.planoCartesiano()
    grafica.trazar("(2*x)/(Math.sqrt(3*x-1))",100)
    grafica.trazar("0.5*x-4",100)
    grafica.trazar("-2*x+7",100)
    grafica.trazar("2 -Math.sin(x)+3",100)
    grafica.trazar("2 -Math.sin(x-3)",100)
    grafica.trazar("0.3*(2-Math.sin(x))",100)
    grafica.trazar("2-Math.sin(x*0.3)",100)
}

class Arc {
    constructor(posX, posY, radio, length, direction, speed) {
        this.posX = posX
        this.posY = posY
        this.radio = radio * Math.random() + 1
        this.initPos = Math.random() * 360
        this.length = this.initPos - length
        this.direction = direction
        this.speed = speed
    }

    move() {
        this.length -= 1 * this.speed
        this.initPos -= 1 * this.speed
        if (this.radio > this.speed/100){
            this.radio -= this.speed/100
        }
    }

    draw() {
        grafica.creatArc(this.posX, this.posY, this.radio, this.length, this.initPos, this.direction)
    }
}

let arcs = []
const spin = () => {
    while (arcs.length < 100) {
        let arc = new Arc (0,0,20, 350, true, 1)
        arcs.push(arc)
    }
    grafica.ctx.clearRect(0,0, grafica.width, grafica.height)
    arcs.forEach(arc => {
        arc.move()
        arc.draw()
    })

    arcs = arcs.filter(arc => arc.radio > 0.02)
}

let update = () => {
    spin()
}


let fps = 60
let start = () => {
    setInterval(update, 1000/fps)
};
spin()
//start()

