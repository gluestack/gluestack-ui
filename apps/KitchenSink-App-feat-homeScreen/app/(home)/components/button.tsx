import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button'
import { EditIcon, ArrowUpIcon, InfoIcon, AddIcon, ArrowLeftIcon } from '@/components/ui/icon'
import { Box } from '@/components/ui/box'
import { Center } from '@/components/ui/center'
import { Heading } from '@/components/ui/heading'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Button variant="default" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const VariantDestructive = () => {
return (
    <Button variant="destructive" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const VariantOutline = () => {
return (
    <Button variant="outline" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const VariantSecondary = () => {
return (
    <Button variant="secondary" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const VariantGhost = () => {
return (
    <Button variant="ghost" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const VariantLink = () => {
return (
    <Button variant="link" size="default">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const SizeSm = () => {
return (
    <Button variant="default" size="sm">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const SizeLg = () => {
return (
    <Button variant="default" size="lg">
        <ButtonText>Button</ButtonText>
    </Button>
  )
};

const ExampleButtonWithLoadingState = () => {
return (
    <Button className='p-3'>
      <ButtonSpinner color="gray" />
      <ButtonText className='font-medium text-sm ml-2'>Please wait...</ButtonText>
    </Button>
  )
};

const ExampleIconButton = () => {
return (
    <Button
      size='lg'
      className='rounded-full p-3.5'
    >
      <ButtonIcon as={EditIcon} />
    </Button>
  )
};

const ExampleLinkButton = () => {
return (
    <Button variant='link'>
      <ButtonText className='font-medium text-sm text-typography-900'>
        Back to top
      </ButtonText>
      <ButtonIcon as={ArrowUpIcon} className='h-3 w-3 text-background-900 ml-1' />
    </Button>
  )
};

const ExampleButtonWithIcon = () => {
return (
    <Box>
      <Button>
        <ButtonIcon as={InfoIcon} className='mr-2'/>
        <ButtonText>Left Icon</ButtonText>
      </Button>
      <Button variant='solid' className='mt-2'>
        <ButtonText>Right Icon</ButtonText>
        <ButtonIcon as={AddIcon} className='ml-2'/>
      </Button>
    </Box>
  )
};

const ExampleButtonWithFullWidth = () => {
return (
    <Center>
      <Box className='p-5 max-w-96 border border-background-300 rounded-lg'>
        <VStack className='pb-4' space='xs'>
          <Heading className='leading-[30px]'>
            Set new password
          </Heading>
          <Text className='text-sm'>
            Almost done. Enter your new password and you are all set.
          </Text>
        </VStack>
        <VStack space='xl' className='py-2'>
          <Input>
            <InputField
              className='py-2'
              placeholder='New password'
            />
          </Input>
          <Input>
            <InputField
              className='py-2'
              placeholder='Confirm new password'
            />
          </Input>
        </VStack>
        <VStack space='lg' className='pt-4'>
          <Button size='sm'>
            <ButtonText>
              Submit
            </ButtonText>
          </Button>
          <Box className='flex flex-row'>
            <Button variant='link' size='sm' className='p-0'>
              <ButtonIcon
                className='mr-1'
                size='md'
                as={ArrowLeftIcon}
              />
              <ButtonText>
                Back to login
              </ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </Center>
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
    value: "outline",
    label: "Outline",
    content: <VariantOutline />,
  },
  {
    value: "secondary",
    label: "Secondary",
    content: <VariantSecondary />,
  },
  {
    value: "ghost",
    label: "Ghost",
    content: <VariantGhost />,
  },
  {
    value: "link",
    label: "Link",
    content: <VariantLink />,
  },
  {
    value: "sm",
    label: "Sm",
    content: <SizeSm />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "button-with-loading-state",
    label: "Button with Loading State",
    content: <ExampleButtonWithLoadingState />,
  },
  {
    value: "icon-button",
    label: "Icon Button",
    content: <ExampleIconButton />,
  },
  {
    value: "link-button",
    label: "Link Button",
    content: <ExampleLinkButton />,
  },
  {
    value: "button-with-icon",
    label: "Button With Icon",
    content: <ExampleButtonWithIcon />,
  },
  {
    value: "button-with-full-width",
    label: "Button with Full Width",
    content: <ExampleButtonWithFullWidth />,
  }
];

export default function ButtonScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}