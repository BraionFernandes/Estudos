// Desafio 1

const peso=document.getElementById("peso");
const altura=document.getElementById("altura");
const calculo=document.getElementById("calculo");

const fPeso=peso.innerText;
const fAltura=altura.innerText;

function Calcular(){
    const fValor=fPeso/(fAltura*fAltura);
    calculo.innerHTML=fValor;
}