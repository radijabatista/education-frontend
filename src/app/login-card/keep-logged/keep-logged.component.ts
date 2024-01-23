import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-keep-logged',
  templateUrl: './keep-logged.component.html',
  styleUrls: ['./keep-logged.component.scss'],
  standalone: true,
  imports: [MatCheckboxModule, NgFor, FormsModule],
})

export class KeepLoggedComponent {
  task: Task = {
    name: 'Mantenha-me Conectado',
    completed: false,
    color: 'primary', // Defina a cor como 'primary'
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.task.completed = this.task.subtasks?.every(t => t.completed) || false;
  }
}