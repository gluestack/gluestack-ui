import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'StarHalf'
export const StarHalf = React.memo(Icon)
