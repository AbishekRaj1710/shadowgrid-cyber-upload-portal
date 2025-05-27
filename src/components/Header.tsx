
import React, { useState } from 'react';
import { User, Bell, Lock, Activity, Wifi, Shield } from 'lucide-react';

export const Header = () => {
  const [notifications] = useState(3);

  return (
    <header className="bg-slate-900/70 border-b border-cyan-500/30 backdrop-blur-sm p-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
              Binary Analysis Portal
            </h1>
            <div className="hidden sm:block w-px h-8 bg-cyan-500/30"></div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/60 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 animate-pulse"></div>
              <Lock className="w-4 h-4 text-green-400 relative z-10" />
              <span className="text-green-400 text-sm font-semibold relative z-10">Secure Upload</span>
            </div>
            
            <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/20 border border-blue-500/60 rounded-full">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">Live Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* System Status */}
          <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-slate-800/50 border border-cyan-500/30 rounded-lg">
            <Wifi className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Connected</span>
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:bg-slate-800/50 rounded-lg group">
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">{notifications}</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full animate-ping opacity-30"></div>
              </>
            )}
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/50 border border-cyan-500/40 rounded-lg hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center relative">
              <User className="w-4 h-4 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-50 animate-pulse"></div>
            </div>
            <div>
              <p className="text-cyan-300 text-sm font-semibold">Analyst-001</p>
              <p className="text-slate-400 text-xs">Cyber Intelligence</p>
            </div>
            <Shield className="w-4 h-4 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </header>
  );
};
