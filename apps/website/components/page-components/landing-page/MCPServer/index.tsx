'use client';
import { Box, Heading, Text, VStack } from '@/components/ui';
import { useEffect } from 'react';

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
    <Box className="gap-20">
      <VStack className="max-w-[1024px] mt-[120px] gap-3">
        <Heading className="text-3xl font-roboto font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
          MCP Server
        </Heading>
        <Text className="text-lg font-roboto font-normal leading-[30px] lg:w-[75%]">
          A server that generates complete, consistent code using gluestack-ui
          v2 components. Check out this demo video:
        </Text>
      </VStack>
      <Box className="flex-1 border border-outline-200 rounded-lg overflow-hidden aspect-video md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[700px]">
        <iframe
          id="mcp-server-video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5lSvkESJgmY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Box>
  );
};

export default VadimStream;
