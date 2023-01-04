import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Octagon'
export const Octagon = React.memo(Icon)
