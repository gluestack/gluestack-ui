import React, { useState } from 'react';
import {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputMeridiem,
  TimeInputMeridiemText,
  TimeInputColumn,
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
        isReadOnly={true}
        className=""
      >
        <TimeInputHr placeholder="HH" />
        <TimeInputColumn className="" />
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
