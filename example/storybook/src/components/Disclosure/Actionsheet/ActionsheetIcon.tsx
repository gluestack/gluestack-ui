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
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon
            as={TrashIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'TrashIcon',
                'size': 'sm',
              }),
            }}
          />
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Delete
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon
            as={ShareIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'ShareIcon',
                'size': 'sm',
              }),
            }}
          />
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Share
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon
            as={PlayIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'PlayIcon',
                'size': 'sm',
              }),
            }}
          />
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Play
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon
            as={FavouriteIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'FavouriteIcon',
                'size': 'sm',
              }),
            }}
          />
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Favourite
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem onPress={handleClose}>
          <ActionsheetIcon
            as={CloseIcon}
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Icon',
                'name': 'CloseIcon',
                'size': 'sm',
              }),
            }}
          />
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Cancel
          </ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
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
