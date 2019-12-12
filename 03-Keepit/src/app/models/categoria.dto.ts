export class CategoriaDto{
    constructor(public titulo:string){
    }

    transformarDto(){
        return{
            titulo:this.titulo,
        }
    }
}