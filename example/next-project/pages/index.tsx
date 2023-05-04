import {
  Heading,
  Box,
  Center,
  HStack,
  VStack,
  Divider,
  Alert,
  Icon,
  InfoIcon,
  Progress,
  Spinner,
  Text,
  Toast,
  useToast,
  Pressable,
  Badge,
  Button,
  Checkbox,
  CheckIcon,
  FormControl,
  WarningIcon,
  Input,
  Link,
  Radio,
  CircleIcon,
  Select,
  ChevronDownIcon,
  Slider,
  Switch,
  TextArea,
  AlertDialog,
  CloseIcon,
  Modal,
  Popover,
  Tooltip,
  Actionsheet,
  Avatar,
  AddIcon,
  Image,
  Fab,
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
                  <Toast.Title
                    sx={{
                      _dark: {
                        color: 'white',
                      },
                    }}
                  >
                    Hello World Toast {id}
                  </Toast.Title>
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
        <Alert.Icon>
          <Icon as={InfoIcon} />
        </Alert.Icon>
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
      <Progress value={60} w={200}>
        <Progress.FilledTrack />
      </Progress>
      <Spinner size="large" />
      <ToastExample />
      <Badge>
        <Badge.Text>NEW FEATURE</Badge.Text>
      </Badge>
      <Button>
        <Button.Text>Button</Button.Text>
      </Button>
      <Checkbox value="value">
        <Checkbox.Indicator>
          <Checkbox.Icon as={CheckIcon} />
        </Checkbox.Indicator>
        <Checkbox.Label>Label</Checkbox.Label>
      </Checkbox>
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Password</FormControl.Label.Text>
        </FormControl.Label>
        <Input>
          <Input.Input
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
        </Input>
        <FormControl.Helper>
          <FormControl.Helper.Text>
            Must be atleast 6 characters.
          </FormControl.Helper.Text>
        </FormControl.Helper>
        <FormControl.Error>
          <FormControl.Error.Icon>
            <Icon
              as={WarningIcon}
              sx={{ color: '$red500', height: '$3', width: '$3' }}
            />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>
            Atleast 6 characters are required.
          </FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
      <Input>
        <Input.Input placeholder="Enter Text here" />
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
      <Radio.Group>
        <VStack space="sm">
          <Radio value="veg">
            <Radio.Indicator>
              <Radio.Icon>
                <CircleIcon />
              </Radio.Icon>
            </Radio.Indicator>
            <Radio.Label>Veg</Radio.Label>
          </Radio>
          <Radio value="non-veg">
            <Radio.Indicator>
              <Radio.Icon>
                <CircleIcon />
              </Radio.Icon>
            </Radio.Indicator>
            <Radio.Label>Non-veg</Radio.Label>
          </Radio>
        </VStack>
      </Radio.Group>
      <Select>
        <Select.Trigger>
          <Select.Input placeholder="Select option" />
          <Select.Icon mr="$3">
            <Icon as={ChevronDownIcon} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Backdrop />
          <Select.Content>
            <Select.DragIndicatorWrapper>
              <Select.DragIndicator />
            </Select.DragIndicatorWrapper>
            <Select.Item label="UX Research" value="UX Research" />
            <Select.Item label="Web Development" value="Web Development" />
            <Select.Item
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <Select.Item
              label="UI Designing"
              value="UI Designing"
              isDisabled={true}
            />
            <Select.Item
              label="Backend Development"
              value="Backend Development"
            />
          </Select.Content>
        </Select.Portal>
      </Select>
      <Slider w="50%" defaultValue={30}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Switch />
      <TextArea placeholder="Enter text here...">
        <TextArea.Input placeholder="Your text goes here..." />
      </TextArea>

      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
      >
        <AlertDialog.Backdrop />
        <AlertDialog.Content>
          <AlertDialog.Header>
            <Heading size="md">Return Policy</Heading>
            <AlertDialog.CloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </AlertDialog.CloseButton>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text fontSize="$sm">
              You're almost there! This alert-dialog is the final checkpoint
              before you reach your destination. Confirm that you're ready to
              go, and we'll hit the road!
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer flexWrap="noWrap">
            <Button
              variant="outline"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              action="primary"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <Button.Text>Confirm</Button.Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <Button.Text>Modal</Button.Text>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>
            <Heading fontSize="$md">Confirm your request</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Text fontSize="$sm">
              You're almost there! This modal is the final checkpoint before you
              reach your destination. Confirm that you're ready to go, and we'll
              hit the road!
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              action="primary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Confirm</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Popover
        placement="bottom"
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Popover</Button.Text>
            </Button>
          );
        }}
      >
        <Popover.Backdrop />
        <Popover.Content>
          <Popover.Header>
            <Text>Delete Customer</Text>
            <Popover.CloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </Popover.CloseButton>
          </Popover.Header>
          <Popover.Body>
            <Text>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </Text>
          </Popover.Body>
          <Popover.Footer>
            <Button variant="outline" mr={'$2'}>
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button>
              <Button.Text>Delete</Button.Text>
            </Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
      <Tooltip
        placement={'top'}
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Hover on me!</Button.Text>
            </Button>
          );
        }}
      >
        <Tooltip.Content>
          <Text>Tooltip Content</Text>
        </Tooltip.Content>
      </Tooltip>
      <Button onPress={handleClose}>
        <Button.Text>Actionsheet</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content zIndex={999}>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <Avatar size="md">
        <Avatar.FallbackText>AB</Avatar.FallbackText>
        <Avatar.Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <Avatar.Badge />
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
        <Fab.Label>Fab</Fab.Label>
      </Fab>
    </>
  );
}
