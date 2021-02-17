import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DirectorRequest } from "../models/directorRequest";
import { DirectorResponse } from "../models/directorResponse";

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  id: number;
  dni: number;
  name: string;
  email: string;
  baseUrl: string = 'http://localhost:3000';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }

  constructor(private http: HttpClient) { }


  getDirector() {
    return this.http.get<DirectorResponse>(this.baseUrl + '/api/directors/' + this.id);
  }

  getDirectorById(id: number) {
    return this.http.get<DirectorResponse>(this.baseUrl + '/api/directors/' + id);
  }

  getDirectores():Observable<DirectorResponse[]>{  
    return this.http.get<DirectorResponse[]>(this.baseUrl + '/api/directors');  
  }

  postDirector(director: DirectorRequest) {
    return this.http.post<DirectorRequest>(this.baseUrl + '/api/directors', JSON.stringify(director), this.httpOptions);
  }

  updateDirector(director: DirectorRequest) {
    return this.http.patch<DirectorRequest>(this.baseUrl + '/api/directors/' + this.id, JSON.stringify(director), this.httpOptions);
  }

  deleteDirector(id: number) {
    return this.http.delete<DirectorRequest>(this.baseUrl + '/api/directors/' + id, this.httpOptions);
  }

  guardarId(id:number){
    this.id=id;
  }

}