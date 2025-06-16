import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  VStack,
  Icon,
  Center,
  Spinner,
  HStack,
  Input,
  Button,
  Heading,
  Radio,
  Checkbox,
  Textarea,
  ChevronDownIcon,
  CheckCircleIcon,
  CloseIcon,
  CheckIcon,
  CircleIcon,
  InputField,
  TextareaInput,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  ButtonText,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  RadioGroup,
  FormControl,
  FormControlLabelText,
  FormControlLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalBackdrop,
  ModalContent,
  useToast,
  Toast,
  ToastDescription,
  ToastTitle,
  Select,
  SelectTrigger,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectBackdrop,
  SelectIcon,
  SelectInput,
  SelectContent,
  SelectPortal,
  SelectItem,
} from "../../components/ui";
import { ThemeContext } from "../../App";

const sidebarFiltersAmmenities = [
  {
    label: "Wifi",
    value: "wifi",
  },
  {
    label: "Washing machine",
    value: "washing-machine",
  },
  {
    label: "Air conditioning",
    value: "air-conditioning",
  },
  {
    label: "Kitchen",
    value: "kitchen",
  },
  {
    label: "Dryer",
    value: "dryer",
  },
  {
    label: "Iron",
    value: "iron",
  },
  {
    label: "Hair Dryer",
    value: "hair-dryer",
  },
];
const phoneNumberCodes = [
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
  { code: "+971", country: "United Arab Emirates" },
];
const propertyType = [
  "Flat/Apartment",
  "Independent House / Villa",
  "Independent Floor/Builder Floor",
  "Plot / Land",
];
const sellOrRentOptions = ["Sell", "Rent/Lease"];

const handleClose = (setModalVisible: any) => {
  setModalVisible(false);
};

