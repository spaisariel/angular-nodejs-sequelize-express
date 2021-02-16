import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocutorRequest } from 'src/app/models/locutorRequest';
import { LocutorService } from 'src/app/services/locutorService';

@Component({
  selector: 'app-alta-locutor',
  templateUrl: './alta-locutor.component.html',
  styleUrls: ['./alta-locutor.component.css']
})
export class AltaLocutorComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  nuevo:LocutorRequest=new LocutorRequest();

  constructor(private locutorService:LocutorService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.nuevo.dni=this.signupForm.value.userData.dni;
    this.nuevo.name=this.signupForm.value.userData.name;
    this.nuevo.email=this.signupForm.value.userData.email;

    this.locutorService.postLocutor(this.nuevo).subscribe(data=>{
      if(data){
        console.log('locutor agregado');
        this.router.navigate(['/lista-locutores'], {relativeTo: this.route})
      }
    })
  }

}
