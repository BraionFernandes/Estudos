interface curso{
    titulo:string;
    des:string;
    aula:number;
    maxAlunos:number;
    iniciarCurso(teste:string):void;
}

let curso1:curso;
let curso2:curso;

curso1={
    titulo:"Typescript",
    des:"Curso de Typescript",
    aula:100,
    maxAlunos:50,
    iniciarCurso(teste:string){}
}
curso2={
    titulo:"Javascript",
    des:"Curso de Javascript",
    aula:200,
    maxAlunos:80,
    iniciarCurso(teste:string){}
}

console.log(curso1);