import React from 'react';
import { Box } from '@/components/ui/box';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { CodeBlock } from '../CodeBlock';
import ArgsController from './ArgsController';
import { CodePreviewProvider } from './CodePreviewProvider';
import ComponentRenderer from './ComponentRenderer';
// const prettier = require('prettier');

const genrateProp = (prop: any, props: any) => {
  const type = props[prop].control;
  const defaultValue = props[prop].default;

  if (type === 'input') {
    return defaultValue ? `${prop}="${defaultValue}"` : `${prop}=''`;
  } else if (type === 'boolean') {
    return defaultValue ? `${prop}={true}` : `${prop}={false}`;
  }

  return defaultValue ? `${prop}="${defaultValue}"` : `${prop}=''`;
};

const genratePropsString = (props: any) => {
  let propsString = '';
  Object.keys(props).map((prop: any) => {
    propsString += genrateProp(prop, props) + ' ';
  });
  if (propsString === '') {
    propsString = '{...props}';
  }
  return propsString;
};

const CodePreviewTabs = ({ activeTab, callback }) => {
  return (
    <HStack className="justify-start mb-3 ">
      <Pressable
        className={`${
          activeTab === 'ios'
            ? 'bg-background-100 dark:bg-background-800'
            : 'bg-background-0 dark:bg-background-900'
        } rounded-full py-3 px-6 border-[1px] border-background-200 min-w-[96px] z-20`}
        onPress={() => callback('ios')}
      >
        <Text
          className={`${
            activeTab === 'ios' ? 'text-typography-950' : 'text-typography-600'
          } font-roboto font-semibold text-sm leading-4 text-center`}
        >
          iOS
        </Text>
      </Pressable>
      <Pressable
        className={`${
          activeTab === 'android'
            ? 'bg-background-100 dark:bg-background-800'
            : 'bg-background-0 dark:bg-background-900'
        } rounded-full  py-3 px-6 border-[1px] border-background-200 min-w-[136px] -ml-9 z-10`}
        onPress={() => callback('android')}
      >
        <Text
          className={`${
            activeTab === 'android'
              ? 'text-typography-950'
              : 'text-typography-600'
          } font-roboto font-semibold text-sm leading-4 text-right`}
        >
          Android
        </Text>
      </Pressable>
      <Pressable
        className={`py-3 px-6  min-w-[112px] ${
          activeTab === 'web'
            ? 'bg-background-100 dark:bg-background-800'
            : 'bg-background-0 dark:bg-background-900'
        } border-[1px] border-background-200 rounded-full -ml-9 z-0`}
        onPress={() => callback('web')}
      >
        <Text
          className={`${
            activeTab === 'web' ? 'text-typography-950' : 'text-typography-600'
          } font-roboto font-semibold text-sm leading-4 text-right`}
        >
          Web
        </Text>
      </Pressable>
    </HStack>
  );
};
const CodePreview = ({
  metaData,
  showArgsController = true,
  showCodeBlock = true,
  showComponentRenderer = true,
  language,
  rendererProps,
  codeBlockProps,
  argsControllerProps,
  direction = 'column',
  href,
  showExternalResource,
  _container,
  _rendererWrapper,
  ...props
}: any) => {
  const [previewMetaData, setPreviewMetaData] = React.useState(metaData);
  const [propsString, setPropsString] = React.useState(
    genratePropsString(metaData?.argsType ?? '')
  );

  const updateMetaData = (data: any) => setPreviewMetaData(data);

  const updatePropsString = (txt: any) => setPropsString(txt);
  const [activeTab, setActiveTab] = React.useState<'ios' | 'android' | 'web'>(
    'ios'
  );
  const onTabChangeCallback = (tab: 'ios' | 'android' | 'web') => {
    setActiveTab(tab);
  };
  return (
    <>
      <Box
        className="w-full bg-white rounded-lg mb-6 dark:bg-black dark:border-borderDark-800 dark:md:max-w-[736px] overflow-auto"
        {...props}
      >
        <CodePreviewTabs activeTab={activeTab} callback={onTabChangeCallback} />
        <CodePreviewProvider
          metaData={previewMetaData}
          updateMetaData={updateMetaData}
          propsString={propsString}
          updatePropsString={updatePropsString}
        >
          <Box
            className={`w-full ${
              direction === 'row' ? 'lg:flex-row' : 'lg:flex-col'
            } gap-2`}
          >
            {(showArgsController || showComponentRenderer) && (
              <HStack
                sx={{
                  ..._container?.sx,
                }}
                className={`flex-col lg:flex-row  ${
                  direction === 'row' ? 'flex-1' : ''
                } dark:bg-black gap-3`}
              >
                {showComponentRenderer && (
                  <ComponentRenderer
                    showArgsController={showArgsController}
                    href={href}
                    showExternalResource={showExternalResource}
                    activeTab={activeTab}
                    {...rendererProps}
                    _rendererWrapper={_rendererWrapper}
                  />
                )}
                {showArgsController && (
                  <ArgsController {...argsControllerProps} />
                )}
              </HStack>
            )}
            {showCodeBlock && (
              <CodeBlock
                className="bg-background-50 p-6 dark:bg-background-950 rounded-xl"
                code={metaData?.code.replace('{...props}', propsString)}
                language={language}
                {...codeBlockProps}
              />
            )}
          </Box>
        </CodePreviewProvider>
      </Box>
    </>
  );
};

export default CodePreview;
