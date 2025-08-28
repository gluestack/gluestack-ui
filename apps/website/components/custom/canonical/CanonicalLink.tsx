'use client';
import { usePathname } from 'next/navigation';

function CanonicalLink() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://gluestack.io';

  return <link rel="canonical" href={`${baseUrl}${pathname}`} />;
}

export default CanonicalLink;
