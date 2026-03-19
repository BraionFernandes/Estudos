import { Emprestavel } from "../interfaces/Emprestavel";
export declare class Livro implements Emprestavel {
    titulo: string;
    autor: string;
    ano: number;
    private disponivel;
    private dataEmprestimo?;
    private dataDevolucao?;
    private multaPorDia;
    constructor(titulo: string, autor: string, ano: number);
    emprestar(dias?: number): void;
    devolver(): void;
    calcularMulta(): number;
    verificarDisponibilidade(): boolean;
}
//# sourceMappingURL=Livro.d.ts.map