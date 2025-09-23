import React from 'react';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';

export const Note = ({ children, ...props }: any) => {
  return (
    <Box className="p-4 flex border-1 border-outline-100 border rounded-md mb-6 mt-8">
      <HStack className="w-full items-center justify-start flex" space="md">
        <Box className="flex justify-center items-center h-14 w-14 rounded-full bg-background-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            className="stroke-outline-800 fill-outline-300 stroke-2"
          >
            <path
              className="fill-outline-0 stroke-2"
              d="M3 11.5L21 6.5V18.5L3 14.5V11.5Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="fill-outline-0 stroke-2"
              d="M11.6002 17.3002C11.4952 17.681 11.3161 18.0374 11.0733 18.3491C10.8305 18.6607 10.5287 18.9215 10.1851 19.1165C9.84156 19.3115 9.46294 19.4369 9.0709 19.4856C8.67885 19.5343 8.28105 19.5053 7.90022 19.4002C7.51938 19.2951 7.16297 19.1161 6.85133 18.8733C6.53969 18.6305 6.27892 18.3287 6.08392 17.9851C5.88892 17.6415 5.7635 17.2629 5.71482 16.8709C5.66614 16.4788 5.69516 16.081 5.80022 15.7002"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Box className="max-w-fit max-h-fit flex-1 text-sm gap-2.5">
          <Text className="font-semibold text-lg">Important Note</Text>
          {/* in box there is text element with its own styles, we need to override it */}
          <Box className="[&>*]:!text-typography-800 [&>*]:!text-sm [&>*]:!leading-7 [&>*]:mb-0 [&>*]:!tracking-medium [&>*]:!font-sans ">
            {children}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};
