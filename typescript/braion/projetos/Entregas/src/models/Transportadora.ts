import { Produto } from "./Produto";

export class Transportadora{
    Carga:Produto[]=[];

    adicionarProduto(produto:Produto){
        if(produto.pgConcluido===true){
            this.Carga.push(produto);
            console.log(`
                _______________________________
                Pedido confirmado com sucesso!
                _______________________________
                Produto: ${produto.nome};
                Valor: ${produto.valor};
                _______________________________
                Status: Produto Já está com a transportadora!
                _______________________________
            `);
        }else{
            console.log(`
                _______________________________
                Ainda não recebemos o Pagamento do Produto!
                _______________________________
                Faça o pagamento no valor de R$ ${produto.valor} para confirmar o Pedido!
                _______________________________
            `);
        }
    }
    removerProduto(produto:Produto){
        this.Carga=this.Carga.filter(c=>c!==produto);
        console.log(`
            ________________________________
            Reembolso de Produto Confirmado!
            ________________________________
            Produto: ${produto.nome};
            Valor: ${produto.valor};
            ________________________________
        `);
    }
}