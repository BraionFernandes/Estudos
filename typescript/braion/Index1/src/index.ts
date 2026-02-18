// let nome="Braion";

// interface User{
//     name: string;
//     id: number;
// }
// const user: User={
//     name: "Braion",
//     id: 0,
// };

// --------------------------

// interface User{
//     name: string;
//     id: number;
// };

// class UserAccount{
//     name: string;
//     id: number;

//     constructor(name: string, id: number){
//         this.name=name;
//         this.id=id;
//     }
// }

// const user : User = new UserAccount("Braion", 0);

// console.log(user);

// function deleteUser(user : User){
//     // ...
// }

// --------------------------------

type MyBool = true | false;

type Carro = "ligado" | "desligado";
type Janela = "aberta" | "fechada";

const Carro:Carro="desligado";
const Janela:Janela="aberta";

//-----------------------------
const array=["Braion","Tailon","Taisler"];
function getLength(obj: string | string[]){
    return obj.length;
}

console.log(getLength("Braion"));
console.log(getLength(array));