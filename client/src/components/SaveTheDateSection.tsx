import { useEffect, useRef } from 'react';

interface SaveTheDateSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const SaveTheDateSection = ({ audioRef }: SaveTheDateSectionProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeId = 'save-the-date-youtube-iframe';
    iframe.id = iframeId;

    const initializeYouTubeAPI = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'listening',
          id: iframeId,
          channel: 'widget'
        }),
        '*'
      );
    };

    iframe.addEventListener('load', initializeYouTubeAPI);
    
    if (iframe.contentWindow) {
      initializeYouTubeAPI();
    }

    return () => {
      iframe.removeEventListener('load', initializeYouTubeAPI);
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      if (!audioRef.current) return;

      try {
        const data = JSON.parse(event.data);
        
        // Only respond to messages from the Save the Date iframe specifically
        if (data.id === 'save-the-date-youtube-iframe' && data.event === 'infoDelivery' && data.info) {
          const playerState = data.info.playerState;
          
          if (playerState === 1) {
            audioRef.current.pause();
            console.log('Save the Date video playing - background music paused');
          } else if (playerState === 2 || playerState === 0) {
            audioRef.current.play().catch((error) => {
              console.log('Background music resume failed:', error);
            });
            console.log('Save the Date video paused/ended - background music resumed');
          }
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [audioRef]);

  return (
    <section className="bg-white relative w-full overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl md:text-5xl text-center text-primary mb-8"
          style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}
          data-testid="text-save-the-date-title"
        >
          Save the Date
        </h2>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-md" style={{ paddingBottom: '177.78%' }}>
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2oGPq-akTbg?enablejsapi=1&autoplay=0&mute=0&controls=1&loop=1&playlist=2oGPq-akTbg&modestbranding=1&cc_load_policy=0&iv_load_policy=3"
              title="Lianna Chloe - Save the Date"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              data-testid="video-save-the-date"
            />
          </div>
        </div>
      </div>
      
      <style>{`
        .ytp-title,
        .ytp-watermark,
        .ytp-chrome-top,
        .ytp-show-cards-title,
        .ytp-pause-overlay-container,
        .ytp-ce-element,
        .ytp-cards-teaser {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default SaveTheDateSection;
