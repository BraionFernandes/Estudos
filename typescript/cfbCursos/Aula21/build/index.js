"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        const nAccount = Date.now();
        return nAccount;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new Conta("Braion");
const conta1PF = new ContaPF("08781466102", "Braion");
const conta1PJ = new ContaPJ("6154890001", "Braion");
console.log(conta1PF);
//# sourceMappingURL=index.js.map