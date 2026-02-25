// let nome="Braion";

// interface User{
//     name: string;
//     id: number;
// }

// const user: User={
//     name: "Braion",
//     id: 0,
// };

// console.log(user);

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

// function deleteUser(user : object){
    
// }

// deleteUser(user);

// console.log(user);

// --------------------------------

// type MyBool = true | false;

// type Carro = "ligado" | "desligado";
// type Janela = "aberta" | "fechada";

// const Carro:Carro="desligado";
// const Janela:Janela="aberta";

//-----------------------------
// const array=["Braion","Tailon","Taisler"];
// function getLength(obj: string | string[]){
//     return obj.length;
// }

// console.log(getLength("Braion"));
// console.log(getLength(array));

// --------------------------------

// const obj1:string="pedro";
// const obj2:string[]=["braion","tailon","taisler"];

// function wrapInArray(obj: string | string[]){
//     if(typeof obj === "string"){
//         return [...obj2, obj];
//     }
//     return obj
// }

// console.log(wrapInArray(obj1));
// console.log(wrapInArray(obj2));

// --------------------------------

// 23/02/2026 !!!!!!!!!!!!!!!!!!!!

// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;

// const array:ObjectWithNameArray=[];

// array.push({ name: "Braion" });
// array.push({ name: "Tailon" });

// console.log(array);

//------------------------------------

// interface Backpack<type>{
//     add: (obj: type) => void;
//     get: () => type;
// }

// declare const backpack : Backpack<string>;

// const object = backpack.get();

// backpack.add("Faca");
// backpack.get()

// -----------------------------

// interface Point{
//     x: number;
//     y: number
// }

// function logPoint(p: Point){
//     console.log(`${p.x}, ${p.y}`);
// }

// const point = {x: 12, y: 26};
// const point2 = {x: 10, y: 20, z: 30}

// logPoint(point);
// logPoint(point2);

// -------------------------------------

// interface Point{
//     x: number;
//     y: number;
// }

// function logPoint(p: Point){
//     console.log(`${p.x}, ${p.y}`);
// }

// const point : Point = {
//     x: 10,
//     y: 20
// }

// logPoint(point);

// --------------------------------------

// interface Point{
//     x: number;
//     y: number;
// }

// function logPoint(p: Point){
//     console.log(`${p.x}, ${p.y}`);
// }

// class VirtualPoint{
//     x: number;
//     y: number;

//     constructor(x:number, y:number){
//         this.x=x;
//         this.y=y;
//     }
// }

// const newPoint = new VirtualPoint(10, 20);
// logPoint(newPoint);

//------------------------------------

