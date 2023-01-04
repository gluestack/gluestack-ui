import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <Polyline points="7 10 12 15 17 10" />
      <Line x1="12" y1="15" x2="12" y2="3" />
    </StyledSvg>
  )
}
Icon.displayName = 'Download'
export const Download = React.memo(Icon)
