import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 3h6l6 18h6" />
      <Path d="M14 3h7" />
    </StyledSvg>
  )
}
Icon.displayName = 'Option'
export const Option = React.memo(Icon)
