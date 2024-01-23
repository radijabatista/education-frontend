import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
  ],
})
export class FormRegisterComponent {

  // Controles do formulário
  cpf = new FormControl('', [Validators.required, this.validateCPF.bind(this)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required]);

  fullName = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required, Validators.pattern(/^\+\d{1,3} \d{2,3} \d{6,10}$/)]);

  // Grupos de formulários
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  securityFormGroup: FormGroup = this._formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validator: this.passwordsMatchValidator.bind(this)
  });

  passwordFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.passwordFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: this.passwordsMatchValidator.bind(this)
    });
  }

  // Métodos de obtenção de mensagens de erro
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um email';
    }
    return this.email.hasError('email') ? 'Email não é válido' : '';
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

  getErrorMessageConfirmPassword() {
    if (this.confirmPassword.hasError('required')) {
      return 'Você deve repetir a senha';
    }
    if (this.securityFormGroup.hasError('passwordsNotMatch')) {
      return 'As senhas não coincidem';
    }
    return '';
  }

  getErrorMessageName() {
    if (this.fullName.hasError('required')) {
      return 'Você deve fornecer seu nome completo';
    }
    return '';
  }

  getErrorMessageNameBusiness() {
    if (this.fullName.hasError('required')) {
      return 'Você deve fornecer o nome de sua empresa';
    }
    return '';
  }

  getErrorMessagePhoneNumber() {
    if (this.phoneNumber.hasError('required')) {
      return 'Você deve fornecer seu número de contato';
    }
    if (this.phoneNumber.hasError('pattern')) {
      return 'Número de contato inválido (use o formato +DDI DDD Número)';
    }
    return '';
  }

  // Método de validação de CPF
  validateCPF(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value;
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      return { invalidCPF: true };
    }
    return null;
  }

  getErrorMessageCPF() {
    if (this.cpf.hasError('required')) {
      return 'Você deve inserir um CPF';
    }
    return this.cpf.hasError('invalidCPF') ? 'CPF não é válido' : '';
  }

  private passwordsMatchValidator(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
  
    if (password === confirmPassword) {
      return null;
    } else {
      group.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
      return { passwordsNotMatch: true };
    }
  }
}
