import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <Polyline points="7.5 4.21 12 6.81 16.5 4.21" />
      <Polyline points="7.5 19.79 7.5 14.6 3 12" />
      <Polyline points="21 12 16.5 14.6 16.5 19.79" />
      <Polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <Line x1="12" y1="22.08" x2="12" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Codesandbox'
export const Codesandbox = React.memo(Icon)
