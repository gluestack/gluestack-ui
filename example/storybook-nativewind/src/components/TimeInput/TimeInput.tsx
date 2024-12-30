import React, { useState } from 'react';
import {
  TimeInput,
  TimeInputHr,
  TimeInputMin,
  TimeInputSec,
  TimeInputMeridiem,
  TimeInputMeridiemText,
} from '@/components/ui/time-input';

const TimeInputBasic = ({ ...props }: any) => {
  const [timeValue, setTimeValue] = useState(null);

  return (
    <>
      <TimeInput
        {...props}
        // variant="rounded"
        format={12}
        timeValue={timeValue}
        onChange={setTimeValue}
        // defaultValue="12:02:00:PM"
      >
        <TimeInputHr placeholder="HH" />
        <TimeInputMin placeholder="MM" />
        <TimeInputSec placeholder="SS" />

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
