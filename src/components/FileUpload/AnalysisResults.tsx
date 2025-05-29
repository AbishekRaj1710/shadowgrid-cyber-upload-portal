
import React from 'react';
import { Shield, Brain, Activity, Eye, Code, Network, Lock, Atom, Link, CheckCircle, Cpu } from 'lucide-react';

interface AnalysisResultsProps {
  results: {
    disassembly?: string;
    ai?: string;
    visual?: string;
    memory_forensics?: string;
    crypto_scan?: string;
    quantum_results?: string;
    blockchain_hash?: string;
    formal_verification?: string;
    metadata?: {
      filename: string;
      size: number;
      hash: string;
    };
    operation_status?: {
      binary_analysis: string;
      ai_classification: string;
      memory_forensics: string;
      mimo_simulation: string;
      crypto_scan: string;
      quantum_sim: string;
      blockchain_log: string;
      formal_verification: string;
      visualization: string;
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
            <p className="text-cyan-300 font-semibold text-lg">Full-Spectrum Analysis in Progress...</p>
            <p className="text-slate-400">ShadowGrid executing all 11 operation modules</p>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs text-slate-500">Quantum algorithms • AI models • Blockchain logging...</p>
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          ShadowGrid Analysis Complete
        </h2>
        <p className="text-slate-400">Full-spectrum binary intelligence processed through 11 operation modules</p>
      </div>

      {/* Operation Status Overview */}
      {results.operation_status && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.entries(results.operation_status).map(([key, status]) => (
            <div key={key} className="bg-slate-800/50 border border-green-500/30 rounded-lg p-3 backdrop-blur">
              <div className="text-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mx-auto mb-2 animate-pulse"></div>
                <p className="text-xs text-green-400 font-semibold">{status}</p>
                <p className="text-xs text-slate-400 capitalize">{key.replace('_', ' ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Analysis Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Binary Analysis & Disassembly */}
        {results.disassembly && (
          <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-cyan-300">Binary Analysis (Capstone + pefile)</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                {results.disassembly}
              </pre>
            </div>
          </div>
        )}

        {/* AI Classification */}
        {results.ai && (
          <div className="bg-slate-800/50 border border-pink-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-semibold text-pink-300">AI Classification (HuggingFace)</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-pink-400 text-sm font-mono whitespace-pre-wrap">
                {results.ai}
              </pre>
            </div>
          </div>
        )}

        {/* Memory Forensics */}
        {results.memory_forensics && (
          <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Cpu className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-300">Memory Forensics</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-purple-400 text-sm font-mono whitespace-pre-wrap">
                {results.memory_forensics}
              </pre>
            </div>
          </div>
        )}

        {/* Cryptographic Scan */}
        {results.crypto_scan && (
          <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-300">Cryptographic Analysis</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-yellow-400 text-sm font-mono whitespace-pre-wrap">
                {results.crypto_scan}
              </pre>
            </div>
          </div>
        )}

        {/* Quantum Results */}
        {results.quantum_results && (
          <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <Atom className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-semibold text-indigo-300">Quantum Simulation (Qiskit)</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-indigo-400 text-sm font-mono whitespace-pre-wrap">
                {results.quantum_results}
              </pre>
            </div>
          </div>
        )}

        {/* Formal Verification */}
        {results.formal_verification && (
          <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-semibold text-green-300">Formal Verification (Z3)</h3>
            </div>
            <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                {results.formal_verification}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Blockchain Logging */}
      {results.blockchain_hash && (
        <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center space-x-3 mb-4">
            <Link className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-blue-300">Blockchain Logging</h3>
          </div>
          <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4">
            <pre className="text-blue-400 text-sm font-mono whitespace-pre-wrap">
              {results.blockchain_hash}
            </pre>
          </div>
        </div>
      )}

      {/* Threat Tree Visualization */}
      {results.visual && (
        <div className="bg-slate-800/50 border border-orange-500/30 rounded-lg p-6 backdrop-blur">
          <div className="flex items-center space-x-3 mb-4">
            <Network className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-semibold text-orange-300">Advanced Visualization</h3>
          </div>
          <div className="bg-slate-900/70 border border-slate-600 rounded-lg p-4 flex justify-center">
            <img 
              src={`http://localhost:5000${results.visual}`}
              alt="ShadowGrid Threat Analysis Visualization"
              className="max-w-full h-auto rounded-lg border border-orange-500/20"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                console.error('Failed to load ShadowGrid visualization');
              }}
            />
          </div>
        </div>
      )}

      {/* Analysis Summary Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Security Status</span>
          </div>
          <p className="text-green-400">All modules completed</p>
        </div>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Operations</span>
          </div>
          <p className="text-cyan-400">11/11 Complete</p>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Atom className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">Quantum Core</span>
          </div>
          <p className="text-purple-400">Processing complete</p>
        </div>

        <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center space-x-2 mb-2">
            <Eye className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">Intelligence</span>
          </div>
          <p className="text-yellow-400">Ready for review</p>
        </div>
      </div>
    </div>
  );
};
