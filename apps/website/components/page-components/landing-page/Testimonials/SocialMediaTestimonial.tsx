'use client';
import {
  Image,
  HStack,
  VStack,
  Text,
  Divider,
  Avatar,
  AvatarImage,
  Box,
  Link,
} from '@/components/ui';
import { ThemeContext } from '@/utils/context/theme-context';
import { useContext } from 'react';

type Props = {
  profileURI: string;
  authorName: string;
  profileName: string;
  isVerified?: boolean;
  testimonialContent: string;
  timestamp?: string;
  date?: string;
  logoLight: string;
  logoDark: string;
  link: string;
  image?: string;
};

export const SocialMediaTestimonial = ({
  profileURI,
  authorName,
  profileName,
  isVerified = false,
  testimonialContent,
  timestamp,
  date,
  logoDark,
  logoLight,
  link,
  image,
}: Props) => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Link
      href={link}
      isExternal
      className="p-5 h-full flex flex-col shadow-hard-5 rounded-lg border border-outline-100 flex-1"
    >
      <VStack className="flex-1">
        <HStack className="justify-between items-center">
          <HStack className="gap-3 items-center">
            <Avatar>
              <AvatarImage
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                alt="profile-image"
                source={{
                  uri: profileURI,
                }}
              />
            </Avatar>
            <VStack className="gap-1">
              <HStack className="gap-2">
                <Text className="text-sm text-typography-900 font-semibold font-roboto">
                  {authorName}
                </Text>
                {isVerified && (
                  <Image
                    source={require('@/public/icon/social/twitter-verified.svg')}
                    alt="verified-tag"
                    size="md"
                    className="w-5 h-5"
                  />
                )}
              </HStack>
              <Text className="text-sm text-typography-400 font-roboto">
                {profileName}
              </Text>
            </VStack>
          </HStack>
          <Box className="h-[22px] w-[22px]">
            {colorMode === 'dark' ? (
              <Image source={logoDark} alt="twitter-icon" className="w-5 h-5" />
            ) : (
              <Image
                source={logoLight}
                className="w-5 h-5"
                alt="twitter-icon"
              />
            )}
          </Box>
        </HStack>
        <Text className="text-sm leading-[21px] py-7 font-roboto">
          {testimonialContent}
        </Text>
        {image && (
          <Box className="my-1">
            <Image
              source={image}
              alt="testimonial-image"
              className="w-full xl:h-48 lg:h-44 h-36 rounded-lg aspect-[256/133] object-contain xl:object-fill"
              resizeMode="contain"
            />
          </Box>
        )}
      </VStack>
      <Box className="mt-auto pt-2">
        <HStack>
          {timestamp && (
            <Text className="  text-sm text-typography-500 leading-[21px]">
              {timestamp}
            </Text>
          )}
          {timestamp && date && (
            <Divider
              orientation="vertical"
              className="mx-2 h-[21px] leading-[21px]"
            />
          )}
          {date && (
            <Text className="  text-sm text-typography-500 leading-[21px]">
              {date}
            </Text>
          )}
        </HStack>
      </Box>
    </Link>
  );
};
