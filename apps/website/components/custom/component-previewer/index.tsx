import { useState, useEffect } from 'react';
import Handlebars from 'handlebars';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
export function ComponentPreviewer({
  code,
  argTypes,
  reactLive,
}: {
  code: string;
  argTypes: Record<string, any>;
  reactLive: any;
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

  return (
    <div className="flex  items-center justify-center">
      <LiveProvider code={compiledCode} scope={{ ...reactLive }}>
        <LiveError />
        <LivePreview className="scale-75" />
      </LiveProvider>
    </div>
  );
}
