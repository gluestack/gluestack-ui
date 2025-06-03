import CodeBlock from '@/components/custom/markdown/code-block';
import {
  Box,
  Button,
  ButtonText,
  Center,
  Heading,
  Link,
  LinkText,
  Text,
  VStack,
  Pressable,
} from '@/components/ui';
import { useState } from 'react';

const buttonCode = [
  {
    fileName: 'Example.tsx',
    code: `import { Button, ButtonText } from '@/components/ui/button';

  function Example() {
      return (
        <Button size="md" style={{ $$css: true }} className="bg-primary-500 hover:bg-primary-600">
          <ButtonText style={{ $$css: true }} className="text-typography-50" >Button</ButtonText>
        </Button>
      );
  }
    `,
  },
  {
    fileName: 'Button.tsx',
    code: `// Built with gluestack-ui and NativeWind. Copy-paste the code into your project.
  import React, { useMemo } from 'react';
  import { createButton } from '@gluestack-ui/button';
  import {
    withStyleContext,
    useStyleContext,
  } from '@gluestack-ui/nativewind-utils/withStyleContext';
  import { cssInterop } from 'nativewind';
  import type { VariantProps } from '@gluestack-ui/nativewind-utils';
  import  { buttonStyle, buttonTextStyle } from './styles';
  
  import {
    Pressable,
    Text,
    View,
  } from 'react-native';
  
  
  const SCOPE = 'BUTTON';
  const Root = withStyleContext(Pressable, SCOPE)
  
  const UIButton = createButton({
    Root: Root,
    Text,
    Group: View,
    Spinner: View,
    Icon: View,
  });
  
  cssInterop(UIButton, { className: 'style' });
  cssInterop(UIButton.Text, { className: 'style' });
  
  type IButtonProps = Omit<React.ComponentProps<typeof UIButton>, 'context'> &
    VariantProps<typeof buttonStyle>;
  const Button = React.forwardRef(
    (
      {
        className,
        variant = 'solid',
        size = 'md',
        ...props
      }: { className?: string } & IButtonProps,
      ref?: any
    ) => {
      return (
        <UIButton
          ref={ref}
          {...props}
          className={buttonStyle({ variant, size, class: className })}
          style={{ $$css: true, test: buttonStyle({ variant, size, class: className }) }}
          context={{ variant, size }}
        />
      );
    }
  );
  
  type IButtonTextProps = React.ComponentProps<typeof UIButton.Text> &
    VariantProps<typeof buttonTextStyle>;
  const ButtonText = React.forwardRef(
    (
      {
        className,
        variant,
        size,
        ...props
      }: { className?: string } & IButtonTextProps,
      ref?: any
    ) => {
      const {
        variant: parentVariant,
        size: parentSize,
      } = useStyleContext(SCOPE);
  
      return (
        <UIButton.Text
          ref={ref}
          {...props}
          // @ts-ignore
          className={buttonTextStyle({
            parentVariants: {
              variant: parentVariant,
              size: parentSize,
            },
            variant,
            size,
            class: className,
          })}
          style={{ $$css: true, test: buttonTextStyle({
            parentVariants: {
              variant: parentVariant,
              size: parentSize,
            },
            variant,
            size,
            class: className,
          }) }}
        />
      );
    }
  );
  
  Button.displayName = 'Button';
  ButtonText.displayName = 'ButtonText';
  
  export { Button, ButtonText};
  `,
  },
  {
    fileName: 'styles.ts',
    code: `// Built with gluestack-ui and NativeWind. Copy-paste the code into your project.
  import { tva } from '@gluestack-ui/nativewind-utils/tva';
  const buttonStyle = tva({
    base: 'group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40',
    variants: {
      variant: {
        solid: '',
      },
  
      size: {
        sm: 'px-4 h-9',
        md: 'px-5 h-10',
      },
    },
    compoundVariants: [
    ],
  });
  
  const buttonTextStyle = tva({
    base: 'text-typography-0 font-semibold web:select-none',
    parentVariants: {
      variant: {
        solid:
          'text-typography-0 group-data-[hover=true]/button:text-typography-0 group-data-[active=true]/button:text-typography-0',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
       
      },
    },
  });
  
  export { buttonStyle, buttonTextStyle };
  `,
  },
];

const PowerOfTailwind = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <VStack className="mt-[120px] gap-10 md:gap-20 w-full">
      <VStack className="gap-3 w-full">
        <Heading
          size="2xl"
          className="text-3xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl w-full"
        >
          The Power of Tailwind CSS with NativeWind
        </Heading>
        <Text className="text-typography-700 text-lg font-normal leading-[30px] w-full md:w-[75%]">
          Unleash your creativity and maximize the styling possibilities with{' '}
          <a
            href="https://gluestack.io/ui/docs/home/getting-started/installation"
            className="underline underline-offset-4 group-hover/link:underline"
          >
            Tailwind UI components
          </a>{' '}
          and utility classes. Combine Tailwind utility classes with the
          powerful styling engine of NativeWind, ideal for universal
          applications.
        </Text>
        <Link
          href="https://gluestack.io/ui/docs/home/getting-started/installation"
          className="w-fit inline-block"
        >
          <LinkText className="text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <Box className="flex flex-col md:flex-row w-full gap-5">
        <Box className="w-full md:w-1/2">
          <Center className="w-full border border-outline-50 mb-5 p-4 h-[446px]">
            <Button className="bg-primary-500 hover:bg-primary-600 h-10 px-5 w-fit">
              <ButtonText className="text-typography-50">Button</ButtonText>
            </Button>
          </Center>
        </Box>
        <Box className="w-full md:w-1/2">
          <Box className="border border-outline-50 border-collapse flex-row min-h-[46px] w-full">
            {buttonCode.map((code, index) => (
              <Pressable
                key={index}
                onPress={() => setActiveTab(index)}
                className={`px-4 py-2 ${
                  activeTab === index
                    ? 'border-b-2 border-primary-500 bg-background-50'
                    : 'text-typography-500'
                }`}
              >
                <Text
                  className={`${
                    activeTab === index
                      ? 'text-primary-500 font-medium'
                      : 'text-typography-500'
                  }`}
                >
                  {code.fileName}
                </Text>
              </Pressable>
            ))}
          </Box>
          <CodeBlock
            code={buttonCode[activeTab].code}
            className="h-[446px] border border-outline-50 rounded-none w-full overflow-auto"
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default PowerOfTailwind;
