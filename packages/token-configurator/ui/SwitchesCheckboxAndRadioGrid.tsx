import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from '../components/ui/checkbox';

import { Switch } from '../components/ui/switch';
import { CheckIcon, CircleIcon } from '../components/ui/icon';
import colors from 'tailwindcss/colors';
import { Box } from '../components/ui/box';
import {
  Radio,
  RadioIndicator,
  RadioIcon,
  // RadioLabel,
  RadioGroup,
} from '../components/ui/radio';
import { HStack } from '../components/ui/hstack';

const SwitchesCheckboxAndRadioGrid = () => {
  const [values, setValues] = React.useState('Read-only');
  return (
    <div className="flex flex-col gap-4 items-start justify-between">
      <div className="flex gap-4">
        <Switch
          size="md"
          isDisabled={false}
          trackColor={{ false: colors.gray[300], true: colors.gray[500] }}
          thumbColor={colors.gray[50]}
        />
        <Switch />
        <Switch />
        <Switch />
      </div>

      <div className="flex gap-4">
        <Checkbox value="c1">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox value="c2">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox value="c3">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox value="c4">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
        </Checkbox>
      </div>

      <div className="flex gap-4">
        <RadioGroup value={values} onChange={setValues}>
          <HStack space="md">
            <Box>
              <Radio value="r1" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </Box>
            <Box>
              <Radio value="r2" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </Box>
            <Box>
              <Radio value="r3" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </Box>
            <Box>
              <Radio value="r4" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </Box>
          </HStack>
        </RadioGroup>
      </div>
    </div>
  );
};

export default SwitchesCheckboxAndRadioGrid;
