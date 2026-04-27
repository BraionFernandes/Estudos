import { Editor } from "../interfaces/Editor";
export declare class Tarefa implements Editor {
    nome: string;
    descricao: string;
    private id;
    constructor(nome: string, descricao: string);
    editarTarefaNome(newNome: string): void;
    editarTarefaDescricao(newDescricao: string): void;
}
//# sourceMappingURL=Tarefa.d.ts.map