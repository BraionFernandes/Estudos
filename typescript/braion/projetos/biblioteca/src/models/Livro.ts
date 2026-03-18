import { Emprestavel } from "../interfaces/Emprestavel";
export class Livro implements Emprestavel{
    private disponivel:boolean=true;
    constructor(
        public titulo:string,
        public autor:string,
        public ano:number
    ) {}
    emprestar(){
        if(this.disponivel){
            this.disponivel=false;
            console.log(`O livro: ${this.titulo}, foi emprestado com sucesso!`);
            console.log('-----------------');
        }else{
            console.log(`O livro: ${this.titulo}, não esta disponível!`);
            console.log('-----------------');
        }
    }
    devolver(){
        this.disponivel=true;
        console.log(`O livro: ${this.titulo}, foi devolvido com sucesso!`);
        console.log('-----------------');
    }
    verificarDisponibilidade():boolean{
        return this.disponivel;
    }
}