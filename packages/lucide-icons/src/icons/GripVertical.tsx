import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="9" cy="12" r="1" />
      <_Circle cx="9" cy="5" r="1" />
      <_Circle cx="9" cy="19" r="1" />
      <_Circle cx="15" cy="12" r="1" />
      <_Circle cx="15" cy="5" r="1" />
      <_Circle cx="15" cy="19" r="1" />
    </StyledSvg>
  )
}
Icon.displayName = 'GripVertical'
export const GripVertical = React.memo(Icon)
