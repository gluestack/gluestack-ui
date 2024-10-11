import React, { useContext } from 'react';
import { Box, Link } from '../../primitives';
import Text from '../../primitives/Button/styled-components/Text';
import { LayoutContext } from '../Layout/LayoutContext';

export const Hoverable = ({ href, heading, subHeading }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const { Link: NextLink } = useContext(LayoutContext);

  const LinkComponent = NextLink ?? Link;

  return (
    <LinkComponent
      href={href}
      style={{
        marginBottom: 16,
        flex: 1,
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Box
        states={{ hover: isHovered }}
        position="relative"
        overflow="hidden"
        borderRadius={8}
        borderWidth={1}
        p={'$5'}
        sx={{
          ':hover': {
            _dark: {
              bg: '$backgroundDark900',
              borderColor: 'transparent',
            },
            bg: '$borderLight100',
            borderColor: 'transparent',
          },

          'bg': 'transparent',
          'borderColor': '$borderLight200',
          '_dark': {
            borderColor: '$borderDark800',
          },
        }}
      >
        <Text
          fontWeight="800"
          mb="$2"
          fontSize="$md"
          //@ts-ignore
          onMouseEnter={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          sx={{
            color: '$textLight900',
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {heading}
        </Text>
        <Text
          fontSize="$sm"
          lineHeight="$sm"
          //@ts-ignore
          onMouseEnter={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          sx={{
            color: '$textLight900',
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {subHeading}
        </Text>
      </Box>
    </LinkComponent>
  );
};
