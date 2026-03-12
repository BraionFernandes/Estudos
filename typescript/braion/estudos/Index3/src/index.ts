class Logistic{
    protected categoria:string;
    protected marca:string;
    protected tipologia:string;
    protected definicao:string;

    constructor(categoria:string,marca:string,tipologia:string,definicao:string){
        this.categoria=categoria;
        this.marca=marca;
        this.tipologia=tipologia;
        this.definicao=definicao;
    }

    protected info():void{
        console.log(`Categoria: ${this.categoria}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Tipologia: ${this.tipologia}`);
        console.log(`Definição: ${this.definicao}`);
    }
}

class LogisticEnt extends Logistic{
    protected peso:number;
    protected quantidadeVenda:number;

    constructor(categoria:string,marca:string,tipologia:string,definicao:string,peso:number,quantidadeVenda:number){
        super(categoria,marca,tipologia,definicao)
        this.peso=peso;
        this.quantidadeVenda=quantidadeVenda;
    }

    info():void{
        super.info();
        console.log("--------------------");
        console.log(`Peso: ${this.peso}`);
        console.log(`Quantidade de Venda: ${this.quantidadeVenda}`);
    }
}

const item1=new LogisticEnt("Broca","Tramontina","Padrão","22mm",0.05,10);

item1.info();