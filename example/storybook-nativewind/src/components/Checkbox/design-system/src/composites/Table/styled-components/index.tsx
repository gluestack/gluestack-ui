import { styled } from '@gluestack-style/react';
import { Table as ExpoTable } from '@expo/html-elements';
import { Box } from '../../../primitives';

export const Table = styled(
  ExpoTable,
  {
    mt: '$1',
    mb: '$6',
    boxShadow: '0 0 0 $space$px $borderLight200',
    _web: {
      borderCollapse: 'collapse',
    },
    borderRadius: '$lg',
    borderStyle: 'hidden',
    overflow: 'hidden',
    _dark: {
      boxShadow: '0 0 0 $space$px $borderLight800',
    },
  },
  {}
);

export const TableContainer = styled(
  Box,
  {
    _web: { overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap' },
    maxWidth: '$full',
    px: '$px',
  },
  {}
);

export { default as TH } from './TH';
export { default as TD } from './TD';
export { default as TR } from './TR';
export { default as THead } from './THead';
export { default as TBody } from './TBody';
export { default as TFoot } from './TFoot';
export { default as Text } from './Text';
