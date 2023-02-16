import {
  Root,
  Backdrop,
  CloseButton,
  Body,
  Content,
  Footer,
  Header,
} from './styled-component';
import { createAlertDialog } from '@universa11y/alert-dialog';
import React from 'react';
import { useState } from 'react';
import { createIcon } from '@universa11y/icon';
import { IconRoot } from './styled-component/Icon';
import { Text, Pressable } from 'react-native';
import { Wrapper } from '../Wrapper';
export { Svg, G, Path, Polygon, Line, Circle, Rect } from 'react-native-svg';

export const AlertDialogTemp: any = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
});
const CloseIcon: any = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
});

export const AlertDialog = () => {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  return (
    <Wrapper>
      <Pressable onPress={handleClose}>
        <Text>Click me</Text>
      </Pressable>

      {/* @ts-ignore */}
      <AlertDialogTemp isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogTemp.Backdrop />
        <AlertDialogTemp.Content>
          <AlertDialogTemp.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </AlertDialogTemp.CloseButton>
          <AlertDialogTemp.Header>
            {/* @ts-ignore */}
            <Text variant="AlertDialogTempHeader">Return Policy</Text>
          </AlertDialogTemp.Header>
          <AlertDialogTemp.Body>
            <Text>
              {`Create a 'Return Request' under “My Orders" section of App/Website. Follow the screens that come up after tapping on the 'Return' button. Please make a note of the Return ID that we generate at the end of the process. Keep the item ready for pick up or ship it to us basis on the return mode.`}
            </Text>
          </AlertDialogTemp.Body>
          <AlertDialogTemp.Footer>
            <Pressable onPress={handleClose}>
              <Text>Cancel</Text>
            </Pressable>
          </AlertDialogTemp.Footer>
        </AlertDialogTemp.Content>
      </AlertDialogTemp>
    </Wrapper>
  );
};

export default AlertDialog;
