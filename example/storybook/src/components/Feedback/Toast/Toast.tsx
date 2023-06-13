import React from 'react';
import {
  Button,
  Pressable,
  Text,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
} from '../../../ui-components';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';
import { AsForwarder, styled } from '@gluestack-style/react';
import { createIcon } from '../../../../../../packages/icon/src/createIcon';
import { Path, Svg } from 'react-native-svg';

const IconRoot: any = styled(
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

const ChatIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg fill="none">
      <Path
        d="M8.50001 2C5.18631 2 2.50001 4.68629 2.50001 8C2.50001 9.03957 2.7648 10.0186 3.23086 10.872L2.51925 13.3626C2.4683 13.541 2.52025 13.7329 2.65422 13.8612C2.7882 13.9894 2.98217 14.033 3.15813 13.9743L5.49618 13.195C6.37989 13.707 7.40639 14 8.50001 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.50001 2ZM6.5 7C6.5 6.72386 6.72386 6.5 7 6.5H10C10.2761 6.5 10.5 6.72386 10.5 7C10.5 7.27614 10.2761 7.5 10 7.5H7C6.72386 7.5 6.5 7.27614 6.5 7ZM7 8.5H9C9.27614 8.5 9.5 8.72386 9.5 9C9.5 9.27614 9.27614 9.5 9 9.5H7C6.72386 9.5 6.5 9.27614 6.5 9C6.5 8.72386 6.72386 8.5 7 8.5Z"
        fill="white"
      />
    </Svg>
  ),
});

const DangerIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 25 24',
  path: (
    <Svg fill="none">
      <Path
        d="M19.4702 17.5632L19.4702 17.5632C19.5367 17.6903 19.5693 17.8323 19.5649 17.9756C19.5605 18.1189 19.5192 18.2587 19.4449 18.3814C19.3707 18.5041 19.266 18.6055 19.1411 18.6759C19.0162 18.7463 18.8752 18.7833 18.7319 18.7832H18.7318H6.2691H6.26902C6.12563 18.7833 5.98466 18.7463 5.85974 18.6759C5.73482 18.6055 5.63018 18.5041 5.55594 18.3814C5.4817 18.2587 5.44037 18.1189 5.43594 17.9756C5.43152 17.8323 5.46415 17.6903 5.53068 17.5632L5.5307 17.5632L11.7626 5.66333C11.8332 5.52864 11.9393 5.41583 12.0694 5.33712C12.1995 5.25841 12.3487 5.2168 12.5008 5.2168C12.6528 5.2168 12.802 5.25841 12.9321 5.33712C13.0622 5.4158 13.1682 5.52856 13.2388 5.66319C13.2388 5.66324 13.2389 5.66328 13.2389 5.66333L19.4702 17.5632ZM12.5338 17.7866V17.7866L12.5419 17.7865C12.7395 17.7833 12.9346 17.7406 13.1155 17.661C13.2965 17.5813 13.4597 17.4663 13.5955 17.3227L13.2323 16.9791C13.3223 16.8839 13.3924 16.7716 13.4385 16.6489C13.4845 16.5262 13.5056 16.3955 13.5004 16.2646L14 16.2449C14 16.2449 14 16.2449 14 16.2449C13.9846 15.8532 13.8183 15.4827 13.536 15.2109C13.2536 14.9391 12.877 14.787 12.485 14.7866H12.4844H12.4658V14.7865L12.4566 14.7867C12.2595 14.7903 12.065 14.8331 11.8846 14.9127C11.7042 14.9924 11.5415 15.1071 11.4059 15.2503C11.2704 15.3936 11.1648 15.5624 11.0952 15.7469C11.0256 15.9314 10.9935 16.1279 11.0008 16.325L11.0008 16.3256C11.0157 16.7172 11.1814 17.088 11.4633 17.3603C11.7453 17.6326 12.1215 17.7853 12.5135 17.7866H12.5151H12.5338ZM11.6755 8.78829C11.4567 9.00708 11.3338 9.30383 11.3338 9.61325V13.6132C11.3338 13.9227 11.4567 14.2194 11.6755 14.4382C11.8943 14.657 12.191 14.7799 12.5004 14.7799C12.8099 14.7799 13.1066 14.657 13.3254 14.4382C13.5442 14.2194 13.6671 13.9227 13.6671 13.6132V9.61325C13.6671 9.30383 13.5442 9.00708 13.3254 8.78829C13.1066 8.5695 12.8099 8.44658 12.5004 8.44658C12.191 8.44658 11.8943 8.5695 11.6755 8.78829Z"
        fill="#FAFAFA"
        stroke="#FAFAFA"
      />
    </Svg>
  ),
});

export function Basic(props: any) {
  return (
    <>
      <Wrapper>
        <ToastWithHook {...props} />
      </Wrapper>
    </>
  );
}

const ToastWithHook = ({ placement = 'top', ...props }: any) => {
  const toast = useToast();
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        onPress={() => {
          toast.show({
            placement: placement,
            duration: null,
            render: ({ id }) => {
              return (
                <>
                  <Toast nativeID={id} {...props}>
                    <Toast.Title>Hello World Toast {id}</Toast.Title>
                    <Pressable onPress={() => toast.close(id)} px="$4">
                      <Text>x</Text>
                    </Pressable>
                  </Toast>
                </>
              );
            },
          });
        }}
      >
        <Button.Text>Press Me</Button.Text>
      </Button>
    </View>
  );
};

export {
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
  ChatIcon,
  DangerIcon,
};
