import React from 'react';

const DynamicTyping = ({ component }: any) => {
  return (
    <>
      <h1>{component} Props</h1>
      {/* <h3>colorScheme</h3>
      <h1> Custom {component} which will fetch TypeDocs </h1>
      <h2>Props</h2>
      <h3>colorScheme</h3>    
      <p>
        The color of the radio when it's checked. This should be one of the
        color keys in the theme (e.g."green", "red").
      </p>
      <p>Type: ColorSchemeType</p>
      <p>Default: 'primary'</p> */}
    </>
  );
};

export { DynamicTyping };
