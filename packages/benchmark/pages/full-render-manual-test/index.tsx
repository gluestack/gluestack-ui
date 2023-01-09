import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="full-render-manual-test/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/stitches-react-alpha">Stitches React alpha</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/react-native-web">React native web</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/nativebase-v3">Nativebase v3</Link>
        </li>
        <li>
          <Link href="full-render-manual-test/ui-styled">UI Styled</Link>
        </li>
      </ul>
    </div>
  );
}
