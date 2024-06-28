import React from 'react';
import { Text } from '@/components/ui/text';
import { useBreakpointValue } from '../../hooks/useBreakpointValue';

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

  const fontSizes = useBreakpointValue({
    'base': 12,
    'sm': 16,
    'md': 20,
    'lg': 24,
    'xl': 28,
    '2xl': 32,
  });

  return (
    <Text
      // size={size}
      // {...props}
      // className={`${fontWeights[fontWeight as keyof typeof fontWeights]}`}
      // style={{ fontSize: parseInt(fontSizes, 10) }} //working
      className={`text-[${fontSizes}px]`} //not working after 16px
      // className="text-[30px]"
    >
      {text}
    </Text>
  );
};

TextBasic.description =
  'This is a basic Text component example. Texts are used to show the content of a section or page.';

export default TextBasic;

export { Text };
