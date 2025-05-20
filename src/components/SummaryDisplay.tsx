
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SummaryData } from "@/types";

interface SummaryDisplayProps {
  summary: SummaryData;
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summary }) => {
  // Function to format bullet points
  const formatSummary = (text: string) => {
    if (!text) return "";
    
    // Split by newlines and preserve bullet points
    return text.split('\n').map((line, index) => {
      // Check if line is a bullet point
      if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
        return (
          <li key={index} className="ml-5 mb-2">
            {line.trim().substring(1).trim()}
          </li>
        );
      }
      return <p key={index} className="mb-2">{line}</p>;
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Requirements Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {summary.isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-muted animate-pulse rounded w-full"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-3/4"></div>
            <div className="h-4 bg-muted animate-pulse rounded w-5/6"></div>
          </div>
        ) : summary.text ? (
          <ul className="text-sm leading-relaxed list-disc">
            {formatSummary(summary.text)}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Your meeting summary will appear here after processing the transcript.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryDisplay;
