"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dados = [];
const nome = "Braion";
const idade = 22;
const nome1 = "Tailon";
const idade1 = 28;
class user {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const user1 = new user(nome, idade);
const user2 = new user(nome1, idade1);
dados.push(user1);
dados.push(user2);
console.log(dados);
dados.filter(e => e.nome !== "Braion" ? e : null);
function removeUser(user) {
    const filterUser = dados.filter(e => e.nome !== user ? e : null);
    dados = [];
    dados.push(filterUser);
}
removeUser(nome);
console.log(dados);
removeUser(nome1);
console.log(dados);
//# sourceMappingURL=index.js.map