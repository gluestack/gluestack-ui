import React from 'react';
import { Text, HStack, Box } from '@gluestack/ui';

const componentImplements: any = {
  Pressable: {
    reference: 'https://reactnative.dev/docs/pressable',
  },
  View: {
    reference: 'https://reactnative.dev/docs/view',
  },
};
const InternalImplements: any = {
  FlexProps: {
    reference: '/',
  },
  ColorProps: {
    reference: '/',
  },
  LayoutProps: {
    reference: '/',
  },
  BorderProps: {
    reference: '/',
  },
  TypographyProps: {
    reference: '/',
  },
  ShadowProps: {
    reference: '/',
  },
  PositionProps: {
    reference: '/',
  },
  SafeAreaProps: {
    reference: '/',
  },
};
const PropsObject: any = {
  variant: {
    description: 'The variant of the button style to use.',
    default: 'solid',
    Type: ['link', 'subtle', 'solid', 'ghost', 'outline', 'unstyled'],
  },
  size: {
    description: 'The size of the button.',
    default: 'md',
    Type: ['xs', 'sm', 'md', 'lg'],
  },
};

const DynamicTyping = ({ component }: any) => {
  return (
    <>
      <Text
        fontSize={27}
        fontWeight="500"
        lineHeight={30}
        color="$trueGray900"
        mb={24}
      >
        Props
      </Text>
      <Text
        fontSize={24}
        fontWeight="400"
        lineHeight={34.8}
        color="$trueGray700"
        letterSpacing={0.5}
        mb={6}
        textTransform="capitalize"
      >
        {component}
      </Text>
      <Text
        fontSize={16}
        fontWeight="400"
        lineHeight={24}
        color="$trueGray700"
        mb={42}
        textTransform="capitalize"
      >
        {component} implements&nbsp;
        {Object.keys(componentImplements).map((component) => {
          return (
            <>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#7e22ce',
                  backgroundColor: '#faf5ff',
                }}
                href={componentImplements[component].reference}
              >
                {component}
              </a>
              {', '}
            </>
          );
        })}
        {Object.keys(InternalImplements).map((component: any) => {
          return (
            <>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#7e22ce',
                }}
                href={InternalImplements[component].reference}
              >
                {component}
              </a>
              {', '}
            </>
          );
        })}
      </Text>
      {Object.keys(PropsObject).map((prop) => {
        return (
          <>
            <code
              style={{
                color: '#7e22ce',
                backgroundColor: '#f3e8ff',
                alignSelf: 'flex-start',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                marginBottom: '12px',
              }}
            >
              {prop}
            </code>
            <Text mb={32} fontSize={16} lineHeight={24} color="$trueGray900">
              {PropsObject[prop].description}
            </Text>
            <HStack mb={16} alignItems="center">
              <Box mr={16}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#BF7EFF" />
                </svg>
              </Box>
              <Text color="$trueGray700" fontWeight="600" lineHeight={24}>
                Type :{' '}
                {Array.isArray(PropsObject[prop].Type) ? (
                  PropsObject[prop].Type.map((type: any, index: number) => {
                    if (index === PropsObject[prop].Type.length - 1)
                      return (
                        <code style={{ color: '#404040', fontWeight: 400 }}>
                          "{type}"
                        </code>
                      );
                    return (
                      <code style={{ color: '#404040', fontWeight: 400 }}>
                        "{type}"|
                      </code>
                    );
                  })
                ) : (
                  <Text>{PropsObject[prop].Type}</Text>
                )}
              </Text>
            </HStack>
            <HStack mb={16} alignItems="center">
              <Box mr={16}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#BF7EFF" />
                </svg>
              </Box>

              <Text color="$trueGray700" fontWeight="600" lineHeight={24}>
                Default :{' '}
                <code style={{ color: '#404040', fontWeight: 400 }}>
                  {PropsObject[prop].default}
                </code>
              </Text>
            </HStack>
          </>
        );
      })}
    </>
  );
};

export { DynamicTyping };
