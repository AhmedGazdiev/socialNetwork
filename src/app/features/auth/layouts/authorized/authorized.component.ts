import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';

@Component({
  selector: 'authorized-layout',
  imports: [SidebarComponent, NavbarComponent, RouterOutlet],
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedComponent {}
