"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerenciador = void 0;
class Gerenciador {
    tarefas = [];
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        console.log('tarefa Adicionada com sucesso!');
    }
    removerTarefa(tarefa) {
        this.tarefas = this.tarefas.filter(t => t !== tarefa);
    }
    listarTarefas() {
        if (this.tarefas.length > 0) {
            console.log('Lista de Tarefas: ');
            this.tarefas.forEach(t => {
                console.log(`${t.nome} - ${t.descricao}`);
            });
        }
        else {
            console.log('Nenhuma tarefa Registrada!');
        }
    }
}
exports.Gerenciador = Gerenciador;
//# sourceMappingURL=Gerenciador.js.map