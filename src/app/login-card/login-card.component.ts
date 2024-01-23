import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card-page',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {

  constructor(private router: Router) {}

  redirectToRegister() {
    this.router.navigate(['/register']);
  }

}
