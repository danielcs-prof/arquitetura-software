import { Tarefa } from './tarefa'

export class GestorTarefas {
    tarefas: Tarefa[]
    
    constructor(tarefas: Tarefa[]) {
        this.tarefas = tarefas
    }

    adicionarTarefa(tarefa : Tarefa) : void{
        const indice = this.tarefas.findIndex(t => t.id === tarefa.id)
        if (indice <= -1)
            this.tarefas.push(tarefa)
        else
            console.log('Tarefa já cadastrada')
    }
}