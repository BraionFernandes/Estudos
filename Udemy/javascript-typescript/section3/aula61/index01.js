const ePaisagem = (largura, altura) => {
    if(typeof largura === 'string' || typeof altura === 'string'){
        return "Nesta função e permitido o uso somente de Números!";
    }else if(largura === altura){
        return "Está imagem está no modelo Quadrado";
    }else{
        return largura > altura ? "Está imagem está no formato Paisagem" : "Está imagem não está no formato Paisagem";
    }
}

console.log(ePaisagem(1080, 1080));