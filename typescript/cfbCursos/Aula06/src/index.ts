let numeros:number[]=[10,20,30];
// let numeros:Array<number | string>=[10,20,30];
// let numeros:(number | string)[]=[10,20,30];

numeros.push(40);
numeros.unshift(5);

numeros.pop();
numeros.shift();

console.log(numeros);

let numeros2:ReadonlyArray<number>=[100,200,300];

console.log(numeros2);