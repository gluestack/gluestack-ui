import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetFlatList, ActionsheetIcon, ActionsheetItem, ActionsheetItemText, ActionsheetSectionHeaderText, ActionsheetSectionList, ActionsheetVirtualizedList } from '@/components/ui/actionsheet'
import { Box } from '@/components/ui/box'
import { Button, ButtonGroup, ButtonText } from '@/components/ui/button'
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { CircleIcon, ClockIcon, CloseIcon, DownloadIcon, EditIcon, EyeOffIcon, Icon, TrashIcon } from '@/components/ui/icon'
import { Image } from '@/components/ui/image'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Pressable } from '@/components/ui/pressable'
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { CreditCardIcon, UploadCloud } from 'lucide-react-native'


import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist'
import React from 'react'

const ExampleBasic = () => {
const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(false)
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
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
};

const ExampleWithoutSnapPoints = () => {
const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(false)
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
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
};

const ExampleWithSnapPoints = () => {
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
  )
};

const ExampleSelectionWithStatePersistence = () => {
const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [preference, setPreference] = React.useState('all');
  const [tempPreference, setTempPreference] = React.useState('all');
  
  const handleClose = () => {
    setPreference(tempPreference);
    setShowActionsheet(false);
  };

  const options = [
    { value: 'all', label: 'All Notifications' },
    { value: 'mentions', label: 'Mentions Only' },
    { value: 'off', label: 'Off' },
  ];

  return (
    <>
      <VStack space="md">
        <Text>Current: {options.find(o => o.value === preference)?.label}</Text>
        <Button onPress={() => {
          setTempPreference(preference);
          setShowActionsheet(true);
        }}>
          <ButtonText>Change Preference</ButtonText>
        </Button>
      </VStack>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack className="w-full p-4" space="xl">
            <Heading size="lg">Preferences</Heading>
            <RadioGroup value={tempPreference} onChange={setTempPreference} className="gap-4">
              {options.map((option) => (
                <Radio key={option.value} value={option.value} className="justify-between">
                  <RadioLabel>{option.label}</RadioLabel>
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                </Radio>
              ))}
            </RadioGroup>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
};

const ExampleIcons = () => {
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
            <ActionsheetIcon className="stroke-background-700" as={EditIcon} />
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon className="stroke-background-700" as={EyeOffIcon} />
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon className="stroke-background-700" as={ClockIcon} />
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetIcon className="stroke-background-700" as={DownloadIcon} />
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetIcon className="stroke-background-700" as={TrashIcon} />
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
};

const ExampleVirtualizedList = () => {
const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(false);
    const data = React.useMemo(() => Array(50).fill(0).map((_, index) => 'Item' + index),[]);
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
        <Actionsheet isOpen={showActionsheet} onClose={handleClose}  snapPoints={[50]}>
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
)
};

const ExampleFlatList = () => {
const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(false);
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item'
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
)
};

const ExampleSectionList = () => {
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
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[35]}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
           <ActionsheetSectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>{item}</ActionsheetItemText>
              </ActionsheetItem>
            )}
            renderSectionHeader={({ section: { title, data } }) => (
              <ActionsheetSectionHeaderText>
                {title}  ({data.length})
              </ActionsheetSectionHeaderText>
            )}
          />
        </ActionsheetContent>
      </Actionsheet>
    </>
)
};

const ExampleFileUploadWithActionsheet = () => {
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
                      <Icon as={CloseIcon} size="lg" className="stroke-background-500" />
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
          )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "without-snappoints",
    label: "Without SnapPoints",
    content: <ExampleWithoutSnapPoints />,
  },
  {
    value: "with-snappoints",
    label: "With SnapPoints",
    content: <ExampleWithSnapPoints />,
  },
  {
    value: "selection-with-state-persistence",
    label: "Selection with State Persistence",
    content: <ExampleSelectionWithStatePersistence />,
  },
  {
    value: "icons",
    label: "Icons",
    content: <ExampleIcons />,
  },
  {
    value: "virtualizedlist",
    label: "VirtualizedList",
    content: <ExampleVirtualizedList />,
  },
  {
    value: "flatlist",
    label: "FlatList",
    content: <ExampleFlatList />,
  },
  {
    value: "sectionlist",
    label: "SectionList",
    content: <ExampleSectionList />,
  },
  {
    value: "file-upload-with-actionsheet",
    label: "File Upload with Actionsheet",
    content: <ExampleFileUploadWithActionsheet />,
  }
];

export default function ActionsheetScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}