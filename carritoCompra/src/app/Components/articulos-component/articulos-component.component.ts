import { Component, OnInit, Input } from '@angular/core';
import {Articulo} from '../../../models/Articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  @Input() Articulo:Articulo;

  constructor() {
    
    
    
   }

   delete(){
    delete(this.Articulo);
  }

  aumento(){
       this.Articulo.aumentarCantidad();
       this.Articulo.importe= this.Articulo.calcularimporte();
     
  }

  disminuir(){
   
       this.Articulo.disminuirCantidad();
       this.Articulo.importe= this.Articulo.calcularimporte();
     
  }

  ngOnInit(): void {
  }

}
