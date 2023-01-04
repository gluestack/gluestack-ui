import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <Path d="M12 18h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'Smartphone'
export const Smartphone = React.memo(Icon)
