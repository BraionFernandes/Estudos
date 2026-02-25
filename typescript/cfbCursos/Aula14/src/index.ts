// teste();

// function teste():void{
//     console.log("teste");
// }

const teste=(text:string):void=>{
    console.log(text);
}

const soma=(n:number[]):number=>{
    let s:number=0;
    n.forEach((i)=>{
        s+=i;
    })
    return s;
}
let num:number[]=[50,50,50,50,50,50,50,50,50,50];
teste("Empire Corporation");
console.log(soma(num));