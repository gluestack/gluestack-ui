import React, { forwardRef } from 'react';

const AvatarImage = (StyledAvatarImage: any) =>
  forwardRef(({ source, ...props }: any, ref?: any) => {
    const [error, setError] = React.useState(false);

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

    return (
      <>
        {imageSource && !error && (
          <StyledAvatarImage
            ref={ref}
            {...props}
            source={source}
            onError={() => {
              setError(true);
            }}
          />
        )}
      </>
    );
  });

export default AvatarImage;
