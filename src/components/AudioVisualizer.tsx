
import React, { useEffect, useState } from "react";

interface AudioVisualizerProps {
  isRecording: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isRecording }) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    if (isRecording) {
      // Simulate audio levels
      const interval = setInterval(() => {
        const newBars = Array.from({ length: 15 }, () => 
          Math.floor(Math.random() * 30) + 5
        );
        setBars(newBars);
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setBars([]);
    }
  }, [isRecording]);

  if (!isRecording) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-12 my-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className="audio-bar"
          style={{
            height: `${height}px`,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
