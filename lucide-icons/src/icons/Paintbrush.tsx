import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <Path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <Path d="M14.5 17.5 4.5 15" />
    </StyledSvg>
  )
}
Icon.displayName = 'Paintbrush'
export const Paintbrush = React.memo(Icon)
