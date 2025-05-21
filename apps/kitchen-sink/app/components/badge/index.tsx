import { CodePreviewer } from '@/components/custom/code-previewer';
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { BadgeCheckIcon } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return (
    <Badge size="{{size}}" variant="{{variant}}" action="{{action}}">
      <BadgeText>Verified</BadgeText>
      <BadgeIcon as={GlobeIcon} className="ml-2" />
    </Badge>
  )
}`}
  argTypes={{
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "solid"
  },
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "error",
      "warning",
      "success",
      "info",
      "muted"
    ],
    "defaultValue": "muted"
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  }
}}
  reactLive={{ Badge, BadgeText, BadgeIcon, GlobeIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source=\\{{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <HStack>
            <Heading size="sm">Ronald Richards</Heading>
            <Badge size="sm" variant="solid" action="success" className='ml-1'>
              <BadgeText>Verified</BadgeText>
              <BadgeIcon as={BadgeCheckIcon} className='ml-1'/>
            </Badge>
          </HStack>
          <Text size='sm'>Nursing Assistant</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}`}
  argTypes={{}}
  reactLive={{ Avatar, AvatarFallbackText, AvatarImage, Badge, BadgeIcon, BadgeText, Heading, HStack, Text, VStack, BadgeCheckIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Box className='items-center'>
      <VStack>
        <Badge  
          className='z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5'
          variant="solid"
        >
          <BadgeText className='text-white'>2</BadgeText>
        </Badge>
        <Button>
          <ButtonText>
            Notifications
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}`}
  argTypes={{}}
  reactLive={{ Badge, BadgeText, BadgeIcon, Box, Button, ButtonText, VStack }}
/>
    </div>
  );
}