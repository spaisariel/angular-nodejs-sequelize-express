import { Component, OnInit } from '@angular/core';
import { ProgramaResponse } from 'src/app/models/programaResponse';
import { ProgramaService } from 'src/app/services/programaService';

@Component({
  selector: 'app-lista-programa',
  templateUrl: './lista-programa.component.html',
  styleUrls: ['./lista-programa.component.css']
})
export class ListaProgramaComponent implements OnInit {

  programas:ProgramaResponse[];

  constructor(private programaService:ProgramaService) { }

  ngOnInit(): void {
    this.programaService.getProgramas().subscribe(data=>{this.programas=data});
    console.log(this.programas);
  }

  onClick(id:number){
    this.programaService.guardarId(id);
  }

  async onDelete(id:number){
    await this.programaService.deletePrograma(id).subscribe(data=>{
      this.programaService.getProgramas().subscribe(data=>{this.programas=data});
    });
  }

}
