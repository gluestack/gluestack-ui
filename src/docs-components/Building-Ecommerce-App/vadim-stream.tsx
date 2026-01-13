'use client';
import { Box } from '@/components/ui/box';
import React, { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const VadimStream = () => {
  useEffect(() => {
    // Only load the API if it hasn't been loaded yet
    if (!document.getElementById('youtube-api')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize players when API is ready
    const initializePlayers = () => {
      new window.YT.Player('player1', {
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              const player2Frame = document.getElementById(
                'player2'
              ) as HTMLIFrameElement;
              player2Frame?.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*'
              );
            }
          },
        },
      });

      new window.YT.Player('player2', {
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              const player1Frame = document.getElementById(
                'player1'
              ) as HTMLIFrameElement;
              player1Frame?.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*'
              );
            }
          },
        },
      });
    };

    // If API is already loaded, initialize players directly
    if (window.YT && window.YT.Player) {
      initializePlayers();
    } else {
      // Otherwise wait for API to load
      window.onYouTubeIframeAPIReady = initializePlayers;
    }

    return () => {
      // Only reset the ready handler, don't remove the script
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  return (
    <Box className="relative flex-1 w-full h-full gap-5 flex-col md:flex-row">
      <Box className="flex-1 border border-border rounded-lg overflow-hidden aspect-video">
        <iframe
          id="player1"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/FBXUPJ9_Xl0?enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading='lazy'
        />
      </Box>
      <Box className="flex-1 border border-border rounded-lg overflow-hidden aspect-video">
        <iframe
          id="player2"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9ErkOcDWJxI?enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading='lazy'
        />
      </Box>
    </Box>
  );
};

export default VadimStream;
