import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProgramaRequest } from "../models/programaRequest";
import { ProgramaResponse } from "../models/programaResponse";

@Injectable({
    providedIn: 'root'
  })
  export class ProgramaService {
    id: number;
    dni: number;
    nombre: string;
    apellido: string;
    baseUrl: string = 'http://localhost:3000';
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getPrograma(id: number) {
      return this.http.get<ProgramaResponse>(this.baseUrl + '/api/program/' + this.id);
    }
  
    getProgramas():Observable<ProgramaResponse[]>{  
      return this.http.get<ProgramaResponse[]>(this.baseUrl + '/api/programs');  
    }
  
    postPrograma(programa: ProgramaRequest) {
      return this.http.post<ProgramaRequest>(this.baseUrl + '/api/program', JSON.stringify(programa), this.httpOptions);
    }
  
    updatePrograma(programa: ProgramaRequest) {
      return this.http.put<ProgramaRequest>(this.baseUrl + '/api/program/' + this.id, JSON.stringify(programa), this.httpOptions);
    }
  
    deletePrograma(id: number) {
      return this.http.delete<ProgramaRequest>(this.baseUrl + '/api/program/' + id, this.httpOptions);
    }

    guardarId(id:number){
      this.id=id;
    }
  
  }