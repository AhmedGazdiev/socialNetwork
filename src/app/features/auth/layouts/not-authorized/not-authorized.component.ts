import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'not-authorized-layout',
  imports: [RouterOutlet],
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAuthorizedComponent {}
