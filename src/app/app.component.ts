import { Component } from '@angular/core';
import { TuiButton, TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, TuiButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
