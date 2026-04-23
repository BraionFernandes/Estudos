// Defina uma interface chamada Usuario.

// Propriedades: id (number), nome (string) e uma propriedade opcional email (string).

// Desafio: Crie uma função que receba um objeto do tipo Usuario e imprima o nome no console. Se o email existir, imprima-o também; caso contrário, imprima "Email não informado".

interface Usuario{
    id:number;
    name:string;
    email?:string;
    Info():any;
}

class User{
    id:number;
    name:string;
    email?:string;

    constructor(id:number,name:string,email?:string){
        this.id=id;
        this.name=name;
        if(email){
            this.email=email;
        }
    }
    Info(){
        if(this.email){
            console.log(`
                ____________________________
                Dados do Usuario:
                Id: ${this.id}
                Nome: ${this.name}
                Email: ${this.email}
                ____________________________
            `);
        }else{
            console.log(`
                ____________________________
                Dados do Usuario:
                Id: ${this.id}
                Nome: ${this.name}
                Email: Email não informado!
                ____________________________
            `);
        }
    }
}

const user1 : Usuario=new User(1,"Braion");
user1.Info();