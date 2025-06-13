
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface ActivityLog {
  id: string;
  timestamp: Date;
  username: string;
  action: string;
  details: string;
  ipAddress: string;
  userAgent: string;
  location: string;
  riskScore: number;
  threat_level: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  flagged: boolean;
}

export interface ThreatAnalysis {
  total_events: number;
  suspicious_activities: number;
  failed_attempts: number;
  unusual_patterns: string[];
  risk_assessment: string;
}

interface ActivityLogContextType {
  logs: ActivityLog[];
  logActivity: (action: string, details: string, riskScore?: number) => void;
  getThreatAnalysis: () => ThreatAnalysis;
  clearLogs: () => void;
  flaggedActivities: ActivityLog[];
}

const ActivityLogContext = createContext<ActivityLogContextType | undefined>(undefined);

export const useActivityLog = () => {
  const context = useContext(ActivityLogContext);
  if (!context) {
    throw new Error('useActivityLog must be used within an ActivityLogProvider');
  }
  return context;
};

export const ActivityLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const { isAuthenticated } = useAuth();

  // Simulate getting user info
  const getUserInfo = () => ({
    ipAddress: `192.168.1.${Math.floor(Math.random() * 255)}`,
    userAgent: navigator.userAgent.substring(0, 50) + '...',
    location: ['New York, US', 'London, UK', 'Tokyo, JP', 'Sydney, AU'][Math.floor(Math.random() * 4)]
  });

  const analyzeRisk = (action: string, timeOfDay: number): number => {
    let risk = 0;
    
    // Base risk by action type
    if (action.includes('LOGIN_FAILED')) risk += 30;
    if (action.includes('FILE_UPLOAD')) risk += 10;
    if (action.includes('CRITICAL_ACCESS')) risk += 20;
    if (action.includes('DATA_EXPORT')) risk += 25;
    
    // Time-based risk (unusual hours)
    if (timeOfDay < 6 || timeOfDay > 22) risk += 15;
    
    // Frequency-based risk
    const recentActions = logs.filter(log => 
      Date.now() - log.timestamp.getTime() < 5 * 60 * 1000 // last 5 minutes
    );
    if (recentActions.length > 10) risk += 20;
    
    return Math.min(risk, 100);
  };

  const getThreatLevel = (riskScore: number): 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' => {
    if (riskScore >= 70) return 'CRITICAL';
    if (riskScore >= 50) return 'HIGH';
    if (riskScore >= 30) return 'MEDIUM';
    return 'LOW';
  };

  const logActivity = (action: string, details: string, customRiskScore?: number) => {
    if (!isAuthenticated) return;

    const userInfo = getUserInfo();
    const now = new Date();
    const riskScore = customRiskScore ?? analyzeRisk(action, now.getHours());
    
    const newLog: ActivityLog = {
      id: `LOG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: now,
      username: 'abishekraj1710',
      action,
      details,
      ipAddress: userInfo.ipAddress,
      userAgent: userInfo.userAgent,
      location: userInfo.location,
      riskScore,
      threat_level: getThreatLevel(riskScore),
      flagged: riskScore >= 50
    };

    setLogs(prevLogs => [newLog, ...prevLogs.slice(0, 99)]); // Keep last 100 logs
    
    // Console logging for monitoring
    console.log(`[SECURITY LOG] ${action} - Risk: ${riskScore} - ${details}`);
    if (newLog.flagged) {
      console.warn(`[THREAT DETECTED] High-risk activity flagged: ${action}`);
    }
  };

  const getThreatAnalysis = (): ThreatAnalysis => {
    const recentLogs = logs.filter(log => 
      Date.now() - log.timestamp.getTime() < 24 * 60 * 60 * 1000 // last 24 hours
    );

    const suspicious = recentLogs.filter(log => log.flagged).length;
    const failed = recentLogs.filter(log => log.action.includes('FAILED')).length;
    
    const patterns = [];
    if (failed > 3) patterns.push('Multiple failed attempts detected');
    if (suspicious > 5) patterns.push('High frequency of flagged activities');
    if (recentLogs.filter(log => log.action.includes('FILE_UPLOAD')).length > 10) 
      patterns.push('Unusual file upload activity');

    const riskLevel = suspicious > 10 ? 'CRITICAL' : suspicious > 5 ? 'HIGH' : suspicious > 2 ? 'MEDIUM' : 'LOW';

    return {
      total_events: recentLogs.length,
      suspicious_activities: suspicious,
      failed_attempts: failed,
      unusual_patterns: patterns,
      risk_assessment: riskLevel
    };
  };

  const clearLogs = () => setLogs([]);

  const flaggedActivities = logs.filter(log => log.flagged);

  // Auto-log navigation and system events
  useEffect(() => {
    if (isAuthenticated) {
      logActivity('SESSION_START', 'User session initiated', 5);
      
      const handleBeforeUnload = () => {
        logActivity('SESSION_END', 'User session terminated', 5);
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [isAuthenticated]);

  return (
    <ActivityLogContext.Provider value={{
      logs,
      logActivity,
      getThreatAnalysis,
      clearLogs,
      flaggedActivities
    }}>
      {children}
    </ActivityLogContext.Provider>
  );
};
