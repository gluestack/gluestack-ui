'use client';
import React from 'react';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { useEffect } from 'react';
import { Span } from '@expo/html-elements';

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
    <Box className="gap-20">
      <VStack className="max-w-[1024px] mt-[120px] gap-3">
        <Heading className="text-3xl font-roboto font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl">
          Learn about gluestack from Youtube guru{' '}
          <Span className="text-3xl font-roboto font-bold sm:leading-[54px] leading-9 text-info-600 sm:text-4xl">
            notJust.dev
          </Span>
        </Heading>
        <Text className="text-lg font-roboto font-normal leading-[30px] lg:w-[75%]">
          Vadim, popularly known as "just-not-dev" on YouTube, offers insightful
          and practical videos that explore a wide range of developer tools and
          frameworks, including Gluestack-UI.
        </Text>
      </VStack>
      <HStack className="relative flex-1 w-full h-full gap-5 flex-col md:flex-row ">
        <Box
          className="flex-1 border border-outline-200 rounded-lg overflow-hidden aspect-video"
          id="player1"
        ></Box>
        <Box
          className="flex-1 border border-outline-200 rounded-lg overflow-hidden aspect-video"
          id="player2"
        ></Box>
      </HStack>
    </Box>
  );
};

export default VadimStream;
