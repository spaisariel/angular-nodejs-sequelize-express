import { Component, OnInit } from '@angular/core';
import { DirectorResponse } from 'src/app/models/directorResponse';
import { DirectorService } from "src/app/services/directorService";

@Component({
  selector: 'app-lista-director',
  templateUrl: './lista-director.component.html',
  styleUrls: ['./lista-director.component.css']
})
export class ListaDirectorComponent implements OnInit {

   directores:DirectorResponse[];

  constructor(private directorService:DirectorService) { }

  ngOnInit(): void {
    this.directorService.getDirectores().subscribe(data=>{this.directores=data;})
  }

  onClick(id:number){
    console.log(id);
    this.directorService.guardarId(id);
  }

  async onDelete(id:number){
    //console.log(id);
    await this.directorService.deleteDirector(id).subscribe(data=>{
      this.directorService.getDirectores().subscribe(data=>{this.directores=data;});
    });
  }
}
