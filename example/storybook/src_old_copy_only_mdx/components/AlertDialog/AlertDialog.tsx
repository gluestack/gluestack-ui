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

import Root from './styled-components/Root';
import Content from './styled-components/Content';
import CloseButton from './styled-components/CloseButton';
import Header from './styled-components/Header';
import Footer from './styled-components/Footer';
import Body from './styled-components/Body';
import Backdrop from './styled-components/Backdrop';
import { createAlertDialog } from '@universa11y/alert-dialog';

export const AccessibleAlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
}) as any;

export const CloseIcon: any = createIcon({
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
      <AccessibleAlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AccessibleAlertDialog.Backdrop />
        <AccessibleAlertDialog.Content>
          <AccessibleAlertDialog.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </AccessibleAlertDialog.CloseButton>
          <AccessibleAlertDialog.Header>
            {/* @ts-ignore */}
            <Text variant="AccessibleAlertDialogHeader">Return Policy</Text>
          </AccessibleAlertDialog.Header>
          <AccessibleAlertDialog.Body>
            <Text>
              {`Create a 'Return Request' under “My Orders" section of App/Website. Follow the screens that come up after tapping on the 'Return' button. Please make a note of the Return ID that we generate at the end of the process. Keep the item ready for pick up or ship it to us basis on the return mode.`}
            </Text>
          </AccessibleAlertDialog.Body>
          <AccessibleAlertDialog.Footer>
            <Pressable onPress={handleClose}>
              <Text>Cancel</Text>
            </Pressable>
          </AccessibleAlertDialog.Footer>
        </AccessibleAlertDialog.Content>
      </AccessibleAlertDialog>
    </Wrapper>
  );
};

export default AlertDialog;
