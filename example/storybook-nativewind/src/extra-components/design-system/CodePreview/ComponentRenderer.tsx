import React, { useContext } from 'react';
import {
  LiveProvider,
  LivePreview as ReactLivePreview,
  LiveError,
} from 'react-live';
import { Box } from '@/components/ui/box';
import { CodePreviewContext } from './CodePreviewProvider';

function wrapWithOverlayProvider(componentStr: string) {
  const overlayProviderStart = '<OverlayProvider>';
  const overlayProviderEnd = '</OverlayProvider>';
  const modifiedComponentStr = componentStr.replace(
    /return\s*\(\s*/, // Matches the return statement
    `return (\n  ${overlayProviderStart}\n`
  );
  const lastClosingParenIndex = modifiedComponentStr.lastIndexOf(')'); // Find the last closing parenthesis
  const finalComponentStr =
    modifiedComponentStr.slice(0, lastClosingParenIndex) +
    `  ${overlayProviderEnd}\n` +
    modifiedComponentStr.slice(lastClosingParenIndex);
  return finalComponentStr;
}

// @ts-ignore
const ComponentRenderer = ({
  showArgsController,
  _rendererWrapper,
  activeTab,
  isOverlayComponent,
  ...props
}: any) => {
  const { metaData, propsString } = useContext(CodePreviewContext);
  const componentCode = isOverlayComponent
    ? activeTab === 'web'
      ? `${metaData?.code}`
      : wrapWithOverlayProvider(`${metaData?.code}`)
    : `${metaData?.code}`;
  return (
    <Box {..._rendererWrapper} className="h-full flex flex-col justify-center ">
      <Box className={`${activeTab === 'web' ? '' : 'w-[210px]'} h-full`}>
        <LiveProvider
          code={
            showArgsController
              ? componentCode.replace('{...props}', propsString)
              : componentCode
          }
          transformCode={metaData?.transformCode ?? null}
          scope={{ ...metaData?.scope }}
          {...props}
        >
          <div
            style={{
              transform: activeTab === 'web' ? 'none' : 'scale(0.55)',
              transformOrigin: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <ReactLivePreview style={{ width: '100%', height: '100%' }} />
            <LiveError style={{ width: '100%', height: '100%' }} />
          </div>
        </LiveProvider>
      </Box>
    </Box>
  );
};

export default ComponentRenderer;
