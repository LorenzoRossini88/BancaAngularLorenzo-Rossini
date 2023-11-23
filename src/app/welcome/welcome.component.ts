

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  username: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || '';
  }

  preleva(): void {
    // Logica per la gestione del prelievo
    console.log('Esegui prelievo');
  }

  versamento(): void {
    // Logica per la gestione del versamento
    console.log('Esegui versamento');
  }
}
