import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feed',
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {}
