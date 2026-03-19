"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = require("./models/Biblioteca");
const Livro_1 = require("./models/Livro");
const Usuario_1 = require("./models/Usuario");
const biblioteca = new Biblioteca_1.Biblioteca();
const livro1 = new Livro_1.Livro("O Principe", "Nicolal Maquiavel", 1950);
const livro2 = new Livro_1.Livro("O Imperio", "Braion F. Reis", 2030);
const usuario1 = new Usuario_1.Usuario("Braion", 1);
const usuario2 = new Usuario_1.Usuario("Tailon", 2);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);
biblioteca.listarUsuarios();
biblioteca.removerUsuario(usuario2);
biblioteca.listarUsuarios();
//# sourceMappingURL=index.js.map