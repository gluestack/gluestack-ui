import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="change-a-variant/stitches-core-v025">Stitches Core v0.2.5</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-core-vc17">Stitches Core v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="change-a-variant/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="change-a-variant/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="change-a-variant/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="change-a-variant/ui-styled">ui-styled</Link>
        </li>
        <li>
          <Link href="change-a-variant/nativebase-v3">nativebase v3</Link>
        </li>
        <li>
          <Link href="change-a-variant/react-native-web">react native web</Link>
        </li>
      </ul>
    </div>
  );
}
