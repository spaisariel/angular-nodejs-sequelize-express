import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProgramaRequest } from "../models/programaRequest";
import { ProgramaResponse } from "../models/programaResponse";

@Injectable({
    providedIn: 'root'
  })
  export class ProgramaService {
    id: number = 0;
    dni: number = 0;
    nombre: string = '';
    apellido: string = '';
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getPrograma(id: number) {
      return this.http.get<ProgramaResponse>('/api/programa/' + this.id);
    }
  
    getProgramaes():Observable<ProgramaResponse[]>{  
      return this.http.get<ProgramaResponse[]>('/api/programa');  
    }
  
    postPrograma(programa: ProgramaRequest) {
      return this.http.post<ProgramaRequest>('/api/programa', JSON.stringify(programa), this.httpOptions);
    }
  
    updatePrograma(programa: ProgramaRequest) {
      return this.http.put<ProgramaRequest>('/api/programa/' + this.id, JSON.stringify(programa), this.httpOptions);
    }
  
    deletePrograma(id: number) {
      return this.http.delete<ProgramaRequest>('/api/programa/' + id, this.httpOptions);
    }
  
  }