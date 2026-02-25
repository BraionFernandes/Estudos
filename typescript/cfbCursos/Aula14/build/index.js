"use strict";
// teste();
Object.defineProperty(exports, "__esModule", { value: true });
// function teste():void{
//     console.log("teste");
// }
const teste = (text) => {
    console.log(text);
};
const soma = (n) => {
    let s = 0;
    n.forEach((i) => {
        s += i;
    });
    return s;
};
let num = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
teste("Empire Corporation");
console.log(soma(num));
//# sourceMappingURL=index.js.map