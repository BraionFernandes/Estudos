class Computador{
    nome:string="";
    private ram:number=0;
    private cpu:number=0;
    protected ligado:boolean;

    constructor(nome:string,ram:number,cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
    }

    info():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`Cpu: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado?"Sim":"Não"}`);
        console.log("-----------------------");
    }

    ligar():void{
        this.ligado=true;
    }

    desligar():void{
        this.ligado=false;
    }

    upRam(qt:number):void{
        if(qt >= 0 && qt <= 1000)
            this.ram=qt
        else
            console.log(`Quantidade: ${qt}, não e permitido`);
    }
}

const c1=new Computador("Computador 1",16,4);
const c2=new Computador("Computador 2",32,5);
const c3=new Computador("Computador 3",64,6);

c1.ligar();
c3.ligar();

c1.info();
c2.info();
c3.info();