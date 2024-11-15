export class Modelo {
    id: number;
    nome: string;
    anoModelo: Date;
    qtModelo: number;

    constructor(
        id: number,
        nome: string,
        anoModelo: Date,
        qtModelo: number
    ) {
        this.id = id
        this.nome = nome
        this.anoModelo = anoModelo
        this.qtModelo = qtModelo
    }
}