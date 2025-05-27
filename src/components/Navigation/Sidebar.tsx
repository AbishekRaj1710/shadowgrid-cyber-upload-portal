import React, { useState } from 'react';
import { Home, Upload, BarChart3, Shield, Settings, Zap, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/', description: 'Main Control Center' },
    { icon: Upload, label: 'Binary Intake', path: '/binary-intake', description: 'File Upload Portal' },
    { icon: Zap, label: 'AI Analysis', path: '/ai-analysis', description: 'Neural Processing' },
    { icon: BarChart3, label: 'Reports', path: '/reports', description: 'Intelligence Reports' },
    { icon: Shield, label: 'Threats', path: '/threats', description: 'Threat Detection' },
    { icon: Settings, label: 'Settings', path: '/settings', description: 'System Configuration' },
  ];

  return (
    <div className="w-64 bg-slate-900/95 border-r border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center relative">
            <Shield className="w-6 h-6 text-white" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 animate-pulse opacity-50"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-300 tracking-wider">ShadowGrid</h2>
            <p className="text-xs text-slate-400 font-mono">v2.1.0 • CLASSIFIED</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4 relative z-10">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group relative overflow-hidden
                    ${isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                      : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/70 hover:border hover:border-cyan-500/30'
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 animate-pulse"></div>
                  )}
                  <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-cyan-400' : ''}`} />
                  <div className="flex-1 text-left">
                    <span className="block font-semibold">{item.label}</span>
                    <span className="text-xs opacity-70">{item.description}</span>
                  </div>
                  {isActive && (
                    <>
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                      <div className="absolute right-2 w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4 relative z-10">
        <div className="bg-slate-800/70 border border-cyan-500/40 rounded-lg p-4 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-cyan-500/5 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
              <span className="text-green-400 text-sm font-semibold">System Online</span>
            </div>
            <p className="text-xs text-slate-400">All modules operational</p>
            <div className="mt-2 flex space-x-1">
              <div className="h-1 bg-green-500/30 rounded flex-1"></div>
              <div className="h-1 bg-cyan-500/30 rounded flex-1"></div>
              <div className="h-1 bg-pink-500/30 rounded flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
