namespace Veiculos{
    export class Carro{
        nome:string;
        motor:Motores.Motor;
        constructor(nome:string,potMotor:number){
            this.nome=nome;
            this.motor=new Motores.Motor(potMotor)
        }
    }
}

namespace Motores{
    class Turbo{
        pot:number;
        constructor(pot:number){
            this.pot=pot;
        }
    }
    export class Motor{
        potencia:number;
        constructor(potencia:number){
            this.potencia=potencia;

        }
    }
}

const c1=new Veiculos.Carro("Ford GT",450);

console.log(c1.nome);