import { http } from '@/lib/http';
import { LoginResponse, User } from './auth.types';

export const login = async (email: string, password: string) => {
  const { data } = await http.post<LoginResponse>('/auth/login', {
    email,
    password
  });

  return data;
}

export const getMe = async () => {
  const { data } = await http.get<User>('/auth/me');
  return data;
}
