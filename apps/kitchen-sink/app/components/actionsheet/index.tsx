import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetIcon,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
} from '@/components/ui/actionsheet';
import { Button, ButtonText, ButtonGroup } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Input, InputSlot, InputField, InputIcon } from '@/components/ui/input';
import { CreditCardIcon, UploadCloud } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import {
  EditIcon,
  EyeOffIcon,
  ClockIcon,
  DownloadIcon,
  TrashIcon,
  Icon,
  CloseIcon,
} from '@/components/ui/icon';
import { Heading } from '@/components/ui/heading';
import { Pressable } from '@/components/ui/pressable';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer props={{}} title={'Basic'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          return (
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
                    <ActionsheetItemText>
                      Add to Saved Items
                    </ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem isDisabled onPress={handleClose}>
                    <ActionsheetItemText>Delete</ActionsheetItemText>
                  </ActionsheetItem>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Without SnapPoints'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          return (
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
                    <ActionsheetItemText>
                      Add to Saved Items
                    </ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem isDisabled onPress={handleClose}>
                    <ActionsheetItemText>Delete</ActionsheetItemText>
                  </ActionsheetItem>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'With SnapPoints'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);

          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet
                isOpen={showActionsheet}
                onClose={handleClose}
                snapPoints={[36]}
              >
                <ActionsheetBackdrop />
                <ActionsheetContent className="">
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <VStack className="w-full pt-5">
                    <HStack space="md" className="justify-center items-center">
                      <Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded-sm">
                        <Image
                          source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                          resizeMode="contain"
                          className="flex-1"
                        />
                      </Box>
                      <VStack className="flex-1">
                        <Text className="font-bold">Mastercard</Text>
                        <Text>Card ending in 2345</Text>
                      </VStack>
                    </HStack>
                    <FormControl className="mt-9">
                      <FormControlLabel>
                        <FormControlLabelText>
                          Confirm security code
                        </FormControlLabelText>
                      </FormControlLabel>
                      <Input className="w-full">
                        <InputSlot>
                          <InputIcon as={CreditCardIcon} className="ml-2" />
                        </InputSlot>
                        <InputField placeholder="CVC/CVV" />
                      </Input>
                      <Button onPress={handleClose} className="mt-3">
                        <ButtonText className="flex-1">Pay $1000</ButtonText>
                      </Button>
                    </FormControl>
                  </VStack>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Icons'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);

          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetIcon
                      className="stroke-background-700"
                      as={EditIcon}
                    />
                    <ActionsheetItemText>Edit Message</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetIcon
                      className="stroke-background-700"
                      as={EyeOffIcon}
                    />
                    <ActionsheetItemText>Mark Unread</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetIcon
                      className="stroke-background-700"
                      as={ClockIcon}
                    />
                    <ActionsheetItemText>Remind Me</ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem onPress={handleClose}>
                    <ActionsheetIcon
                      className="stroke-background-700"
                      as={DownloadIcon}
                    />
                    <ActionsheetItemText>
                      Add to Saved Items
                    </ActionsheetItemText>
                  </ActionsheetItem>
                  <ActionsheetItem isDisabled onPress={handleClose}>
                    <ActionsheetIcon
                      className="stroke-background-700"
                      as={TrashIcon}
                    />
                    <ActionsheetItemText>Delete</ActionsheetItemText>
                  </ActionsheetItem>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'VirtualizedList'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          const data = React.useMemo(
            () =>
              Array(50)
                .fill(0)
                .map((_, index) => 'Item' + index),
            []
          );
          const getItem = (_data, index) => ({
            id: index,
            title: _data[index],
          });
          const getItemCount = (_data) => _data.length;
          const Item = React.useCallback(
            ({ title }) => (
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>{title}</ActionsheetItemText>
              </ActionsheetItem>
            ),
            [handleClose]
          );
          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet
                isOpen={showActionsheet}
                onClose={handleClose}
                snapPoints={[50]}
              >
                <ActionsheetBackdrop />
                <ActionsheetContent>
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <ActionsheetVirtualizedList
                    h="$56"
                    data={data}
                    initialNumToRender={5}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={(item) => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                  />
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'FlatList'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          const DATA = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              title: 'First Item',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              title: 'Second Item',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              title: 'Third Item',
            },
          ];
          const Item = React.useCallback(
            ({ title }) => (
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>{title}</ActionsheetItemText>
              </ActionsheetItem>
            ),
            [handleClose]
          );
          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent>
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <ActionsheetFlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={(item) => item.id}
                  />
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'SectionList'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          const DATA = [
            {
              title: 'Gender',
              data: ['Men', 'Women', 'Boy', 'Girl'],
            },
          ];
          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet
                isOpen={showActionsheet}
                onClose={handleClose}
                snapPoints={[35]}
              >
                <ActionsheetBackdrop />
                <ActionsheetContent>
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <ActionsheetSectionList
                    h="$56"
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                      <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>{item}</ActionsheetItemText>
                      </ActionsheetItem>
                    )}
                    renderSectionHeader={({ section: { title, data } }) => (
                      <ActionsheetSectionHeaderText>
                        {title} ({data.length})
                      </ActionsheetSectionHeaderText>
                    )}
                  />
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'File Upload with Actionsheet'}>
        {(props) => {
          const [showActionsheet, setShowActionsheet] = React.useState(false);
          const handleClose = () => setShowActionsheet(false);
          return (
            <>
              <Button onPress={() => setShowActionsheet(true)}>
                <ButtonText>Open</ButtonText>
              </Button>
              <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
                <ActionsheetBackdrop />
                <ActionsheetContent className="px-5">
                  <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                  </ActionsheetDragIndicatorWrapper>
                  <HStack className="justify-between w-full mt-3">
                    <VStack>
                      <Heading size="md" className="font-semibold">
                        Upload your latest resume
                      </Heading>
                      <Text size="sm">JPG, PDF, PNG supported</Text>
                    </VStack>
                    <Pressable onPress={handleClose}>
                      <Icon
                        as={CloseIcon}
                        size="lg"
                        className="stroke-background-500"
                      />
                    </Pressable>
                  </HStack>
                  <Box className="my-[18px] items-center justify-center rounded-xl bg-background-50 border border-dashed border-outline-300 h-[130px] w-full">
                    <Icon
                      as={UploadCloud}
                      className="h-[62px] w-[62px] stroke-background-200"
                    />
                    <Text size="sm">No files uploaded yet</Text>
                  </Box>
                  <ButtonGroup className="w-full">
                    <Button className="w-full" onPress={handleClose}>
                      <ButtonText>Browse files</ButtonText>
                    </Button>
                    <Button
                      className="w-full"
                      variant="outline"
                      isDisabled
                      action="secondary"
                    >
                      <ButtonText>Upload</ButtonText>
                    </Button>
                  </ButtonGroup>
                </ActionsheetContent>
              </Actionsheet>
            </>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
