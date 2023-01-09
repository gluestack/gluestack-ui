import React from 'react';
import { Text, Box } from '@gluestack/design-system';

import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from './theme';
import theme from 'prism-react-renderer/themes/vsLight';
const ButtonExample = `import { Button } from "@gluestack/design-system";

export default () => (
    <Button>
      <Button.Spinner />
      <Button.Text />
    </Button>
  );`;
const AnatomySection = ({}: any) => {
  return (
    <Box mt="45px">
      <Text
        fontSize="27px"
        fontWeight="500"
        lineHeight="30px"
        color="$trueGray900"
        mb={10}
      >
        Anatomy
      </Text>
      <Text
        fontSize="17px"
        fontWeight="400"
        lineHeight="27px"
        color="$trueGray700"
        letterSpacing="0.5px"
        mb={15}
      >
        Import all parts and piece them together.
      </Text>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={ButtonExample}
        language="jsx"
      >
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

export { AnatomySection };
