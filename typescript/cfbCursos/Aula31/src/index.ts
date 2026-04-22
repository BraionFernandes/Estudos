import { Pessoa } from "./classes";

const Pessoa1=new Pessoa(
    "Braion",
    1.74,
    75,
    "braionkuro01@gmail.com",
    512
);

Pessoa1.info();
Pessoa1.mudarPatrimonio(722);
Pessoa1.mudarEmail("braionfernandes8@gmail.com");
Pessoa1.mudarPeso(82);
Pessoa1.info();