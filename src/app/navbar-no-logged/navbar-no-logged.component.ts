import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-no-logged',
  templateUrl: './navbar-no-logged.component.html',
  styleUrls: ['./navbar-no-logged.component.scss']
})
export class NavbarNoLoggedComponent implements OnInit {

  isOpen: boolean = false;

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
