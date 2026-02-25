class Computador{
    nome:string="";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;

}

const c1=new Computador();
const c2=new Computador();
const c3=new Computador();

c1.nome="Computador 1";
c2.nome="Computador 2";
c3.nome="Computador 3";

console.log(c1.nome);
console.log(c2.nome);
console.log(c3.nome);