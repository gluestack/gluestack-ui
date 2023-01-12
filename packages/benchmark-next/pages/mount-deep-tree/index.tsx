import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-deep-tree/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/nativebase-v3">nb v3</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/react-native-web">React Native web</Link>
        </li>
        <li>
          <Link href="mount-deep-tree/ui-styled">UI Styled</Link>
        </li>
      </ul>
    </div>
  );
}
