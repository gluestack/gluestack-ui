import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Moon'
export const Moon = React.memo(Icon)
