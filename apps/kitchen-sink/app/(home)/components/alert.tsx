import { Alert, AlertText, AlertIcon } from '@/components/ui/alert'
import { InfoIcon, Icon, CloseIcon, EyeIcon, EyeOffIcon } from '@/components/ui/icon'
import { Center } from '@/components/ui/center'
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { CloudIcon, Bomb } from 'lucide-react-native'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    
    <Alert variant="default" >
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
   
  )
};

const VariantDestructive = () => {
return (
    
    <Alert variant="destructive" >
      <AlertIcon as={InfoIcon} />
      <AlertText>Description of alert!</AlertText>
    </Alert>
   
  )
};

const ExampleAlertWithCTA = () => {
return (
    <Alert
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-foreground/90" size="sm">
          Verify your phone number to create an API key
        </AlertText>
        <Button size="sm">
          <ButtonText>Start verification</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  )
};

const ExampleAlertOnCloudSync = () => {
return (
    <Alert
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center bg-primary/10 border-primary/20"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-foreground/90" size="sm">
          Your data has been synced to the cloud
        </AlertText>
        <Button size="sm">
          <ButtonText>View details</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  )
};

const ExampleWarningAlert = () => {
return (
    <Alert className="gap-3 bg-destructive/10 border-destructive/20">
      <AlertIcon as={Bomb} size="lg" className="mt-1" />
      <AlertText className="text-foreground/80" size="sm">
        <Text className="mr-2 font-semibold text-foreground/90">
          Heads up:
        </Text>
       {" "} Once done, this action cannot be undone
      </AlertText>
    </Alert>
  )
};

const ExampleAlertOnConfirmPasswordModal = () => {
const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <VStack className="gap-5 sm:gap-8 p-6 sm:p-9 border border-border/80 bg-background rounded-xl shadow-hard-5 w-full max-w-[423px]">
      <VStack className="items-center gap-1">
        <Heading size="xl">Confirm our password?</Heading>
        <Text>johnsmith@gmail.com</Text>
      </VStack>
      <VStack className="gap-3 sm:gap-5">
        <Input className="rounded-md" size="sm">
          <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputSlot className="mr-3" onPress={handleState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              className="stroke-foreground/60"
            />
          </InputSlot>
        </Input>
        <Button className="w-full rounded-md" size="sm">
          <ButtonText>Confirm</ButtonText>
        </Button>
      </VStack>
      <Alert className="items-start bg-primary/10 border-primary/20">
        <AlertIcon as={InfoIcon} size="xs" className="stroke-foreground/60" />
        <AlertText className="text-foreground/60" size="xs">
          Minimum 8 characters, with at least 1 uppercase, 1 lowercase, and 1
          number required.
        </AlertText>
      </Alert>
    </VStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "destructive",
    label: "Destructive",
    content: <VariantDestructive />,
  },
  {
    value: "alert-with-cta",
    label: "Alert with CTA",
    content: <ExampleAlertWithCTA />,
  },
  {
    value: "alert-on-cloud-sync",
    label: "Alert on cloud sync",
    content: <ExampleAlertOnCloudSync />,
  },
  {
    value: "warning-alert",
    label: "Warning alert",
    content: <ExampleWarningAlert />,
  },
  {
    value: "alert-on-confirm-password-modal",
    label: "Alert on confirm password modal",
    content: <ExampleAlertOnConfirmPasswordModal />,
  }
];

export default function AlertScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}