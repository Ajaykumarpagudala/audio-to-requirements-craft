
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TranscriptData } from "@/types";

interface TranscriptDisplayProps {
  transcript: TranscriptData;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ transcript }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Transcript</CardTitle>
      </CardHeader>
      <CardContent>
        {transcript.isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-5/6"></div>
          </div>
        ) : transcript.text ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {transcript.text}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Your transcript will appear here after recording.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default TranscriptDisplay;
