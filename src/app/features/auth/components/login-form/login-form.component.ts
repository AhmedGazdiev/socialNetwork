import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { GoogleButtonComponent } from '../google-button/google-button.component';

@Component({
  selector: 'login-form',
  imports: [
    TuiTextfield,
    TuiButton,
    TuiIcon,
    TuiButton,
    GoogleButtonComponent,
    RouterLink,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  onSubmit() {}
}
