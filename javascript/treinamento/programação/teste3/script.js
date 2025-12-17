// Desafio 1: Verifique se um número é positivo, negativo ou zero.
const num=-15;

if(num < 0){
    console.log("O número e negativo");
}if(num > 0){
    console.log("O número e positivo");
}if(num == 0){
    console.log("O número e Zero");
}

// Desafio 2: Crie uma função que recebe um nome e retorna: "Bem-vindo, [nome]!"
const nome="Braion";

const btnEnviar=(fnome)=>{
    console.log("Bem-vindo, " + fnome);
}

btnEnviar(nome);