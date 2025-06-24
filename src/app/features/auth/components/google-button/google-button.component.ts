import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'google-button',
  imports: [TuiButton, TuiIcon],
  templateUrl: './google-button.component.html',
  styleUrl: './google-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleButtonComponent {}
