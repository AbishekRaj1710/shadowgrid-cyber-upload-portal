
import React from 'react';
import { Shield, Brain, Activity, Eye, Code, Network } from 'lucide-react';

interface AnalysisResultsProps {
  results: {
    disassembly?: string;
    ai?: string;
    visual?: string;
    metadata?: {
      filename: string;
      size: number;
      hash: string;
    };
  };
  isLoading: boolean;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin"></div>
            <Brain className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400" />
          </div>
          <div>
            <p className="text-cyan-300 font-semibold text-lg">AI Analysis in Progress...</p>
            <p className="text-slate-400">ShadowGrid is dissecting your binary</p>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <p className="text-xs text-slate-500">Neural networks analyzing threat patterns...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!results.disassembly && !results.ai && !results.visual) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
          Analysis Complete
        </h2>
        <p className="text-slate-400">ShadowGrid has processed your binary</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disassembly Results */}
        {results.disassembly && (
          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-cyan-300">Disassembly Output</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                {results.disassembly}
              </pre>
            </div>
          </div>
        )}

        {/* AI Analysis Results */}
        {results.ai && (
          <div className="bg-slate-800/50 border border-pink-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-semibold text-pink-300">AI Intelligence</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-pink-400 text-sm font-mono whitespace-pre-wrap">
                {results.ai}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Threat Tree Visualization */}
      {results.visual && (
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center space-x-3 mb-4">
            <Network className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-purple-300">Threat Tree Visualization</h3>
          </div>
          <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 flex justify-center">
            <img 
              src={`http://localhost:5000${results.visual}`}
              alt="Threat Tree Analysis"
              className="max-w-full h-auto rounded-lg border border-purple-500/20"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                console.error('Failed to load threat tree visualization');
              }}
            />
          </div>
        </div>
      )}

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Security Status</span>
          </div>
          <p className="text-green-400">Analysis completed successfully</p>
        </div>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Threat Level</span>
          </div>
          <p className="text-cyan-400">Evaluation complete</p>
        </div>

        <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">Insights</span>
          </div>
          <p className="text-yellow-400">Ready for review</p>
        </div>
      </div>
    </div>
  );
};
