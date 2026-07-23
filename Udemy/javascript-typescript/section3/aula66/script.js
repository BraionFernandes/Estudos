const btnIniciar=document.getElementById('btnIniciar');
const btnPausar=document.getElementById('btnPausar');
const btnZerar=document.getElementById('btnZerar');
const timer=document.getElementById('timer');

let tempoEmSegundos=55000;
TimerId=null;

const Contador=setInterval(()=>{
    tempoEmSegundos++;
    timer.textContent = formatarTempo(tempoEmSegundos);
}, 1000);

function formatarTempo(segundos){
    const horas = Math.floor((segundos / 60) / 60);
    const minutos = Math.floor((segundos / 60) % 60);
    const segundosRestantes = segundos % 60;

    const horaFormatado = String(horas).padStart(2, '0');
    const minFormatado = String(minutos).padStart(2, '0');
    const segFormatado = String(segundosRestantes).padStart(2, '0');

    return `${horaFormatado}:${minFormatado}:${segFormatado}`;
}



function inciarTimer(){
    if(TimerId !== null) return;

    TimerId = Contador;
}

function pausarTimer(){
    clearInterval(Contador);
}

btnIniciar.addEventListener('click', inciarTimer);
btnPausar.addEventListener('click', pausarTimer);