import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginRequest, LoginResponse, RegisterRequest } from '../auth.model';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<RegisterRequest>(),
    'Register Success': props<{ msg: string }>(),
    'Register Failure': props<{ msg: string }>(),

    Login: props<LoginRequest>(),
    'Login Success': props<LoginResponse>(),
    'Login Failure': props<{ msg: string }>(),

    Logout: emptyProps(),
    'Logout Success': props<{ msg: string }>(),
    'Logout Failure': props<{ msg: string }>(),

    RefreshToken: emptyProps(),
    'RefreshToken Success': props<LoginResponse>(),
    'RefreshToken Failure': props<{ msg: string }>(),
  },
});
