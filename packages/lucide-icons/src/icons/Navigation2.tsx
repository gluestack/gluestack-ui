import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="12 2 19 21 12 17 5 21 12 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Navigation2'
export const Navigation2 = React.memo(Icon)
