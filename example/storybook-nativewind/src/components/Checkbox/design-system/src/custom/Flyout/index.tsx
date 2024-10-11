import React, { useState } from 'react';
import {
  HStack,
  Pressable,
  Text,
  Box,
  ChevronDownIcon,
  Link,
} from '../../primitives';
import data from '../../utils/ecosystem.json';
import NextImage from 'next/image';
import type { DataKey } from '../../utils/ecosystem';

export function Flyout({
  values,
  current,
}: {
  values: Array<DataKey>;
  current: DataKey;
}) {
  const [isOpen, setIsOpen] = useState(false);

  let keys = Object.keys(data) as Array<DataKey>;
  keys = keys.filter((element) => values.includes(element));
  let selectedItemId = '';

  if (keys.includes(current)) {
    const k = keys.findIndex((val) => val === current);
    const temp = keys[k];

    keys[k] = keys[keys.length - 1];
    keys[keys.length - 1] = temp;

    selectedItemId = data[current].id;
  }

  const cardsData = keys.map((key) => data[key]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        sx={{
          _web: {
            ':focus': {
              boxShadow: '#004282 0px 0px 0px 2px',
              _dark: {
                boxShadow: '#004282 0px 0px 0px 2px',
              },
            },
          },
        }}
      >
        <HStack alignItems="center">
          <Text
            color="$trueGray50"
            fontWeight="$medium"
            fontSize="$md"
            lineHeight="$md"
          >
            Products
          </Text>
          <ChevronDownIcon ml="$1" color="$trueGray50" width="$3" height="$3" />
        </HStack>
      </Pressable>

      {isOpen && (
        <Box position="absolute">
          <Box
            bg="$backgroundDark950"
            borderWidth={1}
            borderColor="$borderDark900"
            width={420}
            borderRadius="$md"
            mt="$2"
          >
            {cardsData.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  p="$6"
                  sx={{
                    ':hover': {
                      bg: '$backgroundDark900',
                    },
                  }}
                  pointerEvents={
                    item.name === 'gluestack-ui pro' ? 'none' : 'auto'
                  }
                  isExternal
                  borderBottomWidth={index !== cardsData.length - 1 ? 1 : 0}
                  borderBottomColor="$borderDark900"
                  onPress={() => setIsOpen(false)}
                  isDisabled={selectedItemId == item.id}
                >
                  <HStack alignItems="center">
                    <NextImage
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={`${item.name} logo`}
                    />
                    <Text
                      ml="$3"
                      color="$trueGray50"
                      fontWeight="$medium"
                      fontSize="$md"
                      lineHeight="$md"
                    >
                      {item.name}
                    </Text>
                    {item.tag && (
                      <Box
                        py="$0.5"
                        px="$2.5"
                        ml="$2"
                        borderRadius="$full"
                        borderWidth={2}
                        borderColor="$borderDark900"
                        alignSelf="flex-start"
                        sx={{
                          _web: {
                            background:
                              'linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)',
                            backdropFilter: 'blur(12px)',
                          },
                        }}
                      >
                        <Text
                          fontSize="$2xs"
                          lineHeight="$2xs"
                          color="$textDark50"
                          sx={{
                            _dark: {
                              color: '$textDark50',
                            },
                          }}
                        >
                          {item.tag}
                        </Text>
                      </Box>
                    )}
                    {item.ossTag && (
                      <Box
                        py="$0.5"
                        px="$2.5"
                        ml="$1.5"
                        borderRadius="$full"
                        borderWidth={2}
                        borderColor="$borderDark900"
                        alignSelf="flex-start"
                        sx={{
                          _web: {
                            background:
                              'linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)',
                            backdropFilter: 'blur(12px)',
                          },
                        }}
                      >
                        <Text
                          fontSize="$2xs"
                          lineHeight="$2xs"
                          color="$textDark50"
                          sx={{
                            _dark: {
                              color: '$textDark50',
                            },
                          }}
                        >
                          {item.ossTag}
                        </Text>
                      </Box>
                    )}

                    {current === item.name && (
                      <Box ml="auto">
                        <TickIcon />
                      </Box>
                    )}
                  </HStack>
                  <HStack mt="$2.5">
                    <Text
                      color="$trueGray400"
                      fontWeight="$normal"
                      fontSize="$sm"
                      lineHeight="$sm"
                    >
                      {item.flyoutDescription}
                    </Text>
                  </HStack>
                </Link>
              );
            })}
          </Box>
        </Box>
      )}
    </div>
  );
}

const TickIcon = () => {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3334 9L11 16.3333L7.66669 13"
        stroke="#FAFAFA"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width={25} height={25} rx="12.5" stroke="#404040" />
    </svg>
  );
};
