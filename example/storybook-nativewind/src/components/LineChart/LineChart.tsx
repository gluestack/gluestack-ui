import React, { useState } from 'react';

import { LineChart } from '@/components/ui/line-chart';

import { Button, View, StyleSheet, useColorScheme } from 'react-native';

const DATA = Array.from({ length: 31 }, (_, i) => ({
  x: i,
  y: 40 + 30 * Math.random(),
}));
const DATA2 = Array.from({ length: 31 }, (_, i) => ({
  x: i,
  y: 40 + 30 * Math.random(),
}));

const LineChartBasic = () => {
  const [data, setData] = useState(DATA);
  const colorMode = useColorScheme();

  const labelColor = colorMode === 'dark' ? 'white' : 'black';
  const lineColor = colorMode === 'dark' ? 'lightgrey' : 'black';

  return (
    <View style={style.container}>
      <LineChart
        width={300}
        height={300}
        data={data}
        outlineColor="lightgreen"
        gradientColors={['green', '#90ee9050']}
        labelColor={labelColor}
        lineColor={lineColor}
        topLabelPrefix="$"
      />
      <Button
        title="Change to Data 1"
        onPress={() => {
          setData(DATA);
        }}
      />
      <Button
        title="Change to Data 2"
        onPress={() => {
          setData(DATA2);
        }}
      />
    </View>
  );
};

LineChartBasic.description =
  'This is a basic Line Chart example. The Line Chart is a component that lets you display data on a two dimensional cartesian plane';

export default LineChartBasic;

const style = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
