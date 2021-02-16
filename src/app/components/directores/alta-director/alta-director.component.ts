import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectorRequest } from 'src/app/models/directorRequest';
import { DirectorService } from 'src/app/services/directorService';

@Component({
  selector: 'app-alta-director',
  templateUrl: './alta-director.component.html',
  styleUrls: ['./alta-director.component.css']
})
export class AltaDirectorComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  nuevo:DirectorRequest=new DirectorRequest();

  constructor(private directorService:DirectorService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.nuevo.dni=this.signupForm.value.userData.dni;
    this.nuevo.name=this.signupForm.value.userData.name;
    this.nuevo.email=this.signupForm.value.userData.email;

    this.directorService.postDirector(this.nuevo).subscribe(data=>{
      if(data){
      console.log("director agregado");
      this.router.navigate(['/lista-directores'], { relativeTo: this.route });
    } 
    });
   }

}
