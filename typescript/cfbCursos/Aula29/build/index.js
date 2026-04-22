"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fTeste(v, f) {
    return f;
}
// console.log(fTeste<number,string>(10,"Olá, Mundo!"));
// console.log(fTeste<string,number>("Olá, Mundo!",10));
class cTeste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
let classeTeste = new cTeste(50);
console.log(classeTeste.valor);
//# sourceMappingURL=index.js.map