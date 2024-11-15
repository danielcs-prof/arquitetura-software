export class Tarefa{
    id : number
    projeto : string
    descricao : string
    status : string
  constructor(
    id: number, 
    projeto: string, 
    descricao: string, 
    status: string
) {
    this.id = id
    this.projeto = projeto
    this.descricao = descricao
    this.status = status
  }    
}