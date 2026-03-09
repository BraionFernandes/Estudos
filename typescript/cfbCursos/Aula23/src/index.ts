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
    protected info():void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
}

class ContaPF extends Conta{
    cpf:string

    constructor(cpf:string,titular:string){
        super(titular);
        this.cpf=cpf
    }
    info():void{
        super.info()
        console.log(`Titular: ${this.titular}`);
        console.log(`CPF: ${this.cpf}`);
        console.log('---------------------');
    }
}

class ContaPJ extends Conta{
    cnpj:string

    constructor(cnpj:string,titular:string){
        super(titular);
        this.cnpj=cnpj;
    }
    info():void{
        super.info()
        console.log(`Titular: ${this.titular}`);
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('---------------------');
    }
}

const conta1=new Conta("Braion");
const conta1PF=new ContaPF("08781466102","Braion");
const conta1PJ=new ContaPJ("6154890001","Braion");
conta1PF.info();
conta1PJ.info();