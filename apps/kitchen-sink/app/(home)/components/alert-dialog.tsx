import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop } from '@/components/ui/alert-dialog'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Heading } from '@/components/ui/heading'
import { Box } from '@/components/ui/box'
import { Image } from '@/components/ui/image'
import { VStack } from '@/components/ui/vstack'
import { Icon, TrashIcon } from '@/components/ui/icon'
import { UploadCloud } from 'lucide-react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
const [showAlertDialog, setShowAlertDialog] = React.useState(false)
  const handleClose = () => setShowAlertDialog(false)
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
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
            <Button variant="outline" onPress={handleClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
};

const ExampleAlertDialogWithImage = () => {
const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Pay</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="p-0 max-w-[590px] sm:flex-row rounded-xl">
          <Box className="bg-primary min-w-[123px] items-center justify-center native:max-h-[95px]">
            <Image
              source={{
                uri: "https://gluestack.github.io/public-blog-video-assets/Image%20Container.png",
              }}
              alt="image"
              className="min-h-[95px] min-w-[95px] h-full w-full"
            />
          </Box>
          <AlertDialogBody
            className=""
            contentContainerClassName="p-6 flex-row justify-between gap-6 md:gap-9 items-center"
          >
            <VStack>
              <Heading className="text-foreground font-semibold text-lg leading-6">
                Get Additional Discount
              </Heading>
              <Text className="pt-2 text-foreground text-sm">
                Upgrade your plan before your trial ends yo get 5% discount. Use
                code{' '}
                <Text className="font-bold text-base">
                  #PRO005
                </Text>
              </Text>
            </VStack>
            <Button className="hidden sm:flex" onPress={handleClose}>
              <ButtonText>Upgrade</ButtonText>
            </Button>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
};

const ExampleAlertDialogWithIconCta = () => {
const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Upload</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="p-4 gap-4 max-w-[649px] w-full md:flex-row mx-2">
          <AlertDialogBody
            className=""
            contentContainerClassName="flex-row gap-4"
          >
            <Box className="h-10 min-[350px]:h-14 w-12 min-[350px]:w-14 rounded-full bg-muted items-center justify-center">
              <Icon
                as={UploadCloud}
                className="stroke-foreground h-6 w-6"
              />
            </Box>
            <VStack className="gap-1">
              <Heading className="text-foreground font-semibold text-lg">
                Cloud storage full!
              </Heading>
              <Text className="text-sm text-muted-foreground">You have used up all the storage you have.</Text>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              variant="outline"
              onPress={handleClose}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={handleClose}>
              <ButtonText>Upgrade Storage</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
};

const ExampleAlertDialogWithDeleteOption = () => {
const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Delete Invoice</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="w-full max-w-[415px] gap-4 items-center">
          <Box className="rounded-full h-[52px] w-[52px] bg-destructive/10 items-center justify-center">
            <Icon as={TrashIcon} className="stroke-destructive h-6 w-6" />
          </Box>
          <AlertDialogHeader className="mb-2">
            <Heading className="text-foreground font-semibold text-lg">Delete account?</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text className="text-sm text-muted-foreground text-center">
              The invoice will be deleted from the invoices section and in
              the documents folder. This cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="mt-5">
            <Button
              variant="destructive"
              onPress={handleClose}
              className="px-[30px]"
            >
              <ButtonText>Delete</ButtonText>
            </Button>
            <Button
              variant="outline"
              onPress={handleClose}
              className="px-[30px]"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "alertdialog-with-image",
    label: "AlertDialog with Image",
    content: <ExampleAlertDialogWithImage />,
  },
  {
    value: "alertdialog-with-icon-cta",
    label: "AlertDialog with icon + cta",
    content: <ExampleAlertDialogWithIconCta />,
  },
  {
    value: "alertdialog-with-delete-option",
    label: "AlertDialog with Delete Option",
    content: <ExampleAlertDialogWithDeleteOption />,
  }
];

export default function AlertDialogScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}