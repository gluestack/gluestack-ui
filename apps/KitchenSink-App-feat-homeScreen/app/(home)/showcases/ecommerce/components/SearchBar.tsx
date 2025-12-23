import React from 'react';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { SearchIcon } from '@/components/ui/icon';

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <Input className="rounded-lg bg-background-100 data-[focus=true]:border-0 border-0 flex-1 text-typography-400">
      <InputField
        placeholder={placeholder}
        className="text-typography-800 font-normal font-roboto text-lg"
      />
      <InputSlot className="p-3">
        <InputIcon as={SearchIcon} className="text-background-800" />
      </InputSlot>
    </Input>
  );
};

