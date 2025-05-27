
import React from 'react';
import { User, Bell, Lock } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-slate-900/50 border-b border-cyan-500/20 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-cyan-300">Binary Analysis Portal</h1>
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">Secure Upload</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-slate-400 hover:text-cyan-300 transition-colors">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
          </button>
          
          <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-cyan-300 text-sm font-semibold">Analyst-001</p>
              <p className="text-slate-400 text-xs">Cyber Intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
