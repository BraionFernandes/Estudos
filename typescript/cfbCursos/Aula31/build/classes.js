"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    nome;
    altura;
    peso;
    email;
    patrimonio;
    constructor(nome, altura, peso, email, patrimonio) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.email = email;
        this.patrimonio = patrimonio;
    }
    info() {
        console.log(`
            ________________________________
            Nome: ${this.nome};
            Altura: ${this.altura} M;
            Peso: ${this.peso} Kg;
            Email: ${this.email};
            Patrimonio: ${this.patrimonio} Milhões;
            ________________________________
        `);
    }
    mudarPeso(peso) {
        console.log('___________________________');
        console.log(`Peso Anterior: ${this.peso} Kg`);
        this.peso = peso;
        console.log(`Peso Atual: ${this.peso} Kg`);
        console.log('___________________________');
    }
    mudarEmail(email) {
        console.log('___________________________');
        console.log(`Email Anterior: ${this.email}`);
        this.email = email;
        console.log(`Email Atual: ${this.email}`);
        console.log('___________________________');
    }
    mudarPatrimonio(patrimonio) {
        console.log('___________________________');
        console.log(`Patrimonio Anterior: ${this.patrimonio} Milhões`);
        this.patrimonio = patrimonio;
        console.log(`Patrimonio Atual: ${this.patrimonio} Milhões`);
        console.log('___________________________');
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=classes.js.map