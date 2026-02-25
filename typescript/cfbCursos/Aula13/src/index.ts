function soma(n1:number=0, n2:number=0):number{
    return n1+n2;
}

// console.log(soma(5,5));


// Quando coloca uma "?" na frente de um parametro transforma ele em opcional, não sendo obrigatorio a passada dele. Ex: "nome?:string".
function novoUser(user:string, pass:string, nome?:string):void{
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
}

novoUser("Braion01", "524361", "Braion");
novoUser("Tailon01", "12345");