'use client';
import React from 'react';
import { Box } from '@/components/ui/box';
import { useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const VadimStream = () => {
  useEffect(() => {
    let player1: any = null;
    let player2: any = null;

    // Load the IFrame Player API code asynchronously
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    // This function creates an <iframe> (and YouTube player) after the API code downloads
    window.onYouTubeIframeAPIReady = () => {
      player1 = new window.YT.Player('player1', {
        height: '100%',
        width: '100%',
        videoId: 'FBXUPJ9_Xl0',
        playerVars: {
          playsinline: 1,
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              player2?.pauseVideo();
            }
          },
        },
      });

      player2 = new window.YT.Player('player2', {
        height: '100%',
        width: '100%',
        videoId: '9ErkOcDWJxI',
        playerVars: {
          playsinline: 1,
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              player1?.pauseVideo();
            }
          },
        },
      });
    };

    loadYouTubeAPI();

    return () => {
      player1?.destroy();
      player2?.destroy();
    };
  }, []);

  return (
    <Box className="relative flex-1 w-full h-full gap-5 flex-col md:flex-row mb-auto">
      <Box
        className="flex-1 border border-outline-200 rounded-lg overflow-hidden aspect-video"
        id="player1"
      />
      <Box
        className="flex-1 border border-outline-200 rounded-lg overflow-hidden aspect-video"
        id="player2"
      />
    </Box>
  );
};

export default VadimStream;
