import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../../models/Articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  Articulos:Articulo[];

  constructor() {
    let articulo1=new Articulo(1,"Botas","botas","negro",42,1,false,10.00,0);
    articulo1.importe=articulo1.calcularimporte();

    let articulo2=new Articulo(2,"Camiseta","Camiseta mangas cortas","blanco",45,1,true,14.99,9.95);
    articulo2.importe=articulo2.calcularimporte(); 
    
    this.Articulos=[];
    this.Articulos.push(articulo1);
    this.Articulos.push(articulo2);
   }

   delete(id){
     this.Articulos.splice(id-1,1);
   }

   aumento(id){
     for(let articulo of this.Articulos){
      if(articulo.id==id){
        articulo.aumentarCantidad();
        articulo.importe=articulo.calcularimporte();
      }
     }
   }

   disminuir(id){
    for(let articulo of this.Articulos){
      if(articulo.id==id){
        articulo.disminuirCantidad();
        articulo.importe=articulo.calcularimporte();
      }
     }
   }

  ngOnInit(): void {
  }

}
