import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contadorcomponent',
  templateUrl: './contadorcomponent.component.html',
  styleUrls: ['./contadorcomponent.component.css']
})
export class ContadorcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string= 'Contador app';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number){

    this.numero += valor;
  }  

}
