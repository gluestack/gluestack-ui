import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Link, LinkText } from '@/components/ui/link';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const BadgeComponent = () => {
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const handleDenyClick = () => {
    setIsBadgeVisible(false);
  };
  useEffect(() => {
    const check = localStorage.getItem('EU_COOKIE_LAW_CONSENT_GLUESTACK');
    if (check) {
      setIsBadgeVisible(false);
    } else {
      setTimeout(() => {
        setIsBadgeVisible(true);
        setShouldAnimate(true);
      }, 100);
    }
  }, []);
  const handleEulaAccept = () => {
    localStorage.setItem('EU_COOKIE_LAW_CONSENT_GLUESTACK', 'true');
    setIsBadgeVisible(false);
  };
  return isBadgeVisible ? (
    <Box
      className={`web:fixed web:bottom-6 web:sm:left-6 self-center sm:w-auto sm:p-0 px-6 w-full sm:self-end my-0 mx-auto z-50 ${
        shouldAnimate ? 'slide-up' : ''
      }`}
    >
      <Badge className="p-4 gap-3 md:flex-row flex-col rounded-xl bg-background-950">
        <VStack className="md:items-start items-center md:self-center self-start">
          <Text className="leading-6 text-sm font-normal text-typography-50">
            We use cookies to optimise the website experience.
          </Text>
          <HStack className="self-start min-[300px]:flex-row max-[600px]:flex-col">
            <HStack className="min-[300px]:flex-row max-[600px]:flex-col">
              <Text className="leading-6 text-sm font-normal text-typography-50">
                Check
              </Text>
              <Text className="leading-6 text-sm font-normal text-typography-50">
                &nbsp;our&nbsp;
              </Text>
              <Link href="/cookie-policy" isExternal>
                <LinkText className="text-sm text-typography-50">
                  Cookies
                </LinkText>
              </Link>
              <Text className="leading-6 text-sm font-normal text-typography-50">
                &nbsp;&&nbsp;
              </Text>
            </HStack>

            <Link href="/privacy-policy" isExternal>
              <LinkText className="text-typography-50 text-sm">
                Privacy Policy
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <HStack className="gap-3 sm:flex-row md:self-center self-start justify-center">
          <Button
            size="sm"
            action="secondary"
            variant="outline"
            onPress={handleDenyClick}
            className="sm:w-auto"
          >
            <ButtonText className="text-typography-50">Deny</ButtonText>
          </Button>
          <Button
            onPress={handleEulaAccept}
            size="sm"
            action="primary"
            variant="solid"
            className="bg-background-50 sm:w-auto"
          >
            <ButtonText className="text-typography-900">Accept</ButtonText>
          </Button>
        </HStack>
      </Badge>
    </Box>
  ) : null;
};
export default BadgeComponent;
