import { Tarefa } from "./Tarefa";

export class Gerenciador{
    private tarefas:Tarefa[]=[];

    adicionarTarefa(tarefa:Tarefa){
        this.tarefas.push(tarefa);
        console.log('tarefa Adicionada com sucesso!');
    }
    removerTarefa(tarefa:Tarefa){
        this.tarefas=this.tarefas.filter(t => t!==tarefa);
    }
    listarTarefas(){
        if(this.tarefas.length>0){
            console.log('Lista de Tarefas: ');

            this.tarefas.forEach(t=>{
                console.log(`${t.nome} - ${t.descricao}`);
            });
        }else{
            console.log('Nenhuma tarefa Registrada!');
        }
        
    }
}