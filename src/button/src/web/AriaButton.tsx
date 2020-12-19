import React from 'react';

const ovverrideStyles = {
  backgroundColor: 'transparent',
  borderRadius: 0,
  boxSizing: 'content-box',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'inline-block',
  font: 'inherit',
  padding: '0',
  textAlign: 'start',
  outline: 0,
};

// TODO: Accept elementTyp prop (div, span, etc)
export const AriaButton = React.forwardRef((props: any, ref) =>
  React.createElement('button', {
    ...props,
    ref,
    style: ovverrideStyles,
  })
);
