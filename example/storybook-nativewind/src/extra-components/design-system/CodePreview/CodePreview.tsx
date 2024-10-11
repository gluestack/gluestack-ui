import React from 'react';
import { CodeBlock } from '../CodeBlock';
import ArgsController from './ArgsController';
import { CodePreviewProvider } from './CodePreviewProvider';
import ComponentRenderer from './ComponentRenderer';
import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';
import { Box, Link, Pressable, HStack, Text } from '@/components/ui';
import { ExpoIcon } from '../icons';

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
            ? 'bg-background-100 dark:bg-[#171717]'
            : 'bg-background-0  dark:bg-black'
        } rounded-full py-3 px-6 border-[1px] border-background-200 min-w-[96px] z-20 `}
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
            ? 'bg-background-100 dark:bg-[#171717]'
            : 'bg-background-0  dark:bg-black'
        } rounded-full  py-3 px-6 border-[1px] border-background-200 min-w-[136px] -ml-9 z-10 `}
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
            ? 'bg-background-100 dark:bg-[#171717]'
            : 'bg-background-0  dark:bg-black'
        } border-[1px] border-background-200 rounded-full -ml-9 z-0 `}
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
  const { colorMode } = useMode();

  return (
    <>
      <Box
        className="w-full bg-white rounded-lg mb-6 dark:bg-black dark:md:max-w-[736px] overflow-auto"
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
                className={`flex-col lg:flex-row  ${
                  direction === 'row' ? 'flex-1' : ''
                } dark:bg-black gap-3 relative`}
              >
                {showExternalResource && (
                  <Link
                    href={href}
                    isExternal
                    className="absolute -top-4 right-0  flex flex-row items-center px-3 py-1 border-[1px] border-[#DDDCDB] dark:border-[#414141] z-50 bg-background-50 dark:bg-[#171717] rounded-lg"
                  >
                    <ExpoIcon className="h-5 w-5 mr-2.5 text-[#0072BC]" />
                    <Text className="dark:text-typography-50 text-sm web:select-none text-typography-700">
                      Open in Expo
                    </Text>
                  </Link>
                )}
                <Box
                  className={`relative flex-1  border-[#DDDCDB] dark:border-[#414141] rounded-xl ${
                    activeTab === 'web' ? 'border-[1px]' : ''
                  }`}
                >
                  <div
                    className={`bg-contain bg-center bg-no-repeat overflow-hidden  h-full bg-transparent relative ${
                      activeTab === 'web' ? 'min-h-[200px]' : 'min-h-[530px]'
                    }`}
                    style={{
                      backgroundImage:
                        activeTab === 'android'
                          ? colorMode === 'light'
                            ? "url('/images/codeblock/assets/android-frame.png')"
                            : "url('/images/codeblock/assets/dark-android-frame.png')"
                          : activeTab === 'ios'
                          ? colorMode === 'light'
                            ? "url('/images/codeblock/assets/iphone-frame.png')"
                            : "url('/images/codeblock/assets/dark-iphone-frame.png')"
                          : 'none',
                      paddingTop: activeTab === 'web' ? '0%' : '56.25%', // This maintains a 16:9 aspect ratio for the container
                    }}
                  >
                    <Box
                      className={`absolute left-1/2 transform -translate-x-1/2  ${
                        activeTab === 'web'
                          ? 'top-1/2 -translate-y-1/2'
                          : 'top-1/4 -translate-y-1/4'
                      }`}
                    >
                      {showComponentRenderer && (
                        <ComponentRenderer
                          showArgsController={showArgsController}
                          activeTab={activeTab}
                          {...rendererProps}
                          _rendererWrapper={_rendererWrapper}
                        />
                      )}
                    </Box>
                  </div>
                </Box>
                {showArgsController && (
                  <ArgsController {...argsControllerProps} />
                )}
              </HStack>
            )}
            {showCodeBlock && (
              <CodeBlock
                className="bg-background-50 p-6 dark:bg-[#171717] rounded-xl"
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
