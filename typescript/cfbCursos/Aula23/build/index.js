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
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        super.info();
        console.log(`Titular: ${this.titular}`);
        console.log(`CPF: ${this.cpf}`);
        console.log('---------------------');
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        super.info();
        console.log(`Titular: ${this.titular}`);
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('---------------------');
    }
}
const conta1 = new Conta("Braion");
const conta1PF = new ContaPF("08781466102", "Braion");
const conta1PJ = new ContaPJ("6154890001", "Braion");
conta1PF.info();
conta1PJ.info();
//# sourceMappingURL=index.js.map