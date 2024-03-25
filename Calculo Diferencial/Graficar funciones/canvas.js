const canvasContext = document.getElementById("canvas").getContext("2d")

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

class Grafica {
    constructor() {
        this.width = canvas.width
        this.height = canvas.height
        this.posX = 1
        this.posY = 1
        this.escala = 50
    }

    planoCartesiano() {
        let lineas = canvas.width / this.escala
        for (let i = 1; i < lineas + 1; ++i) {
            canvasContext.lineWidth = 1
            canvasContext.strokeStyle = "gray"
            canvasContext.moveTo(this.posX * i * this.escala, this.posY)
            canvasContext.lineTo(
                this.posX * i * this.escala,
                this.posY + this.height
            )
            canvasContext.stroke()
            canvasContext.moveTo(this.posX, this.posY * i * this.escala)
            canvasContext.lineTo(
                this.posX + this.width,
                this.posY * i * this.escala
            )
            canvasContext.stroke()
        }
        canvasContext.beginPath()
        canvasContext.lineWidth = 3
        canvasContext.strokeStyle = "red"
        canvasContext.moveTo(this.posX * (canvas.width / 2), this.posY)
        canvasContext.lineTo(
            this.posX * (canvas.width / 2),
            this.posY + this.height
        )
        canvasContext.stroke()
        canvasContext.moveTo(this.posX, this.posY * (canvas.height / 2))
        canvasContext.lineTo(
            this.posX + this.width,
            this.posY * (canvas.height / 2)
        )
        canvasContext.stroke()

        canvasContext.beginPath()
        for (let i = 0; i < lineas; ++i) {
            if (this.escala <= 30) {
                if (i % 2 == 0) {
                    if (lineas / 2 - i == 0) {
                        continue
                    } else {
                        canvasContext.font = "10px serif"
                        canvasContext.fillText(
                            `${lineas / 2 - i}`,
                            (this.posX * this.width) / 2 + 5,
                            this.posY + i * this.escala + 5
                        )
                        canvasContext.font = "10px serif"
                        canvasContext.fillText(
                            `${-lineas / 2 + i}`,
                            this.posX + i * this.escala + 5,
                            (this.posY * this.width) / 2 + 5
                        )
                    }
                }
            } else {
                if (lineas / 2 - i == 0) {
                    continue
                } else {
                    canvasContext.font = "20px serif"
                    canvasContext.fillText(
                        `${lineas / 2 - i}`,
                        (this.posX * this.width) / 2 + 5,
                        this.posY + i * this.escala - 5
                    )
                    canvasContext.font = "20px serif"
                    canvasContext.fillText(
                        `${-lineas / 2 + i}`,
                        this.posX + i * this.escala + 5,
                        (this.posY * this.width) / 2 - 5
                    )
                }
            }
        }
    }

    trazar(func) {
        let puntos = 100
        let color = `rgb(50,100,${Math.floor(Math.random() * 255)} )`
        canvasContext.beginPath()
        let offsetX = this.width / 2
        let offsetY = this.height / 2
        for (let i = -puntos; i <= puntos; i += 0.01) {
            let y = eval(func.replace(/x/g, "i")) * this.escala
            let x = i * this.escala
            if (isNaN(y) || y === Infinity) {
                continue
            } else {
                creatArc(offsetX + x, offsetY - y, 0.1, 0, 360, true)
            }
        }
        canvasContext.strokeStyle = color
        canvasContext.fillStyle = color
        canvasContext.stroke()
    }
}

let creatArc = (x, y, radius, startAngle, endAngle, counterClockwise) => {
    let start = (Math.PI / 180) * startAngle
    let end = (endAngle / 180) * Math.PI
    canvasContext.arc(x, y, radius, start, end, counterClockwise)
}

let grafica = new Grafica()

const draw = () => {
    grafica.planoCartesiano()
    grafica.trazar("(2*x)/(Math.sqrt(3*x-1))")
    grafica.trazar("0.5*x-4")
    grafica.trazar("-2*x+7")
    grafica.trazar("2 -Math.sin(x)+3")
    grafica.trazar("2 -Math.sin(x-3)")
    grafica.trazar("0.3*(2-Math.sin(x))")
    grafica.trazar("2-Math.sin(x*0.3)")
}

draw()
