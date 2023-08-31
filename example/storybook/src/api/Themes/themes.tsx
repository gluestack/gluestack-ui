import React from 'react';
import { View, Text as RNText, Pressable } from 'react-native';
import { styled, StyledProvider, Theme } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledLinkButton = styled(
  Pressable,
  {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    m: '$3',
    bg: '$backgroundDark300',
    variants: {
      size: {
        sm: {
          px: '$4',
          py: '$3',
        },
        md: {
          px: '$5',
          py: '$4',
        },
      },
    },

    defaultProps: {
      size: 'md',
      variant: 'redbox',
    },
  },
  {
    DEBUG: 'Button',
  }
);
const Box = styled(View, {});
const Text = styled(RNText, { color: '$textColor' });

export function Themes({ ...args }) {
  const [theme, setTheme] = React.useState('2000s');
  const themes = ['2000s', '2010s', '2020s'];
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Theme name={theme}>
          <Box
            h="200px"
            w="400px"
            bg="$backgroundDark100"
            borderWidth="$borderWidth"
            borderColor="$borderColor"
            borderRadius={'$borderRadius'}
            overflow="hidden"
          >
            <Box flexDirection="row" p="$2" w="$full" bg="$headerColor">
              <Text color="$textColor">Header {theme}</Text>
              <Box flex={1}></Box>
              <Text>X</Text>
            </Box>
          </Box>
        </Theme>
        <Box flexDirection="row">
          {themes.map((theme) => (
            <StyledLinkButton
              key={theme}
              onPress={() => setTheme(theme)}
              size="sm"
            >
              <Text>{theme}</Text>
            </StyledLinkButton>
          ))}
        </Box>
      </View>
    </Wrapper>
  );
}
export default Themes;
