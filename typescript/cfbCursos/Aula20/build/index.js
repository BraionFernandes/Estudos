"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const conta1 = new Conta(1123456, "Braion");
const conta1PF = new ContaPF(2123456, "Braion");
const conta1PJ = new ContaPJ(3123456, "Braion");
//# sourceMappingURL=index.js.map