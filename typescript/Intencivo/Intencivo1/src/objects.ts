// Type
type Order={
    productId:string
    price:number
}
type User={
    firstName:string
    age:number
    email:string
    password?:string
    orders: Order[]
};

const user: User={
    firstName: 'Braion',
    age: 22,
    email: 'braionfernandes8@gmail.com',
    password: 'Br346595@',
    orders: [{ productId: '1', price: 10}]
};

const log = (message:string)=>{};

log(user.firstName);

// Se colocar uma '?' depois do parametro 'message' o valor que esse parametro pede torna-se opcional.

// log(user.password!); //Erro tipo 'string | undefined'

// Se colocar uma '!' depois de uma propriedade opcional vai mostrar para o codigo que essa propriedade foi definida

// Unions
// Unions e a união de mais de um tipo em um unico elemento;

type Author={
    books: string[]
}

const author: Author & User = {
    firstName: 'Tailon',
    age: 28,
    email: 'Tailonfernandes0@gmail.com',
    password: 't2811887',
    orders: [],
    books: ['Uma Era', 'Caminho das sombras']
}

// Interfaces

interface UserInterface{
    firstName: string,
    email: string
}

const emailUser: UserInterface={
    firstName: 'Braion',
    email: 'braion@gmmail.com'
}

type Grade = number | string;

const grade: Grade = 1