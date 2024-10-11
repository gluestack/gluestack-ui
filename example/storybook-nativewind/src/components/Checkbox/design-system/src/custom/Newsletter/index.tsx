import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  ArrowForwardIcon,
  Link,
} from '../../primitives';
import { Done } from './images';
import Image from 'next/image';
import axios from 'axios';
import { Avatar } from '../../composites';

export type NewsletterAvatarItem = {
  id: 'string';
  userName: 'string';
  avatarURl: 'string';
  profileUrl: 'string';
};

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  const makeRequestToServer = async () => {
    setLoading(true);
    const res = await axios.post('/api/newsletter-subscribe', { email: email });
    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      setLoading(false);
      setErrorMessage('');
      setEmail('');
    } else {
      setError(true);
      setSuccess(false);
      setLoading(false);
      setErrorMessage('Error in subscribing!');
      setEmail('');
    }
  };

  const subscribeToNewsLetter = (e: any) => {
    e.preventDefault();
    if (email === '') {
      setErrorMessage('Email address is required!');
      setError(true);

      setError(true);
    } else if (!emailValidator.test(email)) {
      setErrorMessage('Enter a valid email address!');
      setError(true);
    } else {
      makeRequestToServer();
    }
  };

  return (
    <Box
      sx={{
        '@base': {
          mb: '$20',
          pt: '$10',
        },
        '@md': {
          mb: 200,
          pt: 100,
        },
      }}
      nativeID="subscribe"
    >
      <Box maxWidth={1024}>
        <Text
          fontWeight="$bold"
          color="$trueGray50"
          mb="$6"
          letterSpacing="$sm"
          fontFamily="$heading"
          width="100%"
          sx={{
            '@base': {
              fontSize: '$3xl',
              lineHeight: '$3xl',
            },
            '@md': {
              fontSize: '$4xl',
            },
            '@lg': {
              lineHeight: '$4xl',
              fontSize: '$5xl',
            },
          }}
        >
          Get exclusive updates!
        </Text>
        <Text
          fontWeight="$normal"
          fontSize="$xl"
          lineHeight="$xl"
          color="$textDark300"
          mb="$9"
        >
          We can&apos;t do this alone, we would love feedback and the fastest
          way for us to reach out to you is via emails. We won&apos;t spam, I
          promise!
        </Text>
        <Box
          flexDirection="row"
          alignItems="center"
          mb="$2"
          sx={{
            '@base': {
              flexDirection: 'column',
            },
            '@md': {
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: '$full',
            },
          }}
        >
          <Input
            isReadOnly={success}
            variant="rounded"
            borderColor="$borderDark700"
            flexDirection="row"
            py="$3"
            px="$7"
            flex={1}
            sx={{
              '@base': {
                mb: '$4',
                width: '$full',
              },
              '@md': {
                maxWidth: 380,
                mb: 0,
              },
              '@lg': {
                maxWidth: 420,
              },
            }}
          >
            <Input.Icon backgroundColor="transparent" justifyContent="center">
              <Image
                src="/icon/mail.svg"
                width={24}
                height={24}
                alt="mail icon"
              />
            </Input.Icon>
            <Input.Input
              flex={1}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  subscribeToNewsLetter(e);
                }
              }}
              onChangeText={(value: string) => {
                setEmail(value);
              }}
              fontFamily="$body"
              placeholder="Enter your email"
              color="$trueGray400"
              fontWeight="$normal"
              py="$0"
              px="$4"
              ml="$0"
              sx={{
                '@base': {
                  fontSize: '$xl',
                  lineHeight: '$xl',
                },
                // "@md": {
                //   fontSize: "$2xl",
                //   lineHeight: "$2xl",
                // },
              }}
            />
          </Input>
          <Button
            isDisabled={success}
            variant="primary"
            py="$3"
            px="$6"
            sx={{
              '@base': {
                width: '100%',
                ml: '$0',
              },
              '@md': {
                width: 'auto',
                ml: '$3',
              },
            }}
            onPress={subscribeToNewsLetter}
          >
            {loading ? (
              <Button.Spinner color={'$trueGray50'} />
            ) : !success ? (
              <>
                <Button.Text
                  color="$textDark50"
                  fontWeight="$medium"
                  fontFamily="$body"
                  sx={{
                    '@base': {
                      fontSize: '$xl',
                      lineHeight: '$xl',
                    },
                    // "@md": {
                    //   fontSize: "$2xl",
                    //   lineHeight: "$2xl",
                    // },
                  }}
                >
                  Subscribe
                </Button.Text>
                <ArrowForwardIcon
                  w="$5"
                  h="$5"
                  color="$trueGray50"
                  ml="$4"
                  strokeWidth={0.3}
                />
              </>
            ) : (
              <Done />
            )}
          </Button>
        </Box>
        <Box>
          {success && (
            <Text ml="$4" color="$green500">
              Thank you for subscribing to our newsletter!
            </Text>
          )}
          <Text ml="$4" color="$red500">
            {errorMessage}
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="flex-start"
        mt="$9"
        sx={{
          _web: {
            width: 'fit-content',
          },
        }}
      >
        <Avatar.Group
          flexDirection="row-reverse"
          sx={{
            '@base': {
              ml: 20,
            },
            '@md': {
              ml: 10,
            },
          }}
        >
          {newsletterAvatarData.map((item) => (
            <Link href={item.profileUrl} isExternal key={item.id}>
              <Avatar
                w="$20"
                h="$20"
                borderWidth={2}
                borderColor="$black"
                sx={{
                  '@base': {
                    ml: -20,
                  },
                  '@sm': {
                    ml: -10,
                  },
                }}
              >
                <Avatar.FallbackText>{item.userName}</Avatar.FallbackText>
                <Avatar.Image
                  source={{
                    uri: item.avatarURl,
                  }}
                />
              </Avatar>
            </Link>
          ))}
        </Avatar.Group>
        <Box
          pointerEvents="none"
          position="absolute"
          top="-25%"
          bottom={-45.234}
          left="86%"
          sx={{
            '_web': {
              background:
                'linear-gradient(to right, #000 8.08%, rgba(0, 0, 0, 0.00) 52.72%)',
              filter: 'blur(16px)',
            },
            '@base': {
              right: '-6%',
            },
            '@sm': {
              right: '-20%',
              _web: {
                filter: 'blur(24px)',
              },
            },
            '@md': {
              right: '-100%',
            },
          }}
        />
      </Box>
    </Box>
  );
};
