import Grafica from "./Graficar.js"

export default class Arc {

    static graf
    static newGraf = (id, escala) => {
        Arc.graf = new Grafica(id, escala)
        return 
    }

    constructor(posX, posY, radio, length, direction, speed, color, lineWidth) {
        this.posX = posX
        this.posY = posY
        this.radio = Math.random() * radio
        this.initPos = Math.random() * 360
        this.length = this.initPos + length
        this.direction = direction
        this.speed = speed
        this.color = color
        this.lineWidth = lineWidth * (this.radio / radio)
    }



    move() {
        this.length -= this.speed
        this.initPos -= this.speed
        if (this.radio > this.speed / 100) {
            this.radio -= this.speed / 100
        }
        if (this.lineWidth > 1) this.lineWidth -= this.speed / 100 / this.radio
    }

    draw() {
        Arc.graf.createArc(
            this.posX,
            this.posY,
            this.radio,
            this.length,
            this.initPos,
            this.direction,
            this.color,
            this.lineWidth
        )
    }
}