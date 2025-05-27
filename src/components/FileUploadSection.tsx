
import React, { useState, useCallback } from 'react';
import { FileUploadZone } from './FileUpload/FileUploadZone';
import { FileMetadataCard } from './FileUpload/FileMetadataCard';
import { AnalysisButton } from './FileUpload/AnalysisButton';
import { useToast } from '@/hooks/use-toast';

export interface FileData {
  name: string;
  size: number;
  type: string;
  hash: string;
  uploadTime: Date;
}

export const FileUploadSection = () => {
  const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const generateMockHash = () => {
    return Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  const handleFileUpload = useCallback(async (file: File) => {
    const allowedTypes = ['.exe', '.apk', '.dll', '.bin'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload .exe, .apk, .dll, or .bin files only.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const fileData: FileData = {
      name: file.name,
      size: file.size,
      type: fileExtension,
      hash: generateMockHash(),
      uploadTime: new Date()
    };
    
    setUploadedFile(fileData);
    setIsUploading(false);
    
    toast({
      title: "File Uploaded Successfully",
      description: `${file.name} has been ingested by Binary Intake`,
      className: "border-cyan-500 bg-slate-800 text-cyan-100",
    });
  }, [toast]);

  const handleStartAnalysis = () => {
    if (uploadedFile) {
      toast({
        title: "Analysis Initiated",
        description: "AI Disassembler is processing your binary...",
        className: "border-pink-500 bg-slate-800 text-cyan-100",
      });
      
      // Here you would typically make an API call to start the analysis
      console.log('Starting analysis for:', uploadedFile.name);
    }
  };

  return (
    <div className="space-y-8">
      <FileUploadZone 
        onFileUpload={handleFileUpload}
        isUploading={isUploading}
      />
      
      {uploadedFile && (
        <div className="space-y-6">
          <FileMetadataCard fileData={uploadedFile} />
          <AnalysisButton 
            onClick={handleStartAnalysis}
            disabled={isUploading}
          />
        </div>
      )}
    </div>
  );
};
