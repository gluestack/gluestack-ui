import React from 'react';
var flushStyles = '';
export function getFlushStyles() {
  return React.createElement('style', {
    id: 'nativewind-style',
    key: 'nativewind-style',
    dangerouslySetInnerHTML: {
      __html: flushStyles,
    },
  });
}
export function setFlushStyles(styles) {
  flushStyles = styles;
}
