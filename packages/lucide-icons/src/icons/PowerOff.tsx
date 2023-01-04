import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
      <Path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
      <Path d="M12 2v4" />
      <Path d="m2 2 20 20" />
    </StyledSvg>
  )
}
Icon.displayName = 'PowerOff'
export const PowerOff = React.memo(Icon)
