import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 21V10H5l7-7 7 7h-4v11z" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowBigUp'
export const ArrowBigUp = React.memo(Icon)
