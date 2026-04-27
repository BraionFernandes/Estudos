import { Editor } from "../interfaces/Editor";
export class Tarefa implements Editor{
    public nome:string;
    public descricao:string;
    private id:number;

    constructor(nome:string,descricao:string){
        this.nome=nome;
        this.descricao=descricao;
        this.id=Date.now();
    }
    editarTarefaNome(newNome:string){
        this.nome=newNome;
    }
    editarTarefaDescricao(newDescricao:string){
        this.descricao=newDescricao;
    }
}