import React, { forwardRef } from 'react';
import { Platform } from 'react-native';

export const SelectSectionList = (StyledSelectSectionList: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    if (Platform.OS === 'web') {
      return (
        <>
          {props.sections.map((section) => {
            return (
              <optgroup label={section.title}>
                {section.data.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </optgroup>
            );
          })}
        </>
      );
    }
    return (
      <StyledSelectSectionList {...props} ref={ref}>
        {children}
      </StyledSelectSectionList>
    );
  });
