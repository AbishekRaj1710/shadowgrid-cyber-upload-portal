
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Shield, Zap, Activity, Brain, Cpu, Network, Lock, Atom, Link, CheckCircle, BarChart3 } from "lucide-react";

const Index = () => {
  const operations = [
    {
      id: 1,
      title: "Binary File Analysis",
      description: "Parse .exe, .dll, .apk files with pefile & Capstone disassembly",
      icon: Shield,
      status: "Active",
      color: "cyan"
    },
    {
      id: 2,
      title: "AI Malware Classification",
      description: "HuggingFace NLP models classify malicious behavior",
      icon: Brain,
      status: "Active",
      color: "pink"
    },
    {
      id: 3,
      title: "Memory Forensics",
      description: "RAM dump analysis for in-memory malware artifacts",
      icon: Cpu,
      status: "Active",
      color: "purple"
    },
    {
      id: 4,
      title: "MIMO System Simulation",
      description: "4x4 MIMO wireless channel & beamforming analysis",
      icon: Network,
      status: "Simulating",
      color: "green"
    },
    {
      id: 5,
      title: "Cryptographic Scanner",
      description: "Detect weak RSA keys, deprecated ECC, insecure AES modes",
      icon: Lock,
      status: "Scanning",
      color: "yellow"
    },
    {
      id: 6,
      title: "Quantum Algorithm Sim",
      description: "Qiskit Grover's & Shor's algorithm simulation",
      icon: Atom,
      status: "Quantum Ready",
      color: "orange"
    },
    {
      id: 7,
      title: "Blockchain Logging",
      description: "Immutable timestamped analysis logs with hash verification",
      icon: Link,
      status: "Logging",
      color: "blue"
    },
    {
      id: 8,
      title: "Formal Verification",
      description: "Z3 Theorem Prover for threat logic verification",
      icon: CheckCircle,
      status: "Verifying",
      color: "red"
    },
    {
      id: 9,
      title: "Advanced Visualization",
      description: "Flow charts, MIMO signals, behavior trees, blockchain logs",
      icon: BarChart3,
      status: "Rendering",
      color: "indigo"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-400 bg-green-500/20 border-green-500";
      case "Simulating": return "text-cyan-400 bg-cyan-500/20 border-cyan-500";
      case "Scanning": return "text-yellow-400 bg-yellow-500/20 border-yellow-500";
      case "Quantum Ready": return "text-purple-400 bg-purple-500/20 border-purple-500";
      case "Logging": return "text-blue-400 bg-blue-500/20 border-blue-500";
      case "Verifying": return "text-orange-400 bg-orange-500/20 border-orange-500";
      case "Rendering": return "text-pink-400 bg-pink-500/20 border-pink-500";
      default: return "text-slate-400 bg-slate-500/20 border-slate-500";
    }
  };

  const getIconColor = (color: string) => {
    const colors = {
      cyan: "text-cyan-400",
      pink: "text-pink-400",
      purple: "text-purple-400",
      green: "text-green-400",
      yellow: "text-yellow-400",
      orange: "text-orange-400",
      blue: "text-blue-400",
      red: "text-red-400",
      indigo: "text-indigo-400"
    };
    return colors[color as keyof typeof colors] || "text-cyan-400";
  };

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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
                  ShadowGrid Command Center
                </h1>
                <p className="text-2xl text-cyan-300 mb-4">Advanced Cyber Warfare Intelligence Platform</p>
                <p className="text-slate-400 text-lg">Full-Spectrum Binary Analysis & Quantum-Enhanced Security Operations</p>
              </div>

              {/* System Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">System Status</h3>
                      <p className="text-2xl font-bold">Operational</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400">Active Modules</h3>
                      <p className="text-2xl font-bold">11</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-pink-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Brain className="w-8 h-8 text-pink-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-pink-400">AI Models</h3>
                      <p className="text-2xl font-bold">Ready</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Atom className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400">Quantum Core</h3>
                      <p className="text-2xl font-bold">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operations.map((operation) => {
                  const Icon = operation.icon;
                  return (
                    <div key={operation.id} className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur hover:border-pink-500/50 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors`}>
                          <Icon className={`w-6 h-6 ${getIconColor(operation.color)}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-cyan-300">{operation.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(operation.status)}`}>
                              {operation.status}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">{operation.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Activity Feed */}
              <div className="mt-12 bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Live System Activity</span>
                </h3>
                <div className="space-y-2 font-mono text-sm max-h-64 overflow-y-auto">
                  <div className="text-green-400">[12:34:56] Binary Analysis Module: Processing suspicious.exe</div>
                  <div className="text-cyan-400">[12:34:52] AI Classification: Malware confidence 87%</div>
                  <div className="text-purple-400">[12:34:48] Quantum Sim: Grover's algorithm initialized</div>
                  <div className="text-yellow-400">[12:34:45] Crypto Scanner: Weak RSA key detected</div>
                  <div className="text-pink-400">[12:34:42] Memory Forensics: Suspicious string patterns found</div>
                  <div className="text-orange-400">[12:34:38] Z3 Verifier: Logic contradiction in threat tree</div>
                  <div className="text-blue-400">[12:34:35] Blockchain Log: Hash 0xc4f3e2d1... stored</div>
                  <div className="text-indigo-400">[12:34:32] Visualization: Rendering MIMO signal strength</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
