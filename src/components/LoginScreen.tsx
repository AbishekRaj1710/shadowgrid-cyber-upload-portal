
import React, { useState } from 'react';
import { Eye, EyeOff, Shield, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface LoginScreenProps {
  onLogin: (success: boolean) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Encrypted credentials (base64 encoded for obfuscation)
  const encryptedData = {
    u: 'YWJpc2hla3JhajE3MTA=', // abishekraj1710
    p: 'c2hpYmF0YXRzdXlhNw==' // shibatatsuya7
  };

  const decrypt = (encoded: string): string => {
    try {
      return atob(encoded);
    } catch {
      return '';
    }
  };

  const validateCredentials = (inputUser: string, inputPass: string): boolean => {
    const validUser = decrypt(encryptedData.u);
    const validPass = decrypt(encryptedData.p);
    return inputUser === validUser && inputPass === validPass;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (validateCredentials(username, password)) {
      toast({
        title: "Access Granted",
        description: "Welcome to ShadowGrid Command Center",
        className: "border-green-500 bg-slate-800 text-green-100",
      });
      onLogin(true);
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid credentials. Security protocol activated.",
        variant: "destructive",
      });
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
              ShadowGrid
            </h1>
            <p className="text-slate-400">Secure Authentication Required</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-cyan-300">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-700/50 border-cyan-500/30 text-cyan-100 focus:border-cyan-400"
                placeholder="Enter username"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-cyan-300">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700/50 border-cyan-500/30 text-cyan-100 focus:border-cyan-400 pr-10"
                  placeholder="Enter password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !username || !password}
              className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-900 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-pink-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Access ShadowGrid</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Authorized Personnel Only • Classified System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
