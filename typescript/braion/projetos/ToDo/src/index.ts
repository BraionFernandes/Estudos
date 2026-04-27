import { Gerenciador } from "./models/Gerenciador";
import { Tarefa } from "./models/Tarefa";

const gerenciador=new Gerenciador();

const tarefa1=new Tarefa("Estudar Programação","Continuar os estudos com typescript");
const tarefa2=new Tarefa("Estudar Marketing","Continuar os estudos com Copywriting");

gerenciador.adicionarTarefa(tarefa1);
gerenciador.adicionarTarefa(tarefa2);

gerenciador.listarTarefas();

gerenciador.removerTarefa(tarefa2);

gerenciador.listarTarefas();