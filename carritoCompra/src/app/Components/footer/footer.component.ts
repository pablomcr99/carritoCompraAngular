import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copy:string;
  anyo:Date;
  constructor() { }

  ngOnInit(): void {
    this.copy="Copyright"
    this.anyo=new Date();
  }

}