const ListYourPlaceModal = ({ modalVisible, setModalVisible }: any) => {
  const { colorMode } = useContext(ThemeContext);
  const [modalFormStep, setModalFormStep] = React.useState(0);

  useEffect(() => {
    if (modalVisible === true) {
      setModalFormStep(0);
    }
  }, [modalVisible]);

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
    <Box>
      {/* Modal: example */}
      <Modal
        size="md"
        isOpen={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        avoidKeyboard
      >
        <ModalBackdrop />
        <ModalContent className="p-4">
          <ModalHeader>
            <HStack className="items-center">
              <Heading size="sm" className="font-semibold">
                List your place
              </Heading>
            </HStack>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                className="w-4 h-4"
                color={colorMode === "light" ? "#404040" : "#A3A3A3"}
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody className="mb-0">
            <VStack space="md">{getModalStepContent(modalFormStep)}</VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const SaveForLaterButton = ({ setModalVisible, toast }: any) => {
  const { colorMode } = useContext(ThemeContext);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSaveForLater = () => {
    handleClose(setModalVisible);
    // toast example
    toast.show({
      placement: "top",
      render: ({ id }: any) => {
        return (
          <RenderToastContent
            description="Your property listing has been successfully saved."
            nativeId={id}
          />
        );
      },
    });
  };

  return (
    <Box className="w-full">
      {showSpinner ? (
        <Center>
          <Spinner
            size="large"
            color={colorMode === "light" ? "#333333" : "#F0F0F0"}
          />
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
          <ButtonText>Save for Later</ButtonText>
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
      <ButtonText>Back</ButtonText>
    </Button>
  );
};

const RenderToastContent = ({ description, title, id }: any) => {
  return (
    <Toast action="success" id={id} className="top-[150px] flex flex-row">
      <Icon as={CheckCircleIcon} className="stroke-typography-0 mt-0.5" />
      <VStack>
        {title && <ToastTitle>{title}</ToastTitle>}
        <ToastDescription>{description}</ToastDescription>
      </VStack>
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
      <ButtonText className="text-typography-0 group-hover/button:text-typography-0">
        Next
      </ButtonText>
    </Button>
  );
};

const PostNowButton = ({ setModalVisible, toast }: any) => {
  return (
    <Button
      onPress={() => {
        handleClose(setModalVisible);
        toast.show({
          placement: "top",
          render: ({ id }: any) => {
            return (
              <RenderToastContent
                description="Your property has been listed."
                title="Congratulations!"
                nativeId={id}
              />
            );
          },
        });
      }}
    >
      <ButtonText className="text-typography-0 group-hover/button:text-typography-0">
        Post Now
      </ButtonText>
    </Button>
  );
};

const ModalContent1 = ({ setModalFormStep, toast }: any) => {
  const [values, setValues]: any = React.useState("Residential");
  const [selectedSellOrRentOption, setSelectedSellOrRentOption] = useState(
    sellOrRentOptions[0]
  );
  const [selectedPropertyTypeOptions, setSelectedPropertyTypeOptions]: any =
    useState([]);
  const { colorMode } = useContext(ThemeContext);

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
          <FormControlLabel>
            <FormControlLabelText>I want to...</FormControlLabelText>
          </FormControlLabel>
          <HStack space="sm">
            {sellOrRentOptions.map((item, index) => (
              <Button
                key={index}
                action={
                  item === selectedSellOrRentOption ? "primary" : "secondary"
                }
                variant="outline"
                size="xs"
                onPress={() => {
                  setSelectedSellOrRentOption(item);
                }}
                className="rounded-full mb-2"
              >
                <ButtonText>{item}</ButtonText>
              </Button>
            ))}
          </HStack>
        </FormControl>
      </VStack>
      <VStack space="md">
        <VStack space="sm">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Property is...</FormControlLabelText>
            </FormControlLabel>
            <RadioGroup
              value={values}
              onChange={setValues}
              accessibilityLabel="place-type"
            >
              <HStack space="md">
                <Radio value="Residential">
                  <RadioIndicator>
                    <RadioIcon
                      as={CircleIcon}
                      color={colorMode === "light" ? "#292929" : "#FAFAFA"}
                    />
                  </RadioIndicator>
                  <RadioLabel>Residential</RadioLabel>
                </Radio>
                <Radio value="Commercial">
                  <RadioIndicator>
                    <RadioIcon
                      as={CircleIcon}
                      color={colorMode === "light" ? "#292929" : "#FAFAFA"}
                    />
                  </RadioIndicator>
                  <RadioLabel>Commercial</RadioLabel>
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
        </VStack>
        <HStack space="sm" className="flex-wrap">
          {propertyType.map((item: string, index: any) => (
            <Button
              key={index}
              action={
                selectedPropertyTypeOptions.includes(item)
                  ? "primary"
                  : "secondary"
              }
              variant="outline"
              size="xs"
              onPress={() => {
                handlePropertyTypeSelection(item);
              }}
              className="rounded-full mb-2 hover:bg-background-200"
            >
              <ButtonText>{item}</ButtonText>
            </Button>
          ))}
        </HStack>
      </VStack>
      <NextStepperButton setModalFormStep={setModalFormStep} step={1} />
    </VStack>
  );
};

const ModalContent2 = ({ setModalFormStep }: any) => {
  return (
    <VStack space="md">
      <AmenitiesSection />
      <VStack space="sm" className="w-full">
        <NextStepperButton setModalFormStep={setModalFormStep} step={2} />
        <PreviousStepperButton setModalFormStep={setModalFormStep} step={0} />
      </VStack>
    </VStack>
  );
};

const ModalContent3 = ({ setModalVisible, toast }: any) => {
  return (
    <VStack space="md">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Title</FormControlLabelText>
        </FormControlLabel>
        <Input className="w-full">
          <InputField placeholder="Enter property name" />
        </Input>
      </FormControl>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Description</FormControlLabelText>
        </FormControlLabel>
        {/* textarea: example */}
        <Textarea>
          <TextareaInput placeholder="Provide description" />
        </Textarea>
      </FormControl>
      <VStack space="sm">
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Contact me</FormControlLabelText>
          </FormControlLabel>
          <HStack space="sm">
            {/* select: example */}
            <Select
              defaultValue="+91"
              placeholder="Select code"
              className="w-24"
            >
              <SelectTrigger>
                <SelectInput />
                <SelectIcon as={ChevronDownIcon} className="mr-3" />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {phoneNumberCodes.map((item, index) => (
                    <SelectItem
                      label={`${item.code}`}
                      value={`${item.code}`}
                      key={`${item.code}`}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>

            {/* input: example */}
            <Input className="flex-1">
              <InputField keyboardType="numeric" placeholder="Phone number" />
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

const AmenitiesSection = () => {
  const { colorMode } = useContext(ThemeContext);
  const [values, setValues] = React.useState(["wifi", "air-conditioning"]);
  return (
    <VStack space="sm">
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Ammenities</FormControlLabelText>
        </FormControlLabel>
        <CheckboxGroup
          value={values}
          onChange={setValues}
          accessibilityLabel="ammenities"
          className="ml-1"
        >
          {sidebarFiltersAmmenities.map((ammenity: any) => {
            return (
              <Checkbox
                value={ammenity.value}
                className="my-2 justify-start"
                key={ammenity.value}
                accessibilityLabel={ammenity.value}
              >
                <CheckboxIndicator>
                  <CheckboxIcon
                    as={CheckIcon}
                    color={colorMode === "light" ? "#FEFEFF" : "#171717"}
                  />
                </CheckboxIndicator>
                <CheckboxLabel>{ammenity.label}</CheckboxLabel>
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </FormControl>
    </VStack>
  );
};

export default ListYourPlaceModal;
