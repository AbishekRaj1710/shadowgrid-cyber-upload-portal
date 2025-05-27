
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { BarChart3, FileText, TrendingUp, Download } from "lucide-react";

const Reports = () => {
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
                  Intelligence Reports
                </h1>
                <p className="text-xl text-cyan-300 mb-2">Analysis Results & Insights</p>
                <p className="text-slate-400">Comprehensive threat intelligence documentation</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Recent Reports</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Malware_Analysis_001.pdf</span>
                      <Download className="w-4 h-4 text-pink-400 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">C2_Traffic_Report.pdf</span>
                      <Download className="w-4 h-4 text-pink-400 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Threat_Summary_Weekly.pdf</span>
                      <Download className="w-4 h-4 text-pink-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Analytics</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Files Analyzed</span>
                      <span className="text-green-400">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Threats Detected</span>
                      <span className="text-red-400">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Clean Files</span>
                      <span className="text-green-400">1,158</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-pink-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Trends</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Malware Families</span>
                      <span className="text-yellow-400">+12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Attack Vectors</span>
                      <span className="text-red-400">+5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Detection Rate</span>
                      <span className="text-green-400">+2%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Generate New Report</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/50 rounded-lg p-4 hover:border-cyan-400/60 transition-all">
                    <h4 className="font-semibold text-cyan-300">Threat Summary</h4>
                    <p className="text-sm text-slate-400">Weekly threat overview</p>
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/50 rounded-lg p-4 hover:border-cyan-400/60 transition-all">
                    <h4 className="font-semibold text-cyan-300">Technical Analysis</h4>
                    <p className="text-sm text-slate-400">Detailed binary analysis</p>
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/50 rounded-lg p-4 hover:border-cyan-400/60 transition-all">
                    <h4 className="font-semibold text-cyan-300">Executive Brief</h4>
                    <p className="text-sm text-slate-400">High-level summary</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
