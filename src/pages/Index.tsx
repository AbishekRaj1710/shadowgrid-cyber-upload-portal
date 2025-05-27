
import { FileUploadSection } from "@/components/FileUploadSection";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Header } from "@/components/Header";
import { Shield, Zap, Activity, Database, Eye, Cpu } from "lucide-react";

const Index = () => {
  const statusModules = [
    {
      icon: Shield,
      title: "Binary Intake",
      status: "Ready",
      color: "green",
      description: "File ingestion system operational"
    },
    {
      icon: Cpu,
      title: "AI Disassembler",
      status: "Standby",
      color: "blue",
      description: "Neural processing cores ready"
    },
    {
      icon: Activity,
      title: "Threat Analysis",
      status: "Idle",
      color: "purple",
      description: "Behavior pattern recognition"
    },
    {
      icon: Database,
      title: "C2 Detection",
      status: "Active",
      color: "cyan",
      description: "Command & control monitoring"
    },
    {
      icon: Eye,
      title: "Sandbox",
      status: "Ready",
      color: "pink",
      description: "Isolated execution environment"
    },
    {
      icon: Zap,
      title: "Live Monitor",
      status: "Monitoring",
      color: "yellow",
      description: "Real-time threat detection"
    }
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      green: "border-green-500 bg-green-500/20 text-green-400",
      blue: "border-blue-500 bg-blue-500/20 text-blue-400",
      purple: "border-purple-500 bg-purple-500/20 text-purple-400",
      cyan: "border-cyan-500 bg-cyan-500/20 text-cyan-400",
      pink: "border-pink-500 bg-pink-500/20 text-pink-400",
      yellow: "border-yellow-500 bg-yellow-500/20 text-yellow-400"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-cyan-100 overflow-hidden relative">
      {/* Enhanced Matrix-style background animation */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="matrix-rain"></div>
        {/* Additional floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="flex w-full min-h-screen relative z-10">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Welcome Section */}
              <div className="text-center mb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent blur-3xl"></div>
                <div className="relative z-10">
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4 animate-pulse">
                    ShadowGrid
                  </h1>
                  <p className="text-2xl text-cyan-300 mb-2 font-light">Unleash Cyber Intelligence</p>
                  <p className="text-slate-400 text-lg">AI-Powered Offensive Cyber Intelligence System</p>
                  <div className="mt-4 w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto rounded-full"></div>
                </div>
              </div>
              
              {/* Main Upload Interface */}
              <div className="mb-12">
                <FileUploadSection />
              </div>
              
              {/* Enhanced Status Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statusModules.map((module, index) => {
                  const Icon = module.icon;
                  const statusColorClass = getStatusColor(module.color);
                  
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur hover:border-cyan-400/60 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${statusColorClass}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColorClass}`}>
                            {module.status}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-cyan-300 mb-2">{module.title}</h3>
                        <p className="text-slate-400 text-sm">{module.description}</p>
                        
                        {/* Status indicator bar */}
                        <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r from-${module.color}-500 to-${module.color}-400 animate-pulse`} style={{ width: module.status === 'Active' || module.status === 'Monitoring' ? '100%' : '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Real-time Activity Feed */}
              <div className="mt-12 bg-slate-800/30 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                  <Activity className="w-6 h-6 mr-2" />
                  Live Activity Feed
                </h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-green-400">[12:34:56] System initialization complete</div>
                  <div className="text-cyan-400">[12:34:57] Binary intake module ready</div>
                  <div className="text-yellow-400">[12:34:58] AI disassembler cores warming up...</div>
                  <div className="text-pink-400">[12:34:59] Threat detection algorithms loaded</div>
                  <div className="text-green-400">[12:35:00] All systems operational - awaiting input</div>
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
