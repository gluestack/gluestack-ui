import React from 'react';
import { MailIcon, MessageCircleIcon, PhoneIcon } from '@/components/ui/icon';
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
        <SegmentedControlItemIcon as={MailIcon} />
        <SegmentedControlItemText>inbox</SegmentedControlItemText>
      </SegmentedControlItem>

      <SegmentedControlItem value="drafts">
        <SegmentedControlItemIcon as={MessageCircleIcon} />
        <SegmentedControlItemText>drafts</SegmentedControlItemText>
      </SegmentedControlItem>

      <SegmentedControlItem value="sent">
        <SegmentedControlItemIcon as={PhoneIcon} />
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
