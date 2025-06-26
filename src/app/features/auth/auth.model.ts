import { User } from '@features/user/user.model';

export interface RegisterRequest {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  msg: string;
  token: string;
  user: User;
}
