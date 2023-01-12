import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/create-and-mount-text/stitches-react-vc17'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
