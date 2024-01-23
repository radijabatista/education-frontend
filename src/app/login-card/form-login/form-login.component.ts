import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Form field with error messages */
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})

export class FormLoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve fornecer um email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Você deve fornecer uma senha';
    }

    if (this.password.hasError('minlength')) {
      return 'A senha deve ter pelo menos 8 caracteres';
    }

    return '';
  }
}