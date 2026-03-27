let age: number = 5;
const name: string = 'Braion';
const isValid: boolean = true;
let idk: any = 5;

idk = '5';

const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true,false,true,false];
const names: string[] = ['Braion','Tailon','Taisler','Rafaela'];

// Tuplas
const person: [string,number] = ['Olá, Mundo!', 10];

// Tuplas com listas
const peaple: [string,number][] = [
    ['Braion', 22],
    ['Tailon', 28],
    ['Taisler', 23]
];

// Intersections
const productId: string | number | boolean = false;


// Enum

enum Direction{
    up = 1,
    down = 2
}

const direction = Direction.up;

// Type Assertions

const productName: any = 'Boné';

// let itemId = productName as string;
let itemId = <string>productName;

console.log(age);