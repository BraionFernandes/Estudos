class Computador{
    protected cpu: string;
    protected gpu: string;
    protected ram: string;
    protected fonte: string;
    protected placaMae: string;
    protected memoriaInterna: string;

    constructor(cpu:string,gpu:string,ram:string,fonte:string,placaMae:string,memoriaInterna:string){
        this.cpu=cpu;
        this.gpu=gpu;
        this.ram=ram;
        this.fonte=fonte;
        this.placaMae=placaMae;
        this.memoriaInterna=memoriaInterna;
    }

    AlterarCpu(cpu:string){
        this.cpu=cpu;
    }
}

class BraionComputador extends Computador{
    teclado: string;
    mouse: string;
    headset: string;
    monitor: string;

    constructor(cpu:string,gpu:string,ram:string,fonte:string,placaMae:string,memoriaInterna:string,teclado:string,mouse:string,headset:string,monitor:string){
        super(cpu,gpu,ram,fonte,placaMae,memoriaInterna);
        this.teclado=teclado;
        this.mouse=mouse;
        this.headset=headset;
        this.monitor=monitor;
    }
}

const Braion=new BraionComputador(
    "Ryzen 5 5600",
    "RTX 5070",
    "32GB 4200",
    "Cosair 800W",
    "Asus B750M",
    "M.2 2280 2T",
    "RK T220",
    "Redragon King",
    "Redragon Gang 2V",
    "Pichau Athon 27Pol"
);

console.log(Braion);
Braion.AlterarCpu("Ryzen 7 7700");
console.log(Braion);