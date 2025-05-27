
import React from 'react';
import { Play, Zap } from 'lucide-react';

interface AnalysisButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const AnalysisButton: React.FC<AnalysisButtonProps> = ({ 
  onClick, 
  disabled = false 
}) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          group relative inline-flex items-center space-x-3 px-8 py-4 
          bg-gradient-to-r from-pink-600 to-pink-500 
          hover:from-pink-500 hover:to-pink-400
          disabled:from-slate-600 disabled:to-slate-500
          text-white font-bold rounded-lg
          transition-all duration-300 transform
          hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25
          disabled:scale-100 disabled:shadow-none
          focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900
        `}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        <div className="relative flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <Zap className="w-4 h-4 group-hover:animate-pulse" />
          </div>
          <span className="text-lg">Start Analysis</span>
        </div>
        
        {/* Pulsing border effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-pink-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>
      </button>
      
      <p className="text-slate-400 text-sm mt-3">
        Initiate AI-powered reverse engineering and threat analysis
      </p>
      
      <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-slate-500">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          <span>Ghidra Disassembly</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          <span>AI Pattern Recognition</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <span>Behavior Analysis</span>
        </div>
      </div>
    </div>
  );
};
