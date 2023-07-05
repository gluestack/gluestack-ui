import React from 'react';
import {
  Button,
  Pressable,
  Toast,
  useToast,
  Icon,
  CloseIcon,
  VStack,
  CheckIcon,
} from '../../../ui-components';
import { View } from 'react-native';
import Wrapper from '../../Wrapper';
import { MessageCircle, AlertTriangleIcon } from 'lucide-react-native';

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
            accessibilityAnnouncement: 'hello',
            accessibilityLiveRegion: 'polite',
            avoidKeyboard: false,

            render: ({ id }) => {
              return (
                <>
                  <Toast nativeID={id} {...props}>
                    <VStack space="xs">
                      <Toast.Title>Hello World Toast </Toast.Title>
                      <Toast.Description>
                        Please create a support ticket from the support page
                      </Toast.Description>
                    </VStack>
                    <Pressable onPress={() => toast.close(id)}>
                      <Icon as={CloseIcon} color="$coolGray50" />
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
  MessageCircle,
  AlertTriangleIcon,
};
