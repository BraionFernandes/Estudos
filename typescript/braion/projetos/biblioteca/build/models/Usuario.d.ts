import { Livro } from "./Livro";
export declare class Usuario {
    nome: string;
    id: number;
    private LivrosEmprestados;
    constructor(nome: string, id: number);
    pegarLivro(livro: Livro): void;
    devolverLivro(livro: Livro): void;
    listarLivros(): void;
}
//# sourceMappingURL=Usuario.d.ts.map