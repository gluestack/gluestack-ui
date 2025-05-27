import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Popover, PopoverBackdrop, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader } from '@/components/ui/popover'
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Avatar, AvatarGroup, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import { Pressable } from '@/components/ui/pressable'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox'
import { CheckIcon, ArrowRightIcon, ChevronRightIcon, ShareIcon, ChevronDownIcon } from '@/components/ui/icon'
import { Input, InputField } from '@/components/ui/input'
import { Image } from '@/components/ui/image'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "full"
    ],
    "defaultValue": "md"
  },
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top",
      "bottom",
      "left",
      "right",
      "bottom left",
      "bottom right",
      "top left",
      "top right",
      "left bottom",
      "left right",
      "right bottom",
      "right top"
    ],
    "defaultValue": "bottom"
  }
}} title={"Basic"}>
  {props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement={props.placement}
      size={props.size}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Open Popover</ButtonText>
          </Button>
        )
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text className="text-typography-900">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Popover used along with multiple Avatars"}>
  {props => {
        const [isOpen, setIsOpen] = React.useState(false);
        const handleOpen = () => {
          setIsOpen(true);
        };
        const handleClose = () => {
          setIsOpen(false);
        };
        return (
          <Popover
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            trigger={(triggerProps) => {
              return (
                <Button
                  {...triggerProps}
                  size="sm"
                >
                  <ButtonText>
                    Open Popover
                  </ButtonText>
                </Button>
              );
            }}
          >
            <PopoverBackdrop/>
            <PopoverContent className="w-full max-w-[420px] p-4">
              <PopoverArrow />
              <PopoverBody
                className=""
                contentContainerClassName="flex flex-row gap-4"
              >
              <AvatarGroup className="flex-row items-center">
                  <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
                    <AvatarFallbackText>John Doe</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://i.ibb.co/PF4vFQk/a130347c432c7b83615044cec215d824.jpg',
                      }}
                      alt="imageAltText"
                    />
                  </Avatar>
                  <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
                    <AvatarFallbackText>John Doe</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://i.ibb.co/MgrMrRc/Avatar-2.png',
                      }}
                      alt="imageAltText"
                    />
                  </Avatar>
                  <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
                    <AvatarFallbackText>John Doe</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://i.ibb.co/BLRZt0p/Avatar-6.jpg',
                      }}
                      alt="imageAltText"
                    />
                  </Avatar>
                  <Avatar className="w-9 h-9 border-[1.5px] border-outline-0 group-[.avatar-group]/avatar-group:ml-0">
                    <AvatarFallbackText>John Doe</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://i.ibb.co/4VVsQ0K/Avatar-7.png',
                      }}
                      alt="imageAltText"
                    />
                  </Avatar>
                </AvatarGroup>
                <Text className="text-typography-900" size="sm">
                  Alex, Annie and many others are already enjoying the Pro features,
                  don't miss out on the fun!
                </Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Popover with CTA"}>
  {props => {
        const [isOpen, setIsOpen] = React.useState(false);
        const [values, setValues] = React.useState(['work']);
        const handleOpen = () => {
          setIsOpen(true);
        };
        const handleClose = () => {
          setIsOpen(false);
        };
        return (
          <Popover
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            offset={8}
            trigger={(triggerProps) => {
              return (
                <Button {...triggerProps} className="gap-2">
                  <ButtonText>Purchase Plan</ButtonText>
                  <ButtonIcon as={ChevronRightIcon} />
                </Button>
              );
            }}
          >
            <PopoverBackdrop/>
            <PopoverContent className="w-full max-w-[420px] p-5 gap-6 pl-4 shadow-hard-5">
              <PopoverBody>
                <Heading className="pl-1">
                  Are you interested in using Pro for work or personal use?
                </Heading>
                <Text className="pt-2 pb-6 pl-1" size="sm">
                  We can recommend plans that are right for you. With our personalized
                  approach, you can trust that the plans we recommend will align
                  perfectly with your goals.
                </Text>
                <CheckboxGroup
                  value={values}
                  onChange={(keys) => {
                    setValues(keys);
                  }}
                  className="pl-1"
                >
                  <VStack space="sm">
                    <Checkbox value="projects">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>For personal projects</CheckboxLabel>
                    </Checkbox>
                    <Checkbox value="work">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>For work</CheckboxLabel>
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
              </PopoverBody>
              <PopoverFooter>
                <Pressable
                  className="px-4 bg-primary-500 rounded w-full"
                  onPress={handleClose}
                >
                  <Button onPress={handleClose} size="sm" className="gap-2">
                    <ButtonText>Next</ButtonText>
                    <ButtonIcon as={ArrowRightIcon} />
                  </Button>
                </Pressable>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Popover with Image"}>
  {props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      offset={8}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonText>Claim Offer</ButtonText>
          </Button>
        )
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="shadow-soft-1 h-full max-w-full p-0">
        <PopoverBody
          className=""
          contentContainerClassName="flex flex-col sm:flex-row w-full h-full"
        >
          <Image
            source={{
              uri: "https://i.ibb.co/TqD9vBY/popover-image-1-11zon.jpg",
            }}
            alt="image"
            className="sm:h-[270px] sm:w-[211px] h-[150px] w-full"
          />
          <VStack className="items-center justify-center w-full max-w-[344px] sm:mx-8 p-4 sm:p-0">
            <Text size="sm" className="text-typography-950">
              Sign up to the newsletter and get
            </Text>
            <Heading size="3xl" className="text-typography-950 my-1">
              25% Off
            </Heading>
            <Input variant="outline" size="sm" className="my-4 w-full">
              <InputField placeholder="youremail@address.com" />
            </Input>
            <Button size="xs" isDisabled className="w-full">
              <ButtonText>Subscribe</ButtonText>
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Popover with InputField"}>
  {props => {
  const [showPopover, setShowPopover] = React.useState(false);
  return (
    <Popover
      isOpen={showPopover}
      onClose={() => setShowPopover(false)}
      onOpen={() => setShowPopover(true)}
      offset={8}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} className="gap-2">
            <ButtonText>Share</ButtonText>
            <ButtonIcon as={ShareIcon} />
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="p-5 gap-8 max-w-[473px] w-full native:max-w-[300px]">
        <PopoverHeader className="w-full gap-3">
          <Input size="sm" className="flex-1">
            <InputField placeholder="Email separated by commas" />
          </Input>
          <Button size="sm">
            <ButtonText>Invite</ButtonText>
          </Button>
        </PopoverHeader>
        <PopoverBody className="gap-6">
          <Heading size="sm">People with access</Heading>
          <VStack space="lg">
            <HStack space="4xl" className="items-center">
              <HStack space="md" className="w-full items-center">
                <Avatar>
                  <AvatarFallbackText>JC</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://i.ibb.co/7R4DyhQ/Avatar-1.jpg',
                    }}
                    alt="Jane Cooper"
                  />
                </Avatar>
                <VStack>
                  <Text size="sm" className="font-semibold text-typography-900">
                    Jane Cooper
                  </Text>
                  <Text size="xs">janecooper09@gmail.com</Text>
                </VStack>
              </HStack>
              <Button variant="link" size="xs" className="gap-1 sm:px-3.5">
                <ButtonText>Can edit</ButtonText>
                <ButtonIcon as={ChevronDownIcon} />
              </Button>
            </HStack>
            <HStack space="4xl" className="items-center">
              <HStack space="md" className="w-full items-center">
                <Avatar>
                  <AvatarFallbackText>CM</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://i.ibb.co/sQwcjSZ/Avatar-2.png',
                    }}
                    alt="Catherine Miller"
                  />
                </Avatar>
                <VStack>
                  <Text size="sm" className="font-semibold text-typography-900">
                    Catherine Miller
                  </Text>
                  <Text size="xs">catherinemiller88@gmail.com</Text>
                </VStack>
              </HStack>
              <Button variant="link" size="xs" className="gap-1 sm:px-3.5">
                <ButtonText>Admin</ButtonText>
                <ButtonIcon as={ChevronDownIcon} />
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}