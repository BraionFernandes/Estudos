function soma(...n:number[]){
    let s:number=0;
    for(let en of n){
        s+=en;
    }
    // n.forEach((en)=>{
    //     s+=en;
    // })
    return s;
}

console.log(soma(50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,505,505,5));