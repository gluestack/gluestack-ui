import React, { useContext } from 'react';
import { VStack } from '@/components/ui/vstack';
import { CodePreviewContext } from './CodePreviewProvider';
import { InputControl, SelectControl, SwitchControl } from './controls';

const ArgsController = () => {
  const { metaData } = useContext(CodePreviewContext);

  const args = Object.keys(metaData?.argsType ?? {}).map(
    (arg: any, index: any) => {
      const {
        control,
        default: defaultValue,
        options,
      } = metaData?.argsType[arg];

      if (control === 'input') {
        return (
          <InputControl
            key={index}
            defaultValue={defaultValue}
            componentProp={arg}
          />
        );
      }

      if (control === 'boolean') {
        return (
          <SwitchControl
            key={index}
            defaultValue={defaultValue}
            componentProp={arg}
          />
        );
      }

      if (control === 'select') {
        return (
          <SelectControl
            key={index}
            defaultValue={defaultValue}
            componentProp={arg}
            options={options}
          />
        );
      }

      return null;
    }
  );

  return (
    <VStack
      space="md"
      className="flex-1 p-5 border-[1px] border-[#DDDCDB] rounded-xl"
    >
      {args}
    </VStack>
  );
};

export default ArgsController;
