# @gluestack-style/calendar

## Installation

To use `@gluestack-ui/calendar`, all you need to do is install the
`@gluestack-ui/calendar` package:

```sh
$ yarn add @gluestack-ui/calendar

# or

$ npm i @gluestack-ui/calendar
```

## Usage

The Calendar component is designed for date selection with support for both single date and range selection. It provides a user-friendly interface for date picking with accessibility features built-in. Here's an example of how to use this package to create an :

```jsx
import { View, Text, Pressable } from 'react-native';
import { createCalendar } from '@gluestack-ui/calendar';

const Calendar = createCalendar({
  Root: View,
  HeaderPrev: Pressable,
  HeaderTitle: Text,
  HeaderNext: Pressable,
  Header: View,
  Week: View,
  Days: View,
  Content: View,
  Date: Pressable,
});
```

## Customizing the calendar:

Default styling of all these components can be found in the components/core/calendar file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Calendar/index.tsx) of the styled `calendar` components.

```jsx
import { View, Text, Pressable } from 'react-native';
import { createCalendar } from '@gluestack-ui/calendar';

// Understanding the API
const Calendar = createCalendar({
  Root: View,
  HeaderPrev: Pressable,
  HeaderTitle: Text,
  HeaderNext: Pressable,
  Header: View,
  Week: View,
  Days: View,
  Content: View,
  Date: Pressable,
});

// Using the calendar component
export default () => (
  <Calendar value={new Date()} className="w-64">
    <CalendarHeader>
      <CalendarHeaderPrev />
      <CalendarHeaderTitle />
      <CalendarHeaderNext />
    </CalendarHeader>
    <CalendarContent>
      <CalendarWeek />
      <CalendarDays />
    </CalendarContent>
  </Calendar>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/calendar).
