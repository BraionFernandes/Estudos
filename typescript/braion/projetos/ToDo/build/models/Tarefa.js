"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    nome;
    descricao;
    id;
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.id = Date.now();
    }
    editarTarefaNome(newNome) {
        this.nome = newNome;
    }
    editarTarefaDescricao(newDescricao) {
        this.descricao = newDescricao;
    }
}
exports.Tarefa = Tarefa;
//# sourceMappingURL=Tarefa.js.map