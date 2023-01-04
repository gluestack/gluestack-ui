import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
      <Path d="m16.071 16.071 4.243 4.243" />
      <Path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122" />
    </StyledSvg>
  )
}
Icon.displayName = 'MousePointerClick'
export const MousePointerClick = React.memo(Icon)
