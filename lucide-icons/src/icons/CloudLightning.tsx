import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <Path d="m13 12-3 5h4l-3 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'CloudLightning'
export const CloudLightning = React.memo(Icon)
