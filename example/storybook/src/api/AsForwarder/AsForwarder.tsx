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
  AsForwarder,
  {
    // props: {
    //   // size: 10,
    //   color: 'red',
    // },
    // _text: {
    //   props: {
    //     variant: 'solid',
    //     // bg: '$red500',
    //   },
    //   // props: { color: '$red500' },
    // },
    defaultProps: {
      size: 'sm',
    },
    variants: {
      size: {
        xs: {
          props: {
            color: 'blue',
            size: 10,
          },
        },
        sm: {
          props: {
            size: 16,
          },
        },
        md: {
          // props: {
          //   size: 18,
          // },
          height: 100,
          w: 100,
          // color: 'red',
          // },
          // bg: '$red100',
        },
        lg: {
          h: 20,
          w: 20,
        },
        xl: {
          props: {
            size: 24,
          },
        },
      },
    },
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
        <StyledView as={Camera} size={'200'} />
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
// variant reserved keys
// not utility props as utility props get resolved first
