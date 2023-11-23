// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((loggedIn) => {
      if (loggedIn) {
        console.log('Login riuscito!');
        // Reindirizza l'utente alla pagina di benvenuto
        this.router.navigate(['/welcome', this.username]);
      } else {
        console.log('Login non riuscito!');
      }
    });
  }
}
