export class Pessoa{
    private nome:string;
    private altura:number;
    private peso:number;
    private email:string;
    private patrimonio:number;

    constructor(nome:string,altura:number,peso:number,email:string,patrimonio:number){
        this.nome=nome;
        this.altura=altura;
        this.peso=peso;
        this.email=email;
        this.patrimonio=patrimonio;
    }
    info(){
        console.log(`
            ________________________________
            Nome: ${this.nome};
            Altura: ${this.altura}m;
            Peso: ${this.peso}kg;
            Email: ${this.email};
            Patrimonio: ${this.patrimonio} Milhões;
            ________________________________
        `);
    }
    mudarPeso(peso:number){
        this.peso=peso;
    }
    mudarEmail(email:string){
        this.email=email;
    }
    mudarPatrimonio(patrimonio:number){
        this.patrimonio=patrimonio;
    }
}