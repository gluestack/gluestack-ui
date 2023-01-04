import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Zap'
export const Zap = React.memo(Icon)
