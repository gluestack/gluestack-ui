import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { DateTimePicker } from '@/components/ui/date-time-picker';
import { DateTimePickerTrigger } from '@/components/ui/date-time-picker';
import { DateTimePickerInput } from '@/components/ui/date-time-picker';
import { DateTimePickerIcon } from '@/components/ui/date-time-picker';
import { Box } from '@/components/ui/box';
import { CalendarDaysIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [date, setDate] = React.useState(new Date());

  return (
    <Box className="p-4 w-full">
      <DateTimePicker
        value={date}
        onChange={setDate}
        mode="datetime"
        placeholder="Select date and time"
      >
        <DateTimePickerTrigger>
          <DateTimePickerInput />
          <DateTimePickerIcon as={CalendarDaysIcon} />
        </DateTimePickerTrigger>
      </DateTimePicker>
    </Box>
  );
}`}
      argTypes={{}}
      reactLive={{ DateTimePicker, DateTimePickerTrigger, DateTimePickerInput, DateTimePickerIcon, Box, CalendarDaysIcon }}
    />
  );
}