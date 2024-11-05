export class Produto{
    id : number | string
    nomme : string
    preco : number
    quantidade : number
    constructor(id : number | string, nome:string, preco:number, quantidade:number = 1){
        this.id = id
        this.nomme = nome
        this.preco = preco
        this.quantidade = quantidade
    }
    static salvar():void{
        console.log('metodo statico')
    }
}
