import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-and-mount-text/stitches-core-v025">Stitches Core v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/stitches-core-vc17">Stitches Core v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/baseline">Baseline</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/react-native-web">React Native Web</Link>
        </li>
        <li>
          <Link href="create-and-mount-text/ui-styled">UI Styled</Link>
        </li>
      </ul>
    </div>
  );
}
