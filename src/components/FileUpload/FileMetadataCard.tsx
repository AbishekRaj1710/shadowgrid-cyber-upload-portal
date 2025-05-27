
import React from 'react';
import { File, Calendar, Hash, HardDrive } from 'lucide-react';
import { FileData } from '../FileUploadSection';

interface FileMetadataCardProps {
  fileData: FileData;
}

export const FileMetadataCard: React.FC<FileMetadataCardProps> = ({ fileData }) => {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
  };

  return (
    <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-cyan-500/50 flex items-center justify-center">
          <File className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-cyan-300">File Metadata</h3>
          <p className="text-slate-400 text-sm">Binary analysis ready</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <File className="w-5 h-5 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Filename</p>
              <p className="text-cyan-100 font-mono break-all">{fileData.name}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <HardDrive className="w-5 h-5 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">File Size</p>
              <p className="text-cyan-100">{formatFileSize(fileData.size)}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Upload Time</p>
              <p className="text-cyan-100">{formatTime(fileData.uploadTime)}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Hash className="w-5 h-5 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">SHA256 Hash</p>
              <p className="text-cyan-100 font-mono text-xs break-all">{fileData.hash}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-400 text-sm font-semibold">File Ingested Successfully</span>
          </div>
          <span className="text-slate-400 text-xs">Ready for analysis</span>
        </div>
      </div>
    </div>
  );
};
