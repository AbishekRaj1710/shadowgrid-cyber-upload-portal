
import React, { useState } from 'react';
import { useActivityLog } from '@/contexts/ActivityLogContext';
import { Shield, AlertTriangle, Eye, Clock, MapPin, Monitor, User } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const SecurityDashboard = () => {
  const { logs, getThreatAnalysis, flaggedActivities, clearLogs } = useActivityLog();
  const [filter, setFilter] = useState<'ALL' | 'FLAGGED' | 'CRITICAL'>('ALL');
  
  const threatAnalysis = getThreatAnalysis();
  
  const filteredLogs = logs.filter(log => {
    if (filter === 'FLAGGED') return log.flagged;
    if (filter === 'CRITICAL') return log.threat_level === 'CRITICAL';
    return true;
  });

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20 border-red-500';
      case 'HIGH': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      default: return 'text-green-400 bg-green-500/20 border-green-500';
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Threat Analysis Overview */}
      <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center space-x-2">
          <Shield className="w-5 h-5" />
          <span>Real-Time Threat Analysis</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-slate-400">Total Events (24h)</p>
                <p className="text-2xl font-bold text-cyan-300">{threatAnalysis.total_events}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <div>
                <p className="text-sm text-slate-400">Suspicious Activities</p>
                <p className="text-2xl font-bold text-orange-300">{threatAnalysis.suspicious_activities}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-sm text-slate-400">Failed Attempts</p>
                <p className="text-2xl font-bold text-red-300">{threatAnalysis.failed_attempts}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className={`w-5 h-5 ${getThreatColor(threatAnalysis.risk_assessment).split(' ')[0]}`} />
              <div>
                <p className="text-sm text-slate-400">Risk Level</p>
                <p className={`text-lg font-bold ${getThreatColor(threatAnalysis.risk_assessment).split(' ')[0]}`}>
                  {threatAnalysis.risk_assessment}
                </p>
              </div>
            </div>
          </div>
        </div>

        {threatAnalysis.unusual_patterns.length > 0 && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">⚠️ Unusual Patterns Detected</h4>
            <ul className="space-y-1">
              {threatAnalysis.unusual_patterns.map((pattern, index) => (
                <li key={index} className="text-red-300 text-sm">• {pattern}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Activity Log Controls */}
      <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-cyan-300">Activity Monitor</h3>
          <div className="flex items-center space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-slate-700 border border-cyan-500/30 rounded px-3 py-1 text-cyan-100"
            >
              <option value="ALL">All Activities</option>
              <option value="FLAGGED">Flagged Only</option>
              <option value="CRITICAL">Critical Only</option>
            </select>
            <button
              onClick={clearLogs}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
            >
              Clear Logs
            </button>
          </div>
        </div>

        {/* Activity Log Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-cyan-500/30">
                <TableHead className="text-cyan-300">Timestamp</TableHead>
                <TableHead className="text-cyan-300">User</TableHead>
                <TableHead className="text-cyan-300">Action</TableHead>
                <TableHead className="text-cyan-300">Details</TableHead>
                <TableHead className="text-cyan-300">Location</TableHead>
                <TableHead className="text-cyan-300">Risk</TableHead>
                <TableHead className="text-cyan-300">Threat Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.slice(0, 20).map((log) => (
                <TableRow key={log.id} className={`border-slate-700 ${log.flagged ? 'bg-red-500/5' : ''}`}>
                  <TableCell className="text-cyan-100 text-xs">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatTimestamp(log.timestamp)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-cyan-100 text-xs">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{log.username}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-cyan-300 text-xs font-mono">
                    {log.action}
                  </TableCell>
                  <TableCell className="text-slate-300 text-xs max-w-xs truncate">
                    {log.details}
                  </TableCell>
                  <TableCell className="text-slate-400 text-xs">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{log.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Monitor className="w-3 h-3" />
                      <span>{log.ipAddress}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                      log.riskScore >= 50 ? 'bg-red-500/20 text-red-400' :
                      log.riskScore >= 30 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {log.riskScore}%
                    </div>
                  </TableCell>
                  <TableCell className="text-xs">
                    <span className={`px-2 py-1 rounded-full border text-xs ${getThreatColor(log.threat_level)}`}>
                      {log.threat_level}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            No activities logged yet. System monitoring is active.
          </div>
        )}
      </div>
    </div>
  );
};
