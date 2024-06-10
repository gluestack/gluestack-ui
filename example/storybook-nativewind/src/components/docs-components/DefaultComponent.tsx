import React, { useContext, Fragment, useMemo } from 'react';
import tailwindConfig from 'tailwind.config';
import { GluestackUIProvider } from '../../core-components/nativewind/gluestack-ui-provider';
import { config } from '../../core-components/nativewind/gluestack-ui-provider/config';
import {
  VStack,
  HStack,
  Box,
  Text,
  Heading,
} from '../../core-components/nativewind';
import { LayoutContext } from '@gluestack/design-system';

const ColorPaletteComponent = () => {
  const { colorMode } = useContext(LayoutContext);

  const colorPalette = useMemo(() => {
    const sourceObject = tailwindConfig!.theme!.extend!.colors; // get the source object to loop
    const paletteData: {
      name: string;
      variants: {
        name: string;
        variant: string;
        color: string;
        className: string;
      };
    }[] = []; // result array to push data into

    for (const [name, colors] of Object.entries(sourceObject)) {
      // object.entries gives us the key value pair of the object and makes it iterable. {primary: [{0: '#fff'}]} where primary is the key (name) and the value is an object with the color variants (colors)

      const variants: {
        name: string;
        variant: string;
        color: string;
        className: string;
      }[] = [];

      for (const [variant, color] of Object.entries(colors)) {
        // loop over all the variants of the color i.e. the {0: '#fff'} object in the same way as the above loop
        const variableName = extractVariableName(color); // extract the --color-name part from the var(---color-name) string using regex, it will return null if we pass it a hex code
        const colorName = variableName || color; // variableName will be null in case there was a hex code passed to the extract function

        const RGBcolorCode: string =
          colorMode === 'light'
            ? config.light[colorName]
            : config.dark[colorName]; // get the color code from the config based on the color name and the color mode

        const className = `bg-${name}-${variant}`; // need to save the class name for the color to use in the UI

        const convertRGBToHex = (rgbColors: any) => {
          const hexColors = rgbColors?.map((color: any) => {
            let hex = Number(color).toString(16);
            if (hex.length < 2) {
              hex = '0' + hex;
            }
            return hex;
          });

          return `#${hexColors?.join('')}`;
        };

        const newColor = RGBcolorCode?.split(' ');
        const colorCode = RGBcolorCode ? convertRGBToHex(newColor) : undefined;

        variants.push({
          name,
          variant,
          color: colorCode || color,
          className,
        }); // push the data into the result array
      }

      paletteData.push({ name, variants }); // push the data into the result array
    }

    return paletteData; // return the result array
  }, [colorMode]);

  function extractVariableName(text: string): string | null {
    const pattern = /\bvar\((.*?)\)/g;
    const match = pattern.exec(text);
    return match?.[1] ?? null;
  }

  return (
    <GluestackUIProvider mode={colorMode}>
      <VStack className="flex-1">
        {colorPalette.map(({ name }, i) => (
          <Fragment key={i}>
            <Heading className="mb-4" size="md">
              {name}
            </Heading>
            <HStack className="w-full mb-12 flex gap-x-2 gap-y-6 flex-wrap">
              {colorPalette[i].variants.map((variant, j) => (
                <VStack key={j} className="basis-[10%]">
                  <Box
                    className={`w-12 h-12 rounded-lg mb-2 ${variant.className}`}
                  />
                  <VStack>
                    <Text className="text-[12px]">{variant.variant}</Text>
                    <Text className="text-[12px]">{variant.color}</Text>
                  </VStack>
                </VStack>
              ))}
            </HStack>
          </Fragment>
        ))}
      </VStack>
    </GluestackUIProvider>
  );
};

export { ColorPaletteComponent };
