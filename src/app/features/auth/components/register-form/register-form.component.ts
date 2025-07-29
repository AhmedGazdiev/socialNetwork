import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordValidator } from '@features/auth/password.validator';
import { TuiButton, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { GoogleButtonComponent } from '../google-button/google-button.component';

@Component({
  selector: 'register-form',
  imports: [
    TuiTextfield,
    TuiButton,
    TuiIcon,
    GoogleButtonComponent,
    RouterLink,
    ReactiveFormsModule,
    TuiIcon,
    TuiTextfield,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  private readonly fb = inject(FormBuilder);
  public readonly gender = ['male', 'female'];

  public registerForm = new FormGroup(
    {
      fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordValidator }
  );

  public fullname = computed(() => this.registerForm.get(['fullname']));
  public username = computed(() => this.registerForm.get(['username']));
  public email = computed(() => this.registerForm.get(['email']));
  public password = computed(() => this.registerForm.get(['password']));
  public confirmPassword = computed(() =>
    this.registerForm.get(['confirmPassword'])
  );

  public onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
