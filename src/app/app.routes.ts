import { Routes } from '@angular/router';
import { authGuard, notAuthGuard } from '@core/guards/auth.guard';
import { AuthorizedComponent } from '@features/auth/layouts/authorized/authorized.component';
import { NotAuthorizedComponent } from '@features/auth/layouts/not-authorized/not-authorized.component';
import { LoginComponent } from '@features/auth/pages/login/login.component';
import { RegisterComponent } from '@features/auth/pages/register/register.component';
import { FeedComponent } from '@features/post/pages/feed/feed.component';

export const routes: Routes = [
  {
    path: '',
    component: NotAuthorizedComponent,
    canActivate: [notAuthGuard],
    children: [
      { path: 'login', title: 'Login', component: LoginComponent },
      { path: 'register', title: 'Register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: AuthorizedComponent,
    canActivate: [authGuard],
    children: [
      { path: 'feed', title: 'Feed Posts', component: FeedComponent },
      // {
      //   path: 'post',
      //   loadChildren: () => import('@features/post').then((p) => p.POST_ROUTES),
      // },
      // {
      //   path: 'profile/:id',
      //   title: 'Profile',
      //   component: ProfileComponent,
      //   loadChildren: () =>
      //     import('@features/profile').then((p) => p.PROFILE_ROUTES),
      // },
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
    ],
  },
];
