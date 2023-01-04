import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="3 11 22 2 13 21 11 13 3 11" />
    </StyledSvg>
  )
}
Icon.displayName = 'Navigation'
export const Navigation = React.memo(Icon)
