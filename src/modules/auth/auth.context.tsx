'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getMe, login as LoginApi } from './api';
import { User } from './auth.types';
import { useRouter } from 'next/navigation';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      setLoading(false);
      return;
    }

    getMe()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem('access_token');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      const { accessToken } = await LoginApi(email, password);
      localStorage.setItem('access_token', accessToken);

      const me = await getMe();
      setUser(me);

      router.replace('/');
    } catch (error) {
      localStorage.removeItem('access_token');
      setUser(null);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    router.replace('/login')
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
