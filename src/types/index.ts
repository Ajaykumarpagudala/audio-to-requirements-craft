
export interface RecordingState {
  isRecording: boolean;
  duration: number;
}

export interface TranscriptData {
  text: string;
  isLoading: boolean;
}

export interface SummaryData {
  text: string;
  isLoading: boolean;
}
