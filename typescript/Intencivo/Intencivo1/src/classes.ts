interface IPerson{
    id: number;
    name: string;
    age: number;
    sayMyName():string;
}

class Person implements IPerson{
    readonly id: number;
    readonly name: string;
    readonly age: number;

    constructor(id:number, name:string, age:number){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    sayMyName():string{
        return this.name;
    }
}

class Employee extends Person{
    constructor(id:number, name:string, age:number){
        super(id, name, age)
    }

    whoAmI(){
        return this.name
    }
}

const person= new Person(1, 'Braion', 22);