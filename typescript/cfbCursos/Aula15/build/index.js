"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(...n) {
    let s = 0;
    for (let en of n) {
        s += en;
    }
    // n.forEach((en)=>{
    //     s+=en;
    // })
    return s;
}
console.log(soma(50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 505, 505, 5));
//# sourceMappingURL=index.js.map