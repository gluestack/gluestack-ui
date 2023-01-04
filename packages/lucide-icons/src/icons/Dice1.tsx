import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M12 12h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'Dice1'
export const Dice1 = React.memo(Icon)
