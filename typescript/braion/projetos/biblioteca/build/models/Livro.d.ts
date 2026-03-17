import { Emprestavel } from "../interfaces/Emprestavel";
export declare class Livro implements Emprestavel {
    titulo: string;
    autor: string;
    ano: number;
    private disponivel;
    constructor(titulo: string, autor: string, ano: number);
    emprestar(): void;
    devolver(): void;
    verificarDisponibilidade(): boolean;
}
//# sourceMappingURL=Livro.d.ts.map