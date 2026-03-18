import { Livro } from "./Livro";

export class Usuario{
    private LivrosEmprestados: Livro[]=[];
    constructor(
        public nome: string,
        public id: number
    ){}
    pegarLivro(livro:Livro){
        if(livro.verificarDisponibilidade()){
            console.log(`Usuario: ${this.nome}`);
            livro.emprestar();
            this.LivrosEmprestados.push(livro);
        }else{
            console.log(`Usuario: ${this.nome}, O livro: ${livro.titulo} está indisponivel!`);
            console.log('-----------------');
        }
    }
    devolverLivro(livro:Livro){
        console.log(`Usuario: ${this.nome}`);
        livro.devolver();
        this.LivrosEmprestados=this.LivrosEmprestados.filter(
            l => l !== livro
        );
    }
    listarLivros(){
        if(this.LivrosEmprestados.length>0){
                console.log(`Livros de: ${this.nome}`);
                this.LivrosEmprestados.forEach(l => {
                console.log(l.titulo);
                console.log('-----------------');
            });
        }else{
            console.log(`Livros de: ${this.nome}`);
            console.log('Nenhum livro Pego.');
            console.log('-----------------');
        }
    }
}