import { CodePreviewer } from '@/components/custom/code-previewer';
import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { EditIcon, ArrowUpIcon, InfoIcon, AddIcon, ArrowLeftIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return (
    <Button variant="{{variant}}" size="{{size}}" action="{{action}}">
        <ButtonText>Button Text</ButtonText>
    </Button>
  )
}`}
  argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline",
      "link"
    ],
    "defaultValue": "outline"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "primary",
      "secondary",
      "positive",
      "negative"
    ],
    "defaultValue": "primary"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  }
}}
  reactLive={{ Button, ButtonText }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Button className='p-3'>
      <ButtonSpinner color="gray" />
      <ButtonText className='font-medium text-sm ml-2'>Please wait...</ButtonText>
    </Button>
  );
}`}
  argTypes={{}}
  reactLive={{ Button, ButtonText, ButtonSpinner }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Button
      size='lg'
      className='rounded-full p-3.5'
    >
      <ButtonIcon as={EditIcon} />
    </Button>
  );
}`}
  argTypes={{}}
  reactLive={{ Button, ButtonIcon, EditIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Button variant='link'>
      <ButtonText className='font-medium text-sm text-typography-900'>
        Back to top
      </ButtonText>
      <ButtonIcon as={ArrowUpIcon} className='h-3 w-3 text-background-900 ml-1' />
    </Button>
  );
}`}
  argTypes={{}}
  reactLive={{ Button, ButtonText, ButtonIcon, ArrowUpIcon }}
/>

<CodePreviewer
  code={`function Example() {
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
  );
}`}
  argTypes={{}}
  reactLive={{ Button, ButtonText, ButtonIcon, Box, InfoIcon, AddIcon }}
/>

<CodePreviewer
  code={`function Example() {
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
  );
}`}
  argTypes={{}}
  reactLive={{ Button, ButtonText, ButtonIcon, Box, Center, Heading, Input, InputField, Text, VStack, ArrowLeftIcon }}
/>
    </div>
  );
}