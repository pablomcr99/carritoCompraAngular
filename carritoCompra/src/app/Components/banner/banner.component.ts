import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner:string;
  constructor() { }

  ngOnInit(): void {
    this.banner="Hombre"
  }

  comprobarBanner(){
    if(this.banner=="Hombre"){
      return true;
    }else{
      return false;
    }
  }

  cambioBanner(){
    if(this.banner==="Hombre"){
      this.banner="Mujer";
    
    }else{
      this.banner="Hombre";
    }
  }

}
