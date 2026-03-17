let dados:any[]=[];
const nome:string="Braion";
const idade:number=22;
const nome1:string="Tailon";
const idade1:number=28;

interface User{
    nome: string;
    idade: number;
}

class user{
    nome:string;
    idade:number;

    constructor(nome: string, idade: number){
        this.nome=nome;
        this.idade=idade;
    }
}

const user1:User=new user(nome, idade);
const user2:User=new user(nome1, idade1);
dados.push(user1);
dados.push(user2);
console.log(dados);
dados.filter(e => e.nome !== "Braion" ? e : null);
function removeUser(user:string){
    const filterUser=dados.filter(e => e.nome !== user ? e : null);
    dados=[];
    dados.push(filterUser);
}
removeUser(nome);
console.log(dados);
removeUser(nome1);
console.log(dados);