

import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = []; // Inizializza l'array degli utenti come vuoto
  newUsername: string = '';
  newPassword: string = '';
  adminPassword: string= 'admin';
  newBancaId: number = 0;
  nextUserId: number = 1;

  constructor(private userService: UtenteService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Errore durante il recupero degli utenti:', error);
       
      }
    );
  }


addUser(): void {
  // Verifica se il campo del nuovo utente non è vuoto o contiene solo spazi bianchi
  if (!this.newUsername || !this.newUsername.trim()) {
    alert('Inserisci un nuovo username valido.');
    return;
  }

  if (this.newBancaId === null || this.newBancaId === undefined) {
    alert('Inserisci un ID Banca valido.');
    return;
  }

  const trimmedUsername = this.newUsername.trim();

  // Verifica se la stringa dopo la chiamata a trim() è vuota
  if (!trimmedUsername) {
    alert('Inserisci un nuovo username valido.');
    return;
  }

  // Crea un oggetto utente con il nuovo username e la nuova password
  const newUser: {nomeUtente:string, password: string, idBanca: number} = {
    nomeUtente: trimmedUsername, // Utilizza la versione trimmata del nome utente
    password: this.newPassword,
    idBanca: this.newBancaId
  };

  this.nextUserId++;

  console.log(newUser);

  // Chiamata al servizio utente per aggiungere il nuovo utente
  this.userService.addUser(newUser).subscribe(
    () => {
      // Se l'aggiunta ha successo, aggiorna la lista degli utenti
      this.loadUsers();
      
      alert('Utente aggiunto con successo.');
    },
    (error) => {
      console.error('Errore durante l\'aggiunta dell\'utente:', error);
    
      
      if (error instanceof ErrorEvent) {
        console.error('Errore del client:', error.error.message);
      } else {
        console.error('Errore del server:', error.status, error.error);
      }
    
      alert('Si è verificato un errore durante l\'aggiunta dell\'utente.');
    }
  );
}




}
