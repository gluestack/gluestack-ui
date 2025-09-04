import { useState, useEffect } from 'react';
import { Box } from '@/components/ui/box';
import { ArrowRightIcon, MailIcon } from '@/components/ui/icon';
import { Spinner } from '@/components/ui/spinner';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Input, InputIcon, InputField } from '@/components/ui/input';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
} from '@/components/ui/avatar';
import { Link, LinkText } from '@/components/ui/link';
import { VStack } from '@/components/ui/vstack';
import axios from 'axios';
import Image from 'next/image';

export type NewsletterAvatarItem = {
  id: string;
  userName: string;
  avatarURl: string;
  profileUrl: string;
};

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function shuffleArray(array: NewsletterAvatarItem[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const Newsletter = ({
  newsletterAvatarData,
}: {
  newsletterAvatarData: NewsletterAvatarItem[];
}) => {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  const [avatars, setAvatars] = useState<NewsletterAvatarItem[]>([]);

  useEffect(() => {
    if (newsletterAvatarData.length > 0) {
      const firstAvatar = newsletterAvatarData[0];

      // Always include avatars at indices 6 and 7 if they exist
      const requiredAvatars = [];
      if (newsletterAvatarData[5])
        requiredAvatars.push(newsletterAvatarData[5]);
      if (newsletterAvatarData[6])
        requiredAvatars.push(newsletterAvatarData[6]);

      // Get remaining avatars (excluding index 0, 6, and 7)
      const excludedIndices = new Set([0, 5, 6]);
      const otherAvatars = newsletterAvatarData.filter(
        (_, index) => !excludedIndices.has(index)
      );

      // Shuffle the remaining avatars
      const shuffledOthers = shuffleArray([...otherAvatars]);

      // Combine required avatars with shuffled others to fill up to 4 slots
      const remainingSlots = 4 - requiredAvatars.length;
      const additionalAvatars = shuffledOthers.slice(0, remainingSlots);

      // Shuffle the position of required + additional avatars
      const allRemainingAvatars = shuffleArray([
        ...requiredAvatars,
        ...additionalAvatars,
      ]);

      setAvatars([firstAvatar, ...allRemainingAvatars]);
    }
  }, [newsletterAvatarData]);

  const makeRequestToServer = async () => {
    console.log(email)
    try {
      setLoading(true);
      setError(false);
      setErrorMessage('');
  
      const response = await axios.post('/api/listmonk', { 
       
        email: email,
        name: '' // You can add a name field to your form if needed
      });
  
      if (response.status === 200) {
        setSuccess(true);
        setError(false);
        setErrorMessage('');
        setEmail('');
      }
    } catch (error: any) {
      setError(true);
      setSuccess(false);
      
      // Handle different error cases based on status code
      if (error.response?.status === 409) {
        setErrorMessage('This email is already subscribed!');
      } else if (error.response?.status === 400) {
        setErrorMessage('Please enter a valid email address!');
      } else {
        setErrorMessage(error.response?.data?.message || 'Error subscribing to newsletter. Please try again!');
      }
      
      setEmail('');
    } finally {
      setLoading(false);
    }
  };
  const subscribeToNewsLetter = (e: any) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Email address is required!');
      setError(true);
    } else if (!emailValidator.test(email)) {
      setErrorMessage('Enter a valid email address!');
      setError(true);
    } else {
      makeRequestToServer();
    }
  };

  return (
    <Box className="max-w-[1024px] mt-[120px]">
      <VStack className="gap-3">
        <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 mb-3 text-typography-900 sm:text-4xl">
          Get exclusive updates!
        </Heading>
        <Text className="text-lg font-normal leading-[30px] lg:w-[75%]">
          We can&apos;t do this alone, we would love feedback and the fastest
          way for us to reach out to you is via emails. We won&apos;t spam, I
          promise!
        </Text>
        <Link className="w-fit inline-block">
          <LinkText
            className="text-lg font-bold underline underline-offset-4 group-hover/link:underline"
            href="https://gluestack.io/support"
          >
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <Box className="flex-col items-center md:flex-row md:items-start md:w-full mt-12">
        <Input
          size="sm"
          isReadOnly={success}
          className="flex-row px-3 py-2 flex-1 mb-4 w-full md:max-w-[380px] md:mb-0 lg:max-w-[420px]"
        >
          <InputIcon as={MailIcon} />
          <InputField
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                subscribeToNewsLetter(e);
              }
            }}
            onChangeText={(value: string) => {
              setEmail(value);
            }}
            aria-label="email"
            placeholder="Enter your email"
          />
        </Input>
        {!success && (
          <Button
            size="sm"
            isDisabled={success}
            className="w-full ml-0 md:w-auto md:ml-3"
            onPress={subscribeToNewsLetter}
          >
            {loading ? (
             <ButtonText className="text-red-500">loading</ButtonText>
            ) : (
              <>
                <ButtonText className="font-medium leading-normal">
                  Subscribe
                </ButtonText>
                <ButtonIcon
                  className="w-[18px] h-[18px] ml-1"
                  as={ArrowRightIcon}
                />
              </>
            )}
          </Button>
        )}
      </Box>
      <Box>
        {success && (
          <Text className="text-green-500 mt-1">
            Thank you for subscribing to our newsletter!
          </Text>
        )}
        <Text className="text-red-500">{errorMessage}</Text>
      </Box>
      <Box className="relative mt-4 ml-3 w-fit">
        {/* <Box className="absolute inset-0 bg-gradient-to-r from-[#fff] from-10% to-[#000] to-100%"></Box> */}
        <AvatarGroup className="flex-row-reverse mt-4 web:w-fit ml-3">
          {avatars.map((item) => (
            <Link href={item.profileUrl} isExternal key={item.id}>
              <Box className="relative group">
                <Avatar className="md:w-20 md:h-20 w-14 h-14 border-2 border-background-0">
                  <AvatarFallbackText>{item.userName}</AvatarFallbackText>
                  {item.avatarURl && (
                    <Image
                      className="rounded-full"
                      alt="github profile picture"
                      src={item.avatarURl}
                      fill
                    />
                  )}
                </Avatar>
                <Text className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background-800 text-background-0 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.userName}
                </Text>
              </Box>
            </Link>
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
};
