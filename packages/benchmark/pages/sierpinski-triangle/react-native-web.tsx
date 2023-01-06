import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/sierpinski-triangle/react-native-web'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
