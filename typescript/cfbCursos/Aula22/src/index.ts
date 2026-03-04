class Conta{
    protected numero:number
    protected titular:string
    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
    }
    private gerarNumeroConta():number{
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
        console.log(this.titular);
    }
}

const conta1=new Conta("Braion");
const conta1PF=new ContaPF("08781466102","Braion");
const conta1PJ=new ContaPJ("6154890001","Braion");