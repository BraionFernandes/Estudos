"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gerenciador_1 = require("./models/Gerenciador");
const Tarefa_1 = require("./models/Tarefa");
const gerenciador = new Gerenciador_1.Gerenciador();
const tarefa1 = new Tarefa_1.Tarefa("Estudar Programação", "Continuar os estudos com typescript");
const tarefa2 = new Tarefa_1.Tarefa("Estudar Marketing", "Continuar os estudos com Copywriting");
gerenciador.adicionarTarefa(tarefa1);
gerenciador.adicionarTarefa(tarefa2);
gerenciador.listarTarefas();
gerenciador.removerTarefa(tarefa2);
gerenciador.listarTarefas();
//# sourceMappingURL=index.js.map