'use client';
import React from 'react';
import { formatHex, parse } from 'culori';
import { createPaletteFromNameValue } from '../util/shadeGenerator/palette';
import { useImmer } from 'use-immer';
import DynamicWidthInput from './DynamicWidthInput';
import { ThemeContext } from '../util/ThemeProvider';
import { useContext, useEffect } from 'react';
import { themeNativeWindDB, themeDBBase } from '../util/theme/theme';

export default function NativeWindCodeEditorComponent() {
  const [theme, setTheme] = useImmer(themeNativeWindDB);
  const [themeBase, setThemeBase] = useImmer(themeDBBase);
  const { value: themeValue, updateValue: updateThemeValue } =
    useContext(ThemeContext);

  useEffect(() => {
    //update theme provider value
    if (themeValue) {
      const updatedValue = { ...theme };
      Object.entries(theme).forEach((key, value) => {
        //@ts-ignore
        updatedValue[key] = value;
      });
      updateThemeValue(updatedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeBase, theme]);

  function updatePaletteFromBaseColor(colorName: string, colorHex: string) {
    let shades: any = {};
    shades = createPaletteFromNameValue(colorName, colorHex)!.swatches;

    // console.log(value);

    //update colors in theme
    Object.entries(shades).forEach((e) => {
      type responseType = { hex: string; stop: number };
      const shadeNumber = (e[1] as responseType).stop;
      const shadeHex = (e[1] as responseType).hex;
      if (shadeNumber !== 1000) {
        setTheme((draft: any) => {
          draft[`--color-${colorName}-${shadeNumber}`] = shadeHex;
        });
      }
    });
  }

  // Function to reset theme values to their defaults
  const handleReset = () => {
    setTheme(themeNativeWindDB);
    setThemeBase(themeDBBase);
  };

  // Function to copy theme code
  const handleCopy = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = `
export const config = {
  light: vars({\n`;

    Object.entries(theme).map(([key, value]) => {
      textarea.value = textarea.value.concat(`    '${key}': '${value}',\n`);
    });

    textarea.value = textarea.value.concat(
      `
    }),
  };`
    );
    document.body.appendChild(textarea);
    window.getSelection()?.removeAllRanges(); // clear any prev selection
    //select stuff
    textarea.select();
    document.execCommand('copy');
    //clean up
    document.body.removeChild(textarea);
    window.getSelection()?.removeAllRanges();
  };

  return (
    <>
      <div className="bg-gray-800 text-white rounded-lg pt-16 pb-8 pl-3 relative">
        <div className="absolute top-4 right-4">
          <button
            onClick={handleReset}
            className="px-4 py-1 border-none rounded-full bg-gray-950 text-white font-medium cursor-pointer focus:outline-none hover:outline-dashed"
          >
            Reset
          </button>
          <button
            onClick={handleCopy}
            className="ml-2 px-4 py-1 border-none rounded-full bg-gray-950 text-white font-medium cursor-pointer focus:outline-none hover:outline-dashed"
          >
            Copy
          </button>
        </div>

        <div id="codeEditor" className="flex flex-col items-center">
          <pre>
            <code className="text-neutral-400">{`export const config = {`}</code>
            <code>{`
  light: vars({\n\n`}</code>
            {/* for simple color generation from a base color */}
            {Object.entries(themeBase).map(([key, value]) => (
              <div key={key} className="my-2">
                <code>
                  {'    '}
                  {/* <span
                    data-tip="Pick →"
                    className="tooltip-open tooltip-accent tooltip-left align-middle bg-white"
                  > */}
                  <span className="inline-block w-1" />
                  <input
                    type="color"
                    value={formatHex(value)}
                    // className={`h-5 w-5 p-1 cursor-pointer `} //moz
                    className="h-[1.25rem] w-[1.05rem] border-none outline-none cursor-pointer bg-transparent disabled:opacity-50 disabled:pointer-events-none"
                    onChange={(e) => {
                      setThemeBase((d: any) => {
                        d[key] = e.target.value;
                      });

                      updatePaletteFromBaseColor(key, e.target.value);
                    }}
                  />
                  {/* </span> */} {key}: {'"'}
                  <DynamicWidthInput
                    className="hover:outline focus:outline bg-transparent"
                    value={value}
                    onChange={(text: string) => {
                      // if (value === "") {
                      //   setThemeBase((d: any) => {
                      //     d[key] = " ";
                      //   });
                      // }
                      setThemeBase((d: any) => {
                        d[key] = text;
                      });
                      const color = parse(text);
                      if (color) {
                        const colorHex = formatHex(color);
                        updatePaletteFromBaseColor(key, colorHex);
                      }
                    }}
                  />
                  {'"'},
                </code>
                {'\n'}
              </div>
            ))}
            {'\n'}
            {/* for all colors individually */}
            {Object.entries(theme).map(([key, value]) => (
              <div key={key} className="my-2">
                <code>
                  {'    '}
                  <span className="inline-block w-1" />
                  <input
                    type="color"
                    value={formatHex(value)}
                    className="h-[1.25rem] w-[1.05rem] border-none outline-none cursor-pointer bg-transparent disabled:opacity-50 disabled:pointer-events-none"
                    onChange={(e) => {
                      setTheme((draft: any) => {
                        draft[key] = e.target.value;
                      });
                    }}
                  />
                  {/* </span> */} {key}: {'"'}
                  {/* <button
                    className="hover:outline focus:outline"
                    contentEditable="true"
                  >
                    {value}
                  </button> */}
                  <DynamicWidthInput
                    className="hover:outline focus:outline bg-transparent"
                    value={value}
                    onChange={(text: string) => {
                      // if (value === "") {
                      //   setThemeBase((d: any) => {
                      //     d[key] = " ";
                      //   });
                      // }
                      setTheme((d: any) => {
                        d[key] = text;
                      });
                    }}
                  />
                  {'"'},
                </code>
                {'\n'}
              </div>
            ))}
            <code className="text-neutral-400">
              {`
  }),
};
`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
