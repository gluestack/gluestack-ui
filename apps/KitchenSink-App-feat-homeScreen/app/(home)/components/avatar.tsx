import { Avatar, AvatarFallbackText, AvatarImage, AvatarBadge, AvatarGroup } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Icon } from '@/components/ui/icon'
import { User } from 'lucide-react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Avatar>
      <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: "https://github.com/shadcn.png",
        }}
      />
    </Avatar>
  )
};

const ExampleAvatarWithLetters = () => {
return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar className='bg-indigo-600'>
          <AvatarFallbackText className="text-white">Ronald Richards</AvatarFallbackText>
          <AvatarBadge />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar className='bg-orange-600'>
          <AvatarFallbackText className="text-white">Arlene McCoy</AvatarFallbackText>
        </Avatar>
        <VStack>
          <Heading size="sm">Arlene McCoy</Heading>
          <Text size="sm">Marketing Coordinator</Text>
        </VStack>
      </HStack>
    </VStack>
  )
};

const ExampleAvatarWithIcon = () => {
return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar className='bg-indigo-600'>
          <Icon as={User} size="lg" className="stroke-white" />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar className='bg-pink-600'>
          <Icon as={User} size="lg" className="stroke-white" />
        </Avatar>
        <VStack>
          <Heading size="sm">Kevin James</Heading>
          <Text size="sm">Web Designer</Text>
        </VStack>
      </HStack>
    </VStack>
  )
};

const ExampleAvatarWithImage = () => {
return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <AvatarBadge />
        </Avatar>
        <VStack>
          <Heading size="sm">Arlene McCoy</Heading>
          <Text size="sm">Marketing Coordinator</Text>
        </VStack>
      </HStack>
    </VStack>
  )
};

const ExampleAvatarGroup = () => {
const avatars = [
    { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva', color:'bg-emerald-600' },
    { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color:'bg-cyan-600' },
    { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color:'bg-indigo-600' },
    { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color:'bg-gray-600' },
    { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color:'bg-red-400' },
  ];
  const extraAvatars = avatars.slice(3);
  const remainingCount = extraAvatars.length;
  return (
    <AvatarGroup>
      {avatars.slice(0, 3).map((avatar, index) => {
        return (
          <Avatar key={index} size="lg" className={'border-2 border-outline-0 ' + avatar.color}>
            <AvatarFallbackText className="text-white">{avatar.alt}</AvatarFallbackText>
          </Avatar>
        );
      })}
      <Avatar size="lg">
        <AvatarFallbackText>{"+ " + remainingCount + ""}</AvatarFallbackText>
      </Avatar>
    </AvatarGroup>
  )
};

const ExampleAvatarGroupWithoutBadge = () => {
return (
    <AvatarGroup>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
      </Avatar>
    </AvatarGroup>
  )
};

const ExampleAvatarGroupwithBadge = () => {
return (
    <AvatarGroup>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <AvatarBadge />
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
        <AvatarBadge/>
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <AvatarBadge/>
      </Avatar>
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
        <AvatarBadge />
      </Avatar>
    </AvatarGroup>
  )
};

const ExampleCustom = () => {
return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar size="md" className='bg-indigo-300 border-2 border-indigo-600'>
          <Icon as={User} size="xl" className='text-indigo-600' />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar size="md" className='bg-pink-300 border-2 border-pink-600'>
          <Icon as={User} size="xl" className='text-pink-600' />
        </Avatar>
        <VStack>
          <Heading size="sm">Kevin James</Heading>
          <Text size="sm">Web Designer</Text>
        </VStack>
      </HStack>
    </VStack>
  )
};

const ExampleFallback = () => {
return (
    <HStack space="md">
      <Avatar size="md">
        <AvatarFallbackText>John Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://wrong-url',
          }}
        />
      </Avatar>
    </HStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "avatar-with-letters",
    label: "Avatar with letters",
    content: <ExampleAvatarWithLetters />,
  },
  {
    value: "avatar-with-icon",
    label: "Avatar with Icon",
    content: <ExampleAvatarWithIcon />,
  },
  {
    value: "avatar-with-image",
    label: "Avatar with Image",
    content: <ExampleAvatarWithImage />,
  },
  {
    value: "avatar-group",
    label: "Avatar Group",
    content: <ExampleAvatarGroup />,
  },
  {
    value: "avatar-group-without-badge",
    label: "Avatar Group (Without Badge)",
    content: <ExampleAvatarGroupWithoutBadge />,
  },
  {
    value: "avatar-group-with-badge",
    label: "Avatar Group (with Badge)",
    content: <ExampleAvatarGroupwithBadge />,
  },
  {
    value: "custom",
    label: "Custom",
    content: <ExampleCustom />,
  },
  {
    value: "fallback",
    label: "Fallback",
    content: <ExampleFallback />,
  }
];

export default function AvatarScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}