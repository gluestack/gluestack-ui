import React from 'react';
import { Link, Text, Center } from '../../core-components/nativewind';

const UnitoolsLink = () => {
  return (
    <Center>
      <Link href="https://gluestack.io/">
        <Text className="text-sky-700 underline hover:no-underline p-6">
          gluestack
        </Text>
      </Link>
    </Center>
  );
};
export default UnitoolsLink;
