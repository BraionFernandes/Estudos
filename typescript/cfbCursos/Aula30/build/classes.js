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
            Altura: ${this.altura}m;
            Peso: ${this.peso}kg;
            Email: ${this.email};
            Patrimonio: ${this.patrimonio} Milhões;
            ________________________________
        `);
    }
    mudarPeso(peso) {
        this.peso = peso;
    }
    mudarEmail(email) {
        this.email = email;
    }
    mudarPatrimonio(patrimonio) {
        this.patrimonio = patrimonio;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=classes.js.map