'use client';
import React from 'react';
import { formatHex, parse } from 'culori';
import { createPaletteFromNameValue } from '../util/shadeGenerator/palette';
import { useImmer } from 'use-immer';
import DynamicWidthInput from './DynamicWidthInput';
import { ThemeContext } from '../util/ThemeProvider';
import { useContext, useEffect } from 'react';
import { themeDBBase } from '../util/theme/theme';
import { config as themeNativeWindDB } from '../../../../core-components/nativewind/gluestack-ui-provider/config';

function rgbToHex(rgb: any) {
  try {
    let [r, g, b] = rgb.split(' ').map(Number);

    // Convert each component to a 2-digit hexadecimal value
    let hex =
      '#' +
      r.toString(16).padStart(2, '0') +
      g.toString(16).padStart(2, '0') +
      b.toString(16).padStart(2, '0');

    return hex.toUpperCase();
  } catch (Err) {
    return '';
  }
  // Split the input string into an array of R, G, B values
}

function hexToRGB(hex: any) {
  // Remove the '#' if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex values into R, G, B
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return the RGB value in "R G B" format
  return `${r} ${g} ${b}`;
}

export default function NativeWindCodeEditorComponent() {
  const [theme, setTheme] = useImmer(
    JSON.parse(JSON.stringify(themeNativeWindDB))
  );

  // const [themeBase, setThemeBase] = useImmer(themeDBBase);
  const { value: themeValue, updateValue: updateThemeValue } =
    useContext(ThemeContext);

  useEffect(() => {
    //update theme provider value
    if (themeValue) {
      // const updatedValue = { ...theme };
      // Object.entries(theme).forEach((key, value) => {
      //   //@ts-ignore
      //   updatedValue[key] = value;
      // });

      updateThemeValue(theme);
      // console.log(themeNativeWindDB, 'updatedValue');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // function updatePaletteFromBaseColor(colorName: string, colorHex: string) {
  //   let shades: any = {};
  //   shades = createPaletteFromNameValue(colorName, colorHex)!.swatches;

  //   // console.log(value);

  //   //update colors in theme
  //   Object.entries(shades).forEach((e) => {
  //     type responseType = { hex: string; stop: number };
  //     const shadeNumber = (e[1] as responseType).stop;
  //     const shadeHex = (e[1] as responseType).hex;
  //     if (shadeNumber !== 1000) {
  //       setTheme((draft: any) => {
  //         draft[`--color-${colorName}-${shadeNumber}`] = shadeHex;
  //       });
  //     }
  //   });
  // }

  // Function to reset theme values to their defaults
  const handleReset = () => {
    setTheme(themeNativeWindDB);
    // setThemeBase(themeDBBase);
  };

  // Function to copy theme code
  const handleCopy = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');

    textarea.value = `'use client';
import { vars } from 'nativewind';

export const config = {\n`;

    Object.entries(theme).map(([key1, value1]) => {
      textarea.value = textarea.value.concat(`  '${key1}': vars({\n`);
      Object.entries(theme[key1]).map(([key, value]) => {
        textarea.value = textarea.value.concat(`    '${key}': '${value}',\n`);
      });
      textarea.value = textarea.value.concat(`  }),\n`);
    });

    textarea.value = textarea.value.concat(`};`);

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
            <code className="text-neutral-400">{`'use client';
import { vars } from 'nativewind';

export const config = {`}</code>
            {'\n'}
            {/* for all colors individually */}
            {Object.entries(theme).map(([key1, value1]) => (
              <>
                <span className="inline-block w-1" />
                <code className="ml-4 text-neutral-400">
                  {key1}: {'vars({'}
                </code>
                {Object.entries(theme[key1]).map(([key, value]) => (
                  <div key={key} className="my-2">
                    <code>
                      {'    '}
                      <span className="inline-block w-1" />
                      <input
                        type="color"
                        value={rgbToHex(value)}
                        className="h-[1.25rem] w-[1.05rem] border-none outline-none cursor-pointer bg-transparent disabled:opacity-50 disabled:pointer-events-none"
                        onChange={(e) => {
                          console.log(value, 'value');

                          setTheme((draft: any) => {
                            draft[key1][key] = hexToRGB(e.target.value);
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
                          // if (value === '') {
                          //   setThemeBase((d: any) => {
                          //     d[key1][key] = ' ';
                          //   });
                          // }
                          setTheme((d: any) => {
                            d[key1][key] = text;
                          });
                        }}
                      />
                      {'"'},
                    </code>
                    {'\n'}
                  </div>
                ))}
                <code className="ml-4 text-neutral-400">{'}),'}</code>
                {'\n'}
              </>
            ))}

            <code className="text-neutral-400">{`};`}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
