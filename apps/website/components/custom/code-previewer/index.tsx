import { CodeBlock } from '@/components/custom/markdown/code-block';
import { Box } from '@/components/ui/box';
import { ChevronDownIcon } from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import Handlebars from 'handlebars';
import { useEffect, useState } from 'react';
import { LiveError, LivePreview, LiveProvider } from 'react-live';

import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from '@/components/ui/select';

export function CodePreviewer({
  code,
  argTypes,
  reactLive,
  importMap,
  nativeOnly,
}: {
  code: string;
  message: string;
  argTypes: Record<string, any>;
  reactLive: any;
  importMap?: Record<string, string[]>;
  nativeOnly?: boolean;
}) {
  // Initialize state with default values from args
  const [values, setValues] = useState<Record<string, any>>({});
  const [compiledCode, setCompiledCode] = useState<string>('');
  const [isReady, setIsReady] = useState(false);

  // Initialize values on component mount or when args change
  useEffect(() => {
    const initialValues: Record<string, any> = {};
    Object.entries(argTypes).forEach(([key, value]) => {
      initialValues[key] = value.defaultValue;
    });
    setValues(initialValues);
  }, [argTypes]);

  useEffect(() => {
    try {
      const compiledCodetemp = Handlebars.compile(code);
      if (values && Object.keys(values).length > 0) {
        const compiled = compiledCodetemp(values);
        setCompiledCode(compiled);
        setIsReady(true);
      } else if (Object.keys(argTypes).length === 0) {
        // If no argTypes, compile immediately
        const compiled = compiledCodetemp({});
        setCompiledCode(compiled);
        setIsReady(true);
      }
    } catch (error) {
      console.error('Error compiling code:', error);
      setCompiledCode(code);
      setIsReady(true);
    }
  }, [values, code, argTypes]);

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
  // Generic controller component
  const ArgController = ({ name, config }: { name: string; config: any }) => {
    const { control, options, defaultValue } = config;

    if (control?.type === 'select') {
      return (
        <Box className="control-item">
          <Text className="text-xs text-muted-foreground">{name}</Text>
          <Select
            className="w-full"
            onValueChange={(value: string) => handleChange(name, value)}
          >
            <SelectTrigger
              variant="underlined"
              className="w-full justify-between items-center border-border"
              size="md"
            >
              <SelectInput
                className="text-sm font-medium text-foreground"
                placeholder={values[name]}
              />
              <SelectIcon
                size="xl"
                className="mr-3 text-foreground"
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
          <Text className="text-sm text-muted-foreground">{name}</Text>
          <Switch
            size="sm"
            isDisabled={false}
            trackColor={{ false: '#D4D4D4', true: '#005DB4' }}
            thumbColor={'#FAFAFA'}
            ios_backgroundColor={'#D4D4D4'}
            value={values[name] ?? defaultValue}
            onToggle={() => handleChange(name, !values[name])}
          />
        </Box>
      );
    }

    // Add more control types as needed (checkbox, radio, etc.)

    return (
      <Box className="control-item">
        <Text className="text-lg text-foreground">
          {name}: {JSON.stringify(values[name] || defaultValue)}
        </Text>
      </Box>
    );
  };

  return (
    <Box className="flex flex-col w-full my-2">
      <Box className="-mb-2 border border-border rounded-t-lg flex-col flex w-full min-h-[200px] md:flex-row">
        <Box className="p-4 md:border-r border-border flex-1 flex items-center justify-center w-full ">
          {nativeOnly ? (
            <Box className="flex flex-col items-center justify-center gap-2 py-4 px-6 text-center">
              <Text className="text-2xl">📱</Text>
              <Text className="text-sm font-semibold text-foreground">React Native / Expo only</Text>
              <Text className="text-xs text-muted-foreground max-w-[260px]">
                This component is not supported in Next.js. Preview it in a React Native or Expo environment.
              </Text>
            </Box>
          ) : (
            isReady && (
              <LiveProvider code={compiledCode} scope={{ ...reactLive }}>
                <LiveError />
                <LivePreview className=" flex items-center justify-center  w-full" />
              </LiveProvider>
            )
          )}
        </Box>
        {Object.keys(argTypes).length > 0 && (
          <Box className="p-4 border-b border-border py-10 flex-1">
            <Box className="flex flex-col gap-2">
              {Object.entries(argTypes).map(([key, value]) => (
                <ArgController key={key} name={key} config={value} />
              ))}
            </Box>
          </Box>
        )}
      </Box>
      {isReady && (
        <CodeBlock
          code={importText.join('\n') + '\n\n' + compiledCode}
          language="tsx"
          className="rounded-b-lg rounded-t-none border-t-0"
        />
      )}
    </Box>
  );
}
