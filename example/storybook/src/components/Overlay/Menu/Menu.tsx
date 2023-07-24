import React from 'react';

import {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  Center,
  Actionsheet,
  VStack,
  Box,
  Radio,
  CircleIcon,
  CheckIcon,
  Checkbox,
} from '../../../ui-components';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ _placement = 'bottom' }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleOpen = React.useCallback(() => {
    // console.startMountTime = new Date().getTime();
    setIsOpen(true);
  }, [setIsOpen]);
  const [values, setValues] = React.useState('Eng');
  const [chkbxvalues, chkbxSetValues] = React.useState(['Illustration']);
  return (
    <Center>
      <Button onPress={handleOpen}>
        <Button.Text>Menu</Button.Text>
      </Button>
      <Actionsheet
        isOpen={isOpen}
        onClose={handleClose}
        // {...props}
      >
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Box>
            <VStack
              sx={{
                gap: '$20',
              }}
            >
              <Radio.Group value={values} onChange={setValues}>
                <VStack space="sm">
                  <Radio value="Eng">
                    <Radio.Indicator mr="$2">
                      <Radio.Icon as={CircleIcon} />
                    </Radio.Indicator>
                    <Radio.Label>English</Radio.Label>
                  </Radio>
                  <Radio value="Fre">
                    <Radio.Indicator mr="$2">
                      <Radio.Icon as={CircleIcon} />
                    </Radio.Indicator>
                    <Radio.Label>French</Radio.Label>
                  </Radio>
                  <Radio value="Ger">
                    <Radio.Indicator mr="$2">
                      <Radio.Icon as={CircleIcon} />
                    </Radio.Indicator>
                    <Radio.Label>German</Radio.Label>
                  </Radio>
                </VStack>
              </Radio.Group>
              <Checkbox.Group
                value={chkbxvalues}
                onChange={(keys) => {
                  chkbxSetValues(keys);
                }}
              >
                <HStack space="2xl">
                  <Checkbox value="Illustration">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Illustration</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Animation">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Animation</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Typography">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Typography</Checkbox.Label>
                  </Checkbox>
                </HStack>
              </Checkbox.Group>
              <Checkbox.Group
                value={chkbxvalues}
                onChange={(keys) => {
                  chkbxSetValues(keys);
                }}
              >
                <HStack space="2xl">
                  <Checkbox value="Illustration">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Illustration</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Animation">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Animation</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Typography">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Typography</Checkbox.Label>
                  </Checkbox>
                </HStack>
              </Checkbox.Group>
              <Checkbox.Group
                value={chkbxvalues}
                onChange={(keys) => {
                  chkbxSetValues(keys);
                }}
              >
                <HStack space="2xl">
                  <Checkbox value="Illustration">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Illustration</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Animation">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Animation</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Typography">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Typography</Checkbox.Label>
                  </Checkbox>
                </HStack>
              </Checkbox.Group>
              <Checkbox.Group
                value={chkbxvalues}
                onChange={(keys) => {
                  chkbxSetValues(keys);
                }}
              >
                <HStack space="2xl">
                  <Checkbox value="Illustration">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Illustration</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Animation">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Animation</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Typography">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Typography</Checkbox.Label>
                  </Checkbox>
                </HStack>
              </Checkbox.Group>
              <Checkbox.Group
                value={chkbxvalues}
                onChange={(keys) => {
                  chkbxSetValues(keys);
                }}
              >
                <HStack space="2xl">
                  <Checkbox value="Illustration">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Illustration</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Animation">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Animation</Checkbox.Label>
                  </Checkbox>
                  <Checkbox value="Typography">
                    <Checkbox.Indicator mr="$2">
                      <Checkbox.Icon as={CheckIcon} />
                    </Checkbox.Indicator>
                    <Checkbox.Label>Typography</Checkbox.Label>
                  </Checkbox>
                </HStack>
              </Checkbox.Group>
            </VStack>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
      {/* <Menu
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        placement={placement}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Menu</Button.Text>
            </Button>
          );
        }}
      >
        <Menu.Item key="Item1" textValue="Item1">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Roboto" textValue="Roboto">
          <Icon as={PuzzleIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
        </Menu.Item>
      </Menu> */}
    </Center>
  );
};

export default MenuStory;

export {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  PuzzleIcon,
};
