import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  private readonly fb = inject(FormBuilder);

  public readonly registerForm = this.fb.group({
    fullname: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
