import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
      <_Circle cx="12" cy="8" r="2" />
      <Path d="M12 10v12" />
      <Path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
      <Path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Flower2'
export const Flower2 = React.memo(Icon)
