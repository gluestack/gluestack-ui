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
          <Actionsheet.Icon
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
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Delete
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon
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
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Share
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon
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
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Play
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon
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
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Favourite
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.Icon
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
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Cancel
          </Actionsheet.ItemText>
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
