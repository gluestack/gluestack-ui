import React, { memo } from 'react';
import { CircleIcon } from '@/components/ui/icon';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { StyledLI } from './StyledLI';

export const LI = memo(
  ({
    children,
    IconProps,
    containerProps,
    ol = false,
    index,
    ...props
  }: any) => {
    return ol ? (
      <StyledLI className="max-w-full" {...props}>
        <HStack className="items-start w-full" {...containerProps}>
          <CircleIcon
            className="text-typography-400 w-2 h-2 mr-2.5 mt-4 flex-shrink-0"
            {...IconProps}
          />
          <Text className="py-[6px] font-bold">{`Step `}</Text>
          <Text className="py-[6px] font-bold px-[1px]">{index - 1}</Text>
          <Text className="py-[6px] font-bold">:</Text>

          <Text className="py-[6px] pl-[18px] text-typography-700 web:inline web:break-words web:whitespace-normal web:w-[calc(100vh-30px)]">
            {children}
          </Text>
        </HStack>
      </StyledLI>
    ) : (
      <StyledLI className="max-w-full" {...props}>
        <HStack className="items-start w-full" {...containerProps}>
          <CircleIcon
            className="fill-typography-400 stroke-typography-400 w-2 h-2 mr-2.5 mt-4 flex-shrink-0"
            {...IconProps}
          />
          <Text className="py-[6px] text-typography-700 web:break-words web:inline web:whitespace-normal">
            {children}
          </Text>
        </HStack>
      </StyledLI>
    );
  }
);
