import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/sierpinski-triangle/nativebase-v3'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
