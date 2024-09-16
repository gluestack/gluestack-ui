import React from 'react';
import { AddIcon, CloseIcon, Icon, SearchIcon } from '@/components/ui/icon';
import { X, Search, Plus } from 'lucide-react-native';

const IconPropTesting = () => {
  return (
    <>
      <Icon as={SearchIcon} />
      <Icon as={Search} />

      <Icon as={AddIcon} className={'stroke-green-600'} />
      <Icon as={Plus} className={'stroke-green-600'} />

      <Icon as={SearchIcon} className={'text-yellow-600 fill-red-400'} />
      <Icon as={Search} className={'text-yellow-600 fill-red-400'} />

      <Icon as={CloseIcon} color="red" />
      <Icon as={X} color="red" />
    </>
  );
};

export default IconPropTesting;
