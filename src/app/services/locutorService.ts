import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LocutorRequest } from "../models/locutorRequest";
import { LocutorResponse } from "../models/locutorResponse";

@Injectable({
    providedIn: 'root'
  })
  export class LocutorService {
    id: number = 0;
    dni: number = 0;
    nombre: string = '';
    apellido: string = '';
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getLocutor(id: number) {
      return this.http.get<LocutorResponse>('/api/locutor/' + this.id);
    }
  
    getLocutores():Observable<LocutorResponse[]>{  
      return this.http.get<LocutorResponse[]>('/api/locutor');  
    }
  
    postLocutor(locutor: LocutorRequest) {
      return this.http.post<LocutorRequest>('/api/locutor', JSON.stringify(locutor), this.httpOptions);
    }
  
    updateLocutor(locutor: LocutorRequest) {
      return this.http.put<LocutorRequest>('/api/locutor/' + this.id, JSON.stringify(locutor), this.httpOptions);
    }
  
    deleteLocutor(id: number) {
      return this.http.delete<LocutorRequest>('/api/locutor/' + id, this.httpOptions);
    }
  
  }