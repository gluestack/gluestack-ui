import { createStyle } from '@gluestack-style/react';

export const TableContainer = createStyle({
  bg: '$backgroundLight50',
  borderRadius: '$lg',
  _head: {},
  _body: {
    bg: '$backgroundLight0',
  },
  _footer: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '$borderLight300',
  },
  _table: {
    borderRadius: '$lg',
    bg: '$backgroundLight50',
    _dark: {
      bg: '$backgroundDark950',
    },
    _web: {
      borderCollapse: 'collapse',
    },
  },
  _row: {},
  _headerText: {
    minWidth: 219,
    fontFamily: '$body',
    px: '$6',
    py: 'auto',
    h: '$16',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
    fontSize: '$md',
    textAlign: 'left',
    _android: {
      textAlignVertical: 'center',
    },
    _ios: {
      lineHeight: '60%',
    },
  },
  _data: {
    minWidth: 267,
    px: '$6',
    py: 'auto',
    h: '$16',
    borderWidth: 0,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '$borderLight300',
    _dark: {
      borderTopColor: '$borderDark800',
      color: '$textDark50',
    },
    fontFamily: '$body',
    color: '$textLight900',
    fontSize: '$sm',
    _android: {
      textAlignVertical: 'center',
    },
    _ios: {
      lineHeight: '60%',
    },
  },

  _dataText: {},
});
