import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
  DateTimePicker,
  DateTimePickerIcon,
  DateTimePickerInput,
  DateTimePickerTrigger,
} from '@/components/ui/date-time-picker';
import { CalendarDaysIcon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import {
  ImageViewer,
  ImageViewerCloseButton,
  ImageViewerContent,
  ImageViewerCounter,
  ImageViewerNavigation,
  ImageViewerTrigger,
} from '@/components/ui/image-viewer';
import {
  Tabs,
  TabsContent,
  TabsContentWrapper,
  TabsIndicator,
  TabsList,
  TabsTrigger,
  TabsTriggerText,
} from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@/components/ui/toast';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { View } from '@/components/ui/view';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import { Alert, AlertText } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetPortal,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetTrigger,
} from '@/components/ui/bottomsheet';
import { ButtonIcon } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Center } from '@/components/ui/center';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import {
  AddIcon, ChevronDownIcon, CircleIcon, CloseIcon, GlobeIcon, Icon, PlayIcon,
  SettingsIcon
} from '@/components/ui/icon';
import { GlassContainer, GlassView } from '@/components/ui/liquid-glass';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@/components/ui/modal';
import {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
} from '@/components/ui/popover';
import { Portal } from '@/components/ui/portal';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Home() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape',
    },
    {
      url: 'https://images.unsplash.com/photo-1682687221038-404670e01d4c?w=800&auto=format&fit=crop&q=60',
      alt: 'Ocean waves',
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset',
    },
  ];

  const thumbnailSource = { uri: images[0].url };
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleCloseAlertDialog = () => setShowAlertDialog(false);
  const [query, setQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClosePopover = () => {
    setIsOpen(false);
  };
  const items = [
    'Design',
    'Development',
    'Marketing',
    'Product',
    'Research',
    'Engineering',
    'Sales',
    'Support',
  ];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const [showModal, setShowModal] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const handleClosePortal = () => setVisible(false);
  const [values, setValues] = React.useState('Read-only');
  const toast = useToast();
  const [toastId, setToastId] = React.useState(0);
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: 'top',
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = 'toast-' + id;
        return (
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };
  const [date, setDate] = React.useState(new Date());
  return (
    <ScrollView className='flex-1 bg-background'>
      <Box className="flex-1 bg-background">
        <Center className="flex-1 gap-5">
          <VStack className="items-center gap-2">
            <Text className="text-2xl font-bold text-foreground">
              Gluestack UI
            </Text>
            <Text className="text-muted-foreground">powered by UniWind + Tailwind CSS v4</Text>
          </VStack>
          <Button size="default">
            <ButtonText>Get Started</ButtonText>
          </Button>
          {/*========================================================================= */}
          <Accordion
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className=" w-[90%]"
          >
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          How do I place an order?
                        </AccordionTitleText>

                        <AccordionIcon as={ChevronDownIcon} />
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  To place an order, simply select the products you want, proceed to
                  checkout, provide shipping and payment information, and finalize
                  your purchase.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <Divider className="bg-border" />
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => {
                    return (
                      <>
                        <AccordionTitleText>
                          What payment methods do you accept?
                        </AccordionTitleText>
                        <AccordionIcon as={ChevronDownIcon} />
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  We accept all major credit cards, including Visa, Mastercard, and
                  American Express. We also support payments through PayPal.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/*========================================================================= */}
          <>
            <Button onPress={() => setShowActionsheet(true)}>
              <ButtonText>Open Actionsheet</ButtonText>
            </Button>
            <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
              <ActionsheetBackdrop />
              <ActionsheetContent>
                <ActionsheetDragIndicatorWrapper>
                  <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                <ActionsheetItem onPress={handleClose}>
                  <ActionsheetItemText>Edit Message</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={handleClose}>
                  <ActionsheetItemText>Mark Unread</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={handleClose}>
                  <ActionsheetItemText>Remind Me</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem onPress={handleClose}>
                  <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
                </ActionsheetItem>
                <ActionsheetItem isDisabled onPress={handleClose}>
                  <ActionsheetItemText>Delete</ActionsheetItemText>
                </ActionsheetItem>
              </ActionsheetContent>
            </Actionsheet>
          </>
          <Alert className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center">
            <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
              <AlertText className="font-semibold text-foreground/90">
                Verify your phone number to create an API key
              </AlertText>
              <Button size="sm">
                <ButtonText>Start verification</ButtonText>
              </Button>
            </VStack>
            <Icon as={CloseIcon} />
          </Alert>
          <>
            <Button onPress={() => setShowAlertDialog(true)}>
              <ButtonText>Open Dialog</ButtonText>
            </Button>
            <AlertDialog isOpen={showAlertDialog} onClose={handleCloseAlertDialog}>
              <AlertDialogBackdrop />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <Heading className="text-foreground font-semibold text-lg">
                    Are you sure you want to delete this post?
                  </Heading>
                </AlertDialogHeader>
                <AlertDialogBody className="mt-3 mb-4">
                  <Text className="text-sm text-muted-foreground">
                    Deleting the post will remove it permanently and cannot be undone.
                    Please confirm if you want to proceed.
                  </Text>
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button variant="outline" onPress={handleCloseAlertDialog}>
                    <ButtonText>Cancel</ButtonText>
                  </Button>
                  <Button onPress={handleCloseAlertDialog}>
                    <ButtonText>Delete</ButtonText>
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
          <BottomSheet>
            <BottomSheetTrigger>
              <Text>Open Search Sheet</Text>
            </BottomSheetTrigger>
            <BottomSheetPortal
              snapPoints={['60%']}
              backdropComponent={BottomSheetBackdrop}
              handleComponent={BottomSheetDragIndicator}
            >
              <BottomSheetScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerClassName="pb-8"
              >
                <VStack className="px-4 pt-2 pb-3 gap-3">
                  <Text className="text-lg font-bold text-foreground">
                    Search Categories
                  </Text>
                  <BottomSheetTextInput
                    placeholder="Type to filter..."
                    value={query}
                    onChangeText={setQuery}
                    className="h-11 border border-border rounded-lg px-3 text-sm text-foreground"
                  />
                  <Text className="text-xs text-foreground/50">
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                  </Text>
                </VStack>

                {filtered.length === 0 ? (
                  <VStack className="py-8 items-center">
                    <Text className="text-sm text-foreground/40">
                      No results for "{query}"
                    </Text>
                  </VStack>
                ) : (
                  filtered.map((item) => (
                    <BottomSheetItem key={item}>
                      <BottomSheetItemText>{item}</BottomSheetItemText>
                    </BottomSheetItem>
                  ))
                )}
              </BottomSheetScrollView>
            </BottomSheetPortal>
          </BottomSheet>
          <Card className="p-5 rounded-lg max-w-[360px] m-3">
            <Image
              source={{
                uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png',
              }}
              className="h-[240px] w-full rounded-md aspect-[4/3]"
              alt="image"
            />
            <Text className="text-sm font-normal text-foreground/70">
              Fashion Clothing
            </Text>
            <VStack>
              <Heading size="md" className="mb-4">
                Cotton Kurta
              </Heading>
              <Text size="sm">
                Floral embroidered notch neck thread work cotton kurta in white and
                black.
              </Text>
            </VStack>
            <Box className="flex-col sm:flex-row">
              <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                <ButtonText size="sm">Add to cart</ButtonText>
              </Button>
              <Button
                variant="outline"
                className="px-4 py-2 border-border/70 sm:flex-1"
              >
                <ButtonText size="sm" className="text-foreground/60">
                  Wishlist
                </ButtonText>
              </Button>
            </Box>
          </Card>
          {/* ========================================================================= */}
          <View className="w-72 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-teal-600" />
      <View className="absolute top-0 right-0 w-36 h-36 rounded-full bg-emerald-400 translate-x-10 -translate-y-10" />
      <View className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-cyan-400 -translate-x-8 translate-y-8" />
      <View className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-lime-300 opacity-50" />

      {/* GlassContainer merges adjacent GlassViews */}
      <View className="p-4">
        <GlassContainer spacing={10} className="rounded-3xl bg-background/30">
          <VStack className="gap-2 p-2">
            <GlassView className="p-4 rounded-full" isInteractive>
              <HStack className="gap-3 items-center px-4">
                <VStack className="gap-0.5">
                  <Text className="text-foreground/90 font-semibold">
                    Notifications
                  </Text>
                  <Text className="text-foreground/70 text-sm">
                    3 new alerts
                  </Text>
                </VStack>
              </HStack>
            </GlassView>
            <GlassView className="p-4 rounded-full" isInteractive>
              <HStack className="gap-3 items-center px-4">
                <VStack className="gap-0.5">
                  <Text className="text-foreground/90 font-semibold">
                    Messages
                  </Text>
                  <Text className="text-foreground/70 text-sm">2 unread</Text>
                </VStack>
              </HStack>
            </GlassView>
          </VStack>
        </GlassContainer>
      </View>
          </View>
          <Menu
      placement="top"
      offset={5}
      disabledKeys={['Settings']}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        );
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2 " />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2 " />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2 " />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2 " />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Open Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size="md"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Modal Title</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>This is the modal body. You can add any content here.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              className="mr-3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </>
          <Popover
      isOpen={isOpen}
      onClose={handleClosePopover}
      onOpen={handleOpen}
      placement="bottom"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text className="text-foreground">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
          </Popover>
          <>
      <Portal isOpen={visible} className="justify-center items-center">
        <HStack className="border-2 border-border w-1/3 py-10 gap-4 rounded-lg flex-row justify-center items-center bg-background">
          <Text className="text-foreground">Portal Content</Text>
          <Button
            size="default"
            className="h-6 px-1 absolute top-2 right-2"
            variant="outline"
            onPress={handleClosePortal}
          >
            <ButtonIcon as={CloseIcon} />
          </Button>
        </HStack>
      </Portal>
      <Button onPress={() => setVisible(!visible)}>
        <ButtonText>Toggle Portal</ButtonText>
      </Button>
    </>
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="2xl">
        <Box>
          <Radio value="Read-only" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Extended coverage</RadioLabel>
          </Radio>
          <Text size="sm" className="ml-7 text-muted-foreground">
            Extra services included
          </Text>
        </Box>
        <Box>
          <Radio value="Write" size="md">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Basic coverage</RadioLabel>
          </Radio>
          <Text size="sm" className="ml-7 text-muted-foreground">
            Nothing extra included
          </Text>
        </Box>
      </VStack>
          </RadioGroup>
          <Select>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
          </Select>
          <HStack space="md">
      <Switch
        trackColor={{ false: '#d4d4d4', true: '#525252' }}
        thumbColor="#fafafa"
        activeThumbColor="#fafafa"
        ios_backgroundColor="#d4d4d4"
      />
      <Text size="sm">Allow notifications</Text>
          </HStack>
          <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Customer Name</TableHead>
          <TableHead>Units</TableHead>
          <TableHead>Costs</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableData>Rajesh Kumar</TableData>
          <TableData>10</TableData>
          <TableData>$130</TableData>
        </TableRow>
        <TableRow>
          <TableData>Priya Sharma</TableData>
          <TableData>12</TableData>
          <TableData>$210</TableData>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHead>Total</TableHead>
          <TableHead>22</TableHead>
          <TableHead>$340</TableHead>
        </TableRow>
      </TableFooter>
          </Table>
          <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">
          <TabsTriggerText>Home</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="profile">
          <TabsTriggerText>Profile</TabsTriggerText>
        </TabsTrigger>
        <TabsTrigger value="settings">
          <TabsTriggerText>Settings</TabsTriggerText>
        </TabsTrigger>
        <TabsIndicator />
      </TabsList>

      <TabsContentWrapper>
        <TabsContent value="home">
          <Box className="p-4">
            <Text className="text-foreground">Welcome to the Home tab!</Text>
          </Box>
        </TabsContent>
        <TabsContent value="profile">
          <Box className="p-4">
            <Text className="text-foreground">Your profile information</Text>
          </Box>
        </TabsContent>
        <TabsContent value="settings">
          <Box className="p-4">
            <Text className="text-foreground">Settings and preferences</Text>
          </Box>
        </TabsContent>
      </TabsContentWrapper>
          </Tabs>
          <Textarea
      size="md"
      isReadOnly={false}
      isInvalid={false}
      isDisabled={false}
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
          </Textarea>
          <Button onPress={handleToast}>
      <ButtonText>Press Me</ButtonText>
          </Button>
             <Tooltip
      placement="top"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
    <Box className="p-4 w-full">
      <DateTimePicker
        value={date}
        onChange={setDate}
        mode="datetime"
        placeholder="Select date and time"
      >
        <DateTimePickerTrigger>
          <DateTimePickerInput />
          <DateTimePickerIcon as={CalendarDaysIcon} />
        </DateTimePickerTrigger>
      </DateTimePicker>
    </Box>
    <View className="p-4">
      <Text className="text-lg font-medium mb-4">
        Tap an image to view gallery
      </Text>
      <ImageViewer images={images}>
        <ImageViewerTrigger>
          <Image
            source={thumbnailSource}
            alt="Gallery thumbnail"
            className="w-64 h-64 rounded-lg"
            resizeMode="cover"
          />
        </ImageViewerTrigger>
        <ImageViewerContent>
          <ImageViewerCloseButton />
          <ImageViewerNavigation />
          <ImageViewerCounter />
        </ImageViewerContent>
      </ImageViewer>
    </View>
        </Center>
      </Box>
    </ScrollView>
  );
}