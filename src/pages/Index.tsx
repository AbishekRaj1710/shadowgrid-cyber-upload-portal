
import { FileUploadSection } from "@/components/FileUploadSection";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-cyan-100 overflow-hidden relative">
      {/* Matrix-style background animation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="flex w-full min-h-screen relative z-10">
        <Sidebar />
        
        <main className="flex-1 flex flex-col">
          <Header />
          
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              {/* Welcome Section */}
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
                  ShadowGrid
                </h1>
                <p className="text-xl text-cyan-300 mb-2">Unleash Cyber Intelligence</p>
                <p className="text-slate-400">AI-Powered Offensive Cyber Intelligence System</p>
              </div>
              
              {/* Main Upload Interface */}
              <FileUploadSection />
              
              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 text-center backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <p className="text-green-400 font-semibold">Binary Intake</p>
                  <p className="text-xs text-slate-400">Ready</p>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 text-center backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-blue-400 font-semibold">AI Disassembler</p>
                  <p className="text-xs text-slate-400">Standby</p>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 text-center backdrop-blur">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-purple-400 font-semibold">Threat Analysis</p>
                  <p className="text-xs text-slate-400">Idle</p>
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
