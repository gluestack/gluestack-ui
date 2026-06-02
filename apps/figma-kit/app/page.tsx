"use client";
import React from "react";
import { Grid, GridItem } from "@/components/ui/grid";
import Image from "next/image";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
    import { Alert, AlertText, AlertIcon } from '@/components/ui/alert';
import { Center } from "@/components/ui/center";
import {
  AddIcon, AlertCircleIcon, ArrowUpIcon, ArrowDownIcon, ArrowRightIcon, ArrowLeftIcon, AtSignIcon, BellIcon, CalendarDaysIcon, CheckIcon, CheckCircleIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpDownIcon, CircleIcon, ClockIcon, CloseIcon, CloseCircleIcon, CopyIcon, DownloadIcon, EditIcon, EyeIcon, EyeOffIcon, FavouriteIcon, GlobeIcon, GripVerticalIcon, HelpCircleIcon, InfoIcon, LinkIcon, ExternalLinkIcon, LoaderIcon, LockIcon, MailIcon, MenuIcon, MessageCircleIcon, MoonIcon, PaperclipIcon, PhoneIcon, PlayIcon, RemoveIcon, RepeatIcon, Repeat1Icon, SearchIcon, SettingsIcon, ShareIcon, SlashIcon, StarIcon, SunIcon, ThreeDotsIcon, TrashIcon, UnlockIcon, Icon
} from "@/components/ui/icon";
import { extractFigmaJSON } from "./exporter/index";
import { saveResultJson } from "./actions";
import { debugPrintFiberTree } from "./extractor/index";
import { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@/components/ui/alert-dialog';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";


import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableData,
  TableFooter,
} from "@/components/ui/table";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from "@/components/ui/checkbox";

import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Menu, MenuItem, MenuItemLabel } from "@/components/ui/menu";

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";



