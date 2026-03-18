"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    livros = [];
    usuarios = [];
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    cadastrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    listarLivros() {
        console.log("Lista de livros:");
        this.livros.forEach(l => {
            console.log(`${l.titulo} - ${l.autor}`);
        });
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map