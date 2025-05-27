
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { FileUploadSection } from "@/components/FileUploadSection";
import { Upload, Shield, Activity } from "lucide-react";

const BinaryIntake = () => {
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
                  Binary Intake Portal
                </h1>
                <p className="text-xl text-cyan-300 mb-2">File Upload & Ingestion System</p>
                <p className="text-slate-400">Secure upload portal for binary analysis</p>
              </div>
              
              <FileUploadSection />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Upload className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Upload Status</h3>
                  </div>
                  <p className="text-green-400">Ready for uploads</p>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Security</h3>
                  </div>
                  <p className="text-green-400">All uploads encrypted</p>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Processing</h3>
                  </div>
                  <p className="text-blue-400">Queue: 0 files</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BinaryIntake;
