"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    name;
    idade;
    cpf;
    id;
    status;
    divida;
    constructor(name, idade, cpf) {
        this.name = name;
        this.idade = idade;
        this.cpf = cpf;
        this.id = Date.now();
        this.status = true;
        this.divida = 0;
    }
    AnalisarDivida() {
        if (this.divida > 0) {
            console.log(`
                ------------------
                User: ${this.name}
                CPF: ${this.cpf}
                Status: ${this.status ? "Active" : "Disabled"}
                ------------------
                Console: foi encontrado dividas no sistema no valor de: R$ ${this.divida};
                ------------------
            `);
        }
        else {
            console.log(`
            ------------------
            User: ${this.name}
            CPF: ${this.cpf}
            Status: ${this.status ? "Active" : "Disabled"}
            ------------------
            Console: Não foi encontrado nenhuma irregularidade no sistema;
            ------------------
            `);
        }
    }
    AumentarDivida(valor) {
        this.divida += valor;
        console.log(`
            -----------------
            User: ${this.name}
            CPF: ${this.cpf}
            Status: ${this.status ? "Active" : "Disabled"}
            -----------------
            Console: Divida do Usuario aumentada para R$ ${this.divida};
            -----------------
        `);
    }
}
const user1 = new Usuario("Braion", 22, "08781466102");
user1.AnalisarDivida();
user1.AumentarDivida(10000);
user1.AnalisarDivida();
//# sourceMappingURL=index.js.map