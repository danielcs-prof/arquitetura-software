import { Modelo } from "./modelo";

class Categoria {
    id: number;
    tipo: String;
    valorLocacao: number;
    moelos: Modelo[];

    constructor(
        id: number,
        tipo: String,
        valorLocacao: number,
        moelos: Modelo[]
    ) {
        this.id = id
        this.tipo = tipo
        this.valorLocacao = valorLocacao
        this.moelos = moelos
    }
}