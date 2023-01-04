import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <Path d="M21 5h-6" />
      <Path d="M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916" />
    </StyledSvg>
  )
}
Icon.displayName = 'BellMinus'
export const BellMinus = React.memo(Icon)
