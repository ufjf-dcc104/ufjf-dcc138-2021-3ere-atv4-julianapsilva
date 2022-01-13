export default class Cena {
    // responsavel por desenhar elementos na tela em uma animação
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }
    desenhar() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}