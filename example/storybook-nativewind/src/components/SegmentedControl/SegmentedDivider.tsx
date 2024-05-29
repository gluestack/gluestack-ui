import React from 'react';
import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlItemText,
  SegmentedControlItemIcon,
} from '@/components/ui/segmented-control';

export const SegmentedControlBasic = ({ ...props }: any) => {
  return (
    <SegmentedControl
      // defaultValue={['inbox', 'drafts']}
      {...props}
      // exclusive
      // className="p-1"
    >
      <SegmentedControlItem value="inbox">
        <SegmentedControlItemText>inbox</SegmentedControlItemText>
      </SegmentedControlItem>

      <SegmentedControlItem value="drafts">
        <SegmentedControlItemText>drafts</SegmentedControlItemText>
      </SegmentedControlItem>

      <SegmentedControlItem value="sent">
        <SegmentedControlItemText>sent</SegmentedControlItemText>
      </SegmentedControlItem>
    </SegmentedControl>
  );
};

SegmentedControlBasic.description = '';

export default SegmentedControlBasic;

export {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlItemText,
  SegmentedControlItemIcon,
};
