function criaPessoa(nome, idade, peso){
    return{
        nome: nome,
        idade: idade,
        peso: peso,
        get dados(){
            console.log(`nome: ${this.nome}, idade: ${this.idade}, peso: ${this.peso}`);
        }
    }
}

const p1 = criaPessoa("Braion", 22, 73);
p1.dados;