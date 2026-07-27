const btnAdicionar = document.querySelector('.btnAdicionar');
const inputText = document.querySelector('.caixaTexto');
const elementos = document.querySelector('.elementos');

let dados=[];

function creator(e){
    const divElemento = document.createElement('div');
    const span = document.createElement('span');
    const button = document.createElement('button');

    divElemento.classList.add('elemento');
    span.classList.add('elemento-text');
    button.classList.add('elemento-btn');

    divElemento.id = e.id;

    span.innerHTML = e.tarefa;
    button.innerHTML = 'Apagar';

    elementos.appendChild(divElemento);
    divElemento.appendChild(span);
    divElemento.appendChild(button);
}

function criarTarefa(){
    const inputTextValue=inputText.value;
    if(inputTextValue){
        
        const dado = {
            id: Date.now(),
            tarefa: inputTextValue
        }
        dados.push(dado);

        inputText.value='';
    }

    elementos.innerHTML='';

    dados.map((dado)=>{
        creator(dado);

        function apagarTarefa(e){
            const filterDados=dados.filter(dado => {
                if(dado.id !== Number(e.id)){
                    return dado;
                }
            });

            dados=[...filterDados];

            elementos.innerHTML='';

            dados.map((dado)=>{
                const divElemento = document.createElement('div');
                const span = document.createElement('span');
                const button = document.createElement('button');

                divElemento.classList.add('elemento');
                span.classList.add('elemento-text');
                button.classList.add('elemento-btn');

                divElemento.id = dado.id;

                span.innerHTML = dado.tarefa;
                button.innerHTML = 'Apagar';

                elementos.appendChild(divElemento);
                divElemento.appendChild(span);
                divElemento.appendChild(button);
            });
        }

        button.addEventListener('click', ((e)=>{apagarTarefa(e.target.parentElement)}));
    });
}

btnAdicionar.addEventListener('click', (()=>{criarTarefa()}));