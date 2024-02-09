import { SectionList as RNSectionList } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const SectionList = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNSectionList
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
