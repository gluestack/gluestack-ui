// @ts-nocheck
/* eslint-disable */
import React, { forwardRef, useEffect, useState } from 'react';
import { useGetMountTime } from '../../use-get-mount-time';
import {
  Box,
  Modal,
  useToast,
  VStack,
  Icon,
  Center,
  Spinner,
  HStack,
  FormControl,
  Input,
  Button,
  Heading,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Toast,
  ChevronDownIcon,
  Text,
} from '../../gluestack-ui-components';
import {
  CheckCircleIcon,
  CloseIcon,
  CheckIcon,
  CircleIcon,
} from '../../gluestack-ui-components/core/Icons/Icons';
import { View } from 'react-native';

const sidebarFiltersAmmenities = [
  {
    label: 'Wifi',
    value: 'wifi',
  },
  {
    label: 'Washing machine',
    value: 'washing-machine',
  },
  {
    label: 'Air conditioning',
    value: 'air-conditioning',
  },
  {
    label: 'Kitchen',
    value: 'kitchen',
  },
  {
    label: 'Dryer',
    value: 'dryer',
  },
  {
    label: 'Iron',
    value: 'iron',
  },
  {
    label: 'Hair Dryer',
    value: 'hair-dryer',
  },
];
const phoneNumberCodes = [
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+91', country: 'India' },
  { code: '+61', country: 'Australia' },
  { code: '+33', country: 'France' },
  { code: '+49', country: 'Germany' },
  { code: '+81', country: 'Japan' },
  { code: '+86', country: 'China' },
  { code: '+7', country: 'Russia' },
  { code: '+971', country: 'United Arab Emirates' },
];
const propertyType = [
  'Flat/Apartment',
  'Independent House / Villa',
  'Independent Floor/Builder Floor',
  'Plot / Land',
];
const sellOrRentOptions = ['Sell', 'Rent/Lease'];

const handleClose = (setModalVisible: any) => {
  setModalVisible(false);
};

const ListYourPlaceModal = ({ modalVisible, setModalVisible }: any) => {
  const [modalFormStep, setModalFormStep] = React.useState(0);

  useEffect(() => {
    setModalFormStep(0);
  }, []);

  const toast = useToast();
  const getModalStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ModalContent1
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
          />
        );
      case 1:
        return (
          <ModalContent2
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
          />
        );
      case 2:
        return (
          <ModalContent3
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setModalFormStep={setModalFormStep}
            toast={toast}
          />
        );
    }
  };

  return (
    <Modal
      size="md"
      isOpen={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      avoidKeyboard
    >
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <HStack alignItems="center">
            <Heading size="sm" fontWeight="$semibold">
              List your place
            </Heading>
          </HStack>
          <Modal.CloseButton>
            <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
          </Modal.CloseButton>
        </Modal.Header>
        <Modal.Body>
          <VStack space="md">
            <ModalContent2 />
            {/* {getModalStepContent(modalFormStep)} */}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

const SaveForLaterButton = ({ setModalVisible, toast }: any) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSaveForLater = () => {
    handleClose(setModalVisible);
    // toast example
    toast.show({
      placement: 'top',
      render: ({ id }: any) => {
        return (
          <RenderToast
            description="Your property listing has been successfully saved."
            nativeId={id}
          />
        );
      },
    });
  };

  return (
    <Box h="$12" w="100%">
      {showSpinner ? (
        <Center>
          <Spinner size="large" color="$primary500" />
        </Center>
      ) : (
        <Button
          action="secondary"
          variant="outline"
          onPress={() => {
            setShowSpinner(true);
            setTimeout(() => {
              handleSaveForLater();
              setShowSpinner(false);
            }, 2000);
          }}
        >
          <Button.Text>Save for Later</Button.Text>
        </Button>
      )}
    </Box>
  );
};

const PreviousStepperButton = ({ setModalFormStep, step }: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setModalFormStep(step);
      }}
    >
      <Button.Text>Back</Button.Text>
    </Button>
  );
};

