import React from 'react';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { SearchIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
interface SearchBarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <Box className="flex-1">
      <Input className="rounded">
        <InputField
          placeholder={placeholder}
          className="dark:bg-[rgb(15,21,41)] font-body text-lg"
        />
        <InputSlot className="p-3 dark:bg-[rgb(15,21,41)]">
          <InputIcon as={SearchIcon} className="text-foreground" />
        </InputSlot>
      </Input>
    </Box>
  );
};
