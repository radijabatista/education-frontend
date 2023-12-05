import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent {
  exibirTodos: boolean = false;

  toggleExibirTodos() {
    this.exibirTodos = !this.exibirTodos;
  }
}
