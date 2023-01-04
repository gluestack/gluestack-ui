import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="3" />
      <Line x1="3" y1="12" x2="9" y2="12" />
      <Line x1="15" y1="12" x2="21" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'GitCommit'
export const GitCommit = React.memo(Icon)
