function fTeste<T,U>(v:T,f:U):U{
    return f;
}

// console.log(fTeste<number,string>(10,"Olá, Mundo!"));
// console.log(fTeste<string,number>("Olá, Mundo!",10));

class cTeste<T>{
    public valor:T;

    constructor(valor:T){
        this.valor=valor;
    }
}

let classeTeste=new cTeste<number>(50);

console.log(classeTeste.valor);