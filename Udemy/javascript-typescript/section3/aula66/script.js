const btnIniciar=document.getElementById('btnIniciar');
const btnPausar=document.getElementById('btnPausar');
const btnZerar=document.getElementById('btnZerar');
const timer=document.getElementById('timer');

let tempoEmSegundos=0;
let TimerId=null;
let paused=false;

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

    TimerId=setInterval(()=>{
        tempoEmSegundos++;
        timer.textContent = formatarTempo(tempoEmSegundos);
    }, 1000);
}

function pausarTimer(){
    if(paused){
        inciarTimer();
        paused=false;
    }else{
        clearInterval(TimerId);
        TimerId=null;
        paused=true;
    }
}

function zerarTimer(){
    clearInterval(TimerId);
    TimerId=null;
    tempoEmSegundos=0;
    timer.textContent='00:00:00';
    inciarTimer();
}

btnIniciar.addEventListener('click', inciarTimer);
btnPausar.addEventListener('click', pausarTimer);
btnZerar.addEventListener('click', zerarTimer);