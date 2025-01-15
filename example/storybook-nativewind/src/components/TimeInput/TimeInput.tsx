import React, { useState } from 'react';
import {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputMeridiem,
  TimeInputMeridiemText,
  TimeInputColon,
} from '@/components/ui/time-input';

const TimeInputBasic = ({ ...props }: any) => {
  const [timeValue, setTimeValue] = useState(null);
  return (
    <>
      <TimeInput
        {...props}
        value={timeValue}
        onChange={setTimeValue}
        isHovered={true}
        className=""
      >
        <TimeInputHr placeholder="HH" />
        <TimeInputColon className="" />
        <TimeInputMin placeholder="MM" />
        <TimeInputMeridiem isPressed={false} isHovered={true}>
          <TimeInputMeridiemText />
        </TimeInputMeridiem>
      </TimeInput>
    </>
  );
};

TimeInputBasic.description =
  'This is a basic TimeInput component example. TimeInputs are used to get time input from the user.';

export default TimeInputBasic;
export { TimeInput };
