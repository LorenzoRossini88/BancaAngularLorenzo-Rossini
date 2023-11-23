// admin.component.ts
import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { User } from '../user';
import { UserBloccato } from '../user-bloccato';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  isAdminLoggedIn: boolean = false;
  adminUsername: string = '';
  adminPassword: string = '';
  nuovaPassword: string = '';
  users: User[] = [];

  constructor(private userService: UtenteService) {}

  ngOnInit(): void {
   
    this.loadUsers();
  }

  login(username: string, password: string): void {
    // Effettua la verifica delle credenziali
    if (username === 'admin' && password === 'admin') {
      this.isAdminLoggedIn = true;
      this.adminPassword = password;
      // Chiamata al servizio UtenteService per ottenere la lista degli utenti dopo il login
      this.loadUsers();
    } else {
      alert('Credenziali non valide.');
    }
  }

  loadUsers(): void {
    // Chiamata al servizio UtenteService per ottenere la lista degli utenti
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Errore durante il recupero degli utenti:', error);
        
      }
    );
  }

  toggleUserStatus(userId: number): void {
    // Verifica se l'utente admin è loggato
    if (!this.isAdminLoggedIn) {
      alert('Effettua il login come admin.');
      return;
    }


  
    
    
    this.userService.toggleUserStatus(userId, false).subscribe(
      () => {
        // Se l'operazione ha successo, aggiorna la lista degli utenti
        this.loadUsers();
        alert('Operazione completata con successo.');
      },
      (error) => {
        console.error('Errore durante l\'operazione:', error);
        alert('Si è verificato un errore durante l\'operazione. Dettagli: ' + JSON.stringify(error));
      }
    );
  }


  toggleUserStatusBlocca(userId: number): void {
    // Verifica se l'utente admin è loggato
    if (!this.isAdminLoggedIn) {
      alert('Effettua il login come admin.');
      return;
    }

    
  
    
    this.userService.toggleUserStatusBlocca(userId, true).subscribe(
      () => {
        // Se l'operazione ha successo, aggiorna la lista degli utenti
        this.loadUsers();
        alert('Operazione completata con successo.');
      },
      (error) => {
        console.error('Errore durante l\'operazione:', error);
        alert('Si è verificato un errore durante l\'operazione. Dettagli: ' + JSON.stringify(error));
      }
    );
  }


  deleteUser(userId: number): void {
    if (!this.isAdminLoggedIn) {
      alert('Effettua il login come admin.');
      return;
    }

    // Chiamata al servizio utente per eliminare l'utente
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Se l'operazione ha successo, aggiorna la lista degli utenti
        this.loadUsers();
        alert('Utente eliminato con successo.');
      },
      (error) => {
        console.error('Errore durante l\'eliminazione dell\'utente:', error);
        alert('Si è verificato un errore durante l\'eliminazione dell\'utente. Dettagli: ' + JSON.stringify(error));
      }
    );
  }

  updateUserPassword(userId: number): void {
    if (!this.isAdminLoggedIn) {
      alert('Effettua il login come admin.');
      return;
    }

    if (!this.nuovaPassword) {
      alert('Inserisci la nuova password.');
      return;
    }

    // Chiamata al servizio utente per aggiornare la password
    this.userService.updateUserPassword(userId, this.nuovaPassword).subscribe(
      () => {
        // Se l'operazione ha successo, aggiorna la lista degli utenti
        this.loadUsers();
        this.nuovaPassword = ''; // Pulisci il campo della nuova password
        alert('Password dell\'utente aggiornata con successo.');
      },
      (error) => {
        console.error('Errore durante l\'aggiornamento della password:', error);
        alert('Si è verificato un errore durante l\'aggiornamento della password. Dettagli: ' + JSON.stringify(error));
      }
    );
  }
  
  
}
