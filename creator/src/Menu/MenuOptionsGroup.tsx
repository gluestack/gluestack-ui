import React, { forwardRef, memo } from 'react';
import { MenuOptionsProvider } from './MenuOptionsContext';

const MenuOptionsGroup = (StyledMenuOptionsGroup: any) =>
  memo(
    forwardRef(
      (
        {
          type = 'checkbox',
          defaultValue,
          value,
          onChange,
          children,
          ...props
        }: any,
        ref?: any
      ) => {
        const internalDefaultValue = defaultValue
          ? Array.isArray(defaultValue)
            ? defaultValue
            : [defaultValue]
          : [];

        const [internalValues, setValues] =
          React.useState<Array<string | number>>(internalDefaultValue);

        const _onChange = (newValue: string | number) => {
          if (type === 'checkbox') {
            const newValues = [...internalValues];
            if (internalValues.includes(newValue)) {
              newValues.splice(newValues.indexOf(newValue), 1);
              setValues(newValues);
            } else {
              newValues.push(newValue);
              setValues(newValues);
            }
            onChange && onChange(newValues);
          } else if (type === 'radio') {
            setValues([newValue]);
            onChange && onChange(newValue);
          }
        };
        return (
          <MenuOptionsProvider
            values={
              !value ? internalValues : Array.isArray(value) ? value : [value]
            }
            onChange={_onChange}
            type={type}
          >
            <StyledMenuOptionsGroup {...props} ref={ref}>
              {children}
            </StyledMenuOptionsGroup>
          </MenuOptionsProvider>
        );
      }
    )
  );

export default MenuOptionsGroup;
