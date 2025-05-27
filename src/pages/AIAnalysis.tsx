
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Zap, Cpu, Brain, Activity } from "lucide-react";

const AIAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-cyan-100 overflow-hidden relative">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="flex w-full min-h-screen relative z-10">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
                  AI Neural Processing
                </h1>
                <p className="text-xl text-cyan-300 mb-2">Advanced Binary Analysis Engine</p>
                <p className="text-slate-400">Machine learning powered reverse engineering</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-8 h-8 text-pink-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Neural Networks</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Pattern Recognition</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Code Analysis</span>
                      <span className="text-green-400">Trained</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Malware Detection</span>
                      <span className="text-green-400">Ready</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Processing Cores</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>GPU Cluster 1</span>
                      <span className="text-green-400">Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GPU Cluster 2</span>
                      <span className="text-green-400">Online</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TPU Array</span>
                      <span className="text-yellow-400">Standby</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="w-8 h-8 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Analysis Queue</h3>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">[Processing] suspicious.exe - 78% complete</div>
                    <div className="text-cyan-400">[Queued] malware_sample.dll</div>
                    <div className="text-yellow-400">[Pending] unknown_binary.apk</div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Real-time Metrics</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Accuracy Rate</span>
                      <span className="text-green-400">98.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Speed</span>
                      <span className="text-cyan-400">2.3s avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>False Positives</span>
                      <span className="text-pink-400">0.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AIAnalysis;
