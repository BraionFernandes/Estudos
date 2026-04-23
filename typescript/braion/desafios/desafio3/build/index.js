"use strict";
// Crie uma função chamada formatarStatus.
Object.defineProperty(exports, "__esModule", { value: true });
function formatarStatus(status) {
    if (status === "sucesso") {
        console.log("Operação concluida com sucesso!");
    }
    else if (status === "erro") {
        console.log("Erro na Operação, tente novamente!");
    }
    else {
        console.log("Operação em carregamento, aguarde!");
    }
}
formatarStatus("carregando");
formatarStatus("erro");
formatarStatus("sucesso");
//# sourceMappingURL=index.js.map