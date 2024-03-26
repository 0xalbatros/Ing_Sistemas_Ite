export default class Grafica {

    constructor(id, escala) {
        this.ctx = document.getElementById(id).getContext("2d")
        this.width = document.getElementById(id).width
        this.height = document.getElementById(id).height
        this.posX = 1
        this.posY = 1
        this.escala = escala
        this.offsetX= this.width/2
        this.offsetY= this.height/2
    }

    creatArc(x, y, radius, startAngle, endAngle, counterClockwise) {
        let start = (startAngle / 180) * Math.PI
        let end = (endAngle / 180) * Math.PI
        this.ctx.beginPath()
        this.ctx.arc(this.offsetX + x, this.offsetY - y, radius * this.escala, start, end, counterClockwise)
        this.ctx.stroke()
        this.ctx.closePath()
    }

    planoCartesiano() {
        //cuadricula
        let lineas = this.width / this.escala
        for (let i = 0; i < lineas + 1; ++i) {
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = "gray"
            this.ctx.moveTo(i * this.escala, this.posY)
            this.ctx.lineTo(i * this.escala, i + this.height)
            this.ctx.stroke()
            this.ctx.moveTo(this.posX, i * this.escala)
            this.ctx.lineTo(this.posX + this.width, i * this.escala)
            this.ctx.stroke()
        }
        //Interseccion (0,0)
        this.ctx.beginPath()
        this.ctx.lineWidth = 2
        this.ctx.strokeStyle = "red"
        this.ctx.moveTo(this.posX * (this.width / 2), this.posY)
        this.ctx.lineTo(this.posX * (this.width / 2), this.posY + this.height)
        this.ctx.stroke()
        this.ctx.moveTo(this.posX, this.posY * (this.height / 2))
        this.ctx.lineTo(this.posX + this.width, this.posY * (this.height / 2))
        this.ctx.stroke()

        //Numeros
        this.ctx.beginPath()
        for (let i = 0; i < lineas; ++i) {
            if (this.escala <= 30) {
                if (i % 2 != 0) {
                    if (lineas/2-i ==0){
                        continue
                    }
                    this.ctx.font = "10px serif"
                    this.ctx.fillText(
                        `${lineas / 2 - i}`,
                        (this.posX * this.width) / 2 + 3,
                        this.posY + i * this.escala + 3
                    )
                    this.ctx.font = "10px serif"
                    this.ctx.fillText(
                        `${-lineas / 2 + i}`,
                        this.posX + i * this.escala -6,
                        (this.posY * this.width) / 2 + 9
                    )
                }
            } else {
                if (lineas/2-i ==0){
                    continue
                }
                this.ctx.font = "20px serif"
                this.ctx.fillText(
                    `${lineas / 2 - i}`,
                    (this.posX * this.width) / 2 + 5,
                    this.posY + i * this.escala -5
                )
                this.ctx.font = "20px serif"
                this.ctx.fillText(
                    `${-lineas / 2 + i}`,
                    this.posX + i * this.escala + 5,
                    (this.posY * this.width) / 2 - 5
                )
            }
        }
    }

    trazar(func, puntos) {
        let color = `rgb(50,100,${Math.floor(Math.random() * 255)} )`
        this.ctx.beginPath()
        for (let i = -puntos; i <= puntos; i += 0.01) {
            let y = eval(func.replace(/x/g, "i")) * this.escala
            let x = i * this.escala
            if (isNaN(y) || y === Infinity) {
                continue
            } else {
                this.ctx.arc(this.offsetX + x, this.offsetY - y, 0.1, 0, 360, true)
            }
        }
        this.ctx.strokeStyle = color
        this.ctx.fillStyle = color
        this.ctx.stroke()
    }
}
