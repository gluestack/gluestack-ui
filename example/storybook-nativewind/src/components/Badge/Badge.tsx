import React from 'react';
import {
  PaintBucket,
  PuzzleIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';

const BadgeBasic = ({ text = 'NEW FEATURE', _colorMode, ...props }: any) => {
  return (
    <Badge {...props}>
      <BadgeText>{text}</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  );
};

BadgeBasic.description =
  'This is a basic Badge component example. The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BadgeBasic;

export {
  Badge,
  BadgeText,
  BadgeIcon,
  PuzzleIcon,
  PaintBucket,
  GlobeIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
};
