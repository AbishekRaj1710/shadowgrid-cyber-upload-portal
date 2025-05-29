
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginScreen } from '@/components/LoginScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuth();

  const handleLogin = (success: boolean) => {
    if (success) {
      login();
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <>{children}</>;
};
