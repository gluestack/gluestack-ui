// CardAndLinkGrid.tsx
import { Card } from '../../../../core-components/nativewind/card';
import { Heading } from '../../../../core-components/nativewind/heading';
import { Text } from '../../../../core-components/nativewind/text';
import { LinkText } from '../../../../core-components/nativewind/link';
import Link from 'next/link';
import React from 'react';
const CardAndLinkGrid = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 my-4">
      <div className="flex-1">
        <Card
          size="md"
          variant="elevated"
          // className="m-3 bg-slate-100"
        >
          <Text size="md">Total Page Views</Text>
          <Heading size="lg" className="mb-1">
            89,400
          </Heading>
          <Text size="sm">21% more than last month</Text>
        </Card>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <Link href="https://gluestack.io/">
            <LinkText size="lg">I am a simple link</LinkText>
          </Link>
        </div>
        <div className="mb-2">
          <Link href="https://gluestack.io/">
            <LinkText size="lg">I am a simple link</LinkText>
          </Link>
        </div>
        <div className="mb-2">
          <Link href="https://gluestack.io/">
            <LinkText size="lg">I am a simple link</LinkText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardAndLinkGrid;
