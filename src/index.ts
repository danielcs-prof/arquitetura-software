import {Produto} from './model/produto'
import { Estoque } from './model/estoque'

const produto1 = new Produto(6,'chocolate',5.00,2)
const estoque = new Estoque()
estoque.adicionarProduto(new Produto(1,'chocolate1',5.10))
estoque.adicionarProduto(new Produto(2,'chocolate2',5.20,3))
estoque.adicionarProduto(new Produto(3,'chocolate3',5.30))
estoque.adicionarProduto(new Produto(4,'chocolate4',5.40,5))
estoque.adicionarProduto(new Produto(5,'chocolate5',5.50,6))
estoque.adicionarProduto(produto1)
estoque.adicionarProduto(produto1)
console.log(estoque.listaProduto)
estoque.atualizarQuantidade(6,10)
console.log(estoque.listaProduto)
Produto.salvar()
