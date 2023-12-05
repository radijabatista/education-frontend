import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.scss']
})
export class NavbarLoggedComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
