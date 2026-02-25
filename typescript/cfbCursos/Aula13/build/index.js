"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
// console.log(soma(5,5));
// Quando coloca uma "?" na frente de um parametro transforma ele em opcional, não sendo obrigatorio a passada dele. Ex: "nome?:string".
function novoUser(user, pass, nome) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
}
novoUser("Braion01", "524361", "Braion");
novoUser("Tailon01", "12345");
//# sourceMappingURL=index.js.map