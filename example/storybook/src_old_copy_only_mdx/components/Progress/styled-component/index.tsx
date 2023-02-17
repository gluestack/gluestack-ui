import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Progress = styled(
  View,
  {
    bg: '$muted200',
    h: '$2',
    borderRadius: 999,
    w: '100%',
    _dark: {
      bg: '$muted500',
    },
  },
  {}
);

export { Progress as Root };
export { default as FilledTrack } from './FilledTrack';
export default Progress;
