import { Box } from '@/components/ui/box'
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab'
import { AddIcon, EditIcon, SearchIcon, CheckIcon } from '@/components/ui/icon'
import { VStack } from '@/components/ui/vstack'
import { HStack } from '@/components/ui/hstack'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Divider } from '@/components/ui/divider'
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import { ShoppingCartIcon } from 'lucide-react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Box className="h-[230px] w-60 bg-background-50 rounded-md">
      <Fab
        size="sm"
        placement="bottom right"
        isHovered={ false }
        isDisabled={ false }
        isPressed={ false }
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  )
};

const SizeMd = () => {
return (
    <Box className="h-[230px] w-60 bg-background-50 rounded-md">
      <Fab
        size="md"
        placement="bottom right"
        isHovered={ false }
        isDisabled={ false }
        isPressed={ false }
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  )
};

const SizeLg = () => {
return (
    <Box className="h-[230px] w-60 bg-background-50 rounded-md">
      <Fab
        size="lg"
        placement="bottom right"
        isHovered={ false }
        isDisabled={ false }
        isPressed={ false }
      >
        <FabIcon as={AddIcon} />
        <FabLabel>Quick start</FabLabel>
      </Fab>
    </Box>
  )
};

const ExampleFABWithIcon = () => {
const data = [
    {
      uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      name: 'Kevin James',
      msg: "Hi Rachel, What's up",
    },
    {
      uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Jacob Jones',
      msg: 'Good Morning!',
    },
    {
      uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      name: 'Albert Flores',
      msg: 'Coffee?',
    },
  ];
  return (
    <Box className='border rounded-lg border-border/80 p-6 bg-background/90 min-w-[240px] sm:min-w-[360px] md:min-w-[476px]'>
      <VStack space='md'>
        {data.map((chatData, index) => {
          return (
            <HStack space='sm' className='items-center' key={index}>
              <Avatar size='sm'>
                <AvatarImage
                  source={{
                    uri: chatData.uri,
                  }}
                  alt="image"
                />
              </Avatar>
              <VStack>
                <Heading size='xs'>
                  {chatData.name}
                </Heading>
                <Text size='xs'>
                  {chatData.msg}
                </Text>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
      <Fab size='lg' className='bg-primary/90 hover:bg-primary/80 active:bg-primary/70'>
        <FabIcon as={EditIcon}/>
      </Fab>
    </Box>
  )
};

const ExampleFABWithIconAndText = () => {
return (
    <Box className='max-w-96 border rounded-lg border-border/80 py-[56px] px-6 mx-5 bg-background/90'>
      <Fab className="top-4 h-10 bg-primary/90 hover:bg-primary/80 active:bg-primary/70 py-2">
        <FabIcon as={SearchIcon} />
        <FabLabel>Search</FabLabel>
      </Fab>
      <VStack space='lg'>
        <Box>
          <Text className='text-xs text-primary/90 font-bold'>
            HEALTH
          </Text>
          <Heading size='sm'>
            Benefits of Oranges
          </Heading>
          <Text size='xs' className='mt-1.5'>
            Oranges are a great source of vitamin C, which is essential for a healthy immune system.
          </Text>
          <HStack space='sm' className='mt-3 h-5'>
            <Text size='xs'>
              Wade Warrem
            </Text>
            <Divider orientation='vertical' className='bg-border/90' />
            <Text size='xs'>
              6th Oct, 2019
            </Text>
            <Divider orientation='vertical' className='bg-border/90' />
            <Text size='xs'>
              5 mins read
            </Text>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <Text className='text-xs text-primary/90 font-bold'>
            TECHNOLOGY
          </Text>
          <Heading size='sm'>
            How AI can benefit your business
          </Heading>
          <Text size='xs' className='mt-1.5'>
            AI can automate tasks and processes, allowing for increasing efficiency and productivity.
          </Text>
          <HStack space='sm' className='mt-3 h-5'>
            <Text size='xs'>
              Wade Warrem
            </Text>
            <Divider orientation='vertical' className='bg-border/90' />
            <Text size='xs'>
              6th Oct, 2019
            </Text>
            <Divider orientation='vertical' className='bg-border/90' />
            <Text size='xs'>
              5 mins read
            </Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
};

const ExamplePlacement = () => {
return (
    <Box className='border rounded-lg border-border/70 py-4 bg-background mx-5'>
      <VStack space='lg' className='mb-2 px-6 py-2'>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Prepare any feedback or updates.
            </Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Review progress on goals and projects.
            </Text>
          </CheckboxLabel>
        </Checkbox>
        <Checkbox size="sm">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>
            <Text size='sm'>
              Ask challenges and discuss.
            </Text>
          </CheckboxLabel>
        </Checkbox>
      </VStack>
      <Fab size='sm' placement='bottom center' className='top-0 relative'>
        <FabIcon as={AddIcon} size='sm'/>
      </Fab>
    </Box>
  )
};

const ExampleCustomPlacement = () => {
return (
    <Box className='max-w-96 border rounded-lg border-border/80 overflow-hidden mx-5 bg-background/90'>
      <Box>
        <Image
          className='h-[185px] w-[416px]'
          source={{
            uri: 'https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          fallbackSource={{
            uri: 'https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt',
          }}
          alt="image"
        />
      </Box>
      <VStack className='px-6 pt-4 pb-6'>
        <Heading size='sm'>
          Fresh Orange - Imported (Loose)
        </Heading>
        <Text className='my-1.5 text-sm'>
          Rs 146(Rs.24.33/pc)
        </Text>
        <Text className='text-xs'>
          DETAILS
        </Text>
        <Text className='my-1.5 text-xs'>
          Oranges are a great source of vitamin C, which is essential for a healthy immune system. Oranges are a great source of vitamin C, which is important for maintaining a healthy immune system. Vitamin C also helps with the absorption of iron and the production of collagen, which supports healthy skin, teeth, and bones.
        </Text>
        <Link href="https://gluestack.io/" isExternal>
          <Text className='text-xs text-primary/90'>
            READ MORE
          </Text>
        </Link>
      </VStack>
      <Fab size='lg' className='bg-primary/90 right-4 bottom-16 hover:bg-primary/80 active:bg-primary/70'>
        <FabIcon as={ShoppingCartIcon} className='h-4 w-4'/>
      </Fab>
    </Box>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "md",
    label: "Md",
    content: <SizeMd />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "fab-with-icon",
    label: "FAB with Icon",
    content: <ExampleFABWithIcon />,
  },
  {
    value: "fab-with-icon-and-text",
    label: "FAB with Icon and Text",
    content: <ExampleFABWithIconAndText />,
  },
  {
    value: "placement",
    label: "Placement",
    content: <ExamplePlacement />,
  },
  {
    value: "custom-placement",
    label: "Custom Placement",
    content: <ExampleCustomPlacement />,
  }
];

export default function FabScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}