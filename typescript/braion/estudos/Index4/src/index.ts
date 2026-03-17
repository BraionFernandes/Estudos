class Banco{
    protected usuario: string;
    protected cpf: number;

    constructor(usuario:string,cpf:number){
        this.usuario=usuario;
        this.cpf=cpf;
    }
}
class Conta extends Banco{
    protected saldo:number=0;
    protected limiteDeposito:number=0;
    protected limiteRetirada:number=0;
    constructor(usuario:string,cpf:number){
        super(usuario,cpf);
    }
    public PedirLimiteDeposito(limite:number){
        this.limiteDeposito=limite;
        console.log(`Seu limite de Deposito de: R$ ${limite} foi aprovado, limite atual: R$ ${this.limiteDeposito}`);
        console.log('---------------------');
    }
    public PedirLimiteRetirada(limite:number){
        this.limiteRetirada=limite;
        console.log(`Seu limite de Retirada de: R$ ${limite} foi aprovado, limite atual: R$ ${this.limiteRetirada}`);
        console.log('---------------------');
    }
    public Deposito(deposito:number){
        if(deposito<=this.limiteDeposito){
            this.saldo+=deposito;
            console.log(`Deposito de: R$ ${deposito} concluido com sucesso! Saldo atual: R$ ${this.saldo}`);
            console.log('---------------------');
        }else{
            console.log(`Não foi possivel efetuar o seu deposito, seu limite de Deposito e de: R$ ${this.limiteDeposito}`);
            console.log('---------------------');
        }
    }
    public Retirada(retirada:number){
        if(retirada<=this.limiteRetirada){
            this.saldo-=retirada;
            console.log(`Retirada de: R$ ${retirada} concluida com sucesso! Saldo atual: R$ ${this.saldo}`);
            console.log('---------------------');
        }else{
            console.log(`Não foi possivel efetuar sua retirada, seu limite de Retirada e de: R$ ${this.limiteRetirada}`);
            console.log('---------------------');
        }
    }
}

const Braion=new Conta("braion",18781466102);

Braion.PedirLimiteDeposito(10000);
Braion.Deposito(5000);
Braion.Deposito(5000);
Braion.Deposito(5000);
Braion.Deposito(5000);
Braion.Deposito(5000);
Braion.Deposito(5000);
Braion.PedirLimiteDeposito(1000000000);
Braion.Deposito(100000000)