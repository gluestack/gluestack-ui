import React from 'react';

import { View } from 'react-native';
import { ChartData } from '.';

interface Props {
  height: number;
  width: number;
  data: ChartData[];
  outlineColor: string;
  gradientColors: string[];
  labelColor: string;
  lineColor: string;
  topLabelPrefix?: string;
  topLabelSuffix?: string;
}

export const LineChart = (_: Props) => {
  return <View />;
};
