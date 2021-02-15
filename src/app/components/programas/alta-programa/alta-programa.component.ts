import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-programa',
  templateUrl: './alta-programa.component.html',
  styleUrls: ['./alta-programa.component.css']
})
export class AltaProgramaComponent implements OnInit {

  public radioData: any;
  public seleccionPeriodo: any;
  verPeriodo: boolean = false;
  verPropagandaTema: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.seleccionPeriodo = 1;
  }

  async onPeriodo() {
    this.verPeriodo = !this.verPeriodo;
  }

  async onRadioButton() {
    if(this.seleccionPeriodo == 'publicidad')
    {
      this.verPropagandaTema = true;
    }else{
      this.verPropagandaTema = false;
    };
  }

}

