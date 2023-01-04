import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="5" y1="9" x2="19" y2="9" />
      <Line x1="5" y1="15" x2="19" y2="15" />
    </StyledSvg>
  )
}
Icon.displayName = 'Equal'
export const Equal = React.memo(Icon)
