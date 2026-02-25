class Computador{
    nome:string="";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;

    constructor(nome:string,ram:number,cpu:number,ligado:boolean){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=ligado;
    }
}

const c1=new Computador("Computador 1",16,4,true);
const c2=new Computador("Computador 2",32,5,true);
const c3=new Computador("Computador 3",64,6,true);

console.log(c1);
console.log(c2);
console.log(c3);