import React from 'react';
import { Badge, Center } from '@gluestack/ui';

export const MyBadgeExample = ({ variant, text, props }: any) => {
  return (
    <Center>
      <Badge variant={variant} {...props}>
        {/* <Badge.Icon>☞</Badge.Icon> */}
        <Badge.Text>{text}</Badge.Text>
        <Badge.Icon sx={{ style: { pl: 4 } }}>☚</Badge.Icon>
      </Badge>
    </Center>
  );
};
