import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PropagandaRequest } from "../models/propagandaRequest";
import { PropagandaResponse } from "../models/propagandaResponse";

@Injectable({
    providedIn: 'root'
  })
  export class PropagandaService {
    id: number = 0;
    dni: number = 0;
    nombre: string = '';
    apellido: string = '';
  
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), withCredentials: false }
  
    constructor(private http: HttpClient) { }
  
    getPropaganda(id: number) {
      return this.http.get<PropagandaResponse>('/api/propaganda/' + this.id);
    }
  
    getPropagandaes():Observable<PropagandaResponse[]>{  
      return this.http.get<PropagandaResponse[]>('/api/propaganda');  
    }
  
    postPropaganda(propaganda: PropagandaRequest) {
      return this.http.post<PropagandaRequest>('/api/propaganda', JSON.stringify(propaganda), this.httpOptions);
    }
  
    updatePropaganda(propaganda: PropagandaRequest) {
      return this.http.put<PropagandaRequest>('/api/propaganda/' + this.id, JSON.stringify(propaganda), this.httpOptions);
    }
  
    deletePropaganda(id: number) {
      return this.http.delete<PropagandaRequest>('/api/propaganda/' + id, this.httpOptions);
    }
  
  }