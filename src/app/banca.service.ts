
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from './bank'; 

@Injectable({
  providedIn: 'root',
})
export class BancaService {
  private apiUrl = 'https://localhost:7140/api/Banca/';

  constructor(private http: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(`${this.apiUrl}`);
  }

  getFunzionalitaByBancaId(bancaId: number): Observable<string[]> {
    const funzionalitaUrl = `https://localhost:7140/api/Funzionalita/funz-banche/${bancaId}`;
    return this.http.get<string[]>(funzionalitaUrl);
  }

  
}
