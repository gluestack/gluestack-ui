import React from 'react';

import {
  Circle,
  LinearGradient,
  matchFont,
  vec,
} from '@shopify/react-native-skia';
import { Platform } from 'react-native';
import { useDerivedValue, type SharedValue } from 'react-native-reanimated';
import { Area, CartesianChart, Line, useChartPressState } from 'victory-native';

import { Text as SKText } from '@shopify/react-native-skia';
import { Box } from '@gluestack-ui/themed';

const fontFamily = Platform.select({ ios: 'Helvetica', default: 'sans-serif' });

const legendFontStyle = {
  fontFamily,
  fontSize: 14,
  fontWeight: 'bold',
};

const indicatorFontStyle = {
  fontFamily,
  fontSize: 25,
  fontWeight: 'bold',
};

// @ts-ignore
const legendFont = matchFont(legendFontStyle);
// @ts-ignore
const indicatorFont = matchFont(indicatorFontStyle);

export interface ChartData {
  [x: string]: number;
}

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

export const LineChart = ({
  height,
  width,
  data,
  outlineColor,
  gradientColors,
  labelColor,
  lineColor,
  topLabelPrefix = '',
  topLabelSuffix = '',
}: Props) => {
  const { state, isActive } = useChartPressState({ x: 0, y: { y: 0 } });

  const value = useDerivedValue(() => {
    return topLabelPrefix + state.y.y.value.value.toFixed(2) + topLabelSuffix;
  }, [state]);

  return (
    <Box height={height} width={width}>
      <CartesianChart
        data={data}
        xKey="x"
        yKeys={['y']}
        domainPadding={{ top: 30 }}
        axisOptions={{
          font: legendFont,
          labelColor,
          lineColor,
        }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => (
          <>
            <SKText
              x={chartBounds.left + 10}
              y={chartBounds.top + indicatorFont.measureText('0').height + 5}
              font={indicatorFont}
              text={value}
              color={labelColor}
              style={'fill'}
            />
            <Line
              points={points.y}
              color={outlineColor}
              strokeWidth={3}
              animate={{ type: 'timing', duration: 500 }}
            />
            <Area
              points={points.y}
              y0={chartBounds.bottom}
              animate={{ type: 'timing', duration: 500 }}
            >
              <LinearGradient
                start={vec(chartBounds.bottom, 200)}
                end={vec(chartBounds.bottom, chartBounds.bottom)}
                colors={gradientColors}
              />
            </Area>

            {isActive ? (
              <ToolTip x={state.x.position} y={state.y.y.position} />
            ) : null}
          </>
        )}
      </CartesianChart>
    </Box>
  );
};

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={'grey'} opacity={0.8} />;
}
