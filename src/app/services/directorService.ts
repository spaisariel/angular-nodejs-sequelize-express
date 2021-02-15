import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DirectorRequest } from "../models/directorRequest";
import { DirectorResponse } from "../models/directorResponse";

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  id: number = 0;
  dni: number = 0;
  nombre: string = '';
  apellido: string = '';

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }

  constructor(private http: HttpClient) { }

  getDirector(id: number) {
    return this.http.get<DirectorResponse>('/api/director/' + this.id);
  }

  getDirectores():Observable<DirectorResponse[]>{  
    return this.http.get<DirectorResponse[]>('/api/director');  
  }

  postDirector(director: DirectorRequest) {
    return this.http.post<DirectorRequest>('/api/director', JSON.stringify(director), this.httpOptions);
  }

  updateDirector(director: DirectorRequest) {
    return this.http.put<DirectorRequest>('/api/director/' + this.id, JSON.stringify(director), this.httpOptions);
  }

  deleteDirector(id: number) {
    return this.http.delete<DirectorRequest>('/api/director/' + id, this.httpOptions);
  }

}