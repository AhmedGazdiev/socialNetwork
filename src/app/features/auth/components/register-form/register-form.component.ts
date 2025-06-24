import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiPassword } from '@taiga-ui/kit';
import { GoogleButtonComponent } from '../google-button/google-button.component';

@Component({
  selector: 'register-form',
  imports: [
    TuiTextfield,
    TuiButton,
    TuiIcon,
    TuiPassword,
    GoogleButtonComponent,
    RouterLink,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  onSubmit() {}
}
