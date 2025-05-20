
import React from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecordButtonProps {
  isRecording: boolean;
  duration: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

const RecordButton: React.FC<RecordButtonProps> = ({
  isRecording,
  duration,
  onStartRecording,
  onStopRecording,
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        size="lg"
        variant={isRecording ? "destructive" : "default"}
        className={cn(
          "h-16 w-16 rounded-full flex items-center justify-center",
          isRecording && "recording-pulse"
        )}
        onClick={isRecording ? onStopRecording : onStartRecording}
      >
        {isRecording ? (
          <MicOff className="h-8 w-8" />
        ) : (
          <Mic className="h-8 w-8" />
        )}
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        {isRecording
          ? `Recording: ${duration}s`
          : "Click to start recording"}
      </span>
    </div>
  );
};

export default RecordButton;
