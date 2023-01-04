import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m3 7 5 5-5 5V7" />
      <Path d="m21 7-5 5 5 5V7" />
      <Path d="M12 20v2" />
      <Path d="M12 14v2" />
      <Path d="M12 8v2" />
      <Path d="M12 2v2" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlipHorizontal2'
export const FlipHorizontal2 = React.memo(Icon)
