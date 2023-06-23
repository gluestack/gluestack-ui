import React, { useEffect } from 'react';
import { Center } from '../../ui-components';
import Wrapper from '../Wrapper';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { SolitoLink, Link } from '../../ui-components';
import { Link as LinkSolito } from 'solito/link';
import NextLink from 'next/link';
import { Text } from 'react-native';
import { useHover } from '@react-native-aria/interactions';

import { forwardRef } from 'react';
import { LinkCore } from 'solito/link';

const TextLink = forwardRef<HTMLAnchorElement, any>(
  ({ children, href, target, ...restProps }, ref) => {
    return (
      <LinkCore
        componentProps={restProps}
        Component={Text}
        href={href}
        ref={ref}
        target={target}
      >
        {children}
      </LinkCore>
    );
  }
);

export const SolitoLinkStory = ({ text = "I'm the SolitoLink", ...props }) => {
  const ref1 = React.useRef(null);
  // const { isHovered, hoverProps }: any = useHover({}, ref1);
  // console.log(isHovered, 'isHovered');
  // useEffect(() => {
  //   console.log('ref1', ref1?.current);
  // }, [ref1?.current]);
  console.log('ref1', ref1.current);

  return (
    <Wrapper>
      <Center>
        <NavigationContainer>
          <LinkSolito
            ref={ref1}
            href={'hello'}
            // onMouseOver={() => {
            //   console.log('hello world');
            // }}
            viewProps={{ style: { backgroundColor: 'red' } }}
          >
            <View>{text}</View>
          </LinkSolito>

          {/* <SolitoLink {...props} href="124" nativeID="hello">
            <View>
              <SolitoLink.Text>{text}</SolitoLink.Text>
            </View>
          </SolitoLink> */}
          {/* <TextLink {...props} href="https://google.com/">
            <Text>{text}</Text>
          </TextLink> */}
          {/* <div
            onMouseOver={() => {
              console.log('hello world');
            }}
          >
            <View>{text}</View>
          </div> */}

          {/* <Link href="https://google.com/">
            <Link.Text>{text}</Link.Text>
          </Link> */}
          <NextLink
            href="https://google.com/"
            style={{ backgroundColor: 'pink' }}
            viewProps={{ style: { backgroundColor: 'red' } }}
          >
            <Text>dhjhdsg</Text>
          </NextLink>
          {/* <Pressable
            onPress={() => {
              console.log('hello inside pressable');
            }}
            style={{ backgroundColor: 'red' }}
          >
            <Text>hello</Text>
            <NextLink href="https://google.com/">hello</NextLink>
          </Pressable> */}
        </NavigationContainer>
      </Center>
    </Wrapper>
  );
};

export { Center, SolitoLink };
