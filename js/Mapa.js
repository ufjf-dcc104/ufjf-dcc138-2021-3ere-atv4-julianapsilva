export default class Mapa {
    constructor(linhas = 8, colunas = 12, tamanho = 32) {
        this.LINHAS = linhas
        this.COLUNAS = colunas
        this.SIZE = tamanho
        this.tiles = []

        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l] = []
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = 0
            }
        }
        this.cena = null
    }

    desenhar(ctx, assets) {
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch (this.tiles[l][c]) {
                    case 0:
                        ctx.drawImage(assets.img('floor7'),
                            32 * c, 32 * l, 32, 32)
                        break;
                    case 1:
                        ctx.drawImage(assets.img('floor7'),
                            32 * c, 32 * l, 32, 32)
                        ctx.drawImage(assets.img('obstaculo'),
                            32 * c, 32 * l, 32, 32)
                        break;
                    default:
                        ctx.drawImage(assets.img('floor7'),
                            32 * c, 32 * l, 32, 32)
                        break;
                }
            }
        }
    }

    carregaMapa(modelo) {
        this.LINHAS = modelo.length
        this.COLUNAS = modelo[0]?.length ?? 0

        this.tiles = []
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l] = []
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = modelo[l][c]
            }
        }

    }
    isValidPosition(x, y) {
        if (this.tiles[x][y])
            return false
        return true
    }
}