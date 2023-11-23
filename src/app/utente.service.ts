// utente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  private apiUrl = 'https://localhost:7140/api/Utente/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  addUser(newUser: {nomeUtente:string, password: string, idBanca: number}): Observable<{nomeUtente:string, password: string, idBanca: number}> {
    return this.http.post<{nomeUtente:string, password: string, idBanca: number}>(`${this.apiUrl}`, newUser);
  }

  // toggleUserStatus(userId: number, adminPassword: string): Observable<void> {
  //   const url = `${this.apiUrl}update-bloccato/${userId}`;
  //   return this.http.put<void>(url, { adminPassword });
  // }



  // prova getUser x id
  
  // getUser(): Observable <User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/${userId}`);
  // }
  

  toggleUserStatus(userId: number, bloccato: boolean): Observable<void> {
    const url = `${this.apiUrl}update-bloccato/${userId}`;
    return this.http.put<void>(url, bloccato);
  }

  toggleUserStatusBlocca(userId: number, bloccato: boolean): Observable<void> {
    const url = `${this.apiUrl}update-bloccato/${userId}`;
    return this.http.put<void>(url, bloccato);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}${userId}`;
    return this.http.delete<void>(url);
  }

  updateUserPassword(userId: number, nuovaPassword: string): Observable<void> {
    const url = `${this.apiUrl}update-password/${userId}`;
    return this.http.put<void>(url, `"${nuovaPassword}"`);
  }
  

  
}
