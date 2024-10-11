import type { PrismTheme } from 'prism-react-renderer';

export const theme: PrismTheme = {
  plain: {
    color: '#8F93A2',
    backgroundColor: '#1A1D23',
  },
  styles: [
    {
      types: ['comment', 'punctuation'],
      style: {
        color: 'rgb(70, 75, 93)',
        // fontStyle: 'italic',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#56AE4E',
        // fontStyle: 'italic',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(143, 147, 162)',
      },
    },
    {
      types: ['constant', 'changed'],
      style: {
        color: 'rgb(255, 203, 107)',
      },
    },
    {
      types: ['keyword', 'number', 'char'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['tag', 'deleted', 'builtin'],
      style: {
        color: 'rgb(240, 113, 120)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      types: ['symbol', 'inserted'],
      style: {
        color: 'rgb(195, 232, 141)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(199, 146, 234)',
        fontStyle: 'italic',
      },
    },
  ],
};
