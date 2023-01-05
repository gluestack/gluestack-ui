import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/sierpinski-triangle/stitches-react-v025'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
