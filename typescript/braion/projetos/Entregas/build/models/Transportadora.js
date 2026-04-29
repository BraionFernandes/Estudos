"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transportadora = void 0;
class Transportadora {
    Carga = [];
    adicionarProduto(produto) {
        if (produto.pgConcluido === true) {
            this.Carga.push(produto);
            console.log(`
                _______________________________
                Pedido confirmado com sucesso!
                _______________________________
                Produto: ${produto.nome};
                Valor: ${produto.valor};
                _______________________________
                Status: Produto Já está com a transportadora!
                _______________________________
            `);
        }
        else {
            console.log(`
                _______________________________
                Ainda não recebemos o Pagamento do Produto!
                _______________________________
                Faça o pagamento no valor de R$ ${produto.valor} para confirmar o Pedido!
                _______________________________
            `);
        }
    }
    removerProduto(produto) {
        this.Carga = this.Carga.filter(c => c !== produto);
        console.log(`
            ________________________________
            Reembolso de Produto Confirmado!
            ________________________________
            Produto: ${produto.nome};
            Valor: ${produto.valor};
            ________________________________
        `);
    }
}
exports.Transportadora = Transportadora;
//# sourceMappingURL=Transportadora.js.map