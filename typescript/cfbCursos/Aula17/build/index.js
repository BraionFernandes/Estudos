"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const c1 = new Computador("Computador 1", 16, 4, true);
const c2 = new Computador("Computador 2", 32, 5, true);
const c3 = new Computador("Computador 3", 64, 6, true);
console.log(c1);
console.log(c2);
console.log(c3);
//# sourceMappingURL=index.js.map