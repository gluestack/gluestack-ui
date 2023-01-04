import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <Path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <Path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <Path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </StyledSvg>
  )
}
Icon.displayName = 'Shrink'
export const Shrink = React.memo(Icon)
