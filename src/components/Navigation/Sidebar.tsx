
import React from 'react';
import { Home, Upload, BarChart3, Shield, Settings, Zap } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Upload, label: 'Binary Intake', active: false },
    { icon: Zap, label: 'AI Analysis', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Shield, label: 'Threats', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-slate-900/90 border-r border-cyan-500/20 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-cyan-300">ShadowGrid</h2>
            <p className="text-xs text-slate-400">v2.1.0</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <a
                  href="#"
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${item.active 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                      : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.active && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-400 text-sm font-semibold">System Online</span>
          </div>
          <p className="text-xs text-slate-400">All modules operational</p>
        </div>
      </div>
    </div>
  );
};
