import React from 'react';
import { Icon, SearchIcon } from '@/components/ui/icon';

const IconBasic = ({ ...props }: any) => {
  return <Icon as={SearchIcon} {...props} />;
};

IconBasic.description =
  'This is a basic Icon component example. Icons are used to communicate a state that affects a system, feature or page';

export default IconBasic;
