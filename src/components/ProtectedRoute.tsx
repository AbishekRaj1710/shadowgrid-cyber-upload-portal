
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
</ProtectedRoute>

<lov-write file_path="src/components/Header.tsx">
import { Search, Bell, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const { logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "Session terminated successfully",
      className: "border-cyan-500 bg-slate-800 text-cyan-100",
    });
  };

  return (
    <header className="border-b border-cyan-500/30 bg-slate-800/50 backdrop-blur p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            ShadowGrid Terminal
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search operations..." 
              className="bg-slate-700/50 border border-cyan-500/30 rounded-lg pl-10 pr-4 py-2 text-cyan-100 placeholder-slate-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
          
          <button className="p-2 text-cyan-400 hover:text-pink-400 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          <button className="p-2 text-cyan-400 hover:text-pink-400 transition-colors">
            <User className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleLogout}
            className="p-2 text-cyan-400 hover:text-red-400 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
