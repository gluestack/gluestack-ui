import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <Path d="M5 10h14" />
      <Path d="M15 7v6" />
    </StyledSvg>
  )
}
Icon.displayName = 'Refrigerator'
export const Refrigerator = React.memo(Icon)
