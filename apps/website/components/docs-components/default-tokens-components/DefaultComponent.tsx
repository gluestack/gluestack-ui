import React, { Fragment } from 'react';
import tailwindConfig from 'tailwind.config';
import { config } from '@/components/ui/gluestack-ui-provider/config';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { useColorScheme } from 'nativewind';

const ColorPaletteComponent = () => {
  const { colorScheme } = useColorScheme();
  const currentMode = (colorScheme || 'light') as 'light' | 'dark';

  // Compute directly without memoization to ensure fresh values on mode change
  const computeColorPalette = () => {
    const sourceObject = tailwindConfig!.theme!.extend!.colors;
    const paletteData: {
      name: string;
      variants: {
        name: string;
        variant: string;
        color: string;
        className: string;
      }[];
    }[] = [];

    // Colors to skip (utility colors, not semantic theme colors)
    const skipColors = ['white', 'typography', 'chart', 'sidebar'];

    // Extract variable name from rgb(var(--token) / <alpha-value>) format
    function extractVariableName(text: string): string | null {
      const pattern = /var\((--[^)\/\s]+)/;
      const match = pattern.exec(text);
      return match?.[1] ?? null;
    }

    // Convert RGB string to hex
    const convertRGBToHex = (rgbString: string) => {
      const rgbColors = rgbString?.split(' ');
      const hexColors = rgbColors?.map((color: string) => {
        let hex = Number(color).toString(16);
        if (hex.length < 2) {
          hex = '0' + hex;
        }
        return hex;
      });
      return `#${hexColors?.join('')}`;
    };

    for (const [name, colors] of Object.entries(sourceObject)) {
      // Skip utility colors
      if (skipColors.includes(name)) {
        continue;
      }

      const variants: {
        name: string;
        variant: string;
        color: string;
        className: string;
      }[] = [];

      // Handle string colors (like 'border', 'input', 'ring', 'foreground')
      if (typeof colors === 'string') {
        const variableName = extractVariableName(colors);
        if (variableName) {
          const rgbColorCode = config[currentMode][variableName];
          const colorCode = rgbColorCode ? convertRGBToHex(rgbColorCode) : undefined;

          variants.push({
            name,
            variant: 'DEFAULT',
            color: colorCode || colors,
            className: `bg-${name}`,
          });
        }
      }
      // Handle object colors (like 'primary', 'secondary', etc.)
      else if (typeof colors === 'object') {
        for (const [variant, color] of Object.entries(colors)) {
          if (typeof color === 'string') {
            const variableName = extractVariableName(color);
            if (variableName) {
              const rgbColorCode = config[currentMode][variableName];
              const colorCode = rgbColorCode ? convertRGBToHex(rgbColorCode) : undefined;

              const className =
                variant === 'DEFAULT'
                  ? `bg-${name}`
                  : `bg-${name}-${variant}`;

              variants.push({
                name,
                variant: variant === 'DEFAULT' ? 'default' : variant,
                color: colorCode || color,
                className,
              });
            }
          }
        }
      }

      if (variants.length > 0) {
        paletteData.push({ name, variants });
      }
    }

    return paletteData;
  };

  const colorPalette = computeColorPalette();

  return (
    <VStack className="flex-1" key={currentMode}>
      {colorPalette.map(({ name, variants }, i) => (
        <Fragment key={`${currentMode}-${name}-${i}`}>
          <Heading className="mb-4 capitalize" size="md">
            {name}
          </Heading>
          <HStack className="w-full mb-12 flex gap-x-4 gap-y-6 flex-wrap">
            {variants.map((variant, j) => (
              <VStack key={`${currentMode}-${variant.variant}-${j}`} className="basis-[15%] min-w-[120px]">
                <Box
                  key={`box-${currentMode}-${variant.color}`}
                  className={`w-16 h-16 rounded-lg mb-2 border border-border ${variant.className}`}
                />
                <VStack className="gap-0">
                  <Text className="text-[12px] font-medium">
                    {variant.variant}
                  </Text>
                  <Text className="text-[11px] text-muted-foreground" key={`color-${currentMode}-${variant.color}`}>
                    {variant.color}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </HStack>
        </Fragment>
      ))}
    </VStack>
  );
};

const ShadowComponent = () => {
  return (
    <VStack space="lg">
      <Heading>Hard Shadows</Heading>
      <HStack space="lg">
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-hard-1 dark:shadow-white/20">
          <Text>1</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-hard-2 dark:shadow-white/20">
          <Text>2</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-hard-3 dark:shadow-white/20">
          <Text>3</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-hard-4 dark:shadow-white/20">
          <Text>4</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-hard-5 dark:shadow-white/20">
          <Text>5</Text>
        </Box>
      </HStack>

      <Heading>Soft Shadows</Heading>
      <HStack space="lg">
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-soft-1 dark:shadow-white/20">
          <Text>1</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-soft-2 dark:shadow-white/20">
          <Text>2</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-soft-3 dark:shadow-white/20">
          <Text>3</Text>
        </Box>
        <Box className="h-20 w-20 rounded-lg items-center justify-center bg-typography-0 shadow-soft-4 dark:shadow-white/20">
          <Text>4</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

const FontSizeComponent = () => {
  return <Text className="text-2xs">Text of fontSize (2xs)</Text>;
};

const FontWeightComponent = () => {
  return (
    <>
      <Text className="font-extrablack">Text of fontWeight (extrablack)</Text>
    </>
  );
};

export {
  ColorPaletteComponent,
  ShadowComponent,
  FontSizeComponent,
  FontWeightComponent,
};
