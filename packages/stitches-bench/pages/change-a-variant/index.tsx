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
      </ul>
    </div>
  );
}
