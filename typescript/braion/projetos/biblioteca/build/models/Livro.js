"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    titulo;
    autor;
    ano;
    disponivel = true;
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro: ${this.titulo}, foi emprestado com sucesso!`);
            console.log('-----------------');
        }
        else {
            console.log(`O livro: ${this.titulo}, não esta disponível!`);
            console.log('-----------------');
        }
    }
    devolver() {
        this.disponivel = true;
        console.log(`O livro: ${this.titulo}, foi devolvido com sucesso!`);
        console.log('-----------------');
    }
    verificarDisponibilidade() {
        return this.disponivel;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map