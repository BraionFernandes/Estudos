import { Emprestavel } from "../interfaces/Emprestavel";
export class Livro implements Emprestavel{
    private disponivel:boolean=true;
    private dataEmprestimo?:Date;
    private dataDevolucao?:Date;
    private multaPorDia:number=2;
    constructor(
        public titulo:string,
        public autor:string,
        public ano:number
    ) {}
    emprestar(dias:number=7){
        if(this.disponivel){
            this.disponivel=false;
            this.dataEmprestimo=new Date();
            const dataDev=new Date();
            dataDev.setDate(dataDev.getDate()+dias);
            this.dataDevolucao=dataDev;
            console.log(`O livro: ${this.titulo}, foi emprestado com sucesso!`);
            console.log(`Data de Emprestimo: ${this.dataEmprestimo}`);
            console.log(`Data de Devolução: ${this.dataDevolucao}`);
            console.log('-----------------');
        }else{
            console.log(`O livro: ${this.titulo}, não esta disponível!`);
            console.log('-----------------');
        }
    }
    devolver(){
        this.disponivel=true;
        this.dataEmprestimo=undefined;
        this.dataDevolucao=undefined;

        console.log(`O livro: ${this.titulo}, foi devolvido com sucesso!`);
        console.log('-----------------');
    }
    calcularMulta():number{
        if(!this.dataDevolucao) return 0;
        const hoje=new Date();

        const diferenca = hoje.getTime() - this.dataDevolucao.getTime();
        const diasAtraso= Math.floor(diferenca / (1000*60*60*24));
        if(diasAtraso>0){
            return diasAtraso*this.multaPorDia;
        }
        return 0;
    }
    verificarDisponibilidade():boolean{
        return this.disponivel;
    }
}