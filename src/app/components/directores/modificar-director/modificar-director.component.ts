import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectorRequest } from 'src/app/models/directorRequest';
import { DirectorResponse } from 'src/app/models/directorResponse';
import { DirectorService } from 'src/app/services/directorService';

@Component({
  selector: 'app-modificar-director',
  templateUrl: './modificar-director.component.html',
  styleUrls: ['./modificar-director.component.css']
})
export class ModificarDirectorComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  nuevo: DirectorRequest = new DirectorRequest();
  director: DirectorResponse;

  constructor(
    private directorService: DirectorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.directorService.getDirector().subscribe(data=> {
      this.director = data;
      //console.log(data);
    });
  }

  onSubmit() {
    this.nuevo.dni = this.signupForm.value.userData.dni;
    console.log(this.signupForm.value.userData.dni);
    this.nuevo.name = this.signupForm.value.userData.name;
    this.nuevo.email = this.signupForm.value.userData.email;

    this.directorService.updateDirector(this.nuevo).subscribe(data=> {
      if (data) {
        this.router.navigate(['../lista-directores'], {relativeTo: this.route})
      }
    });
  }

}
