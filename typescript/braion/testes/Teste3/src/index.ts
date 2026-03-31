interface BaseCurso{
    nome:string;
    categoria:string;
    professor:string;
    numAulas:number;
    duracao:number;
}

class Cursos implements BaseCurso{
    constructor(
        public nome:string,
        public categoria:string,
        public professor:string,
        public numAulas:number,
        public duracao:number
    ){};
}