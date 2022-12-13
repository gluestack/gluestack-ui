import React from 'react';
import { Badge } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const MyBadgeExample = ({ props }: any) => {
  return (
    <Wrapper>
      <Badge variant="solid">
        <Badge.StartIcon>☞</Badge.StartIcon>Badge
        <Badge.EndIcon>☚</Badge.EndIcon>
      </Badge>
    </Wrapper>
  );
};
