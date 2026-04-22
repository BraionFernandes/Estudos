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
            Altura: ${this.altura} M;
            Peso: ${this.peso} Kg;
            Email: ${this.email};
            Patrimonio: ${this.patrimonio} Milhões;
            ________________________________
        `);
    }
    mudarPeso(peso:number){
        console.log('___________________________');
        console.log(`Peso Anterior: ${this.peso} Kg`);
        this.peso=peso;
        console.log(`Peso Atual: ${this.peso} Kg`);
        console.log('___________________________');
    }
    mudarEmail(email:string){
        console.log('___________________________');
        console.log(`Email Anterior: ${this.email}`);
        this.email=email;
        console.log(`Email Atual: ${this.email}`);
        console.log('___________________________');
    }
    mudarPatrimonio(patrimonio:number){
        console.log('___________________________');
        console.log(`Patrimonio Anterior: ${this.patrimonio} Milhões`);
        this.patrimonio=patrimonio;
        console.log(`Patrimonio Atual: ${this.patrimonio} Milhões`);
        console.log('___________________________');
    }
}