"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    nome;
    id;
    LivrosEmprestados = [];
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    pegarLivro(livro) {
        if (livro.verificarDisponibilidade()) {
            console.log(`Usuario: ${this.nome}`);
            livro.emprestar();
            this.LivrosEmprestados.push(livro);
        }
        else {
            console.log(`Usuario: ${this.nome}, O livro: ${livro.titulo} está indisponivel!`);
            console.log('-----------------');
        }
    }
    devolverLivro(livro) {
        console.log(`Usuario: ${this.nome}`);
        livro.devolver();
        this.LivrosEmprestados = this.LivrosEmprestados.filter(l => l !== livro);
    }
    listarLivros() {
        if (this.LivrosEmprestados.length > 0) {
            console.log(`Livros de: ${this.nome}`);
            this.LivrosEmprestados.forEach(l => {
                console.log(l.titulo);
                console.log('-----------------');
            });
        }
        else {
            console.log(`Livros de: ${this.nome}`);
            console.log('Nenhum livro Pego.');
            console.log('-----------------');
        }
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map