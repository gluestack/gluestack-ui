import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        outlineWidth: 0,
        m: 12,
      },
    },
    variants: {
      bluebox: {
        style: {
          bg: '$blue400',
        },
      },
      greenbox: {
        style: {
          bg: '$green400',
        },
      },
      yellowbox: {
        style: {
          bg: '$yellow400',
        },
      },
    },
    sizes: {
      xs: {
        style: {
          px: '$2',
          py: '$1',
        },
      },
      sm: {
        style: {
          px: '$3',
          py: '$2',
        },
      },
      md: {
        style: {
          px: '$4',
          py: '$3',
        },
      },
      lg: {
        style: {
          px: '$3',
          py: '$3',
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'bluebox',
    },
  },
  {}
);

export function BaseStyleVariantSizes({ ...args }) {
  return (
    <Wrapper>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          <StyledButton size="sm">
            <Text>bluebox - sm</Text>
          </StyledButton>
          <StyledButton variant="greenbox" size="sm">
            <Text>greenbox - sm</Text>
          </StyledButton>
          <StyledButton variant="yellowbox" size="sm">
            <Text>yellowbox - sm</Text>
          </StyledButton>
        </View>
        <View>
          <StyledButton>
            <Text>bluebox - md</Text>
          </StyledButton>
          <StyledButton variant="greenbox">
            <Text>greenbox -md</Text>
          </StyledButton>
          <StyledButton variant="yellowbox">
            <Text>yellowbox - md</Text>
          </StyledButton>
        </View>
      </View>
    </Wrapper>
  );
}
