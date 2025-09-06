'use client';

import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { ArrowRightIcon, MailIcon } from '@/components/ui/icon';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Input, InputIcon, InputField } from '@/components/ui/input';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
} from '@/components/ui/avatar';
import { Link } from '@/components/ui/link';
import { VStack } from '@/components/ui/vstack';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from '@/components/ui/modal';
import { Icon, CloseIcon } from '@/components/ui/icon';
import axios from 'axios';
import Image from 'next/image';


const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface NewsletterModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
 
}

export default function NewsletterModal({ 
  showModal, 
  setShowModal, 

}: NewsletterModalProps) {
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  const makeRequestToServer = async () => {
    try {
      setLoading(true);
      setError(false);
      setErrorMessage('');
  
      const response = await axios.post('/api/listmonk', { 
        email: email,
        name: ''
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

  const handleClose = () => {
    setShowModal(false);
    // Reset form state when closing
    setEmail('');
    setSuccess(false);
    setError(false);
    setErrorMessage('');
  };

  return (
    <Modal isOpen={showModal} onClose={handleClose} size="lg">
      <ModalBackdrop />
      <ModalContent className="max-w-2xl">
        <ModalHeader>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Box className="p-6">
            <VStack className="gap-3">
              <Heading className="text-3xl font-bold leading-9 mb-3 text-typography-900">
                Get exclusive updates!
              </Heading>
              <Text className="text-lg font-normal leading-[30px]">
                We can&apos;t do this alone, we would love feedback and the
                fastest way for us to reach out to you is via emails. We
                won&apos;t spam, I promise!
              </Text>
              <Link
                className="text-lg font-bold underline underline-offset-4"
                href="https://gluestack.io/support"
                isExternal
              >
                Learn more
              </Link>
            </VStack>
            
            <Box className="flex-col items-center md:flex-row md:items-start md:w-full mt-8">
              <Input
                size="sm"
                isReadOnly={success}
                className="flex-row px-3 py-2 flex-1 mb-4 w-full md:mb-0"
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
                  value={email}
                  aria-label="email"
                  placeholder="Enter your email"
                />
              </Input>
              {!success && (
                <Button
                  size="sm"
                  isDisabled={success || loading}
                  className="w-full ml-0 md:w-auto md:ml-3"
                  onPress={subscribeToNewsLetter}
                >
                  {loading ? (
                    <ButtonText>Loading...</ButtonText>
                  ) : (
                    <>
                      <ButtonText className="font-medium leading-normal">
                        Subscribe
                      </ButtonText>
                      <ButtonIcon
                        className="w-[18px] h-[18px]"
                        as={ArrowRightIcon}
                      />
                    </>
                  )}
                </Button>
              )}
            </Box>
            
            <Box className="mt-4">
              {success && (
                <Text className="text-green-500 mt-1">
                  Thank you for subscribing to our newsletter!
                </Text>
              )}
              {errorMessage && (
                <Text className="text-red-500">{errorMessage}</Text>
              )}
            </Box>

          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}