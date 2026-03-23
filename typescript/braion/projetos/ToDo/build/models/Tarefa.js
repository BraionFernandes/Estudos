"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    nomeTarefa;
    id;
    constructor(nomeTarefa) {
        this.nomeTarefa = nomeTarefa;
        this.id = this.geradorId();
    }
    geradorId() {
        const id = Date.now();
        return id;
    }
}
exports.Tarefa = Tarefa;
//# sourceMappingURL=Tarefa.js.map