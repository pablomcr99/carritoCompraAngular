import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponentComponent } from './Components/articulos-component/articulos-component.component';
import { ListaArticulosComponent } from './Components/lista-articulos/lista-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponentComponent,
    ListaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
