import React, { useContext } from 'react';
import {
  LiveProvider,
  LivePreview as ReactLivePreview,
  LiveError,
} from 'react-live';
import { Box } from '@/components/ui';
import { CodePreviewContext } from './CodePreviewProvider';
// @ts-ignore
const ComponentRenderer = ({
  showArgsController,
  _rendererWrapper,
  activeTab,
  ...props
}: any) => {
  const { metaData, propsString } = useContext(CodePreviewContext);

  return (
    <Box {..._rendererWrapper}>
      <Box
        className={`${
          activeTab === 'web' ? '' : 'w-[230px]'
        } flex justify-center items-center overflow-scroll`}
      >
        <LiveProvider
          code={
            showArgsController
              ? metaData?.code.replace('{...props}', propsString)
              : metaData?.code
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
