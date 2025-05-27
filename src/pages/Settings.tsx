
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Navigation/Sidebar";
import { Settings as SettingsIcon, User, Shield, Bell, Database } from "lucide-react";

const Settings = () => {
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
                  System Configuration
                </h1>
                <p className="text-xl text-cyan-300 mb-2">Advanced Settings & Preferences</p>
                <p className="text-slate-400">Configure ShadowGrid operational parameters</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <User className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">User Profile</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-cyan-300 mb-2">Username</label>
                      <input 
                        type="text" 
                        value="Analyst-001" 
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-100"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cyan-300 mb-2">Department</label>
                      <input 
                        type="text" 
                        value="Cyber Intelligence" 
                        className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cyan-300 mb-2">Clearance Level</label>
                      <select className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-100">
                        <option>TOP SECRET</option>
                        <option>SECRET</option>
                        <option>CONFIDENTIAL</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-8 h-8 text-green-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Security Settings</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Two-Factor Authentication</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Session Timeout</span>
                      <select className="bg-slate-700/50 border border-cyan-500/30 rounded px-3 py-1 text-cyan-100">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Audit Logging</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Bell className="w-8 h-8 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">Notifications</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Threat Alerts</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Analysis Complete</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>System Updates</span>
                      <div className="w-12 h-6 bg-slate-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-semibold text-cyan-300">System Configuration</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-cyan-300 mb-2">Analysis Timeout</label>
                      <select className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-100">
                        <option>5 minutes</option>
                        <option>10 minutes</option>
                        <option>30 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cyan-300 mb-2">Max File Size</label>
                      <select className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-lg px-3 py-2 text-cyan-100">
                        <option>100 MB</option>
                        <option>500 MB</option>
                        <option>1 GB</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto-quarantine</span>
                      <div className="w-12 h-6 bg-green-500 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-pink-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-pink-400 transition-all">
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
