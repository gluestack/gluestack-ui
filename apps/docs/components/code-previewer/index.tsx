import { useState, useEffect } from "react";
import Handlebars from "handlebars";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
export default function CodePreviewer({
  code,
  message,
  argTypes,
  reactLive,
}: {
  code: string;
  message: string;
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
    setCompiledCode(compiledCodetemp(values));
  }, [values]);

  // Handle control value changes
  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generic controller component
  const ArgController = ({ name, config }: { name: string; config: any }) => {
    const { control, options, defaultValue } = config;

    if (control?.type === "select") {
      return (
        <div className="control-item">
          <label className="text-lg" htmlFor={name}>
            {name}:
          </label>
          <select
            id={name}
            value={values[name] || defaultValue}
            onChange={(e) => handleChange(name, e.target.value)}
          >
            {Array.isArray(options)
              ? options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              : Object.entries(options).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value as string}
                  </option>
                ))}
          </select>
          {/* <div className="w-full h-px bg-gray-400"></div> */}
        </div>
      );
    }

    if (control?.type === "boolean" || typeof defaultValue === "boolean") {
      return (
        <div className="flex items-center gap-2">
          <label className="text-lg" htmlFor={name}>
            {name}:
          </label>
          <input
            type="checkbox"
            id={name}
            className="w-4 h-4"
            checked={values[name] ?? defaultValue}
            onChange={(e) => handleChange(name, e.target.checked)}
          />
        </div>
      );
    }

    // Add more control types as needed (checkbox, radio, etc.)

    return (
      <div className="control-item">
        <span>
          {name}: {JSON.stringify(values[name] || defaultValue)}
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full my-2">
      <div className=" border border-gray-200 rounded-t-lg flex w-full">
        <div className="p-4 border-r py-10 border-gray-200 flex-1">
          <div className="flex flex-col gap-2">
            {Object.entries(argTypes).map(([key, value]) => (
              <ArgController key={key} name={key} config={value} />
            ))}
          </div>
        </div>

        <div className="p-4 flex-1 flex items-center justify-center">
          <LiveProvider
            code={compiledCode}
            scope={{ ...reactLive, useState, useEffect }}
          >
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </div>
      </div>
      <LiveProvider
        code={compiledCode}
        scope={{ ...reactLive, useState, useEffect }}
      >
        <LiveError />
        <LiveEditor />
      </LiveProvider>
    </div>
  );
}
