import { Biblioteca } from "./models/Biblioteca";
import { Livro } from "./models/Livro";
import { Usuario } from "./models/Usuario";

const biblioteca = new Biblioteca();

const livro1 = new Livro("O Principe", "Nicolal Maquiavel", 1950);
const livro2 = new Livro("O Imperio", "Braion F. Reis", 2030);
const usuario1 = new Usuario("Braion",1);
const usuario2 = new Usuario("Tailon",2);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);

biblioteca.listarUsuarios();
biblioteca.removerUsuario(usuario2);
biblioteca.listarUsuarios();