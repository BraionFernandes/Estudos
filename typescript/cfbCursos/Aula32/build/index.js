"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome, potMotor) {
            this.nome = nome;
            this.motor = new Motores.Motor(potMotor);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const c1 = new Veiculos.Carro("Ford GT", 450);
console.log(c1.nome);
//# sourceMappingURL=index.js.map