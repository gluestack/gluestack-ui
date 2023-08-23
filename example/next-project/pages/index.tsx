import {
  Heading,
  Box,
  Center,
  HStack,
  VStack,
  Divider,
  Alert,
  AlertIcon,
  AlertText,
  Icon,
  InfoIcon,
  Progress,
  Spinner,
  Text,
  Toast,
  ToastTitle,
  useToast,
  Pressable,
  Badge,
  Button,
  ButtonText,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
  Input,
  Link,
  Radio,
  CircleIcon,
  Select,
  ChevronDownIcon,
  Slider,
  Switch,
  Textarea,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody,
  CloseIcon,
  Modal,
  Popover,
  Tooltip,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  AddIcon,
  Image,
  Fab,
  InputField,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  SelectContent,
  SelectBackdrop,
  SelectPortal,
  SelectItem,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectInput,
  SelectIcon,
  RadioLabel,
  SelectTrigger,
  TextareaInput,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  TooltipContent,
  PopoverFooter,
  ProgressFilledTrack,
  BadgeText,
  FabLabel,
} from '../../storybook/src/ui-components';
import React from 'react';

export default function Home() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const ToastExample = () => {
    const toast = useToast();
    return (
      <Pressable
        onPress={() => {
          toast.show({
            placement: 'top',
            render: ({ id }) => {
              return (
                <Toast nativeId={id}>
                  <ToastTitle
                    sx={{
                      _dark: {
                        color: 'white',
                      },
                    }}
                  >
                    Hello World Toast {id}
                  </ToastTitle>
                </Toast>
              );
            },
          });
        }}
      >
        <Text>Press Me</Text>
      </Pressable>
    );
  };
  return (
    <>
      <Heading>Heading</Heading>
      <Box>
        <Text>Box</Text>
      </Box>
      <Center>
        <Text>Center</Text>
      </Center>
      <HStack>
        <Text>HStack</Text>
      </HStack>
      <VStack>
        <Text>VStack</Text>
      </VStack>
      <Divider />
      <Alert>
        <AlertIcon>
          <Icon as={InfoIcon} />
        </AlertIcon>
        <AlertText>Selection successfully moved!</AlertText>
      </Alert>
      <Progress value={60} w={200}>
        <ProgressFilledTrack />
      </Progress>
      <Spinner size="large" />
      <ToastExample />
      <Badge>
        <BadgeText>NEW FEATURE</BadgeText>
      </Badge>
      <Button>
        <ButtonText>Button</ButtonText>
      </Button>
      <Checkbox value="value">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be atleast 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon>
            <Icon
              as={AlertCircleIcon}
              sx={{ color: '$red500', height: '$3', width: '$3' }}
            />
          </FormControlErrorIcon>
          <FormControlErrorText>
            Atleast 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Input>
        <InputField placeholder="Enter Text here" />
      </Input>
      <Link href="https://gluestack.io/">
        <Text>gluestack</Text>
      </Link>
      <Pressable sx={{ h: 100, w: 200 }}>
        <Center
          sx={{
            h: '100%',
            w: '100%',
            bg: '$primary500',
          }}
        />
      </Pressable>
      <RadioGroup>
        <VStack space="sm">
          <Radio value="veg">
            <RadioIndicator>
              <RadioIcon>
                <CircleIcon />
              </RadioIcon>
            </RadioIndicator>
            <RadioLabel>Veg</RadioLabel>
          </Radio>
          <Radio value="non-veg">
            <RadioIndicator>
              <RadioIcon>
                <CircleIcon />
              </RadioIcon>
            </RadioIndicator>
            <RadioLabel>Non-veg</RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>
      <Select>
        <SelectTrigger>
          <SelectInput placeholder="Select option" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="UX Research" />
            <SelectItem label="Web Development" value="Web Development" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem
              label="UI Designing"
              value="UI Designing"
              isDisabled={true}
            />
            <SelectItem
              label="Backend Development"
              value="Backend Development"
            />
          </SelectContent>
        </SelectPortal>
      </Select>
      <Slider w="50%" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Switch />
      <Textarea placeholder="Enter text here...">
        <TextareaInput placeholder="Your text goes here" />
      </Textarea>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="md">Return Policy</Heading>
            <AlertDialogCloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text fontSize="$sm">
              You're almost there! This alert-dialog is the final checkpoint
              before you reach your destination Confirm that you're ready to go,
              and we'll hit the road!
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter flexWrap="noWrap">
            <Button
              variant="outline"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              action="primary"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Confirm</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize="$md">Confirm your request</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text fontSize="$sm">
              You're almost there! This modal is the final checkpoint before you
              reach your destination Confirm that you're ready to go, and we'll
              hit the road!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              action="primary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Popover
        placement="bottom"
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Popover</ButtonText>
            </Button>
          );
        }}
      >
        <PopoverBackdrop />
        <PopoverContent>
          <PopoverHeader>
            <Text>Delete Customer</Text>
            <PopoverCloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </PopoverCloseButton>
          </PopoverHeader>
          <PopoverBody>
            <Text>
              This will remove all data relating to Alex This action cannot be
              reversed Deleted data can not be recovered
            </Text>
          </PopoverBody>
          <PopoverFooter>
            <Button variant="outline" mr={'$2'}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button>
              <ButtonText>Delete</ButtonText>
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
      <Tooltip
        placement={'top'}
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Hover on me!</ButtonText>
            </Button>
          );
        }}
      >
        <TooltipContent>
          <Text>Tooltip Content</Text>
        </TooltipContent>
      </Tooltip>
      <Button onPress={handleClose}>
        <ButtonText>Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      <Avatar size="md">
        <AvatarFallbackText>AB</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <AvatarBadge />
      </Avatar>
      <VStack space="md" alignItems="center">
        <Icon as={AddIcon} size="xl" color="$orange500" />
        <Icon as={AddIcon} size="xl" color="$primary500" />
        <Icon as={AddIcon} size="xl" color="$green500" sx={{ h: 80, w: 80 }} />
        <Icon as={AddIcon} sx={{ h: 120, w: 120, color: 'red' }} />
      </VStack>
      <Image
        w={100}
        h={100}
        alt="hello"
        source={{
          uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        }}
        fallbackSource={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
        }}
      />
      <Fab>
        <FabLabel>Fab</FabLabel>
      </Fab>
    </>
  );
}
