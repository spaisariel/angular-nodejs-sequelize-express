import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LocutorRequest } from "../models/locutorRequest";
import { LocutorResponse } from "../models/locutorResponse";

@Injectable({
    providedIn: 'root'
  })
  export class LocutorService {
    id: number;
    dni: number;
    name: string;
    email: string;
    baseUrl: string = 'http://localhost:3000';
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getLocutor(id: number) {
      return this.http.get<LocutorResponse>(this.baseUrl + '/api/announcers/' + this.id);
    }
  
    getLocutores():Observable<LocutorResponse[]>{  
      return this.http.get<LocutorResponse[]>(this.baseUrl + '/api/announcers');  
    }
  
    postLocutor(locutor: LocutorRequest) {
      return this.http.post<LocutorRequest>(this.baseUrl + '/api/announcers', JSON.stringify(locutor), this.httpOptions);
    }
  
    updateLocutor(locutor: LocutorRequest) {
      return this.http.put<LocutorRequest>(this.baseUrl + '/api/announcers/' + this.id, JSON.stringify(locutor), this.httpOptions);
    }
  
    deleteLocutor(id: number) {
      return this.http.delete<LocutorRequest>(this.baseUrl + '/api/announcers/' + id, this.httpOptions);
    }

    guardarId(id:number){
      this.id=id;
    }
  
  }