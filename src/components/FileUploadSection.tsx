
import React, { useState, useCallback } from 'react';
import { FileUploadZone } from './FileUpload/FileUploadZone';
import { FileMetadataCard } from './FileUpload/FileMetadataCard';
import { AnalysisButton } from './FileUpload/AnalysisButton';
import { AnalysisResults } from './FileUpload/AnalysisResults';
import { useToast } from '@/hooks/use-toast';

export interface FileData {
  name: string;
  size: number;
  type: string;
  hash: string;
  uploadTime: Date;
}

interface AnalysisResultsData {
  disassembly?: string;
  ai?: string;
  visual?: string;
  metadata?: {
    filename: string;
    size: number;
    hash: string;
  };
}

export const FileUploadSection = () => {
  const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResultsData | null>(null);
  const [actualFile, setActualFile] = useState<File | null>(null);
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
    setActualFile(file);
    setIsUploading(false);
    setAnalysisResults(null);
    
    toast({
      title: "File Uploaded Successfully",
      description: `${file.name} has been ingested by Binary Intake`,
      className: "border-cyan-500 bg-slate-800 text-cyan-100",
    });
  }, [toast]);

  const handleStartAnalysis = async () => {
    if (!uploadedFile || !actualFile) return;

    setIsAnalyzing(true);
    
    try {
      const formData = new FormData();
      formData.append('file', actualFile);

      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Analysis failed: ${response.statusText}`);
      }

      const results = await response.json();
      console.log('Analysis results:', results);
      
      setAnalysisResults(results);
      
      toast({
        title: "Analysis Complete",
        description: "ShadowGrid has successfully analyzed your binary",
        className: "border-green-500 bg-slate-800 text-cyan-100",
      });
      
    } catch (error) {
      console.error('Analysis error:', error);
      
      toast({
        title: "Analysis Failed",
        description: "Could not connect to ShadowGrid backend. Ensure the Flask server is running on localhost:5000",
        variant: "destructive",
      });

      // Show mock results for demo purposes when backend is not available
      setAnalysisResults({
        disassembly: "Mock disassembly output:\n\n0x401000: push ebp\n0x401001: mov ebp, esp\n0x401003: sub esp, 0x10\n0x401006: call main\n0x40100b: add esp, 0x10\n0x40100e: pop ebp\n0x40100f: ret",
        ai: "AI Analysis Results:\n\n- Binary appears to be a Windows executable\n- Entry point detected at 0x401000\n- No obvious malicious patterns detected\n- Standard compiler-generated code structure\n- Threat level: LOW",
        visual: "/static/threat_tree.png"
      });
    }
    
    setIsAnalyzing(false);
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
            disabled={isUploading || isAnalyzing}
          />
        </div>
      )}
      
      {(isAnalyzing || analysisResults) && (
        <AnalysisResults 
          results={analysisResults || {}} 
          isLoading={isAnalyzing}
        />
      )}
    </div>
  );
};
