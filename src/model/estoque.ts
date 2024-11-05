import {Produto} from './produto'

export class Estoque{
    listaProduto : Produto [] =  []

    adicionarProduto(produto : Produto):void{
        this.listaProduto.push(produto)
    }
    //consultarProduto(id:number) : Produto{}
    atualizarQuantidade(id:number,quantidade:number):void{
        const indice = this.listaProduto.findIndex( p => p.id === id)
        if (indice < 0)
            console.log('Produto nao localizado ...')
        else
            this.listaProduto[indice].quantidade = quantidade
    }
}