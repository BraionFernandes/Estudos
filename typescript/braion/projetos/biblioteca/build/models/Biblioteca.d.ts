import { Usuario } from "./Usuario";
import { Livro } from "./Livro";
export declare class Biblioteca {
    private livros;
    private usuarios;
    adicionarLivro(livro: Livro): void;
    cadastrarUsuario(usuario: Usuario): void;
    removerUsuario(usuario: Usuario): void;
    listarLivros(): void;
    listarUsuarios(): void;
}
//# sourceMappingURL=Biblioteca.d.ts.map