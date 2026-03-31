"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
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
        get potencia() {
            return this.pot;
        }
    }
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        get potencia() {
            return this.pot;
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        set desliga(desligado) {
            this.ligado = desligado;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
//# sourceMappingURL=index.js.map