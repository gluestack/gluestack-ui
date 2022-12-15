import React from 'react';
import { Badge } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const MyBadgeExample = ({ props }: any) => {
  return (
    <Wrapper>
      <Badge variant="solid">
        <Badge.Icon>☞</Badge.Icon>Badge
        <Badge.Icon>☚</Badge.Icon>
      </Badge>
    </Wrapper>
  );
};
