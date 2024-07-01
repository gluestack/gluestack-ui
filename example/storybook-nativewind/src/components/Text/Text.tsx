import React from 'react';
import { Text } from '@/components/ui/text';
import { useBreakpointValue } from '@/hooks/useBreakpointValue';

const TextBasic = ({
  // size = 'md',
  text = 'Hello world',
}: // fontWeight = 'bold',
// ...props
any) => {
  // const fontWeights = {
  //   hairline: 'font-hairline',
  //   thin: 'font-thin',
  //   light: 'font-light',
  //   normal: 'font-normal',
  //   medium: 'font-medium',
  //   semibold: 'font-semibold',
  //   bold: 'font-bold',
  //   extrabold: 'font-extrabold',
  //   black: 'font-black',
  //   extrablack: 'font-extrablack',
  // };

  const fontWeight = useBreakpointValue({
    base: 'font-thin',
    sm: 'font-light',
    md: 'font-medium',
    lg: 'font-bold',
    xl: 'font-black',
  });

  return (
    <Text
      // size={size}
      // {...props}
      // className={`${fontWeights[fontWeight as keyof typeof fontWeights]}`}
      className={`${fontWeight}`}
    >
      {text}
    </Text>
  );
};

TextBasic.description =
  'This is a basic Text component example. Texts are used to show the content of a section or page.';

export default TextBasic;

export { Text };
