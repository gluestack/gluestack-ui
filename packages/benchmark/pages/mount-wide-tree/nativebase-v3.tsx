import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const SCTest = dynamic(() => import('../../bench/mount-wide-tree/nativebase-v3'), { ssr: false });

  return <SCTest />;
};

export default SierpinskiTriangle;
