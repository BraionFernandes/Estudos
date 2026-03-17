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
        }else{
            console.log(`O livro: ${this.titulo}, não esta disponível!`);
        }
    }
    devolver(){
        this.disponivel=true;
        console.log(`O livro: ${this.titulo}, foi devolvido com sucesso!`);
    }
    verificarDisponibilidade():boolean{
        return this.disponivel;
    }
}