import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banca';

constructor(private router: Router, private location: Location) {}

navigateToBanks() {
  this.router.navigate(['/banks']);
}

navigateToLogin() {
  this.router.navigate(['/login']);
}

navigateToUtenti() {
  this.router.navigate(['/users']);
}

navigateToAdmin() {
  this.router.navigate(['/admin']);
}




goBack() {
  this.location.back();
}
}
