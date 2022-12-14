import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const AvatarImage = ({ children, source, ...props }: any, ref: any) => {
  const [error, setError] = React.useState(false);
  const { StyledAvatarImage, StyledText } = React.useContext(UIContext);

  const getSource = () => {
    if (source) {
      if (source.hasOwnProperty('uri') && source.uri === null) {
        return source;
      } else if (!source.hasOwnProperty(source, 'uri')) {
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
