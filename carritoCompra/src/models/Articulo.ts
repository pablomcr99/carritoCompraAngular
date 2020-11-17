export class Articulo{
    _id:number;
    _nombre:string;
    _descripcion:string;
    _color:string;
    _talla:number;
    _cantidad:number;
    _rebaja:boolean;
    _precioOriginal:number;
    _precioRebajado:number;
    _importe:number;

    constructor(id:number,nombre:string,descripcion:string,color:string,talla:number,cantidad:number,rebaja:boolean,precioOriginal:number,precioRebajado:number){
        this._id=id;
        this._nombre=nombre;
        this._descripcion=descripcion;
        this._color=color;
        this._talla=talla;
        this._cantidad=cantidad;
        this._rebaja=rebaja;
        this._precioOriginal=precioOriginal;
        this._precioRebajado=precioRebajado;
       

    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre=nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion:string){
        this._descripcion=descripcion;
    }

    get color(){
        return this._color;
    }

    set color(color:string){
        this._color=color;
    }

    get talla(){
        return this._talla;
    }

    set talla(talla:number){
        this._talla=talla;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad:number){
        this._cantidad=cantidad;
    }

    get rebaja(){
        return this._rebaja;
    }

    set rebaja(rebaja:boolean){
        this._rebaja=rebaja;
    }

    get precioOriginal(){
        return this._precioOriginal;
    }

    set precioOriginal(precioOriginal:number){
        this._precioOriginal=precioOriginal;
    }

    get precioRebajado(){
        return this._precioRebajado;
    }

    set precioRebajado(precioRebajado:number){
        this._precioRebajado=precioRebajado;
    }

    get importe(){
        return this._importe;
    }

    set importe(importe){
        this._importe=importe;
    }

    aumentarCantidad(){
        this._cantidad++;
    }

    disminuirCantidad(){
        this._cantidad--;
    }

    calcularimporte(){
        let resultado=0;
        if(this._rebaja==true){
            resultado=this._cantidad*this._precioRebajado;
        }else if(this._rebaja==false){
            resultado=this._cantidad*this._precioOriginal;
        }
        return resultado;
    }

}