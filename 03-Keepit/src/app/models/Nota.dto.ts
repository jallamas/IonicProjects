export class NotaDto{
    constructor(public titulo:string, public categoria:string,public descripcion:string){
    }

    transformarDto(){
        return{
            titulo:this.titulo,
            categoria:this.categoria,
            descripcion:this.descripcion
        }
    }
}