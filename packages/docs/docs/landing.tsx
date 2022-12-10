import { Link } from "solito/link";
import { Text } from "react-native";
import React from "react";

export function DocsLanding() {
  return (
    <>
      <Link href="/button2">
        <Text>{"Button >"}</Text>
      </Link>
      <Link href="/heading">
        <Text>{"Heading >"}</Text>
      </Link>
    </>
  );
}
