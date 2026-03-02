class Computador{
    private nome: string;
    private ram: string;
    private cpu: string;
    private gpu: string;
    private memoria: string;

    constructor(nome:string,ram:string,cpu:string,gpu:string,memoria:string){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.gpu=gpu;
        this.memoria=memoria;
    }

    AlterarCPU(cpu:string):void{
        this.cpu=cpu;
    }
}

const Computador1=new Computador(
    "Computador Braion",
    "128GB",
    "Ryzen 9 9900X3D",
    "Randeon RX9900X",
    "M.2 2T"
);

console.log(Computador1);

Computador1.AlterarCPU("Ryzen 9 10900X3D");

console.log(Computador1);