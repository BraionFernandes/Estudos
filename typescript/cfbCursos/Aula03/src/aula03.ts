class Clan{
    lider: string;
    nivel: number;
    constructor(lider: string,nivel: number){
        this.lider=lider;
        this.nivel=nivel;
    }
}

let n1=new Clan("Reis",10500);

console.log(n1.lider);
console.log(n1.nivel);