try{
    // Executada quando não há erros.
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou um erro.');
    console.log('Fechei o arquivo.');

    try {
        console.log(b);
    }catch(e){
        console.log('Deu erro.');
    }finally{
        console.log('Eu também sou FINALLY.');
    }

} catch (e){
    // Executada quando há erros.
    console.log('Tratando o erro.');
} finally{
    // Executado sempre.
    console.log('FINALLY: Eu sempre sou executado.');
}