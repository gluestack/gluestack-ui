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
        <Box
          flexDirection="row"
          p="$2"
          pr="$4"
          w="$full"
          bg="$blue800"
          borderTopRightRadius={'$md'}
          borderTopLeftRadius={'$md'}
        >
          <Text color="$white">Theme Switcher</Text>
          <Box flex={1}></Box>
          <Text color="$white">x</Text>
        </Box>
        <Box
          bg="$gray100"
          h="440px"
          w="600px"
          alignItems="center"
          justifyContent="center"
        >
          <Theme name={theme}>
            <Box
              mx="auto"
              h="200px"
              w="400px"
              bg="$backgroundColor"
              borderWidth="$borderWidth"
              borderColor="$borderColor"
              borderRadius={'$borderRadius'}
              overflow="hidden"
            >
              <Box
                flexDirection="row"
                p="$2"
                pr="$4"
                w="$full"
                bg="$headerColor"
              >
                <Text color="$textColor">Explorer from {theme}</Text>
                <Box flex={1}></Box>
                <Text>x</Text>
              </Box>
            </Box>
          </Theme>
        </Box>
        <Box flexDirection="row">
          {themes.map((themeName) => (
            <StyledLinkButton
              key={themeName}
              onPress={() => setTheme(themeName)}
              size="sm"
              bg={themeName !== theme ? '$backgroundDark300' : '$green400'}
            >
              <Text>{themeName}</Text>
            </StyledLinkButton>
          ))}
        </Box>
      </View>
    </Wrapper>
  );
}
export default Themes;
