import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Mic } from 'lucide-react';

const VoiceGreeting = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio('/assets/audio/welcome.mp3')); // Assuming you have an audio file

  useEffect(() => {
    if (isPlaying && !isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, isMuted, audio]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  if (isPlaying) {
    return (
      <div className="fixed bottom-20 right-4 bg-white p-2 rounded-full shadow-lg flex items-center space-x-2 z-50">
        <Button variant="ghost" size="icon" onClick={handleMute}>
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        onClick={handlePlay}
        className="bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
      >
        <Mic className="w-6 h-6 mr-2" />
        Tap to Hear Welcome Message
      </Button>
    </div>
  );
};

export default VoiceGreeting;
