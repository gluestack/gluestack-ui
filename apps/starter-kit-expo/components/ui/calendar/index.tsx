import React from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { View } from 'react-native';

export function Calendar(props: any) {
  return (
    <View>
      <RNCalendar
        {...props}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
          ...props.style,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#dd99ee',
          ...props.theme,
        }}
      />
    </View>
  );
}
