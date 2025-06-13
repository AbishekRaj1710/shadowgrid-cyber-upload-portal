
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { SecurityDashboard } from "@/components/SecurityDashboard";
import { Shield, AlertTriangle, Target, Eye } from "lucide-react";
import { useActivityLog } from "@/contexts/ActivityLogContext";
import { useEffect } from "react";

const Threats = () => {
  const { logActivity } = useActivityLog();
  
  useEffect(() => {
    logActivity('PAGE_ACCESS', 'Accessed Threat Detection Center', 10);
  }, [logActivity]);

  const threats = [
    { id: 1, name: "Trojan.Win32.Agent", severity: "High", status: "Active", detected: "2h ago" },
    { id: 2, name: "Ransomware.Locky", severity: "Critical", status: "Contained", detected: "4h ago" },
    { id: 3, name: "Backdoor.C2.Comm", severity: "High", status: "Monitoring", detected: "6h ago" },
    { id: 4, name: "Adware.Suspicious", severity: "Medium", status: "Analyzed", detected: "1d ago" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "text-red-400 border-red-500 bg-red-500/20";
      case "High": return "text-orange-400 border-orange-500 bg-orange-500/20";
      case "Medium": return "text-yellow-400 border-yellow-500 bg-yellow-500/20";
      default: return "text-green-400 border-green-500 bg-green-500/20";
    }
  };

  const handleThreatAction = (action: string, threatName: string) => {
    logActivity('THREAT_ACTION', `${action} performed on ${threatName}`, action === 'Quarantine' ? 25 : 15);
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
                  Threat Detection & Activity Monitor
                </h1>
                <p className="text-xl text-cyan-300 mb-2">Advanced Threat Monitoring & User Behavior Analysis</p>
                <p className="text-slate-400">Real-time malware detection with comprehensive activity logging</p>
              </div>
              
              {/* Security Dashboard */}
              <div className="mb-8">
                <SecurityDashboard />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-red-400">Critical</h3>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-orange-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-orange-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400">High</h3>
                      <p className="text-2xl font-bold">7</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-400">Medium</h3>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-400">Monitored</h3>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Active Threats</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-cyan-500/30">
                        <th className="text-left py-3 text-cyan-300">Threat Name</th>
                        <th className="text-left py-3 text-cyan-300">Severity</th>
                        <th className="text-left py-3 text-cyan-300">Status</th>
                        <th className="text-left py-3 text-cyan-300">Detected</th>
                        <th className="text-left py-3 text-cyan-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {threats.map((threat) => (
                        <tr key={threat.id} className="border-b border-slate-700">
                          <td className="py-3 text-cyan-100">{threat.name}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs border ${getSeverityColor(threat.severity)}`}>
                              {threat.severity}
                            </span>
                          </td>
                          <td className="py-3 text-cyan-300">{threat.status}</td>
                          <td className="py-3 text-slate-400">{threat.detected}</td>
                          <td className="py-3">
                            <button 
                              onClick={() => handleThreatAction('View', threat.name)}
                              className="text-pink-400 hover:text-pink-300 mr-3"
                            >
                              View
                            </button>
                            <button 
                              onClick={() => handleThreatAction('Quarantine', threat.name)}
                              className="text-cyan-400 hover:text-cyan-300"
                            >
                              Quarantine
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Threats;
