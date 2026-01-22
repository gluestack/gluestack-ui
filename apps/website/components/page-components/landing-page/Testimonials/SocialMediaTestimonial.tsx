'use client';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Link } from '@/components/ui/link';
import { Divider } from '@/components/ui/divider';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Image } from '@/components/ui/image';
import { useColorMode } from '@/app/provider';

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
  const { colorMode } = useColorMode();

  return (
    <Link
      href={link}
      isExternal
      className="p-5 h-full flex flex-col shadow-hard-5 rounded-lg border border-border flex-1"
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
                <Text className="text-sm text-foreground font-semibold font-roboto">
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
              <Text className="text-sm text-muted-foreground font-roboto">
                {profileName}
              </Text>
            </VStack>
          </HStack>
          <Box className="h-[22px] w-[22px]">
            <Image
              source={colorMode === 'dark' ? logoDark : logoLight}
              className="w-5 h-5"
              alt="twitter-icon"
            />
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
            <Text className="  text-sm text-muted-foreground leading-[21px]">
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
            <Text className="  text-sm text-muted-foreground leading-[21px]">
              {date}
            </Text>
          )}
        </HStack>
      </Box>
    </Link>
  );
};
