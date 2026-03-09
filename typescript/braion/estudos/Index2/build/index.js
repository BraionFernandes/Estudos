"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    cpu;
    gpu;
    ram;
    fonte;
    placaMae;
    memoriaInterna;
    constructor(cpu, gpu, ram, fonte, placaMae, memoriaInterna) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.fonte = fonte;
        this.placaMae = placaMae;
        this.memoriaInterna = memoriaInterna;
    }
    AlterarCpu(cpu) {
        this.cpu = cpu;
    }
}
class BraionComputador extends Computador {
    teclado;
    mouse;
    headset;
    monitor;
    constructor(cpu, gpu, ram, fonte, placaMae, memoriaInterna, teclado, mouse, headset, monitor) {
        super(cpu, gpu, ram, fonte, placaMae, memoriaInterna);
        this.teclado = teclado;
        this.mouse = mouse;
        this.headset = headset;
        this.monitor = monitor;
    }
}
const Braion = new BraionComputador("Ryzen 5 5600", "RTX 5070", "32GB 4200", "Cosair 800W", "Asus B750M", "M.2 2280 2T", "RK T220", "Redragon King", "Redragon Gang 2V", "Pichau Athon 27Pol");
console.log(Braion);
Braion.AlterarCpu("Ryzen 7 7700");
console.log(Braion);
//# sourceMappingURL=index.js.map