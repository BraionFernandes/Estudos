"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integrante = void 0;
class Integrante {
    nome;
    id;
    patente = "Soldado";
    experiencia = 0;
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    patentes = [
        { nome: "Soldado", min: 0 },
        { nome: "Cabo", min: 100 },
        { nome: "1° Sargento", min: 1000 },
        { nome: "Aspirante a Oficial", min: 5000 },
        { nome: "2° Tenente", min: 10000 },
        { nome: "1° Tenente", min: 50000 },
        { nome: "Capitão", min: 150000 },
        { nome: "Major", min: 500000 },
        { nome: "Tenente Coronel", min: 1000000 },
        { nome: "Coronel", min: 5000000 },
        { nome: "General de Brigada", min: 10000000 },
        { nome: "General de Divisão", min: 50000000 },
        { nome: "General de Exercito Tier 3", min: 250000000 },
        { nome: "General de Exercito Tier 2", min: 500000000 },
        { nome: "General de Exercito Tier 1", min: 750000000 },
        { nome: "Marechal", min: 1000000000 }
    ];
    adicionarExperiencia(valor) {
        this.experiencia += valor;
        console.log(`Foi Adicionado ${valor} de Experiencia ao Integrante: ${this.nome}, Identificador: ${this.id}`);
        this.atualizarPatente();
    }
    atualizarPatente() {
        for (let i = this.patentes.length - 1; i >= 0; i--) {
            const patenteAtual = this.patentes[i];
            if (patenteAtual && this.experiencia >= patenteAtual.min) {
                this.patente = patenteAtual.nome;
                break;
            }
        }
    }
    exibirInfo() {
        console.log(`
        ---------------------------------
        Nome do Integrante: ${this.nome};
        Identificação: ${this.id};
        Patente Atual: ${this.patente};
        Experiencia: ${this.experiencia};
        ---------------------------------
        `);
    }
}
exports.Integrante = Integrante;
//# sourceMappingURL=Integrante.js.map