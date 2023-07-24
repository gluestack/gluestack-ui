import React from 'react';

import {
  Actionsheet,
  Button,
  Icon,
  TrashIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  CloseIcon,
} from '../../../ui-components';
import { useEffect } from 'react';

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
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
      <Actionsheet.Backdrop />
      <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon>
            <Icon as={TrashIcon} />
          </Actionsheet.Icon>
          <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon>
            <Icon as={ShareIcon} />
          </Actionsheet.Icon>
          <Actionsheet.ItemText>Share</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon>
            <Icon as={PlayIcon} />
          </Actionsheet.Icon>
          <Actionsheet.ItemText>Play</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon>
            <Icon as={FavouriteIcon} />
          </Actionsheet.Icon>
          <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon>
            <Icon as={CloseIcon} />
          </Actionsheet.Icon>
          <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

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
