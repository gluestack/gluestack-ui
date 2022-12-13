import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
// @ts-ignore
import isNil from 'lodash.isnil';
// @ts-ignore
import has from 'lodash.has';

const AvatarImage = ({ children, source, ...props }: any, ref: any) => {
  const [error, setError] = React.useState(false);
  const { StyledAvatarImage, StyledText } = React.useContext(UIContext);

  const getSource = () => {
    if (source) {
      if (has(source, 'uri') && !isNil(source.uri)) {
        return source;
      } else if (!has(source, 'uri')) {
        return source;
      }
    }
    return null;
  };
  const imageSource = getSource();
  // return (
  //   <StyledAvatarImage
  //     ref={ref}
  //     {...props}
  //     source={source}
  //     onError={() => {
  //       setError(true);
  //     }}
  //   />
  // );

  return (
    <>
      {imageSource && !error ? (
        <StyledAvatarImage
          ref={ref}
          {...props}
          source={source}
          onError={() => {
            setError(true);
          }}
        />
      ) : (
        <StyledText>{children}</StyledText>
      )}
    </>
  );
};

export default forwardRef(AvatarImage);
