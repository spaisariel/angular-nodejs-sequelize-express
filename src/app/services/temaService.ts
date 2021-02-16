import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TemaRequest } from "../models/temaRequest";
import { TemaResponse } from "../models/temaResponse";

@Injectable({
    providedIn: 'root'
  })
  export class TemaService {
    id: number;
    dni: number;
    nombre: string;
    apellido: string;
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getTema(id: number) {
      return this.http.get<TemaResponse>('/api/tema/' + this.id);
    }
  
    getTemaes():Observable<TemaResponse[]>{  
      return this.http.get<TemaResponse[]>('/api/tema');  
    }
  
    postTema(tema: TemaRequest) {
      return this.http.post<TemaRequest>('/api/tema', JSON.stringify(tema), this.httpOptions);
    }
  
    updateTema(tema: TemaRequest) {
      return this.http.put<TemaRequest>('/api/tema/' + this.id, JSON.stringify(tema), this.httpOptions);
    }
  
    deleteTema(id: number) {
      return this.http.delete<TemaRequest>('/api/tema/' + id, this.httpOptions);
    }
  
  }