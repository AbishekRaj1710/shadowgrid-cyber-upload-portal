
import React, { useRef, useState } from 'react';
import { Upload, File } from 'lucide-react';

interface FileUploadZoneProps {
  onFileUpload: (file: File) => void;
  isUploading: boolean;
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({ 
  onFileUpload, 
  isUploading 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileUpload(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
          transition-all duration-300 backdrop-blur-sm
          ${isDragOver 
            ? 'border-pink-500 bg-pink-500/10 shadow-lg shadow-pink-500/20' 
            : 'border-cyan-500/50 bg-slate-800/30 hover:border-cyan-400 hover:bg-slate-800/50'
          }
          ${isUploading ? 'pointer-events-none opacity-50' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Animated background glow */}
        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isDragOver ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          {isUploading ? (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin"></div>
              </div>
              <p className="text-cyan-300 font-semibold">Processing Binary...</p>
              <p className="text-slate-400 text-sm">Ingesting into ShadowGrid</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                isDragOver 
                  ? 'bg-pink-500/20 border-2 border-pink-500 shadow-lg shadow-pink-500/20' 
                  : 'bg-cyan-500/20 border-2 border-cyan-500'
              }`}>
                {isDragOver ? (
                  <File className="w-8 h-8 text-pink-400" />
                ) : (
                  <Upload className="w-8 h-8 text-cyan-400" />
                )}
              </div>
              
              <div>
                <p className={`text-lg font-semibold transition-colors duration-300 ${
                  isDragOver ? 'text-pink-300' : 'text-cyan-300'
                }`}>
                  {isDragOver ? 'Drop binary here' : 'Upload Unknown Binary'}
                </p>
                <p className="text-slate-400 mt-2">
                  Drag & drop your .exe, .apk, .dll, or .bin file here
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  or click to browse files
                </p>
              </div>
              
              <div className="flex justify-center space-x-4 text-xs text-slate-500">
                <span className="px-2 py-1 bg-slate-700/50 rounded">.EXE</span>
                <span className="px-2 py-1 bg-slate-700/50 rounded">.APK</span>
                <span className="px-2 py-1 bg-slate-700/50 rounded">.DLL</span>
                <span className="px-2 py-1 bg-slate-700/50 rounded">.BIN</span>
              </div>
            </div>
          )}
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept=".exe,.apk,.dll,.bin"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};
