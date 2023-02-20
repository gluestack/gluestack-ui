import React from 'react';
import Wrapper from '../Wrapper';
import { Camera } from 'lucide-react-native';
import { Icon } from './Icon';

export const AsForwarderIcon = ({ ...props }: any) => {
  return (
    <Wrapper>
      <Icon as={Camera} size={'sm'} {...props} />
    </Wrapper>
  );
};
