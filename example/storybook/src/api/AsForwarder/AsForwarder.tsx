import React from 'react';
import { View, Text } from 'react-native';
import { Wrapper } from '../../components/Wrapper';
import { Camera } from 'lucide-react-native';
import { StyledHeading } from '../../ui-components/AsForwarder';
import { H2 } from '@expo/html-elements';
import { styled } from '@dank-style/react';

const Box = styled(View, {});
import Svg from 'react-native-svg';

export function AsForwarder({ as, children, ...props }: any) {
  console.log(props, 'props here');
  return <Box>{children}</Box>;
  // const As: any = as;
  // return as ? <As {...props}>{children}</As> : <Svg {...props}>{children}</Svg>;
}
export const StyledText = styled(
  Text,
  {
    // bg: '$red500',
    variants: {
      variant: {
        solid: {
          color: '$blue500',
        },
      },
    },
    // props: {
    //   variant: 'solid',
    // },
  },

  {
    ancestorStyle: ['_text'],
  }
);
export const StyledView = styled(
  View,
  {
    // props: {
    //   // size: 10,
    //   color: 'red',
    // },
    _text: {
      props: {
        variant: 'solid',
        // bg: '$red500',
      },
      // props: { color: '$red500' },
    },
    // variants: {
    //   variant: {
    //     md: {
    //       bg: '$amber400',
    //       _text: {
    //         props: {
    //           variant: 'solid',
    //         },
    //         // props: { color: '$red500' },
    //       },
    //     },
    //   },
    //   // size: {
    //   //   xs: {
    //   //     props: {
    //   //       color: 'blue',
    //   //       size: 10,
    //   //     },
    //   //   },
    //   //   sm: {
    //   //     props: {
    //   //       size: 16,
    //   //     },
    //   //   },
    //   //   md: {
    //   //     // props: {
    //   //     //   size: 18,
    //   //     // },
    //   //     bg: '$red100',
    //   //   },
    //   //   lg: {
    //   //     props: {
    //   //       size: 20,
    //   //     },
    //   //   },
    //   //   xl: {
    //   //     props: {
    //   //       size: 24,
    //   //     },
    //   //   },
    //   // },
    // },
  },

  {
    ancestorStyle: ['_icon'],
    descendantStyle: ['_text'],
    DEBUG: 'STYLED_ICON',
  },
  {}
);
export function AsForwarderExample() {
  const [state, setState] = React.useState(false);
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledView
        // _text={{
        //   variant: 'solid',
        // }}
        // size={10}
        // sldkfjlskdjf="sdfsdf"
        // variant={'md'}
        >
          <StyledText>hello</StyledText>
        </StyledView>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
// variant reserved keys
// not utility props as utility props get resolved first
