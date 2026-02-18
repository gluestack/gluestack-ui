


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasicDateTimePicker = () => {
<script>
import React, { useState } from 'react';
import { View } from 'react-native';
import { 
  DateTimePicker, 
  DateTimePickerTrigger, 
  DateTimePickerInput, 
  DateTimePickerIcon 
} from '@/components/ui/date-time-picker';
import { CalendarDays } from 'lucide-react-native';

const Example = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View className="p-4">
      <DateTimePicker
        value={date}
        onChange={setDate}
        mode="datetime"
        placeholder="Select date and time"
      >
        <DateTimePickerTrigger>
          <DateTimePickerInput />
          <DateTimePickerIcon as={CalendarDays} />
        </DateTimePickerTrigger>
      </DateTimePicker>
    </View>
  );
};

export default Example;
</script>
};

const ExampleFormcontrol = () => {
<!-- Failed to load CodePreviewer for Example:form-control -->
};

const ExampleDaterange = () => {
<!-- Failed to load CodePreviewer for Example:date-range -->
};

const COMPONENT_VARIANTS = [
  {
    value: "basic-datetimepicker",
    label: "Basic DateTimePicker",
    content: <ExampleBasicDateTimePicker />,
  },
  {
    value: "form-control",
    label: "Form-control",
    content: <ExampleFormcontrol />,
  },
  {
    value: "date-range",
    label: "Date-range",
    content: <ExampleDaterange />,
  }
];

export default function DateTimePickerScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}