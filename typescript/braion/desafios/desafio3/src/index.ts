// Crie uma função chamada formatarStatus.

// Requisito: Ela deve aceitar um parâmetro status que pode ser apenas uma das seguintes strings: "sucesso", "erro" ou "carregando".

// Requisito: A função deve retornar uma mensagem personalizada para cada caso (ex: "Operação concluída com êxito").

// Dica: Use String Literal Types combinados com o operador |.

type Status = "sucesso" | "erro" | "carregando"

function formatarStatus(status:Status){
    if(status==="sucesso"){
        console.log("Operação concluida com sucesso!");
    }else if(status==="erro"){
        console.log("Erro na Operação, tente novamente!");
    }else{
        console.log("Operação em carregamento, aguarde!");
    }
}

formatarStatus("carregando");
formatarStatus("erro");
formatarStatus("sucesso");