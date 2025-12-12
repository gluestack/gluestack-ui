import App from '@/components/page-components/landing-page';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = await headers();
  const referrer =
    headersList.get('referer') || headersList.get('referrer') || '';
  return <App referrer={referrer} />;
}
