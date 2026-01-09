'use client';

import { useEffect, useRef } from 'react';
import { loadYouTubeAPI } from './loadYoutubeAPI';

const VadimStream = () => {
  const player1Ref = useRef<any>(null);
  const player2Ref = useRef<any>(null);
  const isSyncing = useRef(false);

  useEffect(() => {
    let isMounted = true;

    loadYouTubeAPI().then(() => {
      if (!isMounted || !window.YT) return;

      player1Ref.current = new window.YT.Player('player1', {
        events: {
          onStateChange: (e: any) => {
            if (
              e.data === window.YT.PlayerState.PLAYING &&
              !isSyncing.current
            ) {
              isSyncing.current = true;
              player2Ref.current?.pauseVideo();
              isSyncing.current = false;
            }
          },
        },
      });

      player2Ref.current = new window.YT.Player('player2', {
        events: {
          onStateChange: (e: any) => {
            if (
              e.data === window.YT.PlayerState.PLAYING &&
              !isSyncing.current
            ) {
              isSyncing.current = true;
              player1Ref.current?.pauseVideo();
              isSyncing.current = false;
            }
          },
        },
      });
    });

    return () => {
      isMounted = false;
      player1Ref.current?.destroy();
      player2Ref.current?.destroy();
    };
  }, []);

  return (
    <div className="flex gap-4">
      <iframe
        id="player1"
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/FBXUPJ9_Xl0?enablejsapi=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <iframe
        id="player2"
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/9ErkOcDWJxI?enablejsapi=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VadimStream;
