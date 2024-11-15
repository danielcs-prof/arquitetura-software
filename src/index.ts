import { Tarefa} from './exercicios/ex04/tarefa'
import { GestorTarefas} from './exercicios/ex04/getorTarefas'

const tarefa1 = new Tarefa(1,'aula1','aula de typescript 1','em andamento')
const tarefa2 = new Tarefa(2,'lab1','aula de typescript  1','em andamento')
const tarefa3 = new Tarefa(3,'aula2','aula de typescript 2','em andamento')
const tarefa4 = new Tarefa(4,'lab2','aula de typescript 2','em andamento')
const getorTarefas = new GestorTarefas([])
getorTarefas.adicionarTarefa(tarefa1)
getorTarefas.adicionarTarefa(tarefa2)
getorTarefas.adicionarTarefa(tarefa3)
getorTarefas.adicionarTarefa(tarefa4)
console.log(getorTarefas.tarefas)