import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
export default function Home() {
   const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  const exportRef = useRef<HTMLDivElement>(null);
  const [exportStatus, setExportStatus] = useState<string>("");
  const handleExport = async () => {
    setExportStatus("⏳ Extracting...");
    const result = await extractFigmaJSON(document.body);
    console.log("🔥 Figma JSON (ALL variants):", result);
    const jsonString = JSON.stringify(result, null, 2);
    await navigator.clipboard.writeText(jsonString);
    // Also auto-save to result.json so it's always up-to-date
    try {
      await saveResultJson(jsonString);
      setExportStatus("✅ Exported + saved to result.json!");
    } catch (e) {
      setExportStatus("✅ Exported with ALL variants! (clipboard only)");
    }
  };
  const [showModal, setShowModal] = React.useState(false);
 const sizes = [
   "xs",
   "sm",
   "md",
   "lg",
   "xl",
   "2xl",
   "3xl",
   "4xl",
   "5xl",
   "6xl",
 ];
  // Expose fiber tree debugger on window so you can call it any time from
  // the browser DevTools console:  window.debugFiberTree()
  if (typeof window !== "undefined") {
    (window as any).debugFiberTree = () => debugPrintFiberTree(document.body);

    // Also expose a targeted Modal extraction test.
    // Run this from the console WHILE THE MODAL IS CLOSED to test the
    // overlay extraction path:  window.debugModalExtraction()
    (window as any).debugModalExtraction = async () => {
      const { extractOverlays, getRootFiberFromElement, extractComponentsFromFiber } = await import(
        "./extractor/index"
      );
      const { components, componentFns } =
        extractComponentsFromFiber(document.body);
      const rootFiber = getRootFiberFromElement(document.body);
      if (!rootFiber) {
        console.warn("No root fiber found");
        return;
      }
      const results = await extractOverlays(
        rootFiber,
        componentFns,
        document.body,
      );
      console.group("[debugModalExtraction] Overlay extraction results:");
      for (const r of results) {
        console.group(`▸ ${r.name} — ${r.components.length} components found`);
        for (const c of r.components) {
          console.log(
            `  ${c.name}: ${c.variants.length} variants,`,
            c.variants[0]?.children?.length ?? 0,
            "children in v0",
          );
        }
        console.groupEnd();
      }
      if (results.length === 0)
        console.warn(
          "No overlays detected. Make sure the modal is CLOSED and the page is fully loaded.",
        );
      console.groupEnd();
    };
  }
  return (
    <div className="bg-background-0 min-h-screen flex flex-col gap-4 items-center justify-center">
      <button className="export-button" onClick={handleExport}>
        Export to Figma JSON
      </button>
      {exportStatus && (
        <p style={{ marginTop: "8px", fontSize: "14px", color: "#10B981" }}>
          {exportStatus}
        </p>
      )}

      <Button variant="solid" size="md" action="primary" isHovered={true}>
        <ButtonText>Click me</ButtonText>
      </Button>

      <Button variant="outline" size="lg" action="negative" isHovered={false}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="link" size="md" action="primary" isDisabled={true}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="link" size="md" action="primary" isDisabled={false}>
        <ButtonText>Click me link</ButtonText>
      </Button>
      <Button variant="outline" size="lg" action="negative">
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive">
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="xs" action="secondary">
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive">
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive" isPressed={true}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive" isPressed={false}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive" isFocused={false}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Button variant="solid" size="sm" action="positive" isFocused={true}>
        <ButtonText>Click me</ButtonText>
      </Button>
      <Text>Hello World!</Text>
      <Text size="2xl">Hello World!</Text>
      <Text size="3xl">Hello World!</Text>
      <Text size="4xl">Hello World!</Text>
      <Text size="5xl">Hello World!</Text>
      <Text size="6xl">Hello World!</Text>
      <Text size="lg">Hello World!</Text>
      <Text size="sm">Hello World!</Text>

      <Text size="md">Hello World!</Text>

      <Avatar size="md">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarBadge />
      </Avatar>

      <Avatar size="md">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarBadge />
      </Avatar>
      <Avatar size="sm">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarBadge />
      </Avatar>

      <Badge size="lg" variant="solid" action="muted">
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>
      <Badge size="md" variant="outline" action="info">
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>
      <Badge size="sm" variant="solid" action="success">
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>
      <Badge size="lg" variant="solid" action="error">
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>
      <Badge size="lg" variant="solid" action="warning">
        <BadgeText>Verified</BadgeText>
        <BadgeIcon as={GlobeIcon} className="ml-2" />
      </Badge>

      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="sm" variant="filled" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="lg" variant="ghost" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="lg" variant="outline" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Grid className="gap-4" _extra={{ className: "grid-cols-10" }}>
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-3" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-5" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-2" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-4" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-6" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-2" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-4" }}
        />
        <GridItem
          className="bg-background-50 p-6 rounded-md"
          _extra={{ className: "col-span-4" }}
        />
      </Grid>
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
      <Checkbox isDisabled={false} isInvalid={false} size="md">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <Checkbox isDisabled={false} isInvalid={true} size="md">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <Checkbox isDisabled={false} isInvalid={true} size="lg">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <Checkbox isDisabled={false} isInvalid={true} size="sm">
        <CheckboxIndicator>
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
      </Checkbox>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here..." />
      </Input>
      <Input
        variant="rounded"
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here..." />
      </Input>
      <Input
        variant="underlined"
        size="sm"
        isDisabled={false}
        isInvalid={true}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here..." />
      </Input>
      <Slider
        defaultValue={30}
        size="md"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Slider
        defaultValue={30}
        size="md"
        orientation="vertical"
        isDisabled={false}
        isReversed={false}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Progress value={40} size="md" orientation="horizontal">
        <ProgressFilledTrack />
      </Progress>
      <Spinner size="large" color="grey" />
      <Spinner size="small" color="blue" />
      <Spinner size="small" color="green" />

      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
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
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                    )}
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
        <Divider />
        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What payment methods do you accept?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                    )}
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
            <button className="export-button" onClick={handleExport}>
              Export to Figma JSON
            </button>
            {exportStatus && (
              <p
                style={{ marginTop: "8px", fontSize: "14px", color: "#10B981" }}
              >
                {exportStatus}
              </p>
            )}
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
      <Menu
        placement="top"
        offset={5}
        disabledKeys={["Settings"]}
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PlayIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
      </Menu>
      <Menu
        placement="top"
        offset={5}
        disabledKeys={["Settings"]}
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PlayIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
      </Menu>
      <div className="flex flex-wrap gap-4 p-8 bg-background-50 rounded-lg m-4 w-full">
        <Icon as={AddIcon} size="sm" />
        <Icon as={AlertCircleIcon} size="lg" />
        <Icon as={ArrowUpIcon} size="md" />
        <Icon as={ArrowDownIcon} size="xs" />
        <Icon as={ArrowRightIcon} size="xl" />
        <Icon as={ArrowLeftIcon} size="xl" />
        <Icon as={AtSignIcon} size="xl" />
        <Icon as={BellIcon} size="xl" />
        <Icon as={CalendarDaysIcon} size="xl" />
        <Icon as={CheckIcon} size="xl" />
        <Icon as={CheckCircleIcon} size="xl" />
        <Icon as={ChevronUpIcon} size="xl" />
        <Icon as={ChevronDownIcon} size="xl" />
        <Icon as={ChevronLeftIcon} size="xl" />
        <Icon as={ChevronRightIcon} size="xl" />
        <Icon as={ChevronsLeftIcon} size="xl" />
        <Icon as={ChevronsRightIcon} size="xl" />
        <Icon as={ChevronsUpDownIcon} size="xl" />
        <Icon as={CircleIcon} size="xl" />
        <Icon as={ClockIcon} size="xl" />
        <Icon as={CloseIcon} size="xl" />
        <Icon as={CloseCircleIcon} size="xl" />
        <Icon as={CopyIcon} size="xl" />
        <Icon as={DownloadIcon} size="xl" />
        <Icon as={EditIcon} size="xl" />
        <Icon as={EyeIcon} size="xl" />
        <Icon as={EyeOffIcon} size="xl" />
        <Icon as={FavouriteIcon} size="xl" />
        <Icon as={GlobeIcon} size="xl" />
        <Icon as={GripVerticalIcon} size="xl" />
        <Icon as={HelpCircleIcon} size="xl" />
        <Icon as={InfoIcon} size="xl" />
        <Icon as={LinkIcon} size="xl" />
        <Icon as={ExternalLinkIcon} size="xl" />
        <Icon as={LoaderIcon} size="xl" />
        <Icon as={LockIcon} size="xl" />
        <Icon as={MailIcon} size="xl" />
        <Icon as={MenuIcon} size="xl" />
        <Icon as={MessageCircleIcon} size="xl" />
        <Icon as={MoonIcon} size="xl" />
        <Icon as={PaperclipIcon} size="xl" />
        <Icon as={PhoneIcon} size="xl" />
        <Icon as={PlayIcon} size="xl" />
        <Icon as={RemoveIcon} size="xl" />
        <Icon as={RepeatIcon} size="xl" />
        <Icon as={Repeat1Icon} size="xl" />
        <Icon as={SearchIcon} size="xl" />
        <Icon as={SettingsIcon} size="xl" />
        <Icon as={ShareIcon} size="xl" />
        <Icon as={SlashIcon} size="xl" />
        <Icon as={StarIcon} size="xl" />
        <Icon as={SunIcon} size="xl" />
        <Icon as={ThreeDotsIcon} size="xl" />
        <Icon as={TrashIcon} size="xl" />
        <Icon as={UnlockIcon} size="xl" />
      </div>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Alert action="muted" variant="outline">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
      <Alert action="info" variant="outline">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
      <Alert action="success" variant="outline">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
      <Alert action="muted" variant="solid">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
      <Alert action="error" variant="solid">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
      <Center>
        {sizes.map((size, index) => (
          <Text size={size} key={index} className="text-center">
            {size}
          </Text>
        ))}
      </Center>
        <Center>
      {sizes.map((size, index) => (
        <Heading size={size} key={index}>
          {size}
        </Heading>
      ))}
    </Center>
    </div>
  );
}