const RenderToast = ({ description, title, id }: any) => {
  return (
    <Toast action="success" id={id} top={150}>
      <HStack alignItems="center" space="xs">
        <Icon as={CheckCircleIcon} />
        <Toast.Title>{title}</Toast.Title>
        <Toast.Description>{description}</Toast.Description>
      </HStack>
    </Toast>
  );
};

const NextStepperButton = ({ setModalFormStep, step }: any) => {
  return (
    <Button
      onPress={() => {
        setModalFormStep(step);
      }}
    >
      <Button.Text>Next</Button.Text>
    </Button>
  );
};

const PostNowButton = ({ setModalVisible, toast }: any) => {
  return (
    <Button
      onPress={() => {
        handleClose(setModalVisible);
        toast.show({
          placement: 'top',
          render: ({ id }: any) => {
            return (
              <RenderToast
                description="Your property has been listed."
                title="Congratulations!"
                nativeId={id}
              />
            );
          },
        });
      }}
    >
      <Button.Text>Post Now</Button.Text>
    </Button>
  );
};

const ModalContent1 = React.memo(({ setModalFormStep, toast }: any) => {
  const [values, setValues]: any = React.useState('Residential');
  const [selectedSellOrRentOption, setSelectedSellOrRentOption] = useState(
    sellOrRentOptions[0]
  );
  const [selectedPropertyTypeOptions, setSelectedPropertyTypeOptions]: any =
    useState([]);

  const handlePropertyTypeSelection = (item: any) => {
    if (selectedPropertyTypeOptions.includes(item)) {
      setSelectedPropertyTypeOptions(
        selectedPropertyTypeOptions.filter((option: string) => option !== item)
      );
    } else {
      setSelectedPropertyTypeOptions([...selectedPropertyTypeOptions, item]);
    }
  };

  return (
    <VStack space="md">
      <VStack space="sm">
        <FormControl>
          <FormControl.Label>
            <FormControl.Label.Text>I want to...</FormControl.Label.Text>
          </FormControl.Label>
          {/* <HStack space="sm">
            {sellOrRentOptions.map((item, index) => (
              <Button
                key={index}
                action={
                  item === selectedSellOrRentOption ? 'primary' : 'secondary'
                }
                rounded="$full"
                variant="outline"
                size="xs"
                mb="$2"
                onPress={() => {
                  setSelectedSellOrRentOption(item);
                }}
              >
                <Button.Text>{item}</Button.Text>
              </Button>
            ))}
          </HStack> */}
        </FormControl>
      </VStack>
      {/* <VStack space="md">
        <VStack space="sm">
          <FormControl>
            <FormControl.Label>
              <FormControl.Label.Text>Property is...</FormControl.Label.Text>
            </FormControl.Label>
            <Radio.Group
              value={values}
              onChange={setValues}
              accessibilityLabel="place-type"
            >
              <HStack space="md">
                <Radio value="Residential">
                  <Radio.Indicator>
                    <Radio.Icon as={CircleIcon} />
                  </Radio.Indicator>
                  <Radio.Label ml="$2">Residential</Radio.Label>
                </Radio>
                <Radio value="Commercial">
                  <Radio.Indicator>
                    <Radio.Icon as={CircleIcon} />
                  </Radio.Indicator>
                  <Radio.Label ml="$2">Commercial</Radio.Label>
                </Radio>
              </HStack>
            </Radio.Group>
          </FormControl>
        </VStack>
        <HStack flexWrap="wrap" space="sm">
          {propertyType.map((item: string, index: any) => (
            <Button
              key={index}
              action={
                selectedPropertyTypeOptions.includes(item)
                  ? 'primary'
                  : 'secondary'
              }
              rounded="$full"
              variant="outline"
              size="xs"
              mb="$2"
              onPress={() => {
                handlePropertyTypeSelection(item);
              }}
            >
              <Button.Text>{item}</Button.Text>
            </Button>
          ))}
        </HStack>
      </VStack> */}
      {/* <NextStepperButton setModalFormStep={setModalFormStep} step={1} /> */}
    </VStack>
  );
});

