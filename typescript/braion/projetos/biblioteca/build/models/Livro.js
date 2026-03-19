"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    titulo;
    autor;
    ano;
    disponivel = true;
    dataEmprestimo;
    dataDevolucao;
    multaPorDia = 2;
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    emprestar(dias = 7) {
        if (this.disponivel) {
            this.disponivel = false;
            this.dataEmprestimo = new Date();
            const dataDev = new Date();
            dataDev.setDate(dataDev.getDate() + dias);
            this.dataDevolucao = dataDev;
            console.log(`O livro: ${this.titulo}, foi emprestado com sucesso!`);
            console.log(`Data de Emprestimo: ${this.dataEmprestimo}`);
            console.log(`Data de Devolução: ${this.dataDevolucao}`);
            console.log('-----------------');
        }
        else {
            console.log(`O livro: ${this.titulo}, não esta disponível!`);
            console.log('-----------------');
        }
    }
    devolver() {
        this.disponivel = true;
        this.dataEmprestimo = undefined;
        this.dataDevolucao = undefined;
        console.log(`O livro: ${this.titulo}, foi devolvido com sucesso!`);
        console.log('-----------------');
    }
    calcularMulta() {
        if (!this.dataDevolucao)
            return 0;
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.dataDevolucao.getTime();
        const diasAtraso = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        if (diasAtraso > 0) {
            return diasAtraso * this.multaPorDia;
        }
        return 0;
    }
    verificarDisponibilidade() {
        return this.disponivel;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map