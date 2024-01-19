import React from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetIcon,
  Button,
  Icon,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  CloseIcon,
} from '@custom-ui/themed';
import { useEffect } from 'react';

const ActionsheetWithIcon = ({
  showActionsheet: showActionsheetProp = true,
  ...props
}) => {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Actionsheet
      isOpen={showActionsheet || showActionsheetProp}
      onClose={handleClose}
      {...props}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon as={TrashIcon} />
          <ActionsheetItemText>Delete</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon as={ShareIcon} />
          <ActionsheetItemText>Share</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon as={PlayIcon} />
          <ActionsheetItemText>Play</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon as={FavouriteIcon} />
          <ActionsheetItemText>Favourite</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon as={CloseIcon} />
          <ActionsheetItemText>Cancel</ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Actionsheet>
  );
};

ActionsheetWithIcon.description = `This is an example of an Actionsheet component with Icons. This is to represent how to use icons in Actionsheet.`;

export default ActionsheetWithIcon;

export {
  Actionsheet,
  Button,
  Icon,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  CloseIcon,
};
