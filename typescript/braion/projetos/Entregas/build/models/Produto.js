"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    nome;
    valor;
    pgConcluido = false;
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    pagarProduto(confirmação) {
        this.pgConcluido = confirmação;
        console.log(`
            ____________________________
            Pagamento confirmado!

            Produto: ${this.nome};
            Valor: R$ ${this.valor};
            ____________________________
            Status: Disponivel para a Coleta da Transportadora!
            ____________________________
        `);
    }
}
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map