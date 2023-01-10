import React from 'react';
import { Box } from '../../primitives';

import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from './theme';
import theme from 'prism-react-renderer/themes/vsLight';

const CodeBlock = ({ code }: any) => {
  return (
    <Box mt="45px">
      <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{
              margin: '1em 0',
              padding: '20px',
              textAlign: 'left',
              lineHeight: '1.3em',
              backgroundColor: '#fafafa',
              borderRadius: '10px',
            }}
            // className={className}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  const { style, ...props } = getTokenProps({ token, key });
                  return (
                    <span
                      {...props}
                      style={{
                        fontSize: '14px',
                        lineHeight: '21px',
                        whiteSpace: 'pre',
                        ...style,
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export { CodeBlock };