const ModalContent2 = ({ setModalFormStep }: any) => {
  const time = Date.now();
  useEffect(() => {
    console.log('Time Taken: ', Date.now() - time);
  }, []);
  return (
    <VStack space="md">
      <AmenitiesSection />
      {/* <VStack space="sm" w="100%">
        <NextStepperButton setModalFormStep={setModalFormStep} step={2} />
        <PreviousStepperButton setModalFormStep={setModalFormStep} step={0} />
      </VStack> */}
    </VStack>
  );
};

const ModalContent3 = ({ setModalVisible, toast }: any) => {
  return (
    <VStack space="md">
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Title</FormControl.Label.Text>
        </FormControl.Label>
        <Input w="100%">
          <Input.Input placeholder="Enter property name" />
        </Input>
      </FormControl>
      <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Description</FormControl.Label.Text>
        </FormControl.Label>
        {/* textarea: example */}
        <Textarea>
          <Textarea.Input placeholder="Provide description" />
        </Textarea>
      </FormControl>
      <VStack space="sm">
        <FormControl>
          <FormControl.Label>
            <FormControl.Label.Text>Contact me</FormControl.Label.Text>
          </FormControl.Label>
          <HStack space="sm">
            {/* select: example */}
            <Select defaultValue="+91" w="$24" placeholder="Select code">
              <Select.Trigger>
                <Select.Input />
                <Select.Icon as={ChevronDownIcon} mr="$3" />
              </Select.Trigger>
              <Select.Portal>
                <Select.Backdrop />
                <Select.Content>
                  <Select.DragIndicatorWrapper>
                    <Select.DragIndicator />
                  </Select.DragIndicatorWrapper>
                  {phoneNumberCodes.map((item, index) => (
                    <Select.Item
                      label={`${item.code}`}
                      value={`${item.code}`}
                      key={`${item.code}`}
                    />
                  ))}
                </Select.Content>
              </Select.Portal>
            </Select>
            {/* input: example */}
            <Input flex={1}>
              <Input.Input
                placeholder="Phone number"
                // keyboardType="number-pad"
              />
            </Input>
          </HStack>
        </FormControl>
        <VStack space="sm">
          <PostNowButton setModalVisible={setModalVisible} toast={toast} />
          <SaveForLaterButton setModalVisible={setModalVisible} toast={toast} />
        </VStack>
      </VStack>
    </VStack>
  );
};

const styledViewRN = (Component) => {
  return forwardRef((props) => {
    return <Component {...props} />;
  });
};

const MYRNView = styledViewRN(View);

const AmenitiesSection = () => {
  const [values, setValues] = React.useState(['wifi', 'air-conditioning']);
  // return <View />;
  // 5-6ms

  // 7-8ms

  // return (
  //   <>
  //     {Array.from({ length: 1000 }).map((_, index) => (
  //       <View
  //         key={index}
  //         // style={{
  //         //   backgroundColor: 'red',
  //         //   height: 200,
  //         //   width: 200,
  //         // }}
  //       />
  //     ))}
  //   </>
  // );

  return (
    <>
      {Array.from({ length: 1000 }).map((_, index) => (
        <Box
          debug="BOX_TEST"
          key={index}
          // style={{
          //   backgroundColor: 'red',
          //   height: 200,
          //   width: 200,
          // }}
        />
      ))}
    </>
  );
  return (
    <Box debug="BOX_TEST">
      {/* <FormControl>
        <FormControl.Label>
          <FormControl.Label.Text>Ammenities</FormControl.Label.Text>
        </FormControl.Label>
        <Checkbox.Group
          value={values}
          onChange={setValues}
          accessibilityLabel="ammenities"
        >
          {sidebarFiltersAmmenities.map((ammenity: any) => {
            return (
              <Checkbox
                value={ammenity.value}
                justifyContent="flex-start"
                my="$2"
                key={ammenity.value}
                accessibilityLabel={ammenity.value}
              >
                <Checkbox.Indicator>
                  <Checkbox.Icon as={CheckIcon} />
                </Checkbox.Indicator>
                <Checkbox.Label ml="$2">{ammenity.label}</Checkbox.Label>
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </FormControl> */}
    </Box>
  );
};

export default ListYourPlaceModal;
/* eslint-disable */
