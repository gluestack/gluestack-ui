import React from 'react';
import Wrapper from '../../Wrapper';
import { Link as LinkTemp } from '../../../ui-components';
export const Link = () => {
  return (
    <Wrapper>
      <LinkTemp href="https://google.com" isExternal>
        <LinkTemp.Text>Gluestack</LinkTemp.Text>
      </LinkTemp>
    </Wrapper>
  );
};

export { LinkTemp };
