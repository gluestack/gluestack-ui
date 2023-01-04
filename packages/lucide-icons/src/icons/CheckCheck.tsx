import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 6 7 17l-5-5" />
      <Path d="m22 10-7.5 7.5L13 16" />
    </StyledSvg>
  )
}
Icon.displayName = 'CheckCheck'
export const CheckCheck = React.memo(Icon)
