const btnAdicionar = document.querySelector('.btnAdicionar');
const inputText = document.querySelector('.caixaTexto');
const elementos = document.querySelector('.elementos');

const dados=[];



function criarTarefa(){
    const inputTextValue=inputText.value;
    if(inputTextValue){
        const dado = {
            id: Date.now(),
            tarefa: inputTextValue
        }
        dados.push(dado);

        
    }
}

btnAdicionar.addEventListener('click', (()=>{criarTarefa()}));