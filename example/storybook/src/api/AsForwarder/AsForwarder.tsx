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
  return <Text>Hello</Text>;
  // const As: any = as;
  // return as ? <As {...props}>{children}</As> : <Svg {...props}>{children}</Svg>;
}

export const StyledIcon = styled(
  AsForwarder,
  {
    // props: {
    //   // size: 10,
    //   color: 'red',
    // },
    variants: {
      fontSize: {
        md: {
          bg: '$amber400',
        },
      },
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
          bg: '$red100',
        },
        lg: {
          props: {
            size: 20,
          },
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
        <StyledIcon
          _text={{
            variant: 'solid',
          }}
          size={10}
          sldkfjlskdjf="sdfsdf"
          fontSize={10}
        ></StyledIcon>
      </View>
    </Wrapper>
  );
}

export default AsForwarderExample;
// variant reserved keys
// not utility props as utility props get resolved first
