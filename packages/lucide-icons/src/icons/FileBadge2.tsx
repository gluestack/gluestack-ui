import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <Path d="m14 12.5 1 5.5-3-1-3 1 1-5.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'FileBadge2'
export const FileBadge2 = React.memo(Icon)
