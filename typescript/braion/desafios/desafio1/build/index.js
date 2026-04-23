"use strict";
// Crie uma função chamada calcularAreaRetangulo que aceite dois parâmetros: largura e altura.
Object.defineProperty(exports, "__esModule", { value: true });
// Requisito: Ambos devem ser do tipo number.
// Requisito: A função deve retornar obrigatoriamente um number.
// Dica: Use a sintaxe : type tanto nos parâmetros quanto após os parênteses da função.
function calcularAreaRetangulo(largura, altura) {
    return (largura * 2) + (altura * 2);
}
const retangulo1 = calcularAreaRetangulo(30, 20);
console.log(`${retangulo1} m²`);
//# sourceMappingURL=index.js.map