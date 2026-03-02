"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`Cpu: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-----------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const c1 = new Computador("Computador 1", 16, 4);
const c2 = new Computador("Computador 2", 32, 5);
const c3 = new Computador("Computador 3", 64, 6);
c1.ligar();
c3.ligar();
c1.info();
c2.info();
c3.info();
//# sourceMappingURL=index.js.map