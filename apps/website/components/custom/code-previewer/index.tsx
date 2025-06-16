import { useState, useEffect } from 'react';
import Handlebars from 'handlebars';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import CodeBlock from '@/components/custom/markdown/code-block';
import { Box, ChevronDownIcon, Switch, Text } from '@/components/ui';

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';

export function CodePreviewer({
  code,
  argTypes,
  reactLive,
  importMap,
}: {
  code: string;
  message: string;
  argTypes: Record<string, any>;
  reactLive: any;
  importMap?: Record<string, string[]>;
}) {
  // Initialize state with default values from args
  const [values, setValues] = useState<Record<string, any>>({});
  const [compiledCode, setCompiledCode] = useState<any>();
  // Initialize values on component mount or when args change
  useEffect(() => {
    const initialValues: Record<string, any> = {};
    Object.entries(argTypes).forEach(([key, value]) => {
      initialValues[key] = value.defaultValue;
    });
    setValues(initialValues);
  }, [argTypes]);

  useEffect(() => {
    const compiledCodetemp = Handlebars.compile(code);
    if (values) {
      setCompiledCode(compiledCodetemp(values));
    }
  }, [values]);

  // Handle control value changes
  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const importText = importMap
    ? Object.entries(importMap).map(([key, value]) => {
        return `import { ${value.join(', ')} } from '${key}';`;
      })
    : [];
  console.log(importText);
  // Generic controller component
  const ArgController = ({ name, config }: { name: string; config: any }) => {
    const { control, options, defaultValue } = config;

    if (control?.type === 'select') {
      return (
        <Box className="control-item">
          <Text className="text-xs">{name}</Text>
          <Select
            className="w-full"
            onValueChange={(value: string) => handleChange(name, value)}
          >
            <SelectTrigger
              variant="underlined"
              className="w-full justify-between items-center border-outline-200"
              size="md"
            >
              <SelectInput
                className="text-typography-900 text-sm font-medium placeholder:text-typography-900"
                placeholder={values[name]}
              />
              <SelectIcon
                size="xl"
                className="mr-3 text-typography-900"
                as={ChevronDownIcon}
              />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {Object.entries(options).map(([key, value]: any) => (
                  <SelectItem key={key} label={value} value={value} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </Box>
      );
    }

    if (control?.type === 'boolean' || typeof defaultValue === 'boolean') {
      return (
        <Box className="flex flex-col gap-2">
          <Text className="text-sm" htmlFor={name}>
            {name}
          </Text>
          <Switch
            size="sm"
            isDisabled={false}
            trackColor={{ false: '#D4D4D4', true: '#005DB4' }}
            thumbColor={'#FAFAFA'}
            activeThumbColor={'#FAFAFA'}
            ios_backgroundColor={'#D4D4D4'}
            value={values[name] ?? defaultValue}
 j           onToggle={() => handleChange(name, !values[name])}
          />
        </Box>
      );
    }

    // Add more control types as needed (checkbox, radio, etc.)

    return (
      <Box className="control-item">
        <Text className="text-lg">
          {name}: {JSON.stringify(values[name] || defaultValue)}
        </Text>
      </Box>
    );
  };

  return (
    <Box className="flex flex-col w-full my-2">
      <Box className="-mb-2 border border-outline-100 rounded-t-lg flex-col flex w-full min-h-[200px] md:flex-row">
        <Box className="p-4 md:border-r border-outline-100 flex-1 flex items-center justify-center w-full ">
          <LiveProvider code={compiledCode} scope={{ ...reactLive }}>
            <LiveError />
            <LivePreview className=" flex items-center justify-center  w-full" />
          </LiveProvider>
        </Box>
        {Object.keys(argTypes).length > 0 && (
          <Box className="p-4  border-b py-10  flex-1">
            <Box className="flex flex-col gap-2">
              {Object.entries(argTypes).map(([key, value]) => (
                <ArgController key={key} name={key} config={value} />
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <CodeBlock
        code={importText.join('\n') + '\n\n' + compiledCode}
        language="tsx"
        className="rounded-b-lg rounded-t-none border-t-0"
      />
    </Box>
  );
}
