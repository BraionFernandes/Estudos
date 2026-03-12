"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logistic {
    categoria;
    marca;
    tipologia;
    definicao;
    constructor(categoria, marca, tipologia, definicao) {
        this.categoria = categoria;
        this.marca = marca;
        this.tipologia = tipologia;
        this.definicao = definicao;
    }
    info() {
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Tipologia: ${this.tipologia}`);
        console.log(`Definição: ${this.definicao}`);
    }
}
class LogisticEnt extends Logistic {
    peso;
    quantidadeVenda;
    constructor(categoria, marca, tipologia, definicao, peso, quantidadeVenda) {
        super(categoria, marca, tipologia, definicao);
        this.peso = peso;
        this.quantidadeVenda = quantidadeVenda;
    }
    info() {
        super.info();
        console.log("--------------------");
        console.log(`Peso: ${this.peso}`);
        console.log(`Quantidade de Venda: ${this.quantidadeVenda}`);
    }
}
const item1 = new LogisticEnt("Broca", "Tramontina", "Padrão", "22mm", 0.05, 10);
item1.info();
//# sourceMappingURL=index.js.map