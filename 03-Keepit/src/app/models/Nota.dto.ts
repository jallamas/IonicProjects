export class NotaDto{
    constructor(public titulo:string, public categoriaId: string, public categoriaNombre:string, public descripcion:string){
    }

    transformarDto(){
        return{
            titulo:this.titulo,
            categoriaId: this.categoriaId,
            categoriaNombre:this.categoriaNombre,
            descripcion:this.descripcion
        }
    }
}