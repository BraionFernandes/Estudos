class Conta{
    numero:number
    titular:string
    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
    }
    gerarNumeroConta():number{
        const nAccount:number=Date.now();
        return nAccount;
    }
}

class ContaPF extends Conta{
    cpf:string

    constructor(cpf:string,titular:string){
        super(titular);
        this.cpf=cpf
    }
}

class ContaPJ extends Conta{
    cnpj:string

    constructor(cnpj:string,titular:string){
        super(titular);
        this.cnpj=cnpj;
    }
}

const conta1=new Conta("Braion");
const conta1PF=new ContaPF("08781466102","Braion");
const conta1PJ=new ContaPJ("6154890001","Braion");

console.log(conta1PF);