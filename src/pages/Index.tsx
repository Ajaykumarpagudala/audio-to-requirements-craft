
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import RecordButton from "@/components/RecordButton";
import TranscriptDisplay from "@/components/TranscriptDisplay";
import SummaryDisplay from "@/components/SummaryDisplay";
import AudioVisualizer from "@/components/AudioVisualizer";
import { RecordingState, TranscriptData, SummaryData } from "@/types";

const Index = () => {
  const { toast } = useToast();
  const [recordingState, setRecordingState] = useState<RecordingState>({
    isRecording: false,
    duration: 0,
  });
  const [transcript, setTranscript] = useState<TranscriptData>({
    text: "",
    isLoading: false,
  });
  const [summary, setSummary] = useState<SummaryData>({
    text: "",
    isLoading: false,
  });

  // Timer for recording duration
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (recordingState.isRecording) {
      timer = setInterval(() => {
        setRecordingState((prev) => ({
          ...prev,
          duration: prev.duration + 1,
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [recordingState.isRecording]);

  const handleStartRecording = () => {
    setRecordingState({ isRecording: true, duration: 0 });
    setTranscript({ text: "", isLoading: false });
    setSummary({ text: "", isLoading: false });
    toast({
      title: "Recording Started",
      description: "Speak clearly into your microphone",
    });
  };

  const handleStopRecording = () => {
    setRecordingState({ ...recordingState, isRecording: false });
    toast({
      title: "Recording Stopped",
      description: "Processing your audio...",
    });
    
    // Simulate processing the audio
    setTranscript({ text: "", isLoading: true });
    
    // Simulate transcript generation (would be replaced with actual API call)
    setTimeout(() => {
      const mockTranscript = "We need to implement a dashboard for tracking user engagement. It should include daily active users, session duration, and feature usage metrics. We also need to add filters for date ranges and user segments. For the next sprint, let's prioritize the chart visualizations and export functionality.";
      
      setTranscript({
        text: mockTranscript,
        isLoading: false,
      });
      
      // Now process for summary
      setSummary({ text: "", isLoading: true });
      
      setTimeout(() => {
        const mockSummary = "- Create dashboard for tracking user engagement\n- Include metrics: DAU, session duration, feature usage\n- Implement date range and user segment filters\n- Priority for next sprint: chart visualizations\n- Add data export functionality";
        
        setSummary({
          text: mockSummary,
          isLoading: false,
        });
        
        toast({
          title: "Processing Complete",
          description: "Your meeting summary is ready",
        });
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-primary mb-2">Meeting Summarizer</h1>
          <p className="text-muted-foreground">Record your meetings and get actionable summaries instantly</p>
        </header>
        
        <div className="flex flex-col items-center mb-8">
          <RecordButton
            isRecording={recordingState.isRecording}
            duration={recordingState.duration}
            onStartRecording={handleStartRecording}
            onStopRecording={handleStopRecording}
          />
          <AudioVisualizer isRecording={recordingState.isRecording} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <TranscriptDisplay transcript={transcript} />
          <SummaryDisplay summary={summary} />
        </div>
        
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>For actual implementation, you'll need to connect this UI to a backend API that handles the audio processing.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
