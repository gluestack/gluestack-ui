import React from 'react';
import Wrapper from '../Wrapper';

export const RadioGroup = () => {
  const [values, setValues] = React.useState('Lable 1');

  return (
    <Wrapper>
      {/* <Radio.Group value={values} onChange={setValues}>
        <Radio
          value="Lable 1"
          accessibilityLabel="Radio"
          onChange={(nextValue: boolean) => console.log(nextValue, '###')}
          sx={{
            style: {
              marginTop: 40,
            },
          }}
        >
          <Radio.Indicator>
            <Radio.Icon
              sx={{
                state: {
                  checked: {
                    style: {
                      bg: '$red.500',
                    },
                  },
                },
              }}
            />
          </Radio.Indicator>
          <Radio.Label>Label 1</Radio.Label>
        </Radio>
        <Radio
          value="Lable 2"
          accessibilityLabel="Radio"
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          sx={{
            style: {
              marginTop: 40,
            },
          }}
        >
          <Radio.Indicator>
            <Radio.Icon
              sx={{
                state: {
                  checked: {
                    style: {
                      bg: '$red.500',
                    },
                  },
                },
              }}
            />
          </Radio.Indicator>
          <Radio.Label>Label 2</Radio.Label>
        </Radio>
      </Radio.Group> */}
    </Wrapper>
  );
};
