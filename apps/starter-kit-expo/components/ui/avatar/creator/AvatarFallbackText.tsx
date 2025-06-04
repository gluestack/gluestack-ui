import React, { forwardRef } from 'react';

const getFirstCharacters = (str: string) => {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i].charAt(0);
    }
    if (result.length >= 2) {
      break;
    }
  }
  return result.toUpperCase();
};

export const AvatarFallbackText = (StyledAvatarFallbackText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    let fallbackText = '';
    if (typeof children === 'string') {
      fallbackText = getFirstCharacters(children);
    }
    return (
      <StyledAvatarFallbackText ref={ref} {...props}>
        {fallbackText}
      </StyledAvatarFallbackText>
    );
  });
