import { useState, useEffect } from 'react';
import Handlebars from 'handlebars';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
export function ComponentPreviewer({
  code,
  argTypes,
  reactLive,
  nativeOnly,
}: {
  code: string;
  argTypes: Record<string, any>;
  reactLive: any;
  nativeOnly?: boolean;
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

  if (nativeOnly) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 py-4 px-6 text-center">
        <span className="text-sm font-semibold">React Native / Expo only</span>
        <span className="text-xs text-gray-500 max-w-[240px]">
          This component is not supported in Next.js. Preview it in a React Native or Expo environment.
        </span>
      </div>
    );
  }

  return (
    <div className="flex  items-center justify-center">
      <LiveProvider code={compiledCode} scope={{ ...reactLive }}>
        <LiveError />
        <LivePreview className="" />
      </LiveProvider>
    </div>
  );
}
