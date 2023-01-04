import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Square'
export const Square = React.memo(Icon)
