import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LocutorResponse } from 'src/app/models/locutorResponse';
import { LocutorRequest } from 'src/app/models/locutorRequest';
import { LocutorService } from 'src/app/services/locutorService';

@Component({
  selector: 'app-lista-locutor',
  templateUrl: './lista-locutor.component.html',
  styleUrls: ['./lista-locutor.component.css']
})
export class ListaLocutorComponent implements OnInit {

  locutores:LocutorResponse[];

  constructor(private locutorService:LocutorService) { }

  ngOnInit(): void {
    this.locutorService.getLocutores().subscribe(data=>{this.locutores=data;})
  }

  onClick(id:number){
    console.log(id);
    this.locutorService.guardarId(id);
  }

  async onDelete(id:number){
    console.log(id);
    await this.locutorService.deleteLocutor(id).subscribe(data=>{
      console.log(data);
      this.locutorService.getLocutores().subscribe(data=>{this.locutores=data;});
    });
  }
}
