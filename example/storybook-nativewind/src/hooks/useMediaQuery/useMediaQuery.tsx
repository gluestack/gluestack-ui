import React from 'react';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { useMediaQuery } from '@/components/hooks/use-media-query';
import { Smartphone, Tablet, Laptop, Tv } from 'lucide-react-native';
const UseMediaQueryBasic = ({ ...props }: any) => {
  const [isMobile, isTablet, isSmallScreen, isLargeScreen] = useMediaQuery([
    {
      maxWidth: 480,
    },
    {
      minWidth: 481,
      maxWidth: 768,
    },
    {
      minWidth: 769,
      maxWidth: 1300,
    },
    {
      minWidth: 1301,
    },
  ]);

  return (
    <Box {...props} className={`justify-center items-center gap-4`}>
      <Heading>useMediaQuery</Heading>
      <Text>Resize your browser windows to see changes.</Text>
      <Box className="flex-row flex-wrap gap-8 justify-center">
        <Box
          className={
            'border justify-center items-center w-[120px] h-[80px] rounded gap-2 ' +
            (isMobile ? 'border-green-500 bg-green-50' : '')
          }
        >
          <Icon as={Smartphone} size={'xs'} />
          <Text size="sm">Small</Text>
        </Box>
        <Box
          className={
            'border justify-center items-center w-[120px] h-[80px] rounded gap-2 ' +
            (isTablet ? 'border-green-500 bg-green-50' : '')
          }
        >
          <Icon as={Tablet} />
          <Text size="sm">medium</Text>
        </Box>
        <Box
          className={
            'border justify-center items-center w-[120px] h-[80px] rounded gap-2 ' +
            (isSmallScreen ? 'border-green-500 bg-green-50' : '')
          }
        >
          <Icon as={Laptop} />
          <Text size="sm">Large</Text>
        </Box>
        <Box
          className={
            'border justify-center items-center w-[120px] h-[80px] rounded gap-2 ' +
            (isLargeScreen ? 'border-green-500 bg-green-50' : '')
          }
        >
          <Icon as={Tv} />
          <Text size="sm">Extra Large</Text>
        </Box>
      </Box>
    </Box>
  );
};

UseMediaQueryBasic.description =
  'This is a basic Alert component example. Alerts are used to communicate a state that affects a system, feature or page';
export default UseMediaQueryBasic;
