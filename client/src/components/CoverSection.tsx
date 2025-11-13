import { useEffect, useRef } from 'react';

interface CoverSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  youtubeVideoId?: string;
  youtubeStartTime?: number;
  youtubeEndTime?: number;
  alt: string;
  className?: string;
  showControls?: boolean;
  showYoutubeBranding?: boolean;
  enableInteraction?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const CoverSection = ({ 
  imageUrl, 
  videoUrl, 
  youtubeVideoId,
  youtubeStartTime = 0,
  youtubeEndTime = 0,
  alt, 
  className = "",
  showControls = false,
  showYoutubeBranding = false,
  enableInteraction = false
}: CoverSectionProps) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerIdRef = useRef(`youtube-cover-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (!youtubeVideoId) return;

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player && containerRef.current) {
        playerRef.current = new window.YT.Player(playerIdRef.current, {
          videoId: youtubeVideoId,
          playerVars: {
            autoplay: 1,
            mute: showControls ? 0 : 1,
            controls: showControls ? 1 : 0,
            modestbranding: showYoutubeBranding ? 0 : 1,
            rel: 0,
            fs: showControls ? 1 : 0,
            iv_load_policy: 3,
            disablekb: showControls ? 0 : 1,
            playsinline: 1,
            enablejsapi: 1,
            origin: window.location.origin,
            start: Math.floor(youtubeStartTime),
            loop: showControls ? 1 : 0,
          },
          events: {
            onReady: (event: any) => {
              event.target.playVideo();
              
              // Set up seamless looping
              if (youtubeEndTime > youtubeStartTime) {
                const loopInterval = setInterval(() => {
                  if (playerRef.current && playerRef.current.getCurrentTime) {
                    const currentTime = playerRef.current.getCurrentTime();
                    // Jump back to start when approaching the end (with 0.3s buffer)
                    if (currentTime >= youtubeEndTime - 0.3) {
                      playerRef.current.seekTo(youtubeStartTime, true);
                    }
                  }
                }, 50);

                return () => clearInterval(loopInterval);
              }
            },
            onStateChange: (event: any) => {
              // If video ends, restart it
              if (event.data === window.YT.PlayerState.ENDED) {
                playerRef.current.seekTo(youtubeStartTime, true);
                playerRef.current.playVideo();
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [youtubeVideoId, youtubeStartTime, youtubeEndTime]);

  return (
    <section className={`bg-white relative w-full overflow-hidden ${className}`}>
      {/* Full Width Media Container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        {youtubeVideoId ? (
          <div 
            ref={containerRef}
            className="relative w-full"
            style={{ 
              paddingBottom: '56.25%',
              pointerEvents: enableInteraction ? 'auto' : 'none' 
            }}
          >
            <div
              id={playerIdRef.current}
              className="absolute inset-0 w-full h-full"
              style={{
                transform: showControls ? 'scale(1)' : 'scale(1.5)',
                transformOrigin: 'center center',
              }}
              data-testid={`cover-youtube-${alt}`}
            />
          </div>
        ) : videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 0,
              padding: 0
            }}
            data-testid={`cover-video-${alt}`}
          />
        ) : (
          <img 
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 0,
              padding: 0
            }}
          />
        )}
      </div>
      
      {/* Hide YouTube branding */}
      {youtubeVideoId && !showYoutubeBranding && (
        <style>{`
          .ytp-pause-overlay,
          .ytp-title,
          .ytp-watermark,
          .ytp-endscreen-content,
          .ytp-ce-element,
          .ytp-cards-teaser,
          .ytp-chrome-top,
          .ytp-show-cards-title,
          .ytp-gradient-top,
          .ytp-gradient-bottom {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}</style>
      )}
    </section>
  );
};

export default CoverSection;
