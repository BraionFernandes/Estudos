"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dados = {
    nome: "Braion",
    idade: 25,
    status: "Ativo",
    ola: () => { console.log("Olá"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Tailon";
console.log(typeof (dados));
console.log(dados.nome);
dados.ola();
dados.info("Supernova");
//# sourceMappingURL=index.js.map