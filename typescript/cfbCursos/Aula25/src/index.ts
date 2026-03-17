class Conta{
    protected numero:number
    protected titular:string
    protected saldoConta:number
    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
        this.saldoConta=0;
    }
    private gerarNumeroConta():number{
        const nAccount:number=Date.now();
        return nAccount;
    }
    protected info():void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    get saldo():number{
        return this.saldoConta;
    }
    set saldo(saldoConta:number){
        this.saldoConta=saldoConta;
    }
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor Invalido!");
            return;
        }
        this.saldoConta+=valor
    }
    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor Invalido!");
            return;
        }
        if(valor <= this.saldoConta){
            this.saldoConta -= valor;        
        }
        else{
            console.log("Saldo Insuficiente!");
        }
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
    public deposito(valor:number){
        if(valor > 1000){
            console.log("Valor de depósito muito grande para está conta!");
        }
        else{
            super.deposito(valor);
            console.log(`Deposito de: ${valor} concluído. Saldo Total: ${this.saldoConta}`);
            console.log('--------------------');
        }
    }
    public saque(valor:number){
        if(valor > 1000){
            console.log("Valor de Saque muito grande para está conta!");
        }else{
            super.saque(valor);
            console.log(`Saque de: ${valor} concluído. Saldo Total: ${this.saldoConta}`);
            console.log('--------------------');
        }
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
    public deposito(valor:number){
        if(valor > 10000){
            console.log("Valor de depósito muito grande para está conta!");
        }
        else{
            super.deposito(valor);
            console.log(`Deposito de: ${valor} concluído. Saldo Total: ${this.saldoConta}`);
            console.log('--------------------');
        }
    }
    public saque(valor:number){
        if(valor > 10000){
            console.log("Valor de Saque muito grande para está conta!");
        }else{
            super.saque(valor);
            console.log(`Saque de: ${valor} concluído. Saldo Total: ${this.saldoConta}`);
            console.log('--------------------');
        }
    }
}

const conta1=new ContaPF("08781466102","Braion");
const conta2=new ContaPJ("6154890001","Braion");

conta1.deposito(1000);
conta2.deposito(10000);

// conta1.saque(550);
// conta2.saque(7700);

// conta1.info();
// conta2.info();
conta1.saldo=10000

console.log(conta1.saldo);