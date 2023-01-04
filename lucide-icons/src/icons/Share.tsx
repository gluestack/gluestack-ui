import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <Polyline points="16 6 12 2 8 6" />
      <Line x1="12" y1="2" x2="12" y2="15" />
    </StyledSvg>
  )
}
Icon.displayName = 'Share'
export const Share = React.memo(Icon)
