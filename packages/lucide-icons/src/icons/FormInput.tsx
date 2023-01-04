import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="6" width="20" height="12" rx="2" />
      <Path d="M12 12h.01" />
      <Path d="M17 12h.01" />
      <Path d="M7 12h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'FormInput'
export const FormInput = React.memo(Icon)
