import { Usuario } from "./Usuario";
import { Livro } from "./Livro";

export class Biblioteca{
    private livros: Livro[]=[];
    private usuarios: Usuario[]=[];

    adicionarLivro(livro: Livro){
        this.livros.push(livro);
    }
    cadastrarUsuario(usuario: Usuario){
        this.usuarios.push(usuario);
    }
    listarLivros(){
        console.log("Lista de livros:");

        this.livros.forEach(l => {
            console.log(`${l.titulo} - ${l.autor}`);
        });
    }
}