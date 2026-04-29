export class Produto{
    nome:string;
    valor:number;
    pgConcluido:boolean=false;

    constructor(nome:string,valor:number){
        this.nome=nome;
        this.valor=valor;
    }
    pagarProduto(confirmação:boolean){
        this.pgConcluido=confirmação
        console.log(`
            ____________________________
            Pagamento confirmado!

            Produto: ${this.nome};
            Valor: R$ ${this.valor};
            ____________________________
            Status: Disponivel para a Coleta da Transportadora!
            ____________________________
        `);
    }
}