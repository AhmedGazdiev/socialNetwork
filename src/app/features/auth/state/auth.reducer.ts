import { User } from '@features/user/user.model';
import { createFeature, createReducer } from '@ngrx/store';

export interface AuthState {
  loading: boolean;
  error: string | null;
  token: string | null;
  user: User | null;
}

export const initialState: AuthState = {
  loading: false,
  error: null,
  token: null,
  user: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(initialState),
});
