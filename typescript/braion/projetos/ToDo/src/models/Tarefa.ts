export class Tarefa{
    protected nomeTarefa:string;
    protected id:number;
    constructor(nomeTarefa:string){
            this.nomeTarefa=nomeTarefa;
            this.id=this.geradorId();
    }
    private geradorId():number{
        const id=Date.now();
        return id;
    }
}