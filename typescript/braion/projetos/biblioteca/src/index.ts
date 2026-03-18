import { Biblioteca } from "./models/Biblioteca";
import { Livro } from "./models/Livro";
import { Usuario } from "./models/Usuario";

const biblioteca = new Biblioteca();

const livro1 = new Livro("O Principe", "Nicolal Maquiavel", 1950);
const livro2 = new Livro("O Imperio", "Braion F. Reis", 2030);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const usuario1 = new Usuario("Braion",1);
const usuario2 = new Usuario("Tailon",2);

biblioteca.listarLivros();
console.log('-------------');
usuario1.pegarLivro(livro1);
usuario2.pegarLivro(livro1);
usuario1.listarLivros();
usuario2.listarLivros();
usuario1.devolverLivro(livro1);
usuario1.listarLivros();
usuario2.listarLivros();