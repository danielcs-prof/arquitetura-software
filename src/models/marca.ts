import { Modelo } from "./modelo";

class Marca {
    id: number;
    nome: string;
    modelo: Modelo[]

    constructor(id: number, nome: string, modelo: Modelo[]) {
        this.id = id
        this.nome = nome
        this.modelo = modelo
    }
}